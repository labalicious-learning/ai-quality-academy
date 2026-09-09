---
marp: true
theme: default
paginate: true
footer: "© 2026 Jared Cluff · Labalicious · Lesson 5"
---

<!-- _class: lead -->

# Browser and Workflow QA

## Lesson 5 · Test a journey, collect proof

---

# Today’s outcome

- Run a focused exploratory test
- Gather browser and application evidence
- Test role-specific CRM behavior
- Turn discoveries into regression candidates

---

# A browser is more than the screen

- URL and navigation
- visible state and empty/error states
- accessibility tree
- console and page errors
- network requests/responses
- downloads, popups, and storage boundaries

---

# The journey charter

**User:** concierge  
**Goal:** inspect contact, allocation and send permission  
**Risk:** wrong visible data, unauthorized action, silent backend failure

---

# Demo: verify after every meaningful action

1. Select simulated tenant and role
2. List and inspect a contact
3. Load the allocation
4. Check simulated send permission
5. Repeat as staff and in both candidates
6. Inspect network and console

---

# A heading is not proof

A page can render while:

- data API fails
- authorization is incorrect
- stale cached data appears
- a loading/error state never resolves

---

# Exploration with a budget

Purposeful, bounded, evidence-based.

Explore alternate user paths and likely errors, then turn repeated/reproducible issues into durable checks.

---

# Lab: CRM Journey Expedition

Use training roles and synthetic data only.

**Deliver:** journey log, evidence packet, automation candidate, product question.

---

# Triage the result

| Category | Example |
| --- | --- |
| Defect | Expected permitted action fails |
| Setup/data issue | Seed account is missing required fixture |
| Expected behavior | Wrong role is correctly denied |
| Uncertain | Requirement does not say what should happen |

---

# Exit ticket

For a blank page, what additional evidence source would you collect first—and why?
