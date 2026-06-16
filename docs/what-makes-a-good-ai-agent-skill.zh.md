# 什么是好的 AI Agent Skill？

AI agent skill 不只是 prompt。一个好的 skill 是可复用的工作流资产，它帮助
agent 判断什么时候行动、应该查看哪些上下文、使用哪些工具、遵守哪些边界，
以及如何验证结果。

OpenSkillBench 将 v0.1 阶段的好 skill 定义为：清晰、可迁移、安全、可评测。

## Skill 不是 Prompt

Prompt 通常优化一次对话；skill 应该改善可重复发生的工作。

一个 prompt 可能只是说：

```text
Review this code carefully.
```

一个 skill 应该定义：

- 什么时候应该触发 code review 行为
- agent 应该检查哪些证据
- 哪些问题最重要
- 哪些行为不在范围内
- 好的最终 review 应该长什么样
- 如何对 review 结果评分或比较

这个区别很重要，因为 agent skills 会成为开发者工作流的一部分。它们需要足够
结构化，才能被复用、审查和持续改进。

## v0.1 质量模型

OpenSkillBench 从七个实用质量信号开始。

### 1. 清晰的用途

好的 skill 应该有明确的任务。

较弱的描述：

```text
Make the agent better at coding.
```

更好的描述：

```text
Review code changes for correctness bugs, regressions, and missing tests before
a pull request is merged.
```

描述应该告诉用户：这个 skill 用来做什么，以及可以期待什么结果。

### 2. 具体的触发条件

Agent 需要知道什么时候应该使用某个 skill。触发条件应该足够具体，避免误用。

好的触发条件示例：

- 用户要求 review diff、branch、pull request 或 changed files
- 用户要求修复 failing test、runtime error、regression 或 bug report
- 任务要求在保持行为不变的前提下改善结构或可维护性

像 "when coding" 这样模糊的触发条件会让 skill 变得嘈杂，也更难评测。

### 3. 工具和上下文边界

Skill 应该声明它需要哪些工具或上下文。这能帮助用户判断它是否能迁移到
Codex、Claude Code、Cursor、OpenCode 等不同 agent 环境。

示例：

- `git`
- `test-runner`
- `browser`
- 仓库代码
- 变更文件
- 现有文档

required tools 不一定复杂。即使声明“不需要特殊工具”，也很有价值。

### 4. 安全说明

Skill 可能会引导 agent 执行较强的操作，所以边界必须明确。

示例：

- 做 code review 时不要修改文件，除非用户明确要求修复
- 不要通过削弱测试来掩盖失败
- 不要编造仓库不支持的 API、命令或兼容性声明
- 不要把无关行为变更混入 refactor

安全说明不是法律保证，而是可审查的假设，让 skill 更容易被信任。

### 5. 示例

示例能让 skill 更容易采用，也更容易测试。

好的示例应该包含：

- 真实任务
- 预期行为
- 足够区分“真的成功”和“泛泛努力”的细节

示例：

```yaml
examples:
  - task: Fix the failing date parsing test without changing unrelated parser behavior.
    expected_behavior: Reproduce or inspect the failure, reuse local parsing helpers, make a focused fix, and run the relevant test.
```

### 6. 验证标准

好的 skill 会说明用户如何判断它是否真的有帮助。

对于 bugfix skill，验证标准可以是：

- 相关 failing test 在修改后通过
- 最终说明解释了 root cause 和执行过的验证

对于 documentation skill，验证标准可以是：

- 命令、文件路径和 API 名称与仓库一致
- 文档包含具体使用示例

验证标准让 skill 从“建议”变成可检查的工作流。

### 7. 可评测性

如果一个 skill 完全无法评测，就很难持续改进。

Benchmark task 应该包含：

- 任务提示
- fixture 设计思路
- 预期行为
- 评分 rubric

Benchmark 一开始不必完全自动化。清晰的人工 rubric 已经很有价值，因为它能让
质量讨论不再模糊。

## 常见反模式

### Prompt 堆砌

只有长指令列表，却没有触发条件、示例或安全边界，这样的 skill 很难被信任。
长度不等于质量。

### 过度宽泛的 Skill

像 "senior engineer mode" 或 "perfect coding mode" 这类 skill 很难评测。
范围更窄的 skill 更容易改进。

### 隐藏的工具假设

如果 skill 暗中假设拥有 shell access、browser automation、network access 或项目
特定命令，它在其他环境中就可能不可预测地失败。

### 没有非目标

好的 skill 往往会说明“不做什么”。这对 review、安全、refactor 和自动化工作流
尤其重要。

### 没有验证

如果 skill 从不要求 agent 验证工作，它可能只是让输出听起来更自信，而不是更正确。

## 参考类别

OpenSkillBench v0.1 使用五个参考类别：

- 代码审查
- 缺陷修复
- 前端实现
- 文档
- 安全重构

选择这些类别，是因为它们是 AI coding agent 中常见的工作流，并且能体现不同的
质量要求：

- code review 重视发现高影响问题
- bugfix 重视诊断和聚焦修改
- frontend implementation 重视视觉和交互质量
- documentation 重视准确性和可用性
- refactor safety 重视行为保持不变

## OpenSkillBench 如何给 Skill 评分

OpenSkillBench 使用小型 rubric，而不是泛泛的质量声明。v0.1 benchmark 通常对
每个指标按 0 到 3 分评分：

- `0`: 缺失或有害
- `1`: 部分存在，但较弱或不可靠
- `2`: 足以正常使用
- `3`: 强、清晰、可复用

这个设计是刻意保持简单的。目标不是创造一个完美的通用分数，而是让 skill 质量
具体到可以比较。

## 最小检查清单

发布 skill 前，可以问：

- 它是否有具体用途？
- 它是否定义了什么时候使用？
- 它是否声明了所需工具或上下文？
- 它是否包含安全边界？
- 它是否包含真实示例？
- 它是否说明如何验证结果？
- 它是否能连接到 benchmark task？

如果答案是肯定的，这个 skill 就更有可能被复用。

## OpenSkillBench 的目标

OpenSkillBench 不是为了收集最多的 skills，而是为了让 skills 更容易被检查、
比较和改进。

Awesome list 收集 skills；OpenSkillBench 判断一个 skill 是否清晰、可迁移、
安全、可评测。
