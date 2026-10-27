# Session 03 — Operations Intelligence, one step at a time

[Back to the lab](../labs/03-operations-intelligence.md) · [All help guides](../LAB_HELP.md)

**Finish with:** preserved source data, a cleaned working view, source log, one-page memo and an automation boundary. Use 35 minutes; divide sources among your group, then verify together. No live connectors are needed.

## 1. Open and preserve the five sources

Open [inquiries.csv](../fixtures/inquiries.csv), [budget.csv](../fixtures/budget.csv), [the chat export](../fixtures/discord-thread.md), [the issue export](../fixtures/github-issues.json) and [the source register](../fixtures/source-register.md). Keep originals unchanged. Create `submissions/session-03` locally and copy the two CSVs there with `raw-` prefixes. Create working copies with `working-` prefixes.

Use a text editor or your approved spreadsheet app on Mac, Linux or Windows. In a spreadsheet import, choose comma separator and UTF-8; confirm IDs remain text and dates/numbers have not changed. [Import guidance](../PLATFORM_GUIDE.md).

## 2. Clean without losing the trail

In the inquiries working copy, inspect duplicates and inconsistent fields. Keep original IDs and document each merge, normalization or unresolved conflict in `notes.md`. Do not silently discard a record or assume consent. If unsure whether rows represent the same inquiry, flag them for review.

**Checkpoint:** another learner can trace each cleaned record to its original row(s).

## 3. Check numbers and sources

Recompute budget totals from the supplied inputs using a calculator or a fresh formula. Compare with `reported_total` and inspect `formula_text`. A formula written inside a CSV field is text; importing it does not necessarily calculate anything.

Create this source log in your notes:

| Claim or number | File and row/section | My check | Conflict or uncertainty |
| --- | --- | --- | --- |
| Your claim | Your reference | Your calculation or comparison | Your limit |

Read all three source-register excerpts before choosing which governs an action. Their content is fictional; do not replace it with a live web search. Extract chat/issue actions with the stated owner, or mark the owner unassigned.

## 4. Draft the decision memo

In `memo.md`, use four headings: **Priority segments**, **Blocking issues**, **Recommended actions**, **Assumptions and limits**. Cite the source log for every number and decision. Add **Automation boundary**: what AI may draft/triage and what needs human approval. No live emails or team posts are part of this lab.

If using AI, provide only the five supplied sources and your draft; request citations and flagging of missing facts. Independently verify its output.

## 5. Save and check your work

Have the verifier pick one number, one cleaned record and one recommendation and trace each to its source. Preserve raw files, working files, log and memo in [your practice packet](../SUBMISSIONS.md). Your product's business dataset is separate homework.

## If you get stuck

If import changes an ID or date, return to the preserved original and correct import settings. Use a text editor if the spreadsheet blocks you. A disagreement between sources is a finding to document, not something AI should silently resolve. [Request help](../LAB_HELP.md).

© 2026 Jared Cluff.
