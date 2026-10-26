# Session 01 teaching guide

Teach learners to separate a convincing claim from evidence they can inspect. Keep one fictional example running through the explanation, demonstration and practice. This guide supplements the [two-hour lesson plan](../lessons/01-quality-and-evidence.md); it does not add another assignment.

## Before class

Open the [slides](../decks/01-quality-and-evidence.md), [student lab](../labs/01-ai-claim-detective.md), [claim packet](../fixtures/claim-packet.md) and [evidence template](../templates/evidence-packet.md). Rehearse the [local simulation](../LAB_SETUP.md). Keep a clearly labeled prerecorded screenshot as a fallback, not as a claimed live result. Close unrelated browser tabs, terminal history and notifications before screen sharing.

The packet describes fictional build B27. A screenshot of the analogous local simulation is not evidence about that fictional deployment. Preserve that distinction throughout the demonstration.

## Open with a concrete question

“An AI tells us a release lost customer money. Do we believe it? A requirement says an allocation must load as reserved. The page shows an error. A network request failed. Nobody inspected the database. What can we responsibly say—and what can't we say yet?

“Today you'll separate claims from evidence, write a finding another person can check, and use AI without treating its answer as proof.”

Ask for one learner response before explaining. Introduce observation, hypothesis, finding and recommendation using this same example. Avoid a long detour into model internals; a consistent or confident answer still needs verification.

## Ten-minute demonstration

Use ten minutes within the existing 25–35 minute demonstration slot.

| Demo minute | Instructor action | Learner check |
| --- | --- | --- |
| 0–2 | Show E01 and E02. Identify the expected and observed behavior. | What was required, and what was actually observed? |
| 2–4 | Reveal E03–E05. Distinguish request failure from an established root cause. | What remains unknown without database evidence? |
| 4–6 | Model report A with exact source references. Leave B and C for learner practice. | Which evidence supports this classification? |
| 6–8 | Fill the evidence template: expectation, observation, steps, sources, limitation and next action. | Could another person follow the report? |
| 8–10 | Ask what additional evidence would test a root-cause hypothesis. If using AI, inspect one sentence of its summary against the packet. | Does that sentence claim more than the evidence shows? |

Give the AI only the assigned packet and approved task, not this instructor guide or the answer key. Public teaching answers are not secret, but supplying them to the evaluated model invalidates an independent attempt.

## Safety wording

“For this course, use fictional data only. No real passwords, API keys, customer records or production credentials belong in prompts, examples or submissions. Give the assistant access only to the training project, with normal permission checks. Stop when it requests access you don't understand. Running locally does not remove this rule: files, logs, tools and sharing can still expose information. A variable name is fine to show; a real secret value is not. If something sensitive appears, stop sharing and tell the instructor privately.”

Do not offer exceptions for temporary credentials, personal projects or local models in this training. Never demonstrate bypassing approval controls or trusting an entire personal home folder as a beginner default. No real external accounts or production data are necessary for this exercise.

## Keep practice separate from the product project

Today's practice produces three classified claims, one evidence packet and one limitation. The course-long product homework produces a proposal and rough wireframe. State the distinction before opening the lab. Protect the 35-minute hands-on period and have driver and verifier switch halfway.

Keep project examples short: one audience, one journey, three core features and explicit exclusions. Judge visual quality through readability, layout, meaningful states and accessibility, not whether a color seems AI-generated. A marketplace, real payments or paid AI feature is not needed merely to make a project sufficiently challenging.

Use the published [credential policy](../CREDENTIALS.md) and [rubric](../AIQAA_RUBRIC.md) rather than improvising certification or retry rules. Course completion recognizes finished activities; certification recognizes demonstrated skills. A missing skill gets a specific follow-up plan. Do not promise credential verification features that have not been delivered.

## Facilitation and closing

- Ask “What proves that?” and “What would change your conclusion?” Pause for learners to respond.
- Ask an AI for sources, assumptions and verification steps rather than treating its self-reported confidence percentage as proof. Open cited sources and check the exact claim.
- If the demonstration fails, acknowledge it, use the labeled fallback and arrange troubleshooting separately. Do not manufacture evidence of a successful run.
- Move unrelated tool setup into coaching so it does not replace learner practice.
- Close with one supported finding, one limitation and the proposal homework. Ask each learner to explain the next step in their own words.

## Recording for reuse

Record a clean opening, demonstration, safety explanation and closing. Start each segment with a complete sentence, pause between sections, and restart a whole sentence after a mistake. Restate learner questions without names when possible. Use an authorized recording arrangement and keep replays restricted to enrolled learners and authorized guests.

Do not publish raw transcripts, participant tiles, individual feedback or private account details with public teaching resources. Synthetic narration, if used later, must be reviewed, identified as an added clarification and must not fabricate learner participation.

© 2026 Jared Cluff. All rights reserved.
