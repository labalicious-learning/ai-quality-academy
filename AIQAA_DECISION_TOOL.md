# Optional private review consistency checker

The [rubric](AIQAA_RUBRIC.md) requires human observations. This small local tool makes their **aggregation** deterministic: it rejects missing/duplicate/unknown criteria, unsupported versions, malformed records and unsupported states, then reports readiness. It cannot validate that evidence is true or sufficient, inspect the product, determine authorship or issue either award. Anyone can type false inputs; this is not a credential-verification system.

Use the Markdown [evidence worksheet](templates/aiqaa-evidence-review.md) if you do not want JSON. The exact same decision rules apply; the tool is optional instructor administration, not another learner deliverable. Review records and outputs remain private.

## Run locally — Mac, Linux and Windows

From your trusted course checkout with Node.js 22 or newer, use the same command on all platforms. Replace the placeholder with a quoted path to an approved **private** JSON file outside the public repository:

```text
node scripts/aiqaa-decision.mjs "PATH_TO_PRIVATE_REVIEW.json"
```

Do not run a copy supplied by a student. The trusted script reads only the supplied JSON and the course's criterion-ID file. It does not execute student code, fetch links, call models, contact GitHub, save a record or issue certificates. It prints a limited readiness summary; still treat that summary as a private learner decision record.

## Record format

The abbreviated example is intentionally **invalid until all 21 actual observations are recorded**. Do not fill missing rows with invented passes. A valid JSON record needs:

```json
{
  "schemaVersion": 1,
  "criteriaVersion": "AIQAA-1.0",
  "releaseSha": "FULL_40_CHARACTER_RELEASE_COMMIT",
  "coursework": "complete",
  "presentationReviewed": false,
  "agreement": {
    "version": "project-v1",
    "sha": "FULL_40_CHARACTER_AGREEMENT_COMMIT",
    "approved": false,
    "applicabilityConfirmed": false
  },
  "holds": [],
  "results": [
    {
      "id": "P1",
      "status": "unverified",
      "evidence": [],
      "rationale": "The release cases have not been inspected yet."
    }
  ]
}
```

- `coursework`: `complete`, `outstanding` or `unverified`; no automatic completion certificate.
- `agreement`: version, exact commit and explicit human confirmation of approval and applicability to this release. Boolean values must be true/false, not strings. The tool does not authenticate the approver or independently establish applicability.
- `results`: exactly one row for each ID in [the public ID registry](fixtures/aiqaa-criteria.json): P1–P3, V1–V3, Q1–Q3, H1–H3, G1–G3, A1–A3, B1–B3. No N/A or waiver. Status is `demonstrated`, `not_yet` or `unverified`.
- Every row has a reason. Demonstrated and not-yet rows require a nonempty evidence-reference list, normally pointing to the private per-condition worksheet and exact revisions. Unverified rows may have an empty list plus an explanation of the gap. Strings are references, not proof; the human must inspect the contents.
- `holds`: explicit list of unresolved review-wide concerns. Each has `kind` (`safety`, `integrity`, `disagreement` or `environment`), `rationale` and a nonempty `evidence` reference list. Empty means none. Preserve the resolution in the private worksheet before removing a resolved hold.

## Interpret the result

| Readiness | Deterministic rule / action |
| --- | --- |
| `invalid_record` | Structural/version/field error; fix the record. No competency conclusion is made. |
| `review_pending` | Open hold, unverified row/coursework, unapproved or unconfirmed agreement, or presentation not reviewed. Resolve the listed items; any known failed rows are still listed. |
| `not_yet_demonstrated` | No pending items, but at least one not-yet row or outstanding coursework. Give specific next steps. |
| `eligible_for_jared_decision` | Coursework complete, all 21 demonstrated, agreement confirmed, presentation reviewed and no holds. Jared still makes and records the award decision. |

Every result contains `awardIssued: false`. Exit code 0 means the **record was processed**, including pending and not-yet results; it never means the learner passed. Exit code 2 means a usage, parsing or validation error. Do not wire this tool into public PR checks, a badge issuer or automatic certificate emails.

Regression checks run with `npm run test:assessment` and as part of `npm test`. They test the calculator using fictional records; **they are not student tests**. The rubric, agreement ID map and registry are checked for synchronization. The script does not audit grading quality or replace reviewer calibration.

Record the trusted course/checker commit with the private review. This implementation supports AIQAA-1.0 only. For a future standard, retain its published rubric and corresponding trusted checker revision; rerun an old review with the original version rather than relabeling its evidence to make a newer tool accept it.

© 2026 Jared Cluff.
