# Skill Format

OpenSkillBench treats a skill as a reusable agent-facing workflow instruction.
A good skill should be easy to understand, safe to adopt, and possible to
evaluate.

## Recommended Metadata

Skills can expose metadata as YAML front matter or as a companion JSON file.
The v0.1 schema focuses on portability rather than platform-specific behavior.

Required fields:

- `name`: stable skill name
- `description`: concise statement of what the skill helps an agent do
- `supported_agents`: compatible agent surfaces
- `trigger_conditions`: when the agent should use the skill
- `required_tools`: tools, files, APIs, or runtimes the skill expects
- `safety_notes`: boundaries and risks
- `examples`: concrete tasks where the skill should help

Recommended fields:

- `version`
- `domains`
- `inputs`
- `outputs`
- `validation`
- `benchmark_tasks`

## Good Skill Properties

- Specific enough to guide behavior.
- Portable across multiple tools when possible.
- Explicit about safety boundaries.
- Includes examples and non-examples.
- Defines observable success criteria.
- Avoids vague claims such as "make the agent better".

## Minimal SKILL.md Structure

```md
---
name: code-review
description: Review code changes for bugs, regressions, and missing tests.
supported_agents:
  - Codex
  - Claude Code
trigger_conditions:
  - User asks for a code review.
required_tools:
  - git
safety_notes:
  - Do not modify files during review unless explicitly requested.
---

# Code Review Skill

## Procedure

1. Inspect the diff.
2. Prioritize correctness bugs and regressions.
3. Report findings with file and line references.

## Examples

- Review the current branch before opening a PR.
```
