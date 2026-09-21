# Worked example: Shift Garden

© 2026 Jared Cluff. All rights reserved. All people, events and review situations below are fictional.

**Start here:** [Open the interactive example](examples/shift-garden/index.html). Build a fictional garden-day volunteer board: create shifts, assign aliases, remove assignments, see available space and retain a valid schedule after reload.

This is a **small teaching slice**, not a finished course-long project or a certified submission. The negative and corrected snapshots were created together. They do not prove weeks of development, genuine peer review, learner ownership or GitHub proficiency. No award follows from copying or running this example.

## Run it on Mac, Linux or Windows

Use the Node.js setup from Session 00. From the course repository root, the same commands work in Terminal, a Linux shell, PowerShell or Command Prompt:

```text
npm run example
```

Open http://127.0.0.1:4175/ and leave the terminal running. Stop with Ctrl+C. This serves only the teaching app on your computer; it needs no keys, accounts, cloud service or model subscription. Its guide link displays plain Markdown locally. Do not double-click the example HTML: module loading may be blocked on file URLs. The published course serves the example normally.

Run the focused tests separately:

```text
node --test examples/shift-garden/core.test.mjs
node examples/shift-garden/regression.mjs --negative
node examples/shift-garden/regression.mjs
```

The negative command **must fail** with “Missing expected exception” and exit code 1. The corrected command must report `PASS SG-03` and exit code 0. If both pass, or the negative command fails because a file is missing, you have not demonstrated the intended regression. The test suite verifies that distinction automatically.

## The agreed slice

| Case | Requirement | Observable check |
| --- | --- | --- |
| SG-01 | Create a named shift with integer capacity 1–20 | Accept 1 and 20; reject 0, 21, blank names and duplicate IDs in imported state |
| SG-02 | A volunteer can appear only once within a shift | Assign V01 twice; the second attempt changes nothing and explains why |
| SG-03 | Capacity is a hard upper bound | At capacity two, reject a third distinct alias; after removing one, accept a replacement |
| SG-04 | Coverage reflects assignments and survives a normal reload | Record totals, reload, compare; filter full shifts out and back in |
| SG-05 | Make failure and recovery visible | Deny browser storage or simulate a failed write; never claim a successful save |
| SG-06 | The core journey works on narrow screens and by keyboard | Create, assign, remove and filter at 375/768/1440 pixels; inspect focus and status messages |

Out of scope: real volunteers, time overlap, accounts, access control, shared schedules, server persistence and production deployment. Capacity can exceed the six supplied aliases; this prototype cannot fill those larger shifts. A course-long version needs its own instructor-approved scope and milestones; discuss additions such as time conflicts, an accessible calendar, undo and a safe synthetic CSV workflow.

## A useful defect report

**SG-03 / full shift accepts another assignment.** Run the shared regression against [the deliberately wrong snapshot](examples/shift-garden/negative-control.mjs). Initial state: capacity 2, aliases V01 and V02 assigned. Action: assign V03. Expected: reject with no state change. Actual in that snapshot: three assignments are returned. Impact: misleading coverage and an overbooked shift.

**Investigation:** the guard uses `>` where equality already means full, and the returned state is not validated. [The corrected core](examples/shift-garden/core.mjs) rejects at `>=` and validates its output. The browser app imports only the corrected core; the negative control is never loaded by the app.

**Verification:** the same input and assertion run against both implementations. Save your own exact commands, runtime/OS, output and full course SHA. Do not copy “PASS” out of this guide and call it your observation.

## What a review cycle should look like

This is an **illustrative review conversation**, not an actual PR or instructor decision:

1. Author: “The happy-path assignment works. Please review SG-03.”
2. Reviewer: “I need the equality boundary and a third distinct alias; assigning the same alias twice only tests duplicates.”
3. Author: “I added that case. It fails on the negative control and passes with the corrected guard; the input is unchanged.”
4. Reviewer: “That addresses the boundary. Browser persistence and keyboard behavior still need separate observations.”

In your own project, make focused branches and PRs as the work actually happens. Preserve real feedback and subsequent commits. Do not backdate commits, fabricate reviews or recreate a staged history to imitate this narrative. Cite this course example and explain any code you reuse.

## Translate evidence into a review note

In **My learning path**, save a Session 07 evidence reference with title “SG-03 capacity regression,” criteria P1/Q2/Q3 and a URL to your own pushed commit or a repository-relative artifact location in the note. Map only what your artifact actually supports. A reference count is not a passing rubric score.

Use **Prepare a project review** from the dashboard. Include your approved scope revision, exact course/project SHAs, expected and observed behavior, commands actually run and remaining uncertainty. Select the reference; if its location exists only in the note, explicitly include that note. Preview every line before downloading.

The example can illustrate product behavior, defect detection and dependable verification. It cannot supply your H1 development progression, H2 real feedback history or G1 GitHub workflow evidence. Review all applicable criteria in the [AIQAA rubric](AIQAA_RUBRIC.md), not just these three.

## Instructor use

Use this after learners have attempted their own evidence report. Ask them what the automated check establishes and what it leaves unverified. Compare their answer with an actual browser journey. Do not present the scripted conversation as an independently reviewed certification-ready project. A complete annotated end-to-end example with authentic development provenance remains a separate course improvement.
