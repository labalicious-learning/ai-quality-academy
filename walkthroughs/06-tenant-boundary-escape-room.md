# Session 06 — Authorization Boundaries, one step at a time

[Back to the lab](../labs/06-tenant-boundary-escape-room.md) · [All help guides](../LAB_HELP.md)

**Finish with:** a four-lock comparison table, an evidence report and one regression-test recommendation. Use the existing 35-minute lab on your local simulator only.

## 1. Start the server and open the contract

Start `npm start` (`npm.cmd start` if needed) in one terminal in your course folder. Open a **second terminal** in that folder for the request commands. Read [R1–R2 and the PATCH contract](../fixtures/allocation-requirements.md) and [the request collection](../fixtures/authorization-requests.md).

**Tenant** means an organization, here Atlas or Beacon. **PATCH** in this simulator checks permission only; it never changes a contact. You do not need a password, token or real account.

## 2. Prepare the evidence table

Create local `submissions/session-06/locks.md` with columns: lock/subcheck, candidate, simulated role/organization, request, expected permission, actual status/body, evidence, conclusion. Write expected permissions from the requirements before running requests.

## 3. Run the four locks on Candidate A

The following commands work in macOS/Linux terminals, PowerShell and Command Prompt. Run each separately in the **second terminal** and save each output.

```text
node scripts/lab-request.mjs list-beacon buggy
node scripts/lab-request.mjs detail-atlas buggy
node scripts/lab-request.mjs patch-cross-tenant buggy
node scripts/lab-request.mjs patch-staff buggy
node scripts/lab-request.mjs detail-beacon buggy
node scripts/lab-request.mjs patch-owner buggy
node scripts/lab-request.mjs detail-beacon buggy
node scripts/lab-request.mjs send-staff buggy
```

Map the first two to the read lock, the next two to write-permission boundaries, the before/PATCH/after group to the positive control, and the last to UI/API agreement. In the browser at http://127.0.0.1:4178, select **Candidate A / Beacon / staff**, click **Send inquiry update (simulation)** and compare with the final request.

**Checkpoint:** you have results for every subcheck, including a permitted same-organization owner probe and an unchanged reread. `allowed:true` does not mean persistence; check `persisted:false`.

## 4. Repeat on Candidate B

Rerun each command replacing `buggy` with `fixed`. Select **Candidate B / Beacon / staff** for the browser check. Compare with the same requirements. A discovered boundary failure is a valid finding; do not edit code to make the exercise pass.

## 5. Save and check your work

Complete all four locks for both candidates. Use [the evidence packet](../templates/evidence-packet.md) for a vulnerability or an isolation-verification report. Add one regression proposal and state the simulation limits: no real authentication, database policy or persistent write was tested. Use [the submission workflow](../SUBMISSIONS.md).

## If you get stuck

A 403 or 404 may be the correct denial; compare the body and contract. A 405 means an unsupported method, not proven authorization. Connection refused means check the server terminal. If using port 4179, append `4179` to each runner command as described in [the collection](../fixtures/authorization-requests.md).

© 2026 Jared Cluff.
