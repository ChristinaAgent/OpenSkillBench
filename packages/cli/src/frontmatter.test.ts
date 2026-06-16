import { describe, expect, it } from "vitest";
import { parseSkillDocument } from "./frontmatter.js";

describe("parseSkillDocument", () => {
  it("parses YAML front matter and body", () => {
    const document = parseSkillDocument(`---
name: code-review
supported_agents:
  - Codex
---

# Code Review
`);

    expect(document.metadata.name).toBe("code-review");
    expect(document.metadata.supported_agents).toEqual(["Codex"]);
    expect(document.body).toContain("# Code Review");
  });

  it("throws when front matter is missing", () => {
    expect(() => parseSkillDocument("# Missing metadata")).toThrow(
      "SKILL.md must start with YAML front matter"
    );
  });
});
