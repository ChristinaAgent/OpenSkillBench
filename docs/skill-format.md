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

# Skill 格式

OpenSkillBench 将 skill 视为面向 agent 的可复用工作流指令。一个好的 skill
应该容易理解、容易安全采用，并且可以被评测。

## 推荐元数据

Skills 可以通过 YAML front matter 或配套 JSON 文件暴露元数据。v0.1 schema
关注可迁移性，而不是某个平台的专有行为。

必填字段：

- `name`: 稳定的 skill 名称
- `description`: 简洁说明这个 skill 能帮助 agent 做什么
- `supported_agents`: 兼容的 agent 或工具界面
- `trigger_conditions`: agent 应该在什么时候使用这个 skill
- `required_tools`: skill 预期使用的工具、文件、API 或运行时
- `safety_notes`: 边界和风险
- `examples`: skill 可以发挥作用的具体任务

推荐字段：

- `version`
- `domains`
- `inputs`
- `outputs`
- `validation`
- `benchmark_tasks`

## 好 Skill 的特征

- 足够具体，可以指导 agent 行为。
- 尽可能跨多个工具迁移。
- 明确说明安全边界。
- 包含示例和非示例。
- 定义可观察的成功标准。
- 避免类似 "make the agent better" 的模糊承诺。

## 最小 SKILL.md 结构

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
