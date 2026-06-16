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

- [What Makes a Good AI Agent Skill?](docs/what-makes-a-good-ai-agent-skill.en.md)
- [什么是好的 AI Agent Skill？](docs/what-makes-a-good-ai-agent-skill.zh.md)

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
