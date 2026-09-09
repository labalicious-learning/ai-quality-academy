# Approved classroom requirements
R1: An owner or concierge may send a simulated inquiry update; staff may not.
R2: Contacts are visible only within their organization, both in lists and by ID.
R3: Allocation AL-01 renders as reserved after a successful load. A failed API response must remain visible as an error.
R4: A message ID is processed once. Re-delivery must not create another contact/event or queued update.
R5: Only consent=true and confidence >=0.8 events may queue an update. Missing consent is invalid; low confidence enters review.
R6: Expired OAuth enters reauthorization; malformed attachments enter review; no external send happens in the lab.
R7: Launch preview fits a 375px viewport. Main actions must work by keyboard.
R8: For a deposit-backed reservation, product must define how confirmation is obtained, cancellation/refund behavior and concurrent allocation rules. No real deposit action is implemented in the sandbox.
