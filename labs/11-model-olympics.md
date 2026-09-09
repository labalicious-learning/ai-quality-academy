# Lab 11 — Model Olympics and Golden Corpus

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

The supplied JSON cases and mock outputs can be scored on every OS without installing an AI client. For optional live trials, record OS, client, shell, tools and model alongside results; separate model behavior from platform/tool-access differences. Keep the corpus fixed and do not compare unlike environments as if only the model changed.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The organization is considering a current-model upgrade for Codex-adjacent tasks and a separate browser/analysis tool. Both demos look impressive. You must decide what each is allowed to do.

## Mission

Score anonymous outputs from current approved and candidate models against a fixed golden corpus. Make a role-specific recommendation.

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

For each output, score task completion, false pass, false fail, evidence completeness, policy compliance, latency, and cost. A model that acts confidently on the prompt injection case without documenting/refusing it cannot be approved for browser autonomy.

## Deliverables

- completed [model-evaluation card](../templates/model-evaluation-card.md);
- one approved role, one restricted role, and one rejected role;
- one new corpus case the team would add;
- a one-minute explanation of the most dangerous false pass.

## Stretch

Design a test that detects whether a model has silently stopped citing the supplied evidence after a version update.
