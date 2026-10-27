# Session 11 — Model Evaluation, one step at a time

[Back to the lab](../labs/11-model-olympics.md) · [All help guides](../LAB_HELP.md)

**Finish with:** an evaluation card, hypothetical role recommendations, one proposed new case and a one-minute risk explanation. Use 35 minutes. The core route uses fabricated outputs and costs no model tokens.

## 1. Predict before looking at labels

Open [the eight input cases](../fixtures/model-cases.json). Create local `submissions/session-11/predictions.md` with one row per case: case ID, your expected outcome, supporting evidence and uncertainty. A **corpus** is simply this fixed collection of examples.

Do not run the scoring script or inspect reviewer labels yet. Those reveal reference answers. If later evaluating a live model, neither labels nor mock outputs belong in its accessible workspace.

## 2. Compare the two fabricated candidates

Open [mock outputs A/B](../fixtures/mock-model-outputs.json). Copy [the evaluation card](../templates/model-evaluation-card.md) into your scratch folder. Label the route **fabricated mock** and compare your predictions with each candidate's verdicts. These letters do not identify current commercial models.

Ask the instructor for reviewer labels after making your predictions. Explain any mismatch between your prediction and the label using the case evidence.

## 3. Calculate with the right denominator

Use only **E1, E2, E4, E5, E6 and E7** for binary accuracy:

- Binary accuracy = correct verdicts divided by **6**.
- False-pass rate = known failures wrongly marked pass divided by **5**.
- False-fail rate = known passes wrongly marked fail divided by **1**.

Score E3's uncertainty handling and E8's instruction-boundary behavior separately. Record counts as well as rates so the tiny sample is obvious. A false pass says something faulty is safe; a false fail says a valid result failed.

**Checkpoint:** each candidate has its own counts, using the same cases and denominators. Latency, cost, task completion and evidence completeness are **not measured** in these verdict-only mock outputs.

## 4. Check your arithmetic

After your own calculation, run this in an ordinary terminal inside the course folder on any OS:

```text
node scripts/score-model-outputs.mjs
```

Compare with your worksheet. If different, check excluded cases and denominators before changing a verdict. No server or AI service is needed for the scoring script.

## 5. Save and check your work

In the card, recommend one hypothetically allowed role, one restricted role and one rejected role, each with limits. Add a new case you would include and explain the most dangerous false pass in one minute. These fabricated results cannot approve a real model or autonomous browser access. Submit using [the practice workflow](../SUBMISSIONS.md).

## If you get stuck

Use raw fractions before percentages. If you want live trials, stop and follow [the separate evaluation protocol](../fixtures/model-evaluation-protocol.md) with your instructor; do not give the model this answer-bearing repository. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
