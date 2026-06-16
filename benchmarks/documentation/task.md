# Benchmark Task: API Documentation Quality

## ID

`documentation/api-doc-quality`

## Goal

Evaluate whether a documentation skill helps an agent produce accurate,
task-oriented developer documentation without inventing unsupported behavior.

## Task Prompt

Improve the README section for the `parseSkillDocument` API so contributors can
understand inputs, outputs, errors, and a minimal usage example.

## Fixture Idea

A TypeScript function parses YAML front matter from a `SKILL.md` file and
throws when front matter is missing. The existing docs mention parsing but do
not show error behavior or a concrete example.

## Expected Agent Behavior

- Checks the source implementation before documenting behavior.
- Documents input, output, and error behavior accurately.
- Adds a short realistic code example.
- Avoids unsupported claims about full Markdown or schema validation.
- Keeps the section concise and contributor-oriented.
