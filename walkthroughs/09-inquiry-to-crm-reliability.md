# Session 09 — Event Reliability, one step at a time

[Back to the lab](../labs/09-inquiry-to-crm-reliability.md) · [All help guides](../LAB_HELP.md)

**Finish with:** a system-boundary map, healthy/failure/recovery observations, an evidence packet and a regression proposal. Use 35 minutes; no real inbox, OAuth credentials or customer messages are involved.

## 1. Open the requirements and case cards

Read [R4–R6 and the simulation limits](../fixtures/allocation-requirements.md) and [the event cases](../fixtures/integration-cases.md). Create local `submissions/session-09/events.md`.

Draw or write the future inquiry-to-CRM path. Label each component **implemented here**, **simulated**, or **absent**. The local app stores in-memory events and decision flags; it does not classify actual messages, update CRM contacts or deliver email.

## 2. Start from an empty server

Stop your earlier local server with Control+C and restart using `npm start` (`npm.cmd start` if needed). Open http://127.0.0.1:4178, select **Candidate B**, then click **Integration** or scroll to **Inbox → CRM simulator**.

Click **View stored events** and record the starting count. Create a table with: candidate, attempt, message ID, POST status/body, stored count before/after, consent, confidence, state, queued and conclusion.

## 3. Deliver the healthy event

Copy the **Healthy baseline** JSON from the case cards into **Synthetic event JSON**, replacing the whole field. Click **Deliver event**. Record that response before clicking **View stored events**, which replaces the displayed output. Then record the saved event and count.

**Checkpoint:** you have both the attempt response and the stored-state observation. A successful HTTP response alone is insufficient. `queued` is a decision flag, not proof of delivery.

## 4. Exercise one failure and its recovery/repeat

Choose one failure card and its different message ID. Copy its first-attempt JSON into the field and deliver it. Save response and stored state separately. Follow that card's exact recovery/repeat instructions, then inspect stored state again.

Do not change opt-out to opt-in or low confidence to high confidence to manufacture a successful send. Rejected attempts may have no stored record; record that absence. A review label in an error response is not proof of a saved review item.

## 5. Repeat the sequence on A

Select **Candidate A**. Its event store is separate, so check its starting count, then use the same healthy ID, failure ID and sequence for a comparable run. Do not restart midway through a deduplication/recovery sequence because restarting clears the evidence state.

## 6. Save and check your work

Explain the next decision: retry, reauthorize, review or hold. Complete [an evidence packet](../templates/evidence-packet.md) and propose a regression check based on actual stored state. State which downstream outcomes remain untested. Assemble [your practice submission](../SUBMISSIONS.md).

## If you get stuck

Invalid JSON? Compare braces, quotes and commas with the exact card. Unexpected counts? Check candidate, message IDs and whether the server restarted. Start a fresh documented sequence if needed; do not combine observations from different runs. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
