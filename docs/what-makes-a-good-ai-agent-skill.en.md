# What Makes a Good AI Agent Skill?

An AI agent skill is not just a prompt. A good skill is a reusable workflow
asset that helps an agent decide when to act, what context to inspect, which
tools to use, what boundaries to respect, and how to verify the result.

OpenSkillBench defines a good v0.1 skill as one that is clear, portable, safe,
and benchmarkable.

## Skill, Not Prompt

Prompts usually optimize a single interaction. Skills should improve repeated
work.

A prompt might say:

```text
Review this code carefully.
```

A skill should define:

- when code review behavior should trigger
- what evidence the agent should inspect
- what findings matter most
- what actions are out of scope
- what a good final review looks like
- how the review can be scored or compared

That difference matters because agent skills become part of a developer's
workflow. They need enough structure to be reused, audited, and improved.

## The v0.1 Quality Model

OpenSkillBench starts with seven practical quality signals.

### 1. Clear Purpose

A good skill has a specific job.

Weak:

```text
Make the agent better at coding.
```

Better:

```text
Review code changes for correctness bugs, regressions, and missing tests before
a pull request is merged.
```

The description should tell a user what the skill is for and what kind of
outcome to expect.

### 2. Concrete Trigger Conditions

Agents need to know when a skill applies. Trigger conditions should be concrete
enough to prevent accidental use.

Good trigger conditions:

- The user asks for a review of a diff, branch, pull request, or changed files.
- The user asks to fix a failing test, runtime error, regression, or bug report.
- The task should preserve behavior while improving structure or maintainability.

Vague triggers such as "when coding" make a skill noisy and hard to evaluate.

### 3. Tool and Context Boundaries

Skills should state what tools or context they expect. This helps users assess
portability across Codex, Claude Code, Cursor, OpenCode, and other agents.

Examples:

- `git`
- `test-runner`
- `browser`
- repository code
- changed files
- existing documentation

Required tools do not need to be complex. Even declaring that a skill expects no
special tools is useful.

### 4. Safety Notes

Skills can encourage powerful behavior, so their boundaries should be explicit.

Examples:

- Do not edit files while performing a code review unless the user explicitly
  asks for fixes.
- Do not hide failures by weakening tests.
- Do not invent APIs, commands, or compatibility claims not supported by the
  repository.
- Do not combine unrelated behavior changes with a refactor.

Safety notes are not legal guarantees. They are reviewable assumptions that
make a skill easier to trust.

### 5. Examples

Examples make a skill easier to adopt and easier to test.

A good example includes:

- a realistic task
- expected behavior
- enough detail to distinguish success from generic effort

Example:

```yaml
examples:
  - task: Fix the failing date parsing test without changing unrelated parser behavior.
    expected_behavior: Reproduce or inspect the failure, reuse local parsing helpers, make a focused fix, and run the relevant test.
```

### 6. Validation Criteria

A good skill says how a user can tell whether it helped.

For a bugfix skill, validation might be:

- the relevant failing test passes after the change
- the final explanation names the root cause and verification performed

For a documentation skill, validation might be:

- commands, file paths, and API names match the repository
- the documentation includes a concrete usage example

Validation turns a skill from advice into an inspectable workflow.

### 7. Benchmarkability

If a skill cannot be benchmarked at all, it is hard to improve.

Benchmark tasks should include:

- task prompt
- fixture idea
- expected behavior
- scoring rubric

The benchmark does not need to be fully automated at first. A clear human
rubric is already useful because it makes quality discussions less vague.

## Common Anti-patterns

### Prompt Dumps

A long list of instructions without triggers, examples, or safety boundaries is
hard to trust. Length is not the same as quality.

### Overbroad Skills

Skills such as "senior engineer mode" or "perfect coding mode" are difficult to
evaluate. Narrow skills are easier to improve.

### Hidden Tool Assumptions

If a skill silently assumes shell access, browser automation, network access, or
project-specific commands, it will fail unpredictably in other environments.

### No Non-goals

Good skills often say what not to do. This is especially important for review,
security, refactor, and automation workflows.

### No Verification

If a skill never asks the agent to verify work, it can make output sound more
confident without making it more correct.

## Reference Categories

OpenSkillBench v0.1 uses five reference categories:

- code review
- bugfix
- frontend implementation
- documentation
- refactor safety

These categories were chosen because they are common AI coding-agent workflows
and they expose different quality requirements:

- code review prioritizes finding high-impact issues
- bugfix prioritizes diagnosis and focused changes
- frontend implementation prioritizes visual and interaction quality
- documentation prioritizes accuracy and usability
- refactor safety prioritizes behavior preservation

## How OpenSkillBench Scores Skills

OpenSkillBench uses small rubrics instead of broad claims. A v0.1 benchmark
usually scores each criterion from 0 to 3:

- `0`: missing or harmful
- `1`: partially present, weak, or unreliable
- `2`: good enough for normal use
- `3`: strong, clear, and reusable

This is intentionally simple. The goal is not to create a perfect universal
score. The goal is to make skill quality concrete enough to compare.

## Minimal Checklist

Before publishing a skill, ask:

- Does it have a specific purpose?
- Does it define when to use it?
- Does it declare required tools or context?
- Does it include safety boundaries?
- Does it include realistic examples?
- Does it explain how to validate results?
- Can it be connected to a benchmark task?

If the answer is yes, the skill is much more likely to be reusable.

## What OpenSkillBench Is For

OpenSkillBench is not trying to collect the most skills. It is trying to make
skills easier to inspect, compare, and improve.

Awesome lists collect skills. OpenSkillBench tells whether a skill is clear,
portable, safe, and benchmarkable.
