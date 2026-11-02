# Lesson 9 — Integrations and Business Operations QA

**Duration:** 90 minutes  

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

**Live schedule:** Mondays, 7:30–9:00 p.m. Central (America/Chicago). Full labs and product implementation happen outside class.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: trace “A customer asks about a car” on sticky notes from inbox to follow-up. |
| 10–25 | Teach integration maps: trigger, payload, trust boundary, transformation, side effect, retry, and customer-visible result. |
| 25–40 | Demo a healthy event, then replay a duplicate and inspect stored event count and queued decisions. |
| 40–50 | Guided practice: distinguish a simulated authorization-expired response from the evidence needed to test a real OAuth callback. |
| 50–60 | Break. |
| 60–65 | Independent-lab handoff: open the linked resources and walkthrough, explain the deliverable and show where to save/submit it. Complete the full lab after class. |
| 65–80 | Discuss a prepared integration map and identify the most important idempotency/recovery test. |
| 80–85 | Discuss where AI can classify/summarize safely and where it needs a review queue. |
| 85–90 | Exit ticket: explain why “webhook returned 200” is not sufficient proof of business success. |

## Independent lab — after class

Lab: teams prove stored count, consent/confidence, processing state and queued decisions. Mark absent downstream effects untested. Budget about 35 minutes of focused practice; setup and troubleshooting may need additional time. Work solo or arrange a partner outside class. Use the lab’s linked resources and step-by-step walkthrough. Save the existing deliverables and use the [submission workflow](../SUBMISSIONS.md). Bring one verified result or a specific blocker to the next class; arrange help if you cannot finish. Product Studio homework remains separate.


## Formative coaching

Teams submit an integration map plus an evidence packet. Distinguish simulated event processing from untested CRM updates, actual classification, real queues and customer delivery. Full credit requires precise limits, not invented downstream state.

## Product Studio connection — Make failure recoverable

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 90-minute session. The build work happens as homework. Exercise import/export or an approved equivalent. Test malformed/duplicate input, interruption/retry and safe recovery; show before/after stored state. Synthetic local file exchange is enough.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
