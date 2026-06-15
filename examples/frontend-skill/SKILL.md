---
name: frontend-implementation
version: 0.1.0
description: Build polished frontend changes that follow existing design conventions and verify layout across viewports.
supported_agents:
  - Codex
  - Claude Code
  - Cursor
domains:
  - frontend
  - ui
trigger_conditions:
  - The user asks to build or modify a web interface.
  - The task involves layout, components, responsive behavior, or visual QA.
required_tools:
  - browser
  - package-manager
inputs:
  - existing application code
  - user request
outputs:
  - implemented frontend change
  - verification notes
safety_notes:
  - Preserve existing design system conventions unless the user asks for a new direction.
  - Verify that text and controls do not overlap on mobile and desktop viewports.
validation:
  - Run relevant tests or build checks when available.
  - Inspect the result in a browser for significant UI changes.
benchmark_tasks:
  - frontend/responsive-toolbar
examples:
  - task: Add a compact settings panel to this dashboard.
    expected_behavior: Reuse existing components, implement the panel, and verify it at mobile and desktop sizes.
---

# Frontend Implementation Skill

Use this skill when making frontend UI changes.

## Procedure

1. Read the existing component and styling patterns.
2. Implement the smallest change that satisfies the workflow.
3. Use stable dimensions for controls and repeated UI elements.
4. Verify the result in a browser when the app can run locally.
5. Report what changed and how it was checked.
