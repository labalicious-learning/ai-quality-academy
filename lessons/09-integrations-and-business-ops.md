# Lesson 9 — Integrations and Business Operations QA

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [09-integrations-and-business-ops](../decks/09-integrations-and-business-ops.md)  
**Lab:** [Inquiry-to-CRM Reliability Lab](../labs/09-inquiry-to-crm-reliability.md)

## Learners will be able to

- map a business process across email, OAuth, webhooks, CRM, and notifications;
- test expected and failure paths without touching real customers or payments;
- recognize duplicate delivery, delay, retry, consent, and idempotency risks; and
- explain the difference between a system boundary and a user-visible outcome.

## Instructor preparation

Use fixtures/integration-cases.md and the local inbox JSON field. Reset state and rehearse healthy/failure/recovery attempts. The implemented slice stores events and queued decisions, not contacts or actual queues. OAuth/attachments are outcome simulations; there is no webhook receiver, mail catcher or external send.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: trace “A customer asks about a car” on sticky notes from inbox to follow-up. |
| 10–25 | Teach integration maps: trigger, payload, trust boundary, transformation, side effect, retry, and customer-visible result. |
| 25–40 | Demo a healthy event, then replay a duplicate and inspect stored event count and queued decisions. |
| 40–50 | Guided practice: distinguish a simulated authorization-expired response from the evidence needed to test a real OAuth callback. |
| 50–60 | Break. |
| 60–95 | Lab: teams prove stored count, consent/confidence, processing state and queued decisions. Mark absent downstream effects untested. |
| 95–110 | Teams draw their integration map and identify the most important idempotency/recovery test. |
| 110–115 | Discuss where AI can classify/summarize safely and where it needs a review queue. |
| 115–120 | Exit ticket: explain why “webhook returned 200” is not sufficient proof of business success. |

## Assessment

Teams submit an integration map plus an evidence packet. Distinguish simulated event processing from untested CRM updates, actual classification, real queues and customer delivery. Full credit requires precise limits, not invented downstream state.
