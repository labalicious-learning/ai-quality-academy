# Lesson 9 — Integrations and Business Operations QA

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [09-integrations-and-business-ops](../decks/09-integrations-and-business-ops.md)  
**Lab:** [Inquiry-to-CRM Reliability Lab](../labs/09-inquiry-to-crm-reliability.md)

## Learners will be able to

- map a business process across email, OAuth, webhooks, CRM, and notifications;
- test expected and failure paths without touching real customers or payments;
- recognize duplicate delivery, delay, retry, consent, and idempotency risks; and
- explain the difference between a system boundary and a user-visible outcome.

## Instructor preparation

Run a synthetic O365/Gmail-like inbox, fake OAuth callback, webhook receiver, and CRM tenant. Seed cases for duplicate inbound emails, expired OAuth authorization, a delayed webhook, a malformed attachment, and an unsubscribed contact. Ensure all outbound messages route to a mail catcher.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: trace “A customer asks about a car” on sticky notes from inbox to follow-up. |
| 10–25 | Teach integration maps: trigger, payload, trust boundary, transformation, side effect, retry, and customer-visible result. |
| 25–40 | Demo a healthy email-to-CRM flow, then replay a duplicate event and inspect the audit trail. |
| 40–50 | Guided practice: write three testable expectations for an OAuth callback without exposing a token. |
| 50–60 | Break. |
| 60–95 | Lab: teams investigate failure cards and prove whether the contact, classification, consent, and follow-up state are correct. |
| 95–110 | Teams draw their integration map and identify the most important idempotency/recovery test. |
| 110–115 | Discuss where AI can classify/summarize safely and where it needs a review queue. |
| 115–120 | Exit ticket: explain why “webhook returned 200” is not sufficient proof of business success. |

## Assessment

Teams submit an integration map plus an evidence packet. Their result must distinguish technical delivery, data correctness, and customer outcome.
