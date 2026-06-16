import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { parseSkillDocument, type SkillDocument } from "./frontmatter.js";
import { validateSkillMetadata } from "./schema.js";

export type LintCheck = {
  id: string;
  description: string;
  passed: boolean;
  details?: string[];
};

export type LintResult = {
  filePath: string;
  checks: LintCheck[];
  passed: number;
  failed: number;
};

type QualityRule = {
  id: string;
  description: string;
  test: (document: SkillDocument) => boolean;
  details?: (document: SkillDocument) => string[];
};

const qualityRules: QualityRule[] = [
  {
    id: "supported-agents",
    description: "Skill lists at least one supported agent.",
    test: ({ metadata }) => hasNonEmptyArray(metadata.supported_agents)
  },
  {
    id: "trigger-conditions",
    description: "Skill defines concrete trigger conditions.",
    test: ({ metadata }) => hasNonEmptyArray(metadata.trigger_conditions)
  },
  {
    id: "required-tools",
    description: "Skill declares required tools, even when no tools are needed.",
    test: ({ metadata }) => Array.isArray(metadata.required_tools)
  },
  {
    id: "safety-notes",
    description: "Skill documents safety notes.",
    test: ({ metadata }) => hasNonEmptyArray(metadata.safety_notes)
  },
  {
    id: "examples",
    description: "Skill includes at least one structured example.",
    test: ({ metadata }) => hasNonEmptyArray(metadata.examples)
  },
  {
    id: "validation",
    description: "Skill defines validation criteria or benchmark tasks.",
    test: ({ metadata }) =>
      hasNonEmptyArray(metadata.validation) || hasNonEmptyArray(metadata.benchmark_tasks)
  },
  {
    id: "body-procedure",
    description: "Skill body includes a procedure section.",
    test: ({ body }) => /^##\s+Procedure\s*$/im.test(body)
  }
];

export function lintSkillFile(filePath: string): LintResult {
  const absolutePath = resolveInputPath(filePath);
  const content = readFileSync(absolutePath, "utf8");
  return lintSkillContent(content, absolutePath);
}

export function lintSkillContent(content: string, filePath = "SKILL.md"): LintResult {
  const checks: LintCheck[] = [];
  let document: SkillDocument;

  try {
    document = parseSkillDocument(content);
    checks.push({
      id: "frontmatter",
      description: "Skill has YAML front matter.",
      passed: true
    });
  } catch (error) {
    checks.push({
      id: "frontmatter",
      description: "Skill has YAML front matter.",
      passed: false,
      details: [error instanceof Error ? error.message : String(error)]
    });

    return summarize(filePath, checks);
  }

  const schemaResult = validateSkillMetadata(document.metadata);
  checks.push({
    id: "schema",
    description: "Skill metadata conforms to schemas/skill.schema.json.",
    passed: schemaResult.valid,
    details: schemaResult.errors
  });

  for (const rule of qualityRules) {
    checks.push({
      id: rule.id,
      description: rule.description,
      passed: rule.test(document),
      details: rule.details?.(document)
    });
  }

  return summarize(filePath, checks);
}

function summarize(filePath: string, checks: LintCheck[]): LintResult {
  const passed = checks.filter((check) => check.passed).length;
  const failed = checks.length - passed;

  return {
    filePath,
    checks,
    passed,
    failed
  };
}

function hasNonEmptyArray(value: unknown): boolean {
  return Array.isArray(value) && value.length > 0;
}

function resolveInputPath(filePath: string): string {
  const directPath = resolve(filePath);

  if (existsSync(directPath)) {
    return directPath;
  }

  const workspaceRoot = findWorkspaceRoot(process.cwd());

  if (workspaceRoot) {
    const workspacePath = resolve(workspaceRoot, filePath);

    if (existsSync(workspacePath)) {
      return workspacePath;
    }
  }

  return directPath;
}

function findWorkspaceRoot(startDirectory: string): string | undefined {
  let currentDirectory = startDirectory;

  while (true) {
    if (existsSync(resolve(currentDirectory, "pnpm-workspace.yaml"))) {
      return currentDirectory;
    }

    const parentDirectory = dirname(currentDirectory);

    if (parentDirectory === currentDirectory) {
      return undefined;
    }

    currentDirectory = parentDirectory;
  }
}
