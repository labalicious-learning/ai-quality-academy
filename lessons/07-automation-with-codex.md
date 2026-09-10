# Lesson 7 — Automation with Codex and Playwright

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [07-automation-with-codex](../decks/07-automation-with-codex.md)  
**Lab:** [Build One Durable Regression Check](../labs/07-durable-regression-check.md)

## Learners will be able to

- select a stable candidate for automation;
- write a small browser/API assertion using semantic selectors and deterministic outcomes;
- use Codex to explain, draft, review, and improve a test while retaining authorship of the intent; and
- recognize flaky-test causes and avoid masking them with unlimited retries.

## Instructor preparation

Use sandbox/starter.spec.mjs and runtime CANDIDATE values buggy and fixed. Preinstall optional Playwright before class if approved. No login fixture or branch switch is needed. Prepare the unexecuted assertion-design route for blocked installations.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: teams decide which of four findings deserves automation and defend the choice. |
| 10–25 | Teach the automation pyramid and the rule “scripts verify mechanics; humans/AI explore ambiguity.” |
| 25–40 | Live build: use Codex to inspect an existing test, propose a semantic locator, add an assertion, run it, and inspect a failure. |
| 40–50 | Guided practice: turn an acceptance criterion into Given/When/Then and then a deterministic assertion. |
| 50–60 | Break. |
| 60–95 | Lab: pairs complete one test. Driver edits/runs; verifier reviews the diff, stability, and evidence. Switch after the first green run. |
| 95–110 | Flake clinic: show a dynamic date, animation, and weak selector. Teams choose a principled fix rather than increasing retries. |
| 110–115 | Explain CI, artifacts, and why a green test alone does not prove broad product quality. |
| 115–120 | Exit ticket: state what makes the new check deterministic. |

## Formative coaching

Builder route: the same check must fail Candidate A and pass Candidate B with stable selectors and a meaningful name. Foundation route: grade a precise unexecuted assertion design, predicted A/B results and limits. Do not demand fabricated logs; record actual execution as a later supervised milestone.

## Product Studio connection — Protect your progress

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 120-minute session. The build work happens as homework. Add a meaningful regression and own-repo CI. Record actual fail-before/pass-after evidence for a repair, then prove the current checks pass without weakening expected behavior.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
