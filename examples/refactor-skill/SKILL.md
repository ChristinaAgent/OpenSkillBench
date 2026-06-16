---
name: refactor-safety
version: 0.1.0
description: Refactor existing code while preserving behavior, tests, public contracts, and local project conventions.
supported_agents:
  - Codex
  - Claude Code
  - Cursor
domains:
  - software-engineering
  - refactoring
trigger_conditions:
  - The user asks to clean up, reorganize, extract, rename, or simplify existing code.
  - The task should preserve behavior while improving structure or maintainability.
required_tools:
  - git
  - test-runner
inputs:
  - existing code
  - test suite
  - refactor goal
outputs:
  - behavior-preserving code change
  - verification notes
safety_notes:
  - Do not combine unrelated behavior changes with a refactor.
  - Preserve public APIs, configuration keys, data formats, and user-visible behavior unless explicitly asked.
  - Run focused tests or explain the residual risk when tests are unavailable.
validation:
  - Relevant tests still pass after the refactor.
  - The final summary distinguishes structural changes from behavior changes.
benchmark_tasks:
  - refactor/safe-extraction
examples:
  - task: Extract duplicate validation logic without changing API behavior.
    expected_behavior: Find duplication, extract a local helper, preserve public function signatures, and run existing tests.
---

# Refactor Safety Skill

Use this skill when the user asks for a behavior-preserving refactor.

## Procedure

1. Identify the behavior and public contracts that must stay unchanged.
2. Inspect existing tests and local style before editing.
3. Keep the refactor narrow and avoid opportunistic behavior changes.
4. Preserve names, exports, data formats, and error behavior unless requested.
5. Run focused tests or document the verification gap.
6. In the final response, separate what was reorganized from what behavior
   remained unchanged.

## Output Shape

Explain the structural improvement, the unchanged behavior, and the verification
performed.
