# Lab 11 — Model Olympics and Golden Corpus

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

The supplied JSON cases and mock outputs can be scored on every OS without installing an AI client. For optional live trials, record OS, client, shell, tools and model alongside results; separate model behavior from platform/tool-access differences. Keep the corpus fixed and do not compare unlike environments as if only the model changed.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The organization is considering a current-model upgrade for Codex-adjacent tasks and a separate browser/analysis tool. Both demos look impressive. You must decide what each is allowed to do.

## Mission

In the core route, score [fabricated outputs A/B](../fixtures/mock-model-outputs.json) against the [eight input cases](../fixtures/model-cases.json). These are teaching examples, not measured results from a provider. Make a hypothetical role-specific recommendation; this exercise cannot authorize a real model for business work.

## Materials and scoring sequence

1. Predict each case's expected outcome from its evidence before viewing the answer labels.
2. Compare A/B verdicts, then ask the instructor for the separate reviewer labels. The labels are public course material, not secret; they must never enter an evaluated model's context.
3. Complete the scorecard below. After your own calculation, run `node scripts/score-model-outputs.mjs` to check the mock error counts.
4. Explain why two outputs with the same binary accuracy may carry different risks.

## Corpus cases

1. clear UI pass;
2. clear API failure;
3. ambiguous evidence;
4. visual/layout issue;
5. accessibility issue;
6. spreadsheet anomaly;
7. code-review finding;
8. page-based prompt injection attempt.

## Scorecard

For the mock route, compute binary accuracy on E1/E2/E4/E5/E6/E7. False-pass rate uses the five known-failing cases as denominator; false-fail rate uses the one known-passing case. Score E3 abstention and E8 instruction-boundary behavior separately, not as binary pass/fail cases.

The mock outputs contain verdicts only. Mark evidence completeness, full task completion, latency and cost **not measured**—not zero and not fabricated estimates. E8's verdict describes a hypothetical boundary decision; it does not prove a real browser actor resisted an attack. Do not approve browser autonomy from this exercise.

## Optional live-model extension

Use the same input cases for both approved tools, with the same bounded prompt, data, tools and budget. Provide only the input case file, never a whole repository containing the answer key, mock outputs or labels. Keep reviewer labels outside the actor's accessible workspace and check tool access before the run. Capture each actual response, cited case evidence, model/client/version, prompt version, elapsed time and provider-reported usage/cost where available; mark unavailable measurements unknown. Never infer capabilities from a model name or fabricated output.

This tiny text corpus is a pilot, not sufficient evidence for production approval. Live visual/browser/code/tool proficiency needs representative artifacts, repeated runs and independent human review. Use [the evaluation protocol](../fixtures/model-evaluation-protocol.md) for the separation of inputs and labels.

## Deliverables

- completed [model-evaluation card](../templates/model-evaluation-card.md);
- one hypothetically approved role, one restricted role, and one rejected role, each with limits; real approval remains with the authorized reviewer after representative evaluation;
- one new corpus case the team would add;
- a one-minute explanation of the most dangerous false pass.

## Stretch

Design a test that detects whether a model has silently stopped citing the supplied evidence after a version update.

## Product Studio homework — Improve the workflow, not the bill

Compare two brief/context versions on one small product task using the same inexpensive model and starting revision. Record actual outcomes, retries and costs; update the playbook. Prepare your final release and showcase.

Budget two to three hours, including evidence and review preparation; ask for coaching or scope adjustment if blocked. Record progress using [the milestone template](../templates/project-milestone.md) in **your own product repository**, not the practice packet. See [the complete project roadmap](../COURSE_PROJECT.md), [GitHub workflow](../PROJECT_GITHUB.md) and [small-model guide](../SMALL_MODEL_GUIDE.md). The practice lab above remains separate from your individual product.
