# Lab 5 — CRM Journey Expedition

**Time:** 35 minutes  
**Team:** pairs; use only simulated identities

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Run the local lab on the same computer as your browser. Use developer-tools menus if keyboard shortcuts differ, and record OS/browser/zoom for the mobile-width repeat. For the included sandbox, choose a simulated role and tenant rather than signing into a real account; use the local track in Lab setup for the available checkpoints.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

As a concierge, inspect an existing synthetic contact, load an allocation, and check permission to send an update. As staff, verify the appropriate visibility and restrictions. Read [requirements R1–R3](../fixtures/allocation-requirements.md) first.

## Mission

Execute one bounded journey and gather enough evidence to decide whether it works for each role. This is open-book investigation: known defects still require your own reproduction and evidence. Contact creation, classification, deduplication and real sign-in are outside this browser exercise.

## Journey checkpoints

1. Start the local app. Select Candidate A, Atlas and concierge. Record these selectors with every result; they are not authentication.
2. Click List contacts, then View contact for A-101. Compare list/detail organization and interest fields. Do not edit the record.
3. Click Load allocation. Record the visible state and the `/api/allocation` response against R3. Switch driver/verifier here.
4. Click Send inquiry update (simulation). Compare its permission decision with R1; `sent:false` means no message was sent, even if permission is allowed.
5. Select staff and repeat the send check. A denial can be correct behavior.
6. Repeat steps 2–5 on Candidate B. Capture one relevant Network response and console observation; no console error is not proof of success.
7. Repeat contact lookup or the send check at 375px. Record what you tested and any layout limitation separately from the API outcome.

## Rules

- Record URLs, expected/observed state, and evidence as you go.
- Use developer tools for inspection only. Do not alter data or claim these selectors prove real authentication.
- A rendered heading does not prove all required data loaded.

## Deliverables

- completed journey log;
- one defect/no-defect evidence packet;
- one candidate for an automated regression check;
- one uncertain behavior framed as a product question.

## Stretch

Ask AI to propose two alternate routes a real user might take. Choose one to test and explain why its risk justifies the time.
