# OpenSkillBench

Benchmark, lint, and standardize reusable skills for AI coding agents.

OpenSkillBench is an open-source toolkit for evaluating and improving agent
skills used by Codex, Claude Code, Cursor, OpenCode, and other AI coding
assistants.

Awesome lists collect skills. OpenSkillBench tells whether a skill is clear,
portable, safe, and benchmarkable.

## Why

AI agent skills are becoming reusable workflow assets, but the ecosystem is
still fragmented:

- Different tools use different conventions.
- Many skills are hard to evaluate before adoption.
- Safety assumptions are often implicit.
- Few skills include examples, triggers, or measurable tasks.

OpenSkillBench starts with a practical baseline: a portable skill metadata
format, a linter for `SKILL.md`, and benchmark tasks that make quality easier
to discuss.

## What is included

- `schemas/skill.schema.json`: portable metadata schema for agent skills
- `examples/`: reference `SKILL.md` examples
- `benchmarks/`: task definitions and rubrics for skill evaluation
- `registry/skills.json`: curated skill registry format
- `packages/cli`: prototype CLI for linting skill files

## Reference Skills and Benchmarks

OpenSkillBench v0.1 includes five reference skill categories:

- code review
- bugfix
- frontend implementation
- documentation
- refactor safety

Each category is paired with a benchmark task and rubric so contributors can
discuss skill quality with concrete examples.

Start with the v0.1 quality model:

- [What Makes a Good AI Agent Skill?](docs/what-makes-a-good-ai-agent-skill.md)

## Quick Start

```bash
npm install
npm run build
npm test
npm run openskillbench -- lint examples/code-review-skill/SKILL.md
```

The CLI parses YAML front matter, validates metadata with
`schemas/skill.schema.json`, and checks a small set of v0.1 quality signals:

- clear description
- trigger conditions
- required tools
- safety notes
- examples
- validation or benchmark criteria

## Project Status

OpenSkillBench is an early research and tooling project. The first milestone is
to validate whether a `SKILL.md` file is clear, portable, safe, and
benchmarkable.

## Roadmap

- Define a portable skill metadata schema.
- Ship a linter for `SKILL.md`.
- Publish 5 to 10 benchmark tasks.
- Curate a small registry of high-quality skill examples.
- Add scoring reports for skill-assisted agent runs.
- Explore converters for Codex, Claude Code, Cursor, and OpenCode formats.

## Non-goals

- OpenSkillBench is not a prompt dumping ground.
- OpenSkillBench is not trying to become the largest skill collection.
- OpenSkillBench does not execute untrusted skills by default.

## Repository Name

Recommended GitHub repository:

```text
ChristinaAgent/OpenSkillBench
```

## License

MIT

# OpenSkillBench 中文说明

OpenSkillBench 用来 benchmark、lint 并标准化 AI coding agents 可复用的 skills。

OpenSkillBench 是一个开源工具包，用于评估和改进 Codex、Claude Code、Cursor、
OpenCode 以及其他 AI coding assistants 使用的 agent skills。

Awesome list 负责收集 skills；OpenSkillBench 判断一个 skill 是否清晰、可迁移、
安全、可评测。

## 为什么需要它

AI agent skills 正在变成可复用的工作流资产，但生态仍然分散：

- 不同工具使用不同约定。
- 很多 skills 在采用前很难评估。
- 安全假设经常是隐含的。
- 很少有 skills 包含示例、触发条件或可衡量任务。

OpenSkillBench 从一个实用基线开始：可迁移的 skill metadata 格式、`SKILL.md`
linter，以及让质量更容易讨论的 benchmark tasks。

## 包含什么

- `schemas/skill.schema.json`: agent skills 的可迁移 metadata schema
- `examples/`: 参考 `SKILL.md` 示例
- `benchmarks/`: skill 评测任务和 rubrics
- `registry/skills.json`: 精选 skill registry 格式
- `packages/cli`: 用于 lint skill 文件的 CLI 原型

## 参考 Skills 和 Benchmarks

OpenSkillBench v0.1 包含五个参考 skill 类别：

- 代码审查
- 缺陷修复
- 前端实现
- 文档
- 安全重构

每个类别都配有 benchmark task 和 rubric，方便贡献者基于具体例子讨论 skill 质量。

从 v0.1 质量模型开始：

- [什么是好的 AI Agent Skill？](docs/what-makes-a-good-ai-agent-skill.md#什么是好的-ai-agent-skill)

## 快速开始

```bash
npm install
npm run build
npm test
npm run openskillbench -- lint examples/code-review-skill/SKILL.md
```

CLI 会解析 YAML front matter，使用 `schemas/skill.schema.json` 校验 metadata，
并检查一组 v0.1 质量信号：

- 清晰描述
- 触发条件
- 必需工具
- 安全说明
- 示例
- 验证或 benchmark 标准

## 项目状态

OpenSkillBench 仍处于早期研究和工具阶段。第一个 milestone 目标是验证一个
`SKILL.md` 文件是否清晰、可迁移、安全、可评测。

## 路线图

- 定义可迁移的 skill metadata schema。
- 发布 `SKILL.md` linter。
- 发布 5 到 10 个 benchmark tasks。
- 维护一个高质量 skill examples 的小型 registry。
- 添加 skill-assisted agent runs 的评分报告。
- 探索 Codex、Claude Code、Cursor 和 OpenCode 格式转换器。

## 非目标

- OpenSkillBench 不是 prompt 堆放处。
- OpenSkillBench 不追求成为最大的 skill collection。
- OpenSkillBench 默认不执行不受信任的 skill。

## 仓库名称

推荐 GitHub 仓库：

```text
ChristinaAgent/OpenSkillBench
```

## License

MIT
