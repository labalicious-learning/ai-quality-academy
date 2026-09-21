# Same standard, different projects — mappings and reviewer calibration

These are **fictional teaching examples**, not assessments of real learners or evidence that the rubric has been validated. Use [AIQAA-1.0](AIQAA_RUBRIC.md) and [the agreement](templates/project-assessment-agreement.md). All 21 criteria stay required; the product-specific evidence changes. The examples below are abbreviated mappings, not complete approved agreements.

## Three right-sized products

| Product | Three connected features | Meaningful state and useful output | Explicit exclusions |
| --- | --- | --- | --- |
| **Shift Garden** — volunteer scheduler | Define shifts; assign fictional volunteers; filter and summarize uncovered places | Shifts, volunteers and assignments; saved capacity and uncovered counts | No real people, notifications, accounts or payroll |
| **Pantry Pilot** — meal planner | Maintain ingredient stock; plan recipes; calculate a shopping list | Ingredients, recipes and planned meals; stock edits recalculate shortages | No medical/nutrition advice, purchases or live store APIs |
| **Quest Ledger** — study-project tracker | Create tasks; record study sessions; summarize weekly progress | Tasks, sessions and goals; durations and completion affect summaries | No surveillance, real student records or predictive grading |

### Example acceptance cases to agree before building

**Shift Garden:** A shift has capacity two and no assignments. Assign V01 and V02; the UI and persisted data show two assignments and zero places remaining. Attempt V03; reject it with a useful message and unchanged state. Reload; the assignments remain. Import a file with an unknown shift ID; reject it without replacing the valid schedule. Capacity zero is either valid or invalid according to the agreed domain rule—reviewers must not guess.

**Pantry Pilot:** Stock contains three eggs. Two planned recipes require two eggs each. The shopping list shows one egg needed; after stock changes to four it shows zero. Reject a negative stock entry without modifying the saved value. Export, reset and reimport; recipe links and quantities match the original state. Specify units and rounding in the agreement; do not invent a unit-conversion requirement during review.

**Quest Ledger:** Task T01 has no sessions. Add a 25-minute session dated inside the agreed week; the total becomes 25. Add a 20-minute session; the total becomes 45. A negative duration is rejected without altering either session. Define the week boundary/time zone, then verify an entry just outside it is excluded. Repeated import follows the agreed duplicate rule, not an assumed one.

Each project also needs its remaining feature, UI, boundary, recovery and handoff cases; these examples alone are insufficient for P1.

## Criterion mapping across all three

| ID | Shift Garden | Pantry Pilot | Quest Ledger |
| --- | --- | --- | --- |
| P1 | Shift creation, assignment, uncovered view | Stock, meal plan, shortage calculation | Task creation, session entry, weekly view |
| P2 | Reload schedule; export/reset/restore; duplicate assignment | Preserve quantities/recipe links; invalid import | Preserve sessions; boundary totals; repeated import |
| P3 | Reject unknown volunteer/shift IDs; label no-auth boundary | Reject malformed quantities/file data | Reject invalid dates/durations; no claim of student privacy controls |
| V1 | Consistent schedule/assignment/summary design; two iterations | Consistent stock/plan/list design; two iterations | Consistent task/session/report design; two iterations |
| V2 | Keyboard assignment and narrow-screen schedule | Keyboard stock edit and narrow shopping list | Keyboard session entry and readable weekly summary |
| V3 | Empty schedule, full shift, rejected assignment, successful save | Empty pantry, invalid quantity, successful plan, recovery | No sessions, invalid time, saved entry, import recovery |
| Q1 | Capacity, lost assignments, misleading uncovered count | Wrong shortage, mixed units, corrupted restore | Wrong week total, duplicate sessions, lost progress |
| Q2 | An actual capacity or persistence defect found during work | An actual calculation or restore defect found during work | An actual date/filter or duplicate defect found during work |
| Q3 | Retained behavioral checks, local and CI release runs | Retained calculation/recovery checks, local and CI | Retained session/boundary checks, local and CI |
| H1 | Plan → assign one volunteer → investigated fix → release | Plan → one meal/stock slice → investigated fix → release | Plan → one logged session → investigated fix → release |
| H2 | Kickoff, working slice and release review responses | Same stages, with actual product feedback | Same stages, with actual product feedback |
| H3 | Explain actual assignment/design decisions and their evidence | Explain stock/unit/design decisions and evidence | Explain week/session/design decisions and evidence |
| G1 | Linked issue/branch/PR/fix/check/merge/tag | Same workflow, product-specific links/diffs | Same workflow, product-specific links/diffs |
| G2 | Explain own PR, review response and release navigation | Same competencies using own repository | Same competencies using own repository |
| G3 | Clean focused source; attributed assets; fictional volunteers | Clean source; attributed recipes/assets; no real purchases | Clean source; attributed assets; fictional study records |
| A1 | A bounded scheduler task with checked output | A bounded quantity/plan task with checked output | A bounded session/filter task with checked output |
| A2 | Observed AI mistake, correction and independent verification | Same evidence pattern; no invented AI mistake | Same evidence pattern; no invented AI mistake |
| A3 | Two workflow variants on a fixed small assignment task | Two variants on a fixed small shortage task | Two variants on a fixed small date-filter task |
| B1 | Synthetic coverage analysis → decision memo → update | Synthetic ingredient analysis → memo → update | Synthetic session analysis → memo → update |
| B2 | Another person sets up, checks and resets the tagged app | Same clean handoff on documented platform | Same clean handoff on documented platform |
| B3 | File-exchange/failure map and honest schedule release decision | File-exchange/failure map and honest planning release decision | File-exchange/failure map and honest tracker release decision |

A smaller model or plain JavaScript can satisfy every row. A costly model, elaborate architecture or hosted integration satisfies none by itself. For Q2/A2, the named defect types are possibilities, not instructions to manufacture discoveries. The rubric's preapproved, openly labeled project negative-control route can demonstrate verification without pretending the learner encountered a natural bug or model error. It never replaces history or GitHub evidence.

## Borderline anchors: rate the condition, not the impression

For calibration, assume other rows have valid evidence only where explicitly stated. “Overall” below means readiness for Jared's decision, never an automatically issued credential.

| Scenario | Correct row/overall treatment | Why / next step |
| --- | --- | --- |
| All required outcomes hold; reviewer prefers purple to the agreed green | Do not fail V1 on this preference | Inspect consistent use and actual readability; optional art direction is coaching |
| Beautiful final app, but one final upload and no corroborating intermediate work | H1 unverified; overall pending | Request real prior artifacts or plan further genuine iterations; never synthesize historical commits |
| Fifty commits and three “LGTM” comments, no substantive staged feedback | H2 not yet demonstrated after inspection | Counts do not meet the stated condition; arrange genuine artifact-specific reviews and iterations |
| No suitable naturally occurring bug, but a preapproved project negative control genuinely fails the behavioral assertion and the correct revision passes | Q2 can be demonstrated after inspection | Verify the declared route and real outputs; do not record this as a natural discovery or accept a setup-error failure |
| Four preserved milestone snapshots and substantive PR discussions, squash merges on main | H1 can be demonstrated after inspection | Squashing is not a failure if the real progression is traceable |
| Required save result disappears on reload; all other rows demonstrated | P2 not yet demonstrated; overall not yet demonstrated | A disclosed defect still contradicts the agreed persistence requirement |
| Reviewer cannot obtain the approved sandbox because the lab host is down | Affected rows unverified; overall pending | Restore the environment; do not claim the software failed or the learner lacks the skill |
| README setup fails in the exact promised clean environment due to a missing dependency | B2 not yet demonstrated | Fix instructions/dependencies and repeat the handoff |
| No user accounts, but approved untrusted-import cases and controls match the implementation | P3 can be demonstrated | Do not invent an OAuth requirement at the final review |
| A score of 100 from an accessibility scanner, but keyboard focus cannot reach Save | V2 not yet demonstrated | The actual keyboard condition outranks the tool's score |
| One unusually good demo, but the required suite alternates pass/fail | Q3 not yet demonstrated | Investigate inconsistency; a chosen green run is not dependable verification |
| Premium model generated the product; learner cannot locate or explain their own reviewed diff yet | G2 not yet demonstrated after supported observation | AI use is allowed; locate the real artifacts and build understanding through further coached work |
| Quiet learner uses notes and screen magnification to explain the actual diff and evidence accurately | G2 can be demonstrated | Fluency, charisma and unaided recall are not conditions |
| Another reviewer disputes whether a required error message permits recovery | Overall pending until resolved | Preserve both findings; reproduce the agreed error/recovery case; Jared records the resolution |
| One optional illustration is unevenly aligned, but all design-sheet and usability conditions hold | May defer as cosmetic | Do not treat every visual preference as a failure; still record the improvement |
| All rows demonstrated, coursework complete, approved agreement, presentation reviewed, no holds | Eligible for Jared's decision | Jared still separately authorizes certification; the record is not an issuer |
| Product evidence is complete but an assigned course activity remains outstanding | Not yet eligible; completion outstanding separately | Agree a make-up/equivalent activity; do not rerun already demonstrated product work |

## Run a reviewer calibration session

1. Independently rate these anchors before discussing them. For an authentic pilot, replace the short descriptions with the same frozen fictional project/evidence packet for both reviewers; a narrative exercise alone cannot measure real-world agreement.
2. Compare criterion state, observation and next action—not a numerical grade. Do not show one reviewer's judgment to the other before their initial decision.
3. For a disagreement, identify whether the rule was ambiguous, evidence differed, a case was not reproducible or the judgment was based on taste. Preserve both initial records and the evidence-based resolution.
4. Apply the double-review sampling plan in [the rubric](AIQAA_RUBRIC.md). Track per-row and overall initial agreement, reasons for disagreement, review time and learner evidence burden privately.
5. Jared approves any clarifications. Material changes receive a new prospective version; no silent change to a learner's agreed bar. No calibration scores or real credential decisions are published.

© 2026 Jared Cluff.
