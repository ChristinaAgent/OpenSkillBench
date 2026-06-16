import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { lintSkillContent } from "./lint.js";

describe("lintSkillContent", () => {
  it("passes the reference code review skill", () => {
    const content = readFileSync(resolve("../../examples/code-review-skill/SKILL.md"), "utf8");
    const result = lintSkillContent(content);

    expect(result.failed).toBe(0);
  });

  it("reports missing metadata and quality signals", () => {
    const result = lintSkillContent(`---
name: bad
description: Too short.
supported_agents: []
trigger_conditions: []
required_tools: []
safety_notes: []
examples: []
---

# Bad Skill
`);

    expect(result.failed).toBeGreaterThan(0);
    expect(result.checks.some((check) => check.id === "schema" && !check.passed)).toBe(true);
    expect(result.checks.some((check) => check.id === "body-procedure" && !check.passed)).toBe(
      true
    );
  });
});
