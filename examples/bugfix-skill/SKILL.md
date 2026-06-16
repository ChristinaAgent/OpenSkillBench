---
name: bugfix
version: 0.1.0
description: Diagnose and fix focused software defects by using existing tests, local patterns, and minimal code changes.
supported_agents:
  - Codex
  - Claude Code
  - Cursor
domains:
  - software-engineering
  - debugging
trigger_conditions:
  - The user asks to fix a failing test, runtime error, regression, or bug report.
  - The task includes an observed failure and expects a code change.
required_tools:
  - git
  - test-runner
inputs:
  - failing test output
  - bug report
  - repository code
outputs:
  - focused code fix
  - verification notes
safety_notes:
  - Keep the fix scoped to the reported failure unless broader behavior is clearly implicated.
  - Prefer existing helpers, patterns, and tests before introducing new abstractions.
  - Do not hide failures by weakening tests or broadening catch blocks without justification.
validation:
  - The relevant failing test passes after the change.
  - The final explanation names the root cause and verification performed.
benchmark_tasks:
  - bugfix/existing-tests
examples:
  - task: Fix the failing date parsing test without changing unrelated parser behavior.
    expected_behavior: Reproduce or inspect the failure, reuse local parsing helpers, make a focused fix, and run the relevant test.
---

# Bugfix Skill

Use this skill when the user asks for a focused bug fix.

## Procedure

1. Identify the observed failure from the prompt, test output, logs, or bug
   report.
2. Inspect the smallest relevant code path and nearby tests.
3. Reproduce the failure when a local test command is available.
4. Make the minimal change that addresses the root cause.
5. Add or update a focused regression test when coverage is missing.
6. Run the relevant test or explain why it could not be run.
7. Summarize the root cause, the fix, and the verification result.

## Output Shape

Report the fix in plain engineering terms. Include the test command that passed
or the verification gap that remains.
