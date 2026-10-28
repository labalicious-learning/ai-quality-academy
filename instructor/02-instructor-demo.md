# Lesson 02 — Instructor demo: trace Send inquiry update

**Use with slide 6, “Demo.” Duration: 15 minutes (class minutes 25–40).** This is a live, read-only demonstration in the supplied course repository, not a separate application or an installation exercise.

[Session 02 materials](../lessons/02-codex-as-teammate.md) · [Student lab](../labs/02-codebase-detective.md) · [Step-by-step student help](../walkthroughs/02-codebase-detective.md)

## Before class: open these tabs

1. Your local course folder in the editor, with [AGENTS.md — course AI instructions](../AGENTS.md) open (at the top level, beside `package.json`).
2. [Requirement R1 — who may send](../fixtures/allocation-requirements.md) and [issue G102 — Concierge send-update returns 403](../fixtures/github-issues.json). Find **R1:** and **G102** inside those files; they are labels, not filenames.
3. `sandbox/index.html`, `sandbox/server.mjs`, `sandbox/domain.mjs` and `sandbox/domain.test.mjs` in that same folder.
4. Your already working AI client and an ordinary terminal in the course folder.
5. A scratch copy of the [AI task brief](../templates/ai-task-brief.md), plus a blank `investigation.md` in local `submissions/session-02` scratch space. Follow [the saving guide](../LAB_HELP.md#save-your-work).

Run `npm test` once before class (`npm.cmd test` if Windows PowerShell blocks npm). Setup is covered by [LAB_SETUP](../LAB_SETUP.md); do not install or repair a client during the demo. The demonstration needs no real email, cloud, database or identity account. You do not need to start the browser simulator to trace its source.

**Instructor boundary:** this page contains worked answers. Do not supply it or the answer key to the assistant being evaluated. Give that assistant only the task brief, repository instructions, R1, G102 and relevant source/test files.

## Copy this investigation prompt

Tell the assistant your actual OS and shell first. Then use:

> Read AGENTS.md. Investigate the Lab 2 report that staff cannot send an inquiry update, and compare it with requirement R1 in fixtures/allocation-requirements.md and issue G102 in fixtures/github-issues.json. Work only in this course folder. You may read relevant sandbox source and tests and run npm test. Do not edit application files, change permissions, send messages, deploy, or access external accounts. First return a short investigation plan before running the check. Trace Send inquiry update from its click handler through the local server route to the permission decision. Cite exact files and functions. Distinguish staff from concierge, observed source behavior from inference, and fixture checks from release-readiness evidence. Finish with three verified references, the actual check result, one open product-owner question, and the next investigation step.

If it starts editing, stop that action and restate the read-only scope. Do not give broad access to unrelated folders to make the demo proceed.

## Fifteen-minute run sheet

| Time | Show and say | Learner checkpoint |
| --- | --- | --- |
| 0–2 | Open [requirement R1](../fixtures/allocation-requirements.md) and [issue G102](../fixtures/github-issues.json). “The handout says staff cannot send. G102 says concierge receives 403. Are those the same claim?” R1 permits owner/concierge and denies staff. | Ask someone to explain why denial can be correct for one role. |
| 2–4 | Show [AGENTS.md](../AGENTS.md), paste the bounded prompt, and inspect the proposed plan. “We are investigating before changing anything.” | Does the plan respect the no-edit/no-send boundary? |
| 4–6 | In `sandbox/index.html`, Find `el('send').onclick`. Point to its call to `show('send-result','/api/send')`. The request helper carries the selected candidate, organization and role. | Ask which endpoint the button reaches. |
| 6–8 | In `sandbox/server.mjs`, Find `url.pathname === '/api/send'`. Show the call to `canSend(role,mode)`, the 200/403 response and `sent:false`. | Ask whether an allowed response proves an email was delivered. It does not; this is a local simulation. |
| 8–10 | In `sandbox/domain.mjs`, Find `export function canSend`. Compare its two branches with R1. Candidate A (`buggy`) allows only owner; Candidate B (`fixed`) allows owner/concierge. Both deny staff. | Ask a learner to explain the path using the three files. |
| 10–12 | Run `npm test` and show the actual output. Open the `canSend` assertions in `sandbox/domain.test.mjs`. One assertion expects concierge denial in the buggy fixture. | Ask why green fixture tests do not prove Candidate A is release-ready. |
| 12–14 | Save the brief, three references, command/result, limited conclusion and question. Show the saved file. | Can someone else retrace the evidence? |
| 14–15 | State the next activity and point to the student walkthrough. “You will repeat the investigation and verify your own references.” | Ask a learner to name the first action and deliverable. |

Allow students to answer; do not narrate continuously. Keep this demonstration inside its 15-minute block. Product kickoff and the break come next; the full 35-minute investigation lab starts at class minute 60.

## What your saved example should establish

| Reference to verify locally | What it establishes |
| --- | --- |
| `sandbox/index.html` — send click handler | The interface action uses `/api/send`. |
| `sandbox/server.mjs` — `/api/send` route | The route asks `canSend`, returns allowed/denied, and reports `sent:false`. |
| `sandbox/domain.mjs` — `canSend` | Staff denial is expected; Candidate A's concierge denial disagrees with R1. |
| `sandbox/domain.test.mjs` — concierge/staff assertions | The suite deliberately checks seeded behavior, including the buggy candidate's denial. |

Use current function names and lines from your checkout rather than relying on memorized line numbers. Record the command and result from **your own** run; do not copy a historical passing count as though you ran it.

**Limited conclusion:** the staff denial agrees with R1. The concierge denial in the buggy candidate conflicts with R1. These are conclusions about the supplied fixture, not a live customer system.

**Product-owner question:** “What feedback should staff see so the required denial is understandable?” This does not justify broadening staff permissions.

**Next step:** clarify that feedback requirement. A later implementation would need its own approved scope and requirement-based verification; do not patch the shared fixture in this demo.

## If the live demo stalls

Take one focused attempt, then say: “That result is not verified yet. I will park it and use a prepared source walkthrough.” Open the three source files and follow the run sheet without the AI. Label it as an instructor walkthrough, not a successful live AI run.

If a check cannot run, mark it **pending** and preserve the exact error. Explain the test assertions without claiming they passed. Keep the lab time; move installation or account troubleshooting to coaching. Never manufacture tool output or an AI conversation.

## Handoff for the later 35-minute lab

“Open the Session 02 walkthrough. Read R1 and G102. Save your task brief before asking for a fix. At the first checkpoint, show your brief and one reference you personally opened. Work as driver and verifier, and switch roles after planning.”

Student help: https://learn.labalicious.com/walkthroughs/02-codebase-detective.html

Keep the practice investigation separate from each learner's personal product repository and proposal PR.

© 2026 Jared Cluff.
