# Session 10 — Release Room, one step at a time

[Back to the lab](../labs/10-ship-no-ship-release-room.md) · [All help guides](../LAB_HELP.md)

**Finish with:** three dated/ordered recommendations, a concise incident update and any justified override decision. Use 35 minutes. This is a tabletop exercise; no deployment or cloud CLI is required.

## 1. Prepare a recommendation file

Open [the release template](../templates/release-recommendation.md). Create three copies in local `submissions/session-10`, named `round-1.md`, `round-2.md` and `round-3.md`. Read [the lab scenario](../labs/10-ship-no-ship-release-room.md#scenario). The candidate is fictional B27 / training:27; it is not the local simulator's Candidate B.

Have your facilitator reveal [the round evidence](../fixtures/release-rounds.md) one round at a time. Solo? Read only the current round, write your recommendation, then proceed; the public file is not a secret exam.

## 2. Record the baseline decision

Read round 1. Fill in the candidate identity, required checks, actual supplied results, missing evidence and your recommendation. Cite each source section. Mark unobserved results unknown rather than assuming a pass.

**Checkpoint:** your first recommendation can be explained using only round 1 evidence. Save it before opening round 2.

## 3. Respond to the complication

Read round 2. In `round-2.md`, record what changed, which requirement/check it affects, and whether your recommendation changes. A heading on screen cannot substitute for the required authenticated browser check. Preserve the first decision as the historical record.

## 4. Make the final recommendation

Read round 3. Explain the reproduced failure, user/business impact, unknown cause, available containment and next evidence. Address the stakeholder's override request. If no override is justified, say so; do not invent an approver. If proposing one, name the required authority, rationale, limits and follow-up. This exercise cannot authorize a real release.

## 5. Save and check your work

Create `incident-update.md` with six short lines: **Facts**, **Impact**, **Unknowns**, **Containment**, **Next evidence**, **Owner**. Use only supplied facts; mark an unassigned owner accordingly. Check all three recommendations distinguish failed, skipped, cancelled, missing and passing checks. Use [the practice submission workflow](../SUBMISSIONS.md).

## If you get stuck

Ask which required check or user outcome supports your recommendation. If a report conflicts with a deterministic result, cite both and explain why the required check remains unresolved. Do not ask AI to invent missing results or provide reassurance in place of evidence. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
