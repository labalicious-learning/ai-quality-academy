# Submit, review and improve your work

Practice labs use the dedicated submission repository, not a pull request to the curriculum:

https://github.com/labalicious-learning/lab-submissions

## Start safely

Session 00 readiness is a private instructor demonstration. For sessions 01–11 and an optional Session 12 summary, first read the submission repository's [public-safety policy](https://github.com/labalicious-learning/lab-submissions/blob/main/PUBLIC_SAFETY.md) and [step-by-step guide](https://github.com/labalicious-learning/lab-submissions/blob/main/SUBMITTING.md). A public fork, commit or draft PR is already public. Prepare privately, inspect every file and screenshot, and run the preflight before first upload. Automated scans cannot guarantee privacy or erase public history.

Students retain rights in their original work. The course grants permission to use/adapt its materials for coursework; it does not claim ownership of students' contributions. Publication, optional AI-provider review and marketing reuse are separate decisions. Ask the instructor privately for an equivalent local/private review route if publication is inappropriate. Grades, identities, accommodations and private coaching are never posted publicly.

## Your course-long product has its own repository

Follow [Product Studio](COURSE_PROJECT.md) and [the product GitHub workflow](PROJECT_GITHUB.md). Code, feature PRs and weekly milestone records live in each learner's own repo. Share full repository/PR URLs privately with the instructor and maintain a public-safe progress index there. The existing packet bot does not clone, run or follow links to product repositories.

The optional Session 12 packet is an index/summary for the same intake structure, not a new application upload or a certificate request. Human product reviews and the presentation to Jared are arranged separately. No public certificate, identity mapping or completion decision. Practice packet acceptance is not a numeric graduation gate.

## One packet per practice lab

Your instructor supplies a cohort code and alias privately. In your fork of the submission repo, use `cohorts/COHORT/ALIAS/session-NN/` with:

- `submission.json`: session, course commit, alias, explicit public-safety declaration and separate AI consent.
- `submission.md`: outcome, expected/observed behavior, evidence, environment, verification, limits and reflection.
- `ai-use.md`: AI or mock/paired assistance, what you verified, corrections, sources and collaborator aliases.
- `evidence/`: small synthetic text/CSV/JSON or PNG/JPEG evidence.
- Optional `changes.patch`: code changes against the exact course commit. No student code is run automatically.

Reuse this course's evidence packet, charter, task brief and evaluation card inside the packet. The current ignored `submissions/` folder remains local scratch space; it is not the public destination.

## What to submit by session

| Session | Main artifacts |
| --- | --- |
| 00 | Private readiness demonstration; no public account/security checklist |
| 01 | Claim classifications, evidence packet, conclusion limits |
| 02 | Task brief, verified repository map, test/check result, unresolved question |
| 03 | Preserved synthetic raw data, working CSV, sources, decision memo, automation boundary |
| 04 | Risk-ranked test charter and first three tests with rationale |
| 05 | Contact lookup/allocation/send-permission journey, candidate/role comparison, mobile/API evidence, regression proposal |
| 06 | Four-lock read/PATCH-permission/send table, positive control, simulation limits, regression proposal |
| 07 | Patch, actual red/green results or explicitly unexecuted assertion design, coverage limits |
| 08 | Annotated screenshots, OS/browser/viewport/zoom, keyboard evidence, user impact |
| 09 | Implemented/simulated/absent map, healthy/failure/recovery event counts and decision flags, downstream limits |
| 10 | Round-by-round recommendations and factual incident update |
| 11 | Evaluation card, hypothetical role recommendations, added case; mock unavailable metrics marked not measured |
| 12 | Optional public-safe project summary/index: own product repo, release/commit, milestones, quality evidence, AI/cost reflection and presentation handoff; no copied application code or private completion decision |

Group packets include each alias's contribution and reflection. A polished team artifact does not replace individual understanding. Public answers are available: cite sources and collaboration, and be ready to explain one decision from your actual work; these are coaching conversations, not surprise exams.

## Review flow

Draft → public-safety/completeness check → peer reproduction → optional instructor-requested AI coaching → instructor acceptance or revision.

The deterministic bot checks file limits, structure, common credential patterns and relative links without executing artifacts. Green means ready for human inspection, not correct or safe beyond doubt. AI review requires provider setup, separate student consent and instructor approval of the exact commit; otherwise peer and human review remain fully available. AI offers cited coaching, never grades or merges. It cannot claim to have run tests or inspected images.

Revise on the same PR branch. Each commit gets its own review; acceptance of an old commit is not acceptance of a new one. Instructors record progress and completion decisions privately and merge only the reviewed public-safe packet. Do not post numeric grades or learner rankings.

Submission queue: https://github.com/labalicious-learning/lab-submissions/pulls

Instructor workflow: https://github.com/labalicious-learning/lab-submissions/blob/main/INSTRUCTOR.md

© 2026 Jared Cluff. Course infrastructure rights reserved; student rights preserved.
