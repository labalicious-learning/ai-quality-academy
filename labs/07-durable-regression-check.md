# Lab 7 — Build One Durable Regression Check

**Time:** 35 minutes  
**Team:** pair-programming; starter repository only

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Keep the server running in one terminal and run tests in another. Follow Lab setup for optional Playwright installation and the platform guide for Windows `.cmd`, Linux browser dependencies and per-shell `CANDIDATE` settings. Candidate A/B are runtime choices in the supplied starter, not separate Git branches. If automation installation is blocked, submit the assertion design and mark execution unverified.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The local allocation dashboard can show its heading even when loading AL-01 fails. A heading-only test misses the failed record load. This exercise requires no real sign-in.

## Mission

Add one small, deterministic check that proves the allocation record loaded and the expected error does not occur.

## Constraints

- Use `npx playwright test sandbox/starter.spec.mjs` after the optional setup in Lab setup. `npm test` verifies seeded fixture behavior and does not run your browser assertion.
- Prefer role/name or stable test selectors; do not use brittle screen coordinates.
- Assert an observable outcome and one relevant network/state condition.
- No unlimited retries, long sleeps, or real external accounts.

## Steps

1. Read the existing test and acceptance criterion.
2. Draft a short AI task brief for Codex requesting an explanation and a proposed patch.
3. Verify the proposal; implement/revise the smallest useful check.
4. Run it with `CANDIDATE=buggy` and `CANDIDATE=fixed`, using your shell's syntax in the platform guide. These are runtime selections, not branches. Record the same check failing A and passing B.
5. Review the diff together.

## Deliverables

- test diff;
- green and red run results;
- explanation of why the locator/fixture is stable;
- a one-sentence statement of what the test does not cover.

If installation is blocked, the equivalent foundation submission is a precise assertion design: selector, response/status condition, expected A/B results and an explanation of why it detects the failure. Mark all execution unverified. Grade that design on reasoning, not fabricated red/green logs; record hands-on automation execution as a separate apprenticeship follow-up.

## Stretch

Add a deliberately broken variant and explain why the test fails for the right reason.

## Product Studio homework — Protect your progress

Add a meaningful regression and own-repo CI. Record actual fail-before/pass-after evidence for a repair, then prove the current checks pass without weakening expected behavior.

Budget two to three hours, including evidence and review preparation; ask for coaching or scope adjustment if blocked. Record progress using [the milestone template](../templates/project-milestone.md) in **your own product repository**, not the practice packet. See [the complete project roadmap](../COURSE_PROJECT.md), [GitHub workflow](../PROJECT_GITHUB.md) and [small-model guide](../SMALL_MODEL_GUIDE.md). The practice lab above remains separate from your individual product.
