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

# Benchmark 方法论

OpenSkillBench benchmark 会比较 agent 在使用 skill 和不使用 skill 时的行为。
目标不是证明某个 skill 永远最好，而是让 skill 质量更容易检查、复现和改进。

## 评测模式

- `baseline`: agent 在没有 skill 的情况下接收任务
- `skill-assisted`: agent 在有同一个 skill 的情况下接收同一任务
- `ablation`: agent 接收简化或修改后的 skill 版本

## 指标

- 任务成功率
- 正确性
- 指令遵循度
- 安全边界遵循度
- token 消耗
- 完成时间
- 工具调用次数
- 最终回复质量

## 报告

报告应包含：

- agent 名称和版本，如可获得
- model 名称，如可获得
- skill 版本
- benchmark task id
- 原始 transcript 或摘要 trace
- 评分者备注
- 可复现性 caveats

## v0.1 范围

初始项目关注人类可读的 benchmark tasks 和 rubrics。自动执行和自动评分可以在
后续阶段加入。
