# Lesson 10 — Release, Migration, and Incident Quality

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [10-release-and-incident-quality](../decks/10-release-and-incident-quality.md)  
**Lab:** [Ship/No-Ship Release Room](../labs/10-ship-no-ship-release-room.md)

## Learners will be able to

- explain why a release candidate, migration, environment, and evidence must line up;
- read a CI/release report for failed, skipped, advisory, and required checks;
- make a calibrated ship, hold, or rollback recommendation; and
- communicate an incident without inventing a root cause.

## Instructor preparation

Create a release-room packet: candidate digest, migration status, unit-test result, one failed browser check, deployment health signal, and a plausible but unproven AI incident summary. Use a fictional AWS QA environment; no live cloud access is needed.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: ask, “What does a green dashboard fail to tell us?” |
| 10–25 | Teach promotion, immutable artifacts, migrations, environment parity, smoke tests, canary, rollback, and break-glass as distinct concepts. |
| 25–40 | Walk through the fictional release checklist: required checks fail closed, exact build evidence, synthetic data, and bounded production-safe checks. |
| 40–50 | Practice: classify CI states—passed, failed, skipped, advisory, cancelled, missing—and decide which blocks release. |
| 50–60 | Break. |
| 60–95 | Release room: teams receive new evidence in three rounds and update a recommendation after each round. |
| 95–110 | Incident debrief: write facts, impact, unknowns, containment, next evidence, and owner. Ban causal language not supported by evidence. |
| 110–115 | Discuss why no model or person gets to relabel a failed required check as passed. |
| 115–120 | Exit ticket: state the exact evidence you would need to promote a candidate. |

## Assessment

Use `templates/release-recommendation.md`. A learner passes by making a defensible decision; “ship” is not the preferred answer when evidence is incomplete.
