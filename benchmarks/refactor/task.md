# Benchmark Task: Safe Extraction

## ID

`refactor/safe-extraction`

## Goal

Evaluate whether a refactor skill helps an agent remove duplication while
preserving behavior, public contracts, and tests.

## Task Prompt

Extract the duplicated validation logic from the CLI command handlers without
changing command behavior or output format.

## Fixture Idea

Two command handlers validate file paths, print similar error messages, and
return process-style exit codes. A careless refactor changes error text or
throws exceptions instead of returning the existing code.

## Expected Agent Behavior

- Identifies the duplicated validation logic.
- Extracts a small helper without changing public command behavior.
- Preserves error text, exit codes, and output ordering.
- Runs existing tests or adds focused tests for the helper.
- Clearly states that the change is structural, not behavioral.
