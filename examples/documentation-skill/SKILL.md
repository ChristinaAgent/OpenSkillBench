---
name: documentation
version: 0.1.0
description: Improve technical documentation so it is accurate, task-oriented, and easy for developers to apply.
supported_agents:
  - Codex
  - Claude Code
  - Cursor
domains:
  - documentation
  - developer-experience
trigger_conditions:
  - The user asks to write, review, or improve README, API, setup, or usage documentation.
  - The task involves explaining how developers should use a project, function, API, or workflow.
required_tools:
  - git
inputs:
  - existing documentation
  - source code
  - user brief
outputs:
  - updated documentation
  - accuracy notes
safety_notes:
  - Do not invent features, flags, APIs, commands, or compatibility claims not supported by the repository.
  - Prefer concise task-oriented examples over broad marketing language.
  - Preserve existing terminology unless it is clearly confusing or inconsistent.
validation:
  - Commands, file paths, and API names match the repository.
  - The documentation includes at least one concrete usage example when appropriate.
benchmark_tasks:
  - documentation/api-doc-quality
examples:
  - task: Improve the README section that explains how to run the CLI.
    expected_behavior: Verify package scripts and file names, then update the docs with accurate commands and a concise example.
---

# Documentation Skill

Use this skill when improving developer-facing documentation.

## Procedure

1. Identify the reader, task, and documentation surface.
2. Check source files, scripts, or tests before documenting behavior.
3. Replace vague explanations with concrete steps, examples, and constraints.
4. Keep wording concise and consistent with existing project terminology.
5. Note any assumptions or verification gaps when behavior cannot be checked.

## Output Shape

Summarize what changed and how accuracy was verified. If documentation describes
commands, include the exact command names that were checked.
