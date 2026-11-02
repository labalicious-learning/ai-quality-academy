# Lesson 2 — Codex as a Disciplined Teammate

**Duration:** 90 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [02-codex-as-teammate](../decks/02-codex-as-teammate.md)  
**Lab:** [Codebase Detective](../labs/02-codebase-detective.md)

## Learners will be able to

- give Codex a task brief with outcome, context, constraints, and completion bar;
- ask Codex to investigate an unfamiliar repository without granting broad authority;
- inspect a diff and a test result before accepting a proposed change; and
- record useful repository knowledge as a durable playbook instead of relying on chat history.

## Instructor preparation

**Slide 6 live demo:** [15-minute instructor run sheet, exact prompt and fallback](../instructor/02-instructor-demo.md). Pre-open it before class.

Pre-open [AGENTS.md — course AI instructions](../AGENTS.md), [requirement R1 in allocation-requirements.md](../fixtures/allocation-requirements.md), and [issue G102 in github-issues.json](../fixtures/github-issues.json), alongside the included sandbox. R1 and G102 are labels inside those files, not separate filenames. Distinguish the handout's staff report from the concierge issue: staff denial is correct. Explain that npm test checks fixture integrity, not release readiness. Scope model context; public answers do not replace learner reproduction.

Preflight clients before class using [the small-model guide](../SMALL_MODEL_GUIDE.md). Qwen3.8-27B is recommended; OpenCode, compatible Codex CLI or verified Claude Code routes are acceptable. Do not spend lesson time debugging a gateway or require premium inference. Prepare the [GitHub kickoff](../PROJECT_GITHUB.md), approved proposals and one brief comparison. The original investigation lab remains 35 minutes.

**Live schedule:** Mondays, 7:30–9:00 p.m. Central (America/Chicago). Full labs and product implementation happen outside class.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Improve a vague task brief: goal, relevant files, scope and observable completion. |
| 10–25 | Small-model workshop: Qwen3.8-27B, client vs host vs model, vague/bounded task comparison, strengths/weaknesses and retry/spending limits. Use an approved route or labeled prepared outputs. |
| 25–40 | Codex/client demo: read project instructions, trace one path, verify citations and turn findings into a bounded brief. |
| 40–50 | Product kickoff part 1: explain approval, demonstrate a public project repo and initial issues. Unapproved pitches receive scope coaching; no product implementation yet. |
| 50–60 | Break. |
| 60–65 | Independent-lab handoff: open the linked resources and walkthrough, explain the deliverable and show where to save/submit it. Complete the full lab after class. |
| 65–85 | Product kickoff part 2: demonstrate a topic branch, sanitized README/proposal PR and focused review request. Coaches check model/host and budget records, show where learners capture their kickoff PR/head SHA after class, and explain how genuine history supports certification; finish pending human review after class. |
| 85–90 | Each learner identifies their first small product task, verification step and next review. |

Read [the certification evidence standard](../CREDENTIALS.md). In the existing kickoff, show why a focused diff, linked issue and review response matter more than commit counts. Record the first checkpoint; do not introduce an extra exam or extend the agenda.

## Independent lab — after class

Codebase Detective lab in pairs; inspect claims and run a check. Switch roles after planning. Budget about 35 minutes of focused practice; setup and troubleshooting may need additional time. Work solo or arrange a partner outside class. Use the lab’s linked resources and step-by-step walkthrough. Save the existing deliverables and use the [submission workflow](../SUBMISSIONS.md). Bring one verified result or a specific blocker to the next class; arrange help if you cannot finish. Product Studio homework remains separate.


## Teaching notes

Start [the assessment agreement](../templates/project-assessment-agreement.md) from the approved proposal: scope, environments and evidence routes for all rubric areas. Exact acceptance cases are finalized with the instructor during Session 04; no one needs to invent a full test suite at kickoff.

Use practical repository habits: provide relevant file paths and docs, split work into bounded tasks, keep repository instructions current, and run the project’s verification commands after a change. Modern Codex workflows support durable project context and tool-connected tasks; the course keeps human review and explicit boundaries at the center.

## Formative coaching

Review the AI task brief and evidence log without numeric scores. A proposed code patch alone does not earn credit; the learner must explain which test or observable behavior checks it.

## Product Studio connection — Kick off your own repository

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 90-minute session. The build work happens as homework. Finish the approved-proposal PR, three initial issues, README and project instructions. Confirm your client/model/host and spending ceiling. Build only the first small approved slice; arrange human feedback on the kickoff PR.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
