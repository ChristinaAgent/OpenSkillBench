# Contributing

Thanks for helping improve OpenSkillBench.

This project is early, so the most valuable contributions are clear examples,
small benchmark tasks, schema feedback, and linter rules that catch real skill
quality problems.

## Good First Contributions

- Add a benchmark task with a concrete rubric.
- Improve the skill metadata schema.
- Add a high-quality example `SKILL.md`.
- Propose a linter rule with examples of passing and failing skills.
- Review an existing skill and document why it is or is not reusable.

## Skill Submission Criteria

A submitted skill should include:

- a clear description
- supported agents or platforms
- trigger conditions
- required tools
- safety notes
- examples
- validation or benchmark criteria

Avoid submitting prompt dumps without usage boundaries or examples.

## Development

```bash
npm install
npm run build
npm run openskillbench -- lint examples/code-review-skill/SKILL.md
```

## Pull Request Checklist

- The change is focused.
- Docs or examples are updated when behavior changes.
- New skills include safety notes and examples.
- New benchmark tasks include a rubric.
