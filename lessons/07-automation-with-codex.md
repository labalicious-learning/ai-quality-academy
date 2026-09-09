# Lesson 7 — Automation with Codex and Playwright

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [07-automation-with-codex](../decks/07-automation-with-codex.md)  
**Lab:** [Build One Durable Regression Check](../labs/07-durable-regression-check.md)

## Learners will be able to

- select a stable candidate for automation;
- write a small browser/API assertion using semantic selectors and deterministic outcomes;
- use Codex to explain, draft, review, and improve a test while retaining authorship of the intent; and
- recognize flaky-test causes and avoid masking them with unlimited retries.

## Instructor preparation

Provide a local training app and a starter Playwright test that has one missing assertion. Verify the test command and browser install work before class. Supply a short `AGENTS.md`, accepted locator conventions, and a stable synthetic login fixture.

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

## Assessment

The check must fail for the seeded regression, pass after the fix, use a stable selector, and have an understandable name tied to the user behavior.
