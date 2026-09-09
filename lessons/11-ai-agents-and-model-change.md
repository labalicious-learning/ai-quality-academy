# Lesson 11 — AI Agents, Evaluation, and Model Change

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [11-ai-agents-and-model-change](../decks/11-ai-agents-and-model-change.md)  
**Lab:** [Model Olympics and Golden Corpus](../labs/11-model-olympics.md)

## Learners will be able to

- distinguish deterministic checks, model judgment, human judgment, and unsafe self-grading;
- design small evaluation cases with known expected outcomes;
- compare models/tools by false-pass, false-fail, safety, evidence, cost, and latency; and
- recommend an approved role for a model rather than declaring a universal winner.

## Instructor preparation

Use fixtures/model-cases.json as input-only cases, mock-model-outputs.json as fabricated verdicts and instructor/model-labels.json as separate reviewer labels. Learners predict before scoring. Mark missing rationale, full task completion, latency and cost not measured. For optional live trials follow fixtures/model-evaluation-protocol.md, keeping answers outside actor context.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: show two fluent agent reports that disagree. Ask what would settle the disagreement. |
| 10–25 | Teach the modern agent pattern: bounded actor, deterministic evidence, independent verdict review, and human escalation for consequential changes. |
| 25–40 | Demonstrate a golden case. Score evidence completeness before reading the model’s conclusion. |
| 40–50 | Guided practice: learners write one clear pass and one clear fail case for a spreadsheet or UI task. |
| 50–60 | Break. |
| 60–95 | Model Olympics: teams score anonymous outputs against the corpus, calculate binary false passes/fails and separate ambiguity/boundary verdicts. Mark mock rationale, full completion, latency and cost not measured. |
| 95–110 | Teams fill in a model evaluation card and select approved, restricted, or rejected use by task class. |
| 110–115 | Discuss model updates: rerun the corpus, version prompts/playbooks, and teach the observed delta. |
| 115–120 | Exit ticket: define a false pass and explain why it is dangerous in QA. |

## Teaching notes

For optional live trials, use approved models available on the day with identical inputs, prompt and tools. Core mocks need no model and permit hypothetical recommendations only. The lesson is intentionally designed so capability gains change the score—not the standard of evidence or safety.

## Assessment

Learners pass when they can identify an unsafe self-grading setup and make a bounded hypothetical role recommendation backed by the corpus. Production approval requires representative repeated trials and an authorized reviewer.
