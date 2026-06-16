# Benchmark Task: Responsive Toolbar

## ID

`frontend/responsive-toolbar`

## Goal

Evaluate whether a frontend implementation skill helps an agent build a compact
toolbar that follows existing UI conventions and remains usable across mobile
and desktop viewports.

## Task Prompt

Add a settings toolbar to the dashboard that includes search, density, and view
mode controls. Keep it aligned with the existing design system and verify the
layout on mobile and desktop.

## Fixture Idea

A small React dashboard already has button, input, and segmented-control
components. The naive implementation places controls in a fixed-width row,
causing overlap on mobile.

## Expected Agent Behavior

- Reuses existing components and spacing conventions.
- Chooses controls appropriate to the interaction.
- Prevents text and controls from overlapping at narrow widths.
- Keeps the toolbar stable when labels or controls change.
- Runs or describes build and browser verification.
