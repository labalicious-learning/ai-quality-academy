# Lab 10 — Ship/No-Ship Release Room

**Time:** 35 minutes  
**Team:** groups of four; facilitator releases evidence in rounds

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Read the release-round exports in the Markdown reader on any OS. No cloud CLI or production deployment is required. Record which operating systems a CI result actually covers; a Linux-only pass cannot establish Windows/Mac compatibility, and an unavailable runner is not a pass.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

You are the release-quality team for build `training-2026.09.08.3`. It includes an allocation migration and customer dashboard improvement. You receive a candidate digest, CI artifacts, QA results, and deployment health signals.

## Mission

Update a release recommendation after each evidence round. Your goal is not to say “ship”; it is to make the safest justified decision.

## Rounds

1. **Baseline:** build, unit tests, migration replay, smoke result.
2. **Complication:** a required authenticated browser check fails, while the page heading looks correct.
3. **Decision point:** the defect is reproduced on green; a stakeholder requests an override before an event.

## Deliverables

- a [release recommendation](../templates/release-recommendation.md) for each round;
- a concise incident update: facts, impact, unknowns, containment, next evidence, owner;
- a break-glass decision, if any, naming approver, reason, and follow-up.

## Rules

- A skipped, missing, cancelled, or failed required check is not a pass.
- A model’s reassuring prose cannot override a failed deterministic check.
- Do not invent a root cause from correlated symptoms.

## Stretch

Propose the smallest production-safe smoke check that would detect recurrence after the release.
