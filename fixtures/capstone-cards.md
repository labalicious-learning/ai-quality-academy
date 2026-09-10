# Optional simulator practice cards — investigate and explain

Choose one card with your instructor. All targets run at http://127.0.0.1:4178 (or your approved alternate port). Start from a fresh server, record course commit and environment, and use only fictional inputs. Both candidates are available. Public/open-book material is allowed with attribution; copied answers do not replace fresh evidence.

These are optional coached rehearsal exercises, not the course assessment. The individual [Product Studio](../COURSE_PROJECT.md) and [final presentation](../labs/12-defensible-qa-verdict.md) replace the old shared capstone. For practice, spend 10 minutes planning, 30 executing and 10 assembling an evidence packet; rotate driver/verifier. The follow-up suggestions below are openly discussed practice variations, not a required surprise defense.

## C1 — Permission verdict with independent controls

- Target: Contacts and Send inquiry update, plus the [portable request collection](authorization-requests.md).
- Requirements: R1–R2 and the PATCH simulation contract in [classroom requirements](allocation-requirements.md).
- Data: Atlas A-101, Beacon B-201; staff, concierge, owner.
- Task: choose one same-tenant positive control, one cross-tenant lookup and one role-based send denial. Explain why a positive control prevents a broken endpoint from masquerading as secure denial. Compare candidates without claiming real authentication or persisted mutation.
- Evidence: a role/tenant/request matrix, status and body, one browser/API comparison, and the scope of your permission conclusion.
- Follow-up: instructor changes one role or tenant after your verdict. Predict, execute and explain whether the original conclusion still holds.

## C2 — Responsive review with an intentional change

- Target: Launch preview and Theme selector.
- Requirements: R7 and approved theme-heading change in [classroom requirements](allocation-requirements.md).
- Conditions: 375 and 1440 CSS pixels, same browser/zoom, both candidates.
- Task: compare overflow, caption readability and keyboard package selection. Separate an intentional theme-heading change from a layout defect. Report actual geometry and interaction, not screenshot impressions alone.
- Evidence: matched captures, document/viewport widths, one keyboard outcome and a measured or explicitly unmeasured contrast claim.
- Follow-up: instructor chooses 768px or another theme. Predict what should remain invariant, then verify. A different viewport is not automatically a new requirement or proof of real-device support.

## C3 — Boundary values plus replay and recovery

- Target: Inbox event simulator. Requirements: R4–R6; [event case cards](integration-cases.md).
- Data: fresh IDs `cap-0799`, `cap-0800`, `cap-optout`, `cap-auth`; no credentials.
- Task: compare consent=true events at confidence 0.799 and 0.8; then opt-out at 0.95. Replay one accepted event. Finally submit expired authorization and retry the same ID after removing the simulated error field.
- Evidence: before/after counts, exact input, status, stored state and queued decision in both candidates. Explain why accepted redelivery and retry of a rejected attempt differ.
- Follow-up: instructor changes the order of two events or selects another consent/confidence combination. Predict before executing. Do not claim that changing fields updates an already accepted event.

## C4 — Review the assertion, not just its color

- Target: allocation control and sandbox/starter.spec.mjs. Requirement: R3.
- Task: explain why the starter passes the broken candidate. Propose the smallest UI-plus-response assertion and, if tooling is available, show the same check red on A and green on B. Do not modify the deliberate domain defects or weaken R3.
- Evidence: patch and actual runs, or explicitly unexecuted assertion design with predicted results and limits. `npm test` alone is not proof of your browser assertion.
- Follow-up: instructor proposes removing either the UI assertion or the response assertion. Explain the resulting blind spot using a concrete hypothetical counterexample, clearly distinguished from observed runtime behavior.

## Fair review

Use the five coaching dimensions, public-safety boundaries and a supportive discussion of evidence. Support design-only or paired practice routes and record unexecuted skills for follow-up. A supported no-defect result or well-scoped uncertainty can be excellent work. There are no points, exam secrecy or certificate decisions attached to these optional cards.
