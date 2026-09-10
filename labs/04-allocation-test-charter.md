# Lab 4 — Allocation-to-Delivery Test Charter

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Complete the charter in a plain-text/Markdown editor or an approved browser document on any OS. Include Mac/Linux/Windows and browser differences in your test matrix where relevant, with separate coverage for keyboard settings and rendering. Platform coverage is not proof until tested.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

Feature request: “A concierge can reserve an event allocation after confirming a deposit, and the customer receives an update.” The request is intentionally incomplete.

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

Pass when risks are tied to people/business outcomes, not generic “test everything” language. For each coverage area, give either a requirement-backed observable result or an explicit clarification blocker with the decision owner and a conditional test. R8 deliberately leaves deposit/refund/concurrency rules unresolved: a well-scoped question earns full credit; an invented business rule does not. Label proposed criteria as proposals, not approved requirements. This is a design lab; no payment execution is required.

## Stretch

Mark each case: manual exploratory, deterministic automated, AI-assisted exploration, or human approval. Defend the boundary.

## Product Studio homework — Define what quality means

Write acceptance criteria and a risk-ranked charter for your product. Include success, negative and boundary cases, the first three checks and any unresolved rules requiring instructor input.

Budget two to three hours, including evidence and review preparation; ask for coaching or scope adjustment if blocked. Record progress using [the milestone template](../templates/project-milestone.md) in **your own product repository**, not the practice packet. See [the complete project roadmap](../COURSE_PROJECT.md), [GitHub workflow](../PROJECT_GITHUB.md) and [small-model guide](../SMALL_MODEL_GUIDE.md). The practice lab above remains separate from your individual product.
