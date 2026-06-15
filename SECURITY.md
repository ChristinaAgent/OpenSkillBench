# Security Policy

OpenSkillBench treats skills as untrusted content.

## Reporting

Please report security issues through GitHub Security Advisories when the
repository is available. Until then, open a private discussion with the project
maintainer if possible.

## Safety Principles

- Do not execute untrusted skill content by default.
- Prefer static analysis before runtime execution.
- Flag skills that request broad filesystem, network, credential, or shell
  access.
- Make dangerous assumptions explicit in metadata and documentation.

## Out of Scope

OpenSkillBench does not certify that a skill is safe. It provides tools and
rubrics that help reviewers reason about safety.
