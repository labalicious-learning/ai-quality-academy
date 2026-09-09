# Lesson 5 — Browser and Workflow QA

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [05-browser-and-workflow-qa](../decks/05-browser-and-workflow-qa.md)  
**Lab:** [CRM Journey Expedition](../labs/05-crm-journey-expedition.md)

## Learners will be able to

- run a purposeful exploratory test instead of random clicking;
- observe browser-visible behavior, console errors, failed requests, navigation, and state changes;
- test a role-specific CRM workflow using synthetic data; and
- turn exploratory discoveries into repeatable regression coverage candidates.

## Instructor preparation

Deploy the CRM training sandbox with seeded concierge, staff, and owner roles. Seed three defects: a failed API call hidden by a rendered page, a broken empty state, and an incorrect role redirect. Provide a test charter and a browser evidence checklist.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: learners compare “click every button” with a focused journey charter. |
| 10–25 | Teach a browser as evidence source: URL, rendered state, accessibility tree, console, network, downloads, popups, and screenshots. |
| 25–40 | Demo an inquiry-to-allocation journey. Pause after every meaningful action: what changed, and what would prove it? |
| 40–50 | Guided practice: inspect one request and decide whether a visible heading means the page worked. |
| 50–60 | Break. |
| 60–95 | Pairs run a bounded CRM journey. Driver operates browser; verifier tracks expected/observed state and evidence. Swap after the create/update boundary. |
| 95–110 | Teams triage findings as defect, data/setup issue, expected behavior, or uncertain. |
| 110–115 | Discuss what is appropriate for deterministic automation versus human exploration. |
| 115–120 | Exit ticket: name the one additional evidence source you would collect for a blank page. |

## Assessment

Learners must report at least one finding or a well-supported no-defect conclusion. A screenshot without a reproduction path is incomplete.
