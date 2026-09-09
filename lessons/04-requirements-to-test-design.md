# Lesson 4 — Requirements to Risk-Based Test Design

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [04-requirements-to-test-design](../decks/04-requirements-to-test-design.md)  
**Lab:** [Allocation-to-Delivery Test Charter](../labs/04-allocation-test-charter.md)

## Learners will be able to

- turn a user story into observable acceptance criteria;
- identify happy paths, negative paths, state changes, boundaries, and personas;
- rank tests by customer, legal, financial, security, and operational risk; and
- use AI to propose cases while independently deciding what is worth testing.

## Instructor preparation

Give teams the fictional Community Launch story: “A concierge can reserve an allocation after confirming a deposit, and the customer receives an update.” Include a simple lifecycle diagram, a mock UI, and a few incomplete requirements.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: every team writes one way a seemingly simple deposit workflow could harm a customer. |
| 10–25 | Teach acceptance criteria as observable behavior, not implementation wishes. Introduce state-transition, boundary, equivalence, and persona thinking. |
| 25–40 | Demo: ask AI for test cases, then highlight omissions—duplicate requests, payment failure, wrong role, stale page, and notification failure. |
| 40–50 | Guided conversion of one vague statement into three acceptance criteria and two non-goals. |
| 50–60 | Break. |
| 60–95 | Lab: teams build a test charter, risk table, and priority order. Require one accessibility, security, and integration case. |
| 95–110 | Risk poker: teams defend why their top three tests beat another plausible test. |
| 110–115 | Show how the charter becomes manual test cases, automated checks, and release evidence. |
| 115–120 | Exit ticket: write one negative acceptance criterion for a workflow they know. |

## Assessment

Use `templates/test-charter.md`. A passing charter has risks tied to a harmed user/business outcome, not merely a long checklist of UI clicks.
