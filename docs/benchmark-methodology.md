# Benchmark Methodology

OpenSkillBench benchmarks compare agent behavior with and without a skill.
The goal is not to prove that one skill is universally best. The goal is to
make skill quality easier to inspect, reproduce, and improve.

## Evaluation Modes

- `baseline`: agent receives the task without the skill
- `skill-assisted`: agent receives the same task with the skill
- `ablation`: agent receives a simplified or modified version of the skill

## Metrics

- task success
- correctness
- instruction adherence
- safety adherence
- token usage
- time to completion
- number of tool calls
- quality of final response

## Reporting

Reports should include:

- agent name and version when available
- model name when available
- skill version
- benchmark task id
- raw transcript or summarized trace
- scorer notes
- reproducibility caveats

## v0.1 Scope

The initial project focuses on human-readable benchmark tasks and rubrics.
Automated execution and scoring can come later.
