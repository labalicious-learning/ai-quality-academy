# Two achievements: course completion and AIQAA certification

Labalicious recognizes **finishing the course** separately from **demonstrating the skills**. Neither award is issued automatically by a bot, CI result or merged pull request. Jared Cluff makes and records the two decisions separately.

Working certification title: **Labalicious Certified AI Quality Assurance Analyst (AIQAA)**. The title can be refined before certificates are issued; the distinction and evidence standard below remain the same.

| Award | What it means | Basis for the decision |
| --- | --- | --- |
| **Certificate of Course Completion** | The learner completed the course's learning activities. | Participation in Sessions 00–12 or agreed make-up/equivalent activities, submission of the assigned learning work, and presentation of their individual project and reflection. Product quality may still need improvement. |
| **Labalicious Certified AIQAA** | The learner demonstrated the course's applied AI-assisted QA and GitHub skills at the published standard. | Course completion plus Jared's review of the working product, its development over time, GitHub workflow, quality evidence and the learner's explanation of the work. |

A learner can receive the completion certificate while certification remains **not yet demonstrated**. Do not withhold acknowledgment of completed coursework solely because the product is not certification-ready. Conversely, attendance or a polished final upload alone cannot earn certification.

There is **no separate exam, timed coding test, memory quiz or surprise challenge**. The course-long [Product Studio](COURSE_PROJECT.md), ongoing reviews and final presentation supply the assessment evidence. Software tests remain part of the engineering work.

## Completion: verify that the course was completed

At the start, the instructor explains the required activities and records any agreed alternatives privately. At the end, check the learning-work record and the project presentation. Missing activities get a specific make-up plan; approved accommodations are equivalent, not a lower-status certificate.

A project with unresolved defects can still be presented honestly to complete the learning activity. Completing that presentation does not mean the product passed the certification review. Record **course complete / course activities outstanding** independently from certification.

## Certification standard — AIQAA-1.0

Apply [the operational project rubric](AIQAA_RUBRIC.md): 21 required criteria, observable evidence states and explicit decision rules. Approve [a project assessment agreement](templates/project-assessment-agreement.md) early; calibrate reviewers with [the worked mappings and borderline cases](AIQAA_CALIBRATION.md). The project and its development are the entire assessment—no separate certification test. The table below is an overview, not an alternative grading scheme.

Review every area below against the approved project scope. For each, record **demonstrated / not yet demonstrated / unverified**, the exact artifact or observed behavior, the revision inspected and any next action. Certification requires all areas and their criteria to be demonstrated; there is no numerical average that offsets a missing area. Equivalents must demonstrate the same skill, be agreed with Jared and be documented privately.

| Area | What Jared should be able to verify |
| --- | --- |
| **Useful working software** | The approved main journey and core features work with synthetic data; validation, saved state and recovery behave as specified. Scope and known limitations are honest. |
| **Visual and interaction quality** | Intentional visual hierarchy, consistent typography/spacing/navigation, useful empty/error/success states and meaningful design iterations. The primary journey is usable on narrow screens and with a keyboard; accessibility claims match actual checks. |
| **QA reasoning and evidence** | Requirements and acceptance criteria lead to risk-prioritized positive, negative and boundary checks. A project defect or preapproved, openly labeled project negative control supplies meaningful fail-before/pass-after regression evidence under Q2. The learner distinguishes observations, assumptions and untested behavior; controls are never misrepresented as discoveries. |
| **Development over time** | Early scope/planning, an intermediate working slice, testing/fixes and release preparation can be traced through real commits, PRs, milestone artifacts and instructor checkpoints. The evidence shows how the product evolved, not merely when a finished folder was uploaded. |
| **GitHub understanding** | Focused issues, topic branches, useful commits and PR descriptions, review responses, verification before merge and a tagged release. At least three substantive human reviews across kickoff, working slice and release. The learner can explain a specific diff, why it belongs in that PR and how it reached the release. |
| **Responsible, effective AI use** | The learner identifies the client/model, scopes tasks, checks output, explains a correction and maintains useful project context. A reproducible workflow comparison and honest cost record show judgment; a premium model is not required. |
| **Business communication and handoff** | Synthetic data analysis, sources, a decision memo and stakeholder update support the product. Another person can follow setup/run/check/reset instructions. Integration/failure boundaries and release recommendations are clearly explained. |

Unsafe handling, fabricated evidence or unexplained authorship concerns require private clarification and correction before certification. AI assistance and disclosed collaboration are expected, not disqualifying. Review the learner's decisions and understanding, not how much code they typed unaided.

## What commit history proves—and what it does not

Commit count, streak length, line count and timestamps alone do **not** establish understanding or authorship. Large AI-generated changes can be committed quickly; history can also be rewritten. Triangulate Git evidence with the actual diff, PR discussion, milestone artifacts, instructor observations and the learner's explanation. Do not claim automated history inspection proves independent work.

Look for a meaningful progression:

1. **Plan:** approved scope and first issues, with a small kickoff PR.
2. **Build:** a working slice and successive changes tied to requirements.
3. **Improve:** a reproduced defect, reviewed fix, regression and UI refinement.
4. **Deliver:** issue triage, reviewed release candidate, tag and handoff.

Record reviewed commit SHAs at the existing checkpoints. Preserve PR links and relevant milestone evidence; milestone tags can help retain snapshots. Squash merging is valid when the PR's changes, discussion and review evidence remain traceable. Rebase/cleanup is not automatically misconduct; explain changes to already reviewed history. Never backdate commits, manufacture reviews or split one finished upload into fake historical milestones.

Work may occur offline or in uneven time blocks. There is no daily-commit quota and no preference for a particular operating system, paid account or inference budget. Use real local history, progress artifacts and agreed instructor checkpoints to demonstrate development. If the history is insufficient, plan genuine further iteration and review; do not invent the past.

## A supportive GitHub walkthrough, not another test

Use the learner's existing product during scheduled reviews and the final presentation. Ask them to walk through one issue → branch → PR → feedback → fix → release chain, explain a changed file and show the relevant check. Discuss why a branch was used, what the reviewer requested, what the test does and does not establish, and how they would revisit that revision.

Cover this throughout the course; do not cram an entire repository audit into the four-minute final conversation. Learners may use notes and their own artifacts. The purpose is to verify learned practice in context, not command memorization or a surprise task.

## Review, revisions and issuance

- **Session 01:** explain both awards and the criteria before learners choose their project.
- **Session 02:** approve scope, establish the individual repo and begin the development-history record.
- **Sessions 03–11:** use milestone reviews to identify gaps early; record reviewed SHAs and GitHub explanations along with product-quality evidence.
- **Session 12 / scheduled appointment:** the learner presents personally to Jared. He considers the accumulated record and presentation, then makes two separate decisions.
- **If not yet certified:** issue the completion certificate if coursework is complete; provide specific certification gaps and a follow-up review opportunity. No requirement to buy a larger model or repeat already demonstrated work.
- **When certified:** Jared authorizes the AIQAA certificate, linked privately to criteria version AIQAA-1.0 and the reviewed release/commit. Certification is a Labalicious-issued recognition of demonstrated skills within the reviewed scope, not an external accreditation, professional license or guarantee of expert performance.

Use [the private-use certification review template](templates/aiqaa-certification-review.md), [completion certificate](templates/course-completion-certificate.md) and [AIQAA certificate](templates/aiqaa-certificate.md). Keep names, decisions, review notes and issuance records in approved private storage. Sharing a public product repo is not consent to publish its owner's identity or credential record.

Students may choose to share their issued certificate or approved certification wording. No public credential directory, automated issuer or badge-verification service is implemented by these templates. Do not describe a completion-only learner as Labalicious Certified AIQAA.

© 2026 Jared Cluff. Student rights in original work are preserved.
