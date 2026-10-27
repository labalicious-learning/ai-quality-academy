# Session 05 — CRM Journey, one step at a time

[Back to the lab](../labs/05-crm-journey-expedition.md) · [All help guides](../LAB_HELP.md)

**Finish with:** a journey log, one evidence packet, a regression-test idea and a product question. Use 35 minutes; switch driver/verifier after the first allocation check.

## 1. Open and prepare

Read [R1–R3](../fixtures/allocation-requirements.md). Start `npm start` in the course folder (`npm.cmd start` if needed in PowerShell). Leave it running and open http://127.0.0.1:4178. Create local `submissions/session-05/journey.md` and copy [the evidence template](../templates/evidence-packet.md) alongside it. [Setup help](00-course-setup.md).

Make a log with columns: candidate, organization, role, action, requirement, expected, observed, evidence reference. Record your OS/browser/viewport/zoom once, updating them when changed.

## 2. Follow the concierge journey

1. Select **Candidate A**, **Atlas**, **concierge**.
2. Click **List contacts**; save the response you observe.
3. Enter **A-101** in **Contact ID**, click **View contact**, and compare organization and interest fields with the list.
4. Open developer tools using the browser menu; select **Network**, then click **Load allocation**. Select the request containing `/api/allocation`. Record its status and response, plus the visible app result. Do not paste commands into the Console.
5. Click **Send inquiry update (simulation)**. Record the permission decision against R1. `sent:false` means no actual message was sent.

**Checkpoint:** your log records actual observations, not what you expect Candidate A to do. Capture before switching selectors because selections clear earlier displayed results.

## 3. Compare roles and candidates

Select **staff** and repeat the send check. Compare with R1; a denial can be correct. Then select **Candidate B**, restore **Atlas/concierge**, and repeat the contact, allocation and send steps. Repeat staff's send check on B too.

Capture one relevant Network response. Inspect the Console and record the observation, including if no errors are present; that alone is not proof the journey works. These roles are simulation inputs, not real login accounts.

## 4. Repeat at mobile width

Use the browser's responsive tools to set 375 CSS pixels at 100% zoom. Repeat contact lookup or the send check. Record any layout issue separately from the API result. [Platform/browser instructions](../PLATFORM_GUIDE.md#browser-evidence-and-keyboard-review).

## 5. Save and check your work

Write one defect/no-defect packet using your own log. Propose an automated check for a specific outcome and write one unresolved product question. Ask a partner to reproduce one row from your steps. Assemble [the practice packet](../SUBMISSIONS.md); the complete journey in your own product is separate homework.

## If you get stuck

No Network entries? Open Network before clicking and clear any filter. Lost a response when switching role? Rerun that row with selectors restored. If the server is unreachable, use [setup help](00-course-setup.md#if-you-get-stuck), not a real CRM.

© 2026 Jared Cluff.
