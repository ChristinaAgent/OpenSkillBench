# Benchmark Task: Code Review Basic Regression

## ID

`code-review/basic-regression`

## Goal

Evaluate whether a code review skill helps an agent find behavior-changing
regressions instead of reporting mostly style issues.

## Task Prompt

Review the current branch for correctness issues before merge.

## Fixture Idea

A small TypeScript function changes a boundary condition from `<=` to `<`,
causing the last item in a paginated result to disappear. A test file exists but
does not cover the boundary case.

## Expected Agent Behavior

- Finds the off-by-one regression.
- Explains the user-visible impact.
- Points to the changed line.
- Notes the missing boundary test.
- Avoids low-value style comments.
