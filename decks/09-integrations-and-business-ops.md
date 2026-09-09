---
marp: true
theme: default
paginate: true
footer: "© 2026 Jared Cluff · Labalicious · Lesson 9"
---

<!-- _class: lead -->

# Integrations and Business Operations QA

## Lesson 9 · The business outcome crosses system boundaries

---

# Today’s outcome

- Map email, OAuth, webhook, and CRM flows
- Test success, failure, retry, and recovery
- Protect consent and customer trust
- Separate technical delivery from business success

---

# Inquiry-to-CRM map

Customer email → identity/trust boundary → classifier → CRM contact → consent → queue/message → audit trail

At every arrow, ask: what can fail, repeat, delay, or be misunderstood?

---

# Integration test questions

- Did the event arrive?
- Was it authentic and correctly parsed?
- Was it stored once, in the right tenant/state?
- Did consent rules apply?
- Did the customer get the right outcome?
- Can failure recover safely?

---

# OAuth: treat credentials as hazardous

Test redirects, state, expired authorization, denial, and recovery with dedicated synthetic identities.

Do not put secrets in prompts, recordings, screenshots, tickets, or chat.

---

# Idempotency matters

Real systems retry.

One event may arrive twice. A success response may be lost. A webhook may be delayed. Correct behavior must remain safe.

---

# Demo: healthy flow then duplicate event

Inspect stored event count, consent/confidence, processing state and queued decision.

Contact updates, classifier accuracy and real delivery are not implemented.

“Webhook returned 200” is only one piece of evidence.

---

# Lab: Inquiry-to-CRM Reliability

Use the supplied healthy JSON and one failure/recovery card. Mark implemented, simulated and absent components separately.

**Deliver:** integration map, evidence packet, recovery decision, regression candidate.

---

# AI at the boundary

AI can classify, summarize, and route low-risk work.

Low confidence, ambiguity, consent, financial commitments, and external sends belong in a controlled review path.

---

# Exit ticket

Why is a technical success status not sufficient proof of business success?
