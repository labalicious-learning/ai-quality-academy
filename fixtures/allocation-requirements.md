# Approved classroom requirements
R1: An owner or concierge may send a simulated inquiry update; staff may not.
R2: Contacts are visible only within their organization, both in lists and by ID.
R3: Allocation AL-01 renders as reserved after a successful load. A failed API response must remain visible as an error.
R4: A message ID is processed once. Re-delivery must not create another contact/event or queued update.
R5: Only consent=true and confidence >=0.8 events may queue an update. Missing consent is invalid; low confidence enters review.
R6: Expired OAuth enters reauthorization; malformed attachments enter review; no external send happens in the lab.
R7: Launch preview fits a 375px viewport. Main actions must work by keyboard.
R8: For a deposit-backed reservation, product must define how confirmation is obtained, cancellation/refund behavior and concurrent allocation rules. No real deposit action is implemented in the sandbox.

## Local simulation contract and limits

Contact PATCH is an authorization-only probe: only an owner in the contact's organization may receive `allowed:true`. It never persists a mutation and always reports `persisted:false`. Inaccessible detail GET returns 404; denied PATCH/send returns 403. Allocation supports GET only; unsupported methods return 405, not an authorization verdict.

R4–R6 are exercised through in-memory event state and a queued-decision flag. Contact updates, actual queue delivery, review resolution and classifier accuracy remain broader requirements not implemented or proven here. Accepted events are deduplicated by message ID, not updated on redelivery. A rejected OAuth/attachment attempt saves no event. Restart clears event state.

Theme selection intentionally changes the page heading. This is an approved content change, not a visual regression. Candidate/tenant/role changes must clear old observations; responses from earlier selections must not appear under a new selection.
