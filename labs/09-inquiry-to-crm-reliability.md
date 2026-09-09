# Lab 9 — Inquiry-to-CRM Reliability Lab

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Use the inbox simulator's JSON field in your local browser on Mac, Linux or Windows; no mail client or OAuth setup is needed. This avoids shell-specific POST quoting. Keep the local server running, restart it to reset in-memory events, and use the platform guide if you need a different port.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

A synthetic customer sends an inquiry to `info@community-launch.example`. The automation classifies it, creates/updates a CRM contact, applies consent rules, and queues an approved follow-up. Several failure cards are waiting.

## Mission

Prove the correct business outcome for one healthy flow and one failure/recovery flow.

## Failure cards

- duplicated email delivery;
- OAuth authorization expired;
- webhook delivery delayed then retried;
- malformed attachment;
- contact has opted out;
- classification is low-confidence.

## Steps

1. Draw the path: source, identity/trust boundary, transformation, stored state, notification, audit record.
2. Run the healthy synthetic case.
3. Choose one failure card; test recovery and customer-visible effect.
4. Determine whether the correct action is automatic retry, review queue, clear error, or hold.
5. Create an evidence packet and a regression-test proposal.

## Rules

No real inbox, live OAuth credential, external send, or production CRM record may be used.

## Success rubric

“Received HTTP 200” earns no credit by itself. Your proof must cover the final contact/consent/classification state and the correct message/queue behavior.

## Stretch

Define an idempotency key or deduplication signal that would make the duplicate-delivery case safe.
