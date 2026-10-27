# Session 01 — Claim Detective, one step at a time

[Back to the lab](../labs/01-ai-claim-detective.md) · [All help guides](../LAB_HELP.md)

**Your job:** decide which of three AI statements the supplied evidence supports. You are investigating a report, not fixing the app or designing your course project.

**Time:** use the lab's 35 minutes. Suggested split: 5 minutes to open files, 10 to classify, 10 to capture evidence, 7 to write, 3 to review. Swap driver/verifier at about 17 minutes. Solo? Complete the same steps and have a coach review one explanation.

## 1. Open only what you need

Open these in separate browser tabs or in your local editor:

1. [The evidence and three claims](../fixtures/claim-packet.md).
2. [The evidence packet template](../templates/evidence-packet.md).
3. This walkthrough.

Create a local folder called `submissions/session-01` inside your extracted/cloned course folder using your file manager or editor. The course ignores `submissions/` in Git; it is scratch space, not an automatic upload. Create `claim-table.md` there. Markdown (`.md`) is plain text with headings and tables; you can edit it in an ordinary text editor. The website's Markdown reader displays files; it does not save edits to your computer.

If you do not yet have a local course copy, use [setup help](00-course-setup.md). You can read the supplied packet and draft classifications while a coach helps with setup. Mark the browser capture pending until you actually perform it.

**Checkpoint:** you can point to E01–E05 and reports A, B and C. Those are labels inside the packet, not five more files to find.

## 2. Separate statements from evidence

Read E01–E05 before reading the reports. In your own words, answer:

- What should happen after **Load allocation**?
- What was observed in the browser and network response?
- What has **not** been inspected?

Use these meanings:

| Classification | Meaning |
| --- | --- |
| Proven | The supplied evidence establishes this specific claim within the stated scope. |
| Plausible but unproven | It could explain the observation, but a necessary check is missing. |
| Unsupported | The supplied evidence does not justify the claim. This does not automatically prove the opposite. |

**Checkpoint:** you can explain the difference between observing an error and knowing its cause. You do not need a database or a real customer system.

## 3. Fill your three-row table

Copy this scaffold into `claim-table.md`. Replace every “Your…” placeholder with your reasoning. Do not copy another learner's classifications.

```markdown
# My claim review

| Report | Classification | Evidence IDs | Why this evidence supports my choice | Missing check or limit |
| --- | --- | --- | --- | --- |
| A | Your choice | Your sources | Your reason | Your limit |
| B | Your choice | Your sources | Your reason | Your limit |
| C | Your choice | Your sources | Your reason | Your limit |
```

Point to a precise evidence ID for each explanation. “The AI said so” is not a source. If using AI for coaching, give it **only this assignment, the claim packet and your draft**, and ask:

> Ask me one question at a time about the evidence behind my classifications. Do not fill in the answers or inspect instructor materials. Help me notice assumptions and missing checks.

AI access is optional for this core exercise. You remain responsible for each classification.

## 4. Capture the local example yourself

1. In an ordinary terminal in the course folder, run `npm start` (`npm.cmd start` in Windows PowerShell if needed).
2. Leave it running and open http://127.0.0.1:4178.
3. Choose **Candidate A**, **Organization Atlas**, and **Training role concierge**.
4. Click **Load allocation**. Record the exact visible result; the local Candidate A intentionally demonstrates a failure.
5. Capture the relevant part of the app: Mac **Shift+Command+4**; Windows **Windows+Shift+S**, then save the capture; Linux use your desktop screenshot app. Save it in your scratch folder as `allocation-local.png`.
6. Write down candidate, selectors, OS/browser, viewport and zoom. Use [browser evidence help](../PLATFORM_GUIDE.md#browser-evidence-and-keyboard-review) if needed.

**Checkpoint:** your screenshot is labeled **local Candidate A**, not **B27**. B27 belongs to the fictional packet. Your screenshot demonstrates an analogous local failure and does not independently verify that fictional deployment. A local app error during this exercise is evidence to examine; you do not need to fix it before continuing.

To see the request behind the button with your coach: open the browser menu → developer tools → **Network**. Click Load allocation again, select the request containing `/api/allocation`, and inspect its **Status** and **Response**. The packet's `GET /api/allocation` describes a request; it is not executable JavaScript to paste into the Console. An optional local network capture must also be labeled local. You do not need to disable a browser paste warning.

If the page will not open, check the server terminal. If it shows Candidate B, select A and click Load allocation again. If capture is blocked, record “local capture pending” and arrange help; do not present a supplied or partner screenshot as your own.

## 5. Write one evidence packet

Copy the [evidence packet template](../templates/evidence-packet.md) to `evidence-packet.md` in your scratch folder. Choose the highest-risk finding that your classification says is proven, or a supported no-defect conclusion if you found none.

| Field | What to write |
| --- | --- |
| Environment/build | State whether the finding concerns the supplied B27 packet. Separately identify your local example and tested workstation. |
| Expected behavior | Cite the relevant supplied requirement. |
| Observed behavior | State what the supplied evidence actually records, without adding a cause. |
| Reproduction | Distinguish supplied observation steps from the local steps you actually performed. |
| Evidence | Cite E01–E05 as relevant; label your screenshot as a separate local example. |
| Confidence and limits | Explain missing database/console evidence and any capture you could not perform. |
| Recommendation | Choose a justified next action. An unassigned owner or date remains unassigned. |

It is fine to write “not available” or “not applicable, because…” in a field. Do not invent a console export, database record, test run, deadline or owner.

## 6. Save and check your work

Finish your limit sentence: **“This evidence establishes ___; it does not establish ___.”** Save it in the table or evidence packet.

Ask your partner or coach to check:

- All three rows have a classification, a source and a reason.
- Your evidence packet can be followed without a verbal explanation.
- The local screenshot and supplied B27 evidence are labeled separately.
- One sentence names what is still unknown.

These are the same deliverables as the lab, not extra homework. Follow [submission instructions](../SUBMISSIONS.md) to assemble the reviewed practice packet; do not open a PR to the curriculum repo. Your **product proposal and wireframe** belong to the separate Product Studio homework in your own product work area. They are not this claim table.

## If you get stuck

Tell your coach the step number and the one decision you cannot make. Example: “Step 3: I can cite the failed request, but I cannot tell whether it proves the cause.” Bring your current draft. Use [the help checklist](../LAB_HELP.md) after one unsuccessful retry.

© 2026 Jared Cluff.
