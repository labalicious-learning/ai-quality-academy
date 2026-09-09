# Lab 3 — Operations Intelligence Sprint

**Time:** 35 minutes  
**Team:** groups of three or four

## Mac / Linux / Windows

Use browser-based Sheets/Docs or the supplied files on any OS; desktop Office is not required. Keep the original CSV unchanged and check UTF-8, separators, date/number locale and leading-zero IDs when importing into Sheets, Excel or LibreOffice. Browser GitHub/Discord or their exports avoid desktop-client requirements.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

Leadership wants to know which synthetic inquiries should receive a event-order update this week, what is blocking follow-up, and which product issues need engineering attention.

## Mission

Turn four messy sources into a reviewable one-page recommendation without altering raw data or inventing decisions.

## Sources

- `inquiries.csv` with duplicates and inconsistent fields
- a spreadsheet with a planted formula error
- a Discord-style operations thread
- GitHub issue export
- three conflicting web/research pages

## Roles

- **Data steward:** preserve raw data, document transformations, verify formulas.
- **Research/doc lead:** identify authoritative sources and draft the memo.
- **Workflow lead:** extract decisions, actions, owners, and unresolved questions from chat/issues.
- **Verifier:** challenges every claim and checks the final recommendation.

## Deliverables

1. Preserved raw file and cleaned working view.
2. A short source/citation log.
3. A one-page decision memo: priority segments, blocking issues, recommended actions, assumptions.
4. An automation boundary: what AI can draft/triage and what still requires review/approval.

## Success rubric

The memo must make it easy for a manager to trace every number and decision to a source. “The AI said” is never a source.

## Stretch

Sketch a safe recurring workflow: input location, validation, human approval, output destination, audit record, and failure route.
