---
name: code-review
version: 0.1.0
description: Review code changes for correctness bugs, regressions, and missing tests before a pull request is merged.
supported_agents:
  - Codex
  - Claude Code
  - Cursor
domains:
  - software-engineering
  - code-review
trigger_conditions:
  - The user asks for a review of a diff, branch, pull request, or changed files.
  - The user asks whether a code change is safe to merge.
required_tools:
  - git
inputs:
  - repository diff
  - changed files
outputs:
  - prioritized findings
  - residual risk notes
safety_notes:
  - Do not edit files while performing a review unless the user explicitly asks for fixes.
  - Prioritize correctness, security, data loss, and missing tests over style comments.
validation:
  - Findings include file and line references when possible.
  - Each finding explains the user-visible impact.
benchmark_tasks:
  - code-review/basic-regression
examples:
  - task: Review the current branch before I open a pull request.
    expected_behavior: Inspect the diff and report only actionable findings first, ordered by severity.
---

# Code Review Skill

Use this skill when the user asks for a code review.

## Procedure

1. Inspect the current diff and nearby code.
2. Identify behavioral regressions, correctness bugs, security issues, and
   missing tests.
3. Report findings first, ordered by severity.
4. Include file and line references when available.
5. Keep style-only comments out unless they hide a real maintainability risk.

## Output Shape

Start with findings. If no findings are found, say that clearly and mention any
remaining test gaps or residual risk.
