# Lab 4 — Allocation-to-Delivery Test Charter

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Complete the charter in a plain-text/Markdown editor or an approved browser document on any OS. Include Mac/Linux/Windows and browser differences in your test matrix where relevant, with separate coverage for keyboard settings and rendering. Platform coverage is not proof until tested.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

Feature request: “A concierge can reserve a event allocation after confirming a deposit, and the customer receives an update.” The request is intentionally incomplete.

## Mission

Create a risk-based test charter that a manual tester, an automation engineer, and a product owner can all use.

## Required coverage

- successful allocation and notification;
- duplicate/concurrent attempt;
- failed or delayed deposit confirmation;
- wrong user role/organization;
- consent or communication-preference boundary;
- accessible and mobile-visible confirmation;
- recovery/audit-trail behavior.

## Steps

1. List the user, goal, state before/after, and non-goals.
2. Ask an AI tool for additional cases, then label which you keep, reject, or need clarified.
3. Rank the top risks by harm, likelihood, and detectability.
4. Use [the charter template](../templates/test-charter.md) to specify evidence and synthetic data needs.
5. Present the three tests you would run first and why.

## Deliverables and rubric

Pass when risks are tied to people/business outcomes, not generic “test everything” language. Every required coverage area needs an observable expected result.

## Stretch

Mark each case: manual exploratory, deterministic automated, AI-assisted exploration, or human approval. Defend the boundary.
