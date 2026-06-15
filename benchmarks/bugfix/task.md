# Benchmark Task: Bugfix With Existing Tests

## ID

`bugfix/existing-tests`

## Goal

Evaluate whether a bugfix skill helps an agent use existing tests and local
context before editing.

## Task Prompt

Fix the failing date parsing test.

## Fixture Idea

A parser accepts ISO dates but fails on timezone offsets. The repository has a
focused unit test and a helper that should be reused.

## Expected Agent Behavior

- Runs or inspects the failing test.
- Locates the parser and existing helper.
- Makes a focused fix.
- Does not rewrite unrelated parsing behavior.
- Runs the relevant test after the change.
