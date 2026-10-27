# Evidence packet for Lesson 1
Everything below is fabricated classroom evidence. No real deployment was tested.

[Open the lab](../labs/01-ai-claim-detective.md) · [Step-by-step help](../walkthroughs/01-ai-claim-detective.md)

## Read these terms first

- **Allocation:** a reserved place or resource for the fictional event. **AL-01** is its record ID, not a button.
- **Build/candidate B27:** the fictional software version described in this packet. It is not local Candidate B.
- **GET /api/allocation:** a request to read allocation data from a server. It is not a command to paste into the browser console.
- **HTTP 500:** the request received a server-error response. It does not establish the root cause. HTTP 200 means the request succeeded at the HTTP level; the body and user-visible result still need checking.
- **Root cause:** the underlying reason for a failure, which may require more investigation than observing the symptom.

## Supplied evidence

### E01 — Requirement

E01 · Requirement: after clicking Load allocation, AL-01 must render as reserved. A title alone is insufficient.

### E02 — Browser observation

E02 · Browser observation: title “Allocation dashboard” visible. After click: “Unable to load allocation”.

### E03 — Network response

E03 · Network: GET /api/allocation, candidate B27, 500, response {"error":"allocation table unavailable"}.

### E04 — Database evidence boundary

E04 · Database support note: no database inspection has been performed.

### E05 — Release note

E05 · Release note: candidate B27 changes allocation loading. Root cause investigation is pending.

## AI reports to classify

### Report A

AI report A: “The allocation journey fails on B27. E02 and E03 support the failed load.”

### Report B

AI report B: “The migration probably did not run. That might explain the error.”

### Report C

AI report C: “All customer deposits were deleted and production lost $400,000.”

## Your task

Classify each report. Use the local browser lab to capture your own screenshot of the analogous failure. Do not assume its candidate ID or cause matches these fictional reports.

The demo already lives in your course copy. Start it with `npm start` from the folder containing `package.json`, then open http://127.0.0.1:4178. For exact clicks and help, use [step 4 of the walkthrough](../walkthroughs/01-ai-claim-detective.md#4-capture-the-local-example-yourself). The public course website is the reading material, not the API demo.
