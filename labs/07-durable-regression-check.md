# Lab 7 — Build One Durable Regression Check

**Time:** 35 minutes  
**Team:** pair-programming; starter repository only

## Mac / Linux / Windows

Keep the server running in one terminal and run tests in another. Follow Lab setup for optional Playwright installation and the platform guide for Windows `.cmd`, Linux browser dependencies and per-shell `CANDIDATE` settings. Candidate A/B are runtime choices in the supplied starter, not separate Git branches. If automation installation is blocked, submit the assertion design and mark execution unverified.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The training app once let a signed-in staff user open an allocation detail page that silently failed to load its record. The UI still showed a page title, so the regression escaped casual testing.

## Mission

Add one small, deterministic check that proves the allocation record loaded and the expected error does not occur.

## Constraints

- Use the starter project’s test command and fixtures.
- Prefer role/name or stable test selectors; do not use brittle screen coordinates.
- Assert an observable outcome and one relevant network/state condition.
- No unlimited retries, long sleeps, or real external accounts.

## Steps

1. Read the existing test and acceptance criterion.
2. Draft a short AI task brief for Codex requesting an explanation and a proposed patch.
3. Verify the proposal; implement/revise the smallest useful check.
4. Run it against the seeded regression and fixed branch.
5. Review the diff together.

## Deliverables

- test diff;
- green and red run results;
- explanation of why the locator/fixture is stable;
- a one-sentence statement of what the test does not cover.

## Stretch

Add a deliberately broken variant and explain why the test fails for the right reason.
