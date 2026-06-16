#!/usr/bin/env node

import { lintSkillFile, type LintResult } from "./lint.js";

function printUsage(): void {
  console.log("Usage: openskillbench lint <path-to-SKILL.md>");
}

function printLintResult(result: LintResult): void {
  console.log(`OpenSkillBench lint: ${result.filePath}`);
  console.log(`Score: ${result.passed}/${result.checks.length}`);
  console.log("");

  for (const check of result.checks) {
    const marker = check.passed ? "PASS" : "FAIL";
    console.log(`${marker} ${check.id}: ${check.description}`);

    for (const detail of check.details ?? []) {
      console.log(`  - ${detail}`);
    }
  }
}

function lintSkill(filePath: string): number {
  const result = lintSkillFile(filePath);
  printLintResult(result);
  console.log("");
  console.log(result.failed > 0 ? `${result.failed} issue(s) found.` : "No issues found.");
  return result.failed > 0 ? 1 : 0;
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
