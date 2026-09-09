# Lesson 2 — Codex as a Disciplined Teammate

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [02-codex-as-teammate](../decks/02-codex-as-teammate.md)  
**Lab:** [Codebase Detective](../labs/02-codebase-detective.md)

## Learners will be able to

- give Codex a task brief with outcome, context, constraints, and completion bar;
- ask Codex to investigate an unfamiliar repository without granting broad authority;
- inspect a diff and a test result before accepting a proposed change; and
- record useful repository knowledge as a durable playbook instead of relying on chat history.

## Instructor preparation

Use the included sandbox, R1 and G102 in fixtures/github-issues.json. Distinguish the handout's staff report from the concierge issue: staff denial is correct. Explain that npm test checks fixture integrity, not release readiness. Scope model context; public answers do not replace learner reproduction.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival challenge: rank three prompts from vague to executable; learners improve the weakest one. |
| 10–25 | Demonstrate the task brief. Explain ask/plan first for unfamiliar or consequential work, then bounded implementation. |
| 25–40 | Live Codex walkthrough: inspect `AGENTS.md`, map a request path, propose an investigation, and state what it cannot know. |
| 40–50 | Guided practice: each pair fills in an AI task brief for the reported send-update behavior. |
| 50–60 | Break; coaches verify permissions and tool boundaries. |
| 60–95 | Lab: investigate a seeded issue. The driver uses Codex; the verifier checks every repository claim and records sources. Switch roles after the plan. |
| 95–110 | Teams review one another’s task brief and reject instructions that are vague, unsafe, or missing a completion test. |
| 110–115 | Teach the “proposal → review → apply → verify” loop. |
| 115–120 | Exit ticket: write a task brief asking Codex to find—not fix—a suspected regression. |

## Teaching notes

Use practical repository habits: provide relevant file paths and docs, split work into bounded tasks, keep repository instructions current, and run the project’s verification commands after a change. Modern Codex workflows support durable project context and tool-connected tasks; the course keeps human review and explicit boundaries at the center.

## Assessment

Score the AI task brief and evidence log. A proposed code patch alone does not earn credit; the learner must explain which test or observable behavior checks it.
