#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

type LintRule = {
  id: string;
  description: string;
  test: (content: string) => boolean;
};

const rules: LintRule[] = [
  {
    id: "metadata-name",
    description: "Skill declares a stable name.",
    test: (content) => /^name:\s*[a-z0-9][a-z0-9-]*/m.test(content)
  },
  {
    id: "metadata-description",
    description: "Skill includes a specific description.",
    test: (content) => /^description:\s*.{20,}/m.test(content)
  },
  {
    id: "supported-agents",
    description: "Skill lists supported agents.",
    test: (content) => /^supported_agents:\s*$/m.test(content)
  },
  {
    id: "trigger-conditions",
    description: "Skill defines trigger conditions.",
    test: (content) => /^trigger_conditions:\s*$/m.test(content)
  },
  {
    id: "required-tools",
    description: "Skill lists required tools, even if the list is empty.",
    test: (content) => /^required_tools:\s*$/m.test(content)
  },
  {
    id: "safety-notes",
    description: "Skill documents safety notes.",
    test: (content) => /^safety_notes:\s*$/m.test(content)
  },
  {
    id: "examples",
    description: "Skill includes at least one example.",
    test: (content) => /^examples:\s*$/m.test(content) || /^## Examples\s*$/m.test(content)
  },
  {
    id: "validation",
    description: "Skill defines validation or benchmark criteria.",
    test: (content) => /^validation:\s*$/m.test(content) || /^benchmark_tasks:\s*$/m.test(content)
  }
];

function printUsage(): void {
  console.log("Usage: openskillbench lint <path-to-SKILL.md>");
}

function lintSkill(filePath: string): number {
  const absolutePath = resolve(filePath);
  const content = readFileSync(absolutePath, "utf8");
  const results = rules.map((rule) => ({
    ...rule,
    passed: rule.test(content)
  }));

  const passed = results.filter((result) => result.passed).length;
  const failed = results.length - passed;

  console.log(`OpenSkillBench lint: ${absolutePath}`);
  console.log(`Score: ${passed}/${results.length}`);
  console.log("");

  for (const result of results) {
    const marker = result.passed ? "PASS" : "FAIL";
    console.log(`${marker} ${result.id}: ${result.description}`);
  }

  if (failed > 0) {
    console.log("");
    console.log(`${failed} issue(s) found.`);
    return 1;
  }

  console.log("");
  console.log("No issues found.");
  return 0;
}

const [command, target] = process.argv.slice(2);

if (command !== "lint" || !target) {
  printUsage();
  process.exit(1);
}

try {
  process.exit(lintSkill(target));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: ${message}`);
  process.exit(1);
}
