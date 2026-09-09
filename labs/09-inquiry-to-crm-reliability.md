# Lab 9 — Inquiry-to-CRM Reliability Lab

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Use the inbox simulator's JSON field in your local browser on Mac, Linux or Windows; no mail client or OAuth setup is needed. This avoids shell-specific POST quoting. Keep the local server running, restart it to reset in-memory events, and use the platform guide if you need a different port.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

A future service would receive an inquiry at `info@community-launch.example`, update a CRM and send approved follow-up. This lab tests only the included event-processing slice: stored events, consent/confidence decisions, duplicate handling and simulated error recovery. `queued` is a decision flag, not a real queue. There is no contact mutation, classifier model, webhook transport or external send.

## Mission

Prove the simulated outcome for one healthy flow and one failure/recovery flow, and name the downstream business outcomes you cannot establish. Read [R4–R6](../fixtures/allocation-requirements.md) and the [event case cards](../fixtures/integration-cases.md).

## Failure cards

- duplicated email delivery;
- OAuth authorization expired;
- delayed redelivery simulated by manually submitting the same event again (not a transport/timing test);
- malformed attachment;
- contact has opted out;
- classification is low-confidence.

## Steps

1. Draw the future business path, marking implemented, simulated and absent components separately.
2. Start with a fresh server. Select Candidate B and deliver the healthy JSON from the case cards; inspect View stored events, not just the POST response.
3. Choose a failure card with a different message ID. Record event counts, stored consent/confidence/state/queued fields, and HTTP status before and after the attempt and recovery.
4. Repeat the same healthy and failure sequence on Candidate A. Candidate event stores are separate; use the same IDs to compare equivalent runs.
5. Explain the observed decision: retry, reauthorize, review or hold. Do not claim a real review queue or customer message exists. Create an evidence packet and regression proposal.

## Rules

No real inbox, live OAuth credential, external send, or production CRM record may be used.

## Success rubric

“Received HTTP 200” earns no credit by itself. Prove stored event count and relevant consent/confidence/state/queued fields, including absence of a saved event on rejected attempts. Explain recovery and deduplication using observed state. Explicitly mark CRM contact updates, actual classification accuracy, real OAuth, persistent queues and delivered messages as untested. Correctly bounded evidence earns full credit; invented downstream effects do not.

## Stretch

Define an idempotency key or deduplication signal that would make the duplicate-delivery case safe.
