# Lesson 5 — Browser and Workflow QA

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [05-browser-and-workflow-qa](../decks/05-browser-and-workflow-qa.md)  
**Lab:** [CRM Journey Expedition](../labs/05-crm-journey-expedition.md)

## Learners will be able to

- run a purposeful exploratory test instead of random clicking;
- observe browser-visible behavior, console errors, failed requests, navigation, and state changes;
- test a role-specific CRM workflow using synthetic data; and
- turn exploratory discoveries into repeatable regression coverage candidates.

## Instructor preparation

Use the included contact lookup, allocation and send-permission controls with R1–R3. Rehearse both candidates. Roles are selectors, not login accounts. Contact creation, classification, role redirects and a full CRM are not implemented or required.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: learners compare “click every button” with a focused journey charter. |
| 10–25 | Teach a browser as evidence source: URL, rendered state, accessibility tree, console, network, downloads, popups, and screenshots. |
| 25–40 | Demo contact lookup, allocation loading and simulated send permission. Pause after each action: what changed, and what proves it? |
| 40–50 | Guided practice: inspect one request and decide whether a visible heading means the page worked. |
| 50–60 | Break. |
| 60–95 | Pairs run the handout's lookup/allocation/permission journey in both candidates. Driver operates browser; verifier tracks evidence. Swap after allocation inspection. |
| 95–110 | Teams triage findings as defect, data/setup issue, expected behavior, or uncertain. |
| 110–115 | Discuss what is appropriate for deterministic automation versus human exploration. |
| 115–120 | Exit ticket: name the one additional evidence source you would collect for a blank page. |

## Formative coaching

Learners must report at least one finding or a well-supported no-defect conclusion. A screenshot without a reproduction path is incomplete.

## Product Studio connection — Finish one complete journey

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 120-minute session. The build work happens as homework. Make a user action lead to a saved, visible result. Record manual evidence and a reproduced issue, then request human feedback on a focused fix/feature PR.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
