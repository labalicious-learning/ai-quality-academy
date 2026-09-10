# Product Studio — build something you want to exist

Your course-long homework is an individual, AI-assisted software product in **your own public GitHub repository**. Choose something you care about, build it in small steps, and show how you know it works. This project is the course assessment. There is no separate written exam, timed coding exam or surprise test of the learner. Software tests remain an essential engineering practice.

Discuss your idea in Session 01. Obtain instructor approval and start the repository in Session 02. Present the finished product to **Jared Cluff** in Session 12 or your scheduled showcase appointment. Jared reviews your progress along the way and decides when to issue your certificate of course completion; a bot, test result or merged PR cannot issue it.

## Your launchpad

- [20 ideas to make your own](PROJECT_IDEAS.md)
- [Proposal to present to your instructor](templates/project-proposal.md)
- [Set up your repo, branches and pull requests](PROJECT_GITHUB.md)
- [Build with smaller models on a modest budget](SMALL_MODEL_GUIDE.md)
- [Weekly milestone record](templates/project-milestone.md)
- [Reviewer checklist](templates/project-review.md)
- [Final demo and handoff](templates/project-showcase.md)

## What counts as the right-sized product?

Build one useful end-to-end workflow for one primary audience. Aim for **three core features**, two or three related kinds of records, and about three to five screens or distinct views. Include meaningful state changes—not just a landing page, chatbot wrapper or static list. Example: a club organizer plans an event, assigns volunteers and sees which shifts still need coverage.

The default is a browser app with synthetic sample data and local persistence. Plain HTML/CSS/JavaScript or a small framework is fine. A lightweight local server is optional. A desktop, game or other format needs an instructor-approved equivalent for the browser/accessibility and integration lessons. Do not add cloud databases, paid hosting or real accounts solely to appear advanced.

Plan for **two to three homework hours between sessions**, roughly 25–35 hours across the project including demo preparation. This is a planning allowance, not a speed requirement. Reserve the last third for testing, visual refinement and fixes. Bring a blocker to a coach after two unsuccessful AI attempts or 20 minutes without useful progress. Adjust scope or arrange more time; do not buy your way out of a confusing task.

### Shared completion expectations

| Area | Evidence your product should provide |
| --- | --- |
| Useful software | An approved problem, three connected core features and a complete main journey; create/edit records, validation, search or filtering, and a useful summary. |
| Data and recovery | Synthetic sample data; changes survive reload; import/export or an approved equivalent; invalid and duplicate input handled; safe reset/recovery. Explain browser-storage limits; don't promise nonexistent backups. |
| Visual quality | Intentional typography, spacing, colors and hierarchy; consistent navigation; readable mobile layout; helpful empty, error and success states. At least two documented design/review iterations, not a raw starter theme. |
| Accessibility | Keyboard-operable main journey, visible focus, form labels, understandable errors, contrast and zoom/reflow checks. State what was checked; no blanket compliance claim from a scanner. |
| Quality assurance | Acceptance criteria and risk-ranked tests; reproduced findings; meaningful automated regressions with at least one recorded fail-before/pass-after repair; manual exploration and honest coverage limits. |
| GitHub habits | Issues → topic branches → focused PRs → review/fix → merge. Plan roughly one meaningful PR per milestone, not empty-commit quotas. At least three substantive human reviews across kickoff, working slice and release. |
| Business work | Synthetic dataset/spreadsheet, sourced decision memo, concise stakeholder update and integration/failure map. Portable files suffice; Google or Discord posting and real integrations are optional. |
| Responsible AI | Exact model/client, task scope, important corrections, evidence and costs. Durable project brief and reproducible model/workflow comparison. AI is encouraged; learners own publication decisions. |
| Delivery | README another person can follow, documented OS/browser support, safe demo data, tagged release, known limitations and personal presentation to Jared. Hosted demo welcome; reliable local demo sufficient. |

Agree equivalents with the instructor before development and record them in the proposal. If your app has no accounts, use validation/import trust boundaries and a hypothetical permissions design for Session 06; do not bolt on insecure pretend authentication. Label simulated controls. Never claim a hidden button protects server data.

## Choose, pitch, approve

Pick from the idea bank or propose your own. Session 01 homework is a one-page proposal and rough wireframe—not a finished app. Present the user, problem, main journey, three features, exclusions, data safety and budget. A paper sketch is enough. Include how you will demonstrate quality, not just features.

The instructor records **approved / revise scope / discuss privately** before Session 02 kickoff. Review pitches between sessions or in brief appointments; do not make the class wait while everyone pitches. No approval yet? Refine your proposal and practice GitHub with a harmless README; defer product implementation until approved.

New features go into a “later” issue. Material changes to audience, data, costs, integrations or complexity need another instructor review. At most two stretch features, after the core works and quality checks are convincing.

## The course becomes your product roadmap

Practice labs teach the skill; homework applies it to your product. Session 00 is setup, not another project deadline. Artifacts live in your product repo with an index in `docs/progress.md`. Personal coaching and review decisions stay private.

| Session | Product milestone | Bring to the next review |
| --- | --- | --- |
| 01 | Pitch something useful | Proposal, main journey, wireframe, data/budget plan. Instructor reviews before Session 02 kickoff. |
| 02 | Start small, work professionally | Approved proposal, own public repo, README, project instructions, three initial issues and first topic-branch PR. Demonstrate a bounded AI task on your selected client/model. |
| 03 | Understand the business and data | Synthetic raw/clean dataset, checked spreadsheet/CSV analysis, source log, decision memo and mock team update. Separate a draft from permission to send. |
| 04 | Define quality | Acceptance criteria, risk-ranked charter, success/negative/boundary cases; first three tests and unresolved rules. Do not invent requirements. |
| 05 | Complete one journey | Working vertical slice from action to saved result; manual evidence, reproduced issue and human-reviewed fix PR. |
| 06 | Protect a boundary | Validation/persistence checks, malformed/unauthorized input where applicable, positive controls; diagram distinguishes real and simulated controls. |
| 07 | Keep a bug fixed | Meaningful automated regression, observed red-to-green evidence, own-repo CI and local verification. No secrets or privileged runners. |
| 08 | Make it feel finished | Before/after captures, two design iterations overall, keyboard journey, 375/768/1440-width and zoom checks; usability/accessibility fix PR. |
| 09 | Recover from failure | Import/export or equivalent; invalid data, repeated action and interruption/retry checks. Show state before/after and recovery without real external services. |
| 10 | Prepare a release | Feature freeze, issue triage, release candidate, change summary, ship/hold recommendation and recovery rehearsal. |
| 11 | Improve your AI workflow | Repeat one small task: the same cheap model with two context/playbook versions is enough. Record outcomes, retries and usage; update the playbook and rerun regressions. |
| 12 | Present and hand off | Tagged release, demo, GitHub history, quality evidence, costs and limitations. Present personally to Jared and address requested revisions. |

An integration can be a local file exchange. Your app need not connect to Google, GitHub, Discord or an AI API. Practice those business surfaces through portable artifacts and existing class exercises. This avoids unnecessary cost and real people's data.

## Reviews are part of the build

Request a brief instructor check each milestone; substantial reviews occur at proposal/kickoff, working slice, visual/reliability review and release readiness. Jared can use coach/peer feedback but retains the completion decision. Link the exact PR/commit and ask one specific question. Pair troubleshooting is welcome; each learner owns and explains their individual product.

Use [the review checklist](templates/project-review.md): **ready for next step / revise and return / instructor support needed**. Discuss actual behavior and an important decision, not a hidden changed-condition defense. Arrange another coached review for gaps. Expensive models, lines of code and fancy frameworks earn no preference.

## Public by design, private where it matters

Use an alias if appropriate. Never commit secrets, real customer/student data, private employer code, rosters, chats, payment details, private feedback or certificate records. Use original or properly licensed assets with attribution. Course copyright does not transfer ownership of your original product to the instructor.

Treat AI output, imported files and peer code as untrusted. Review diffs before publishing. Reviewers must use an isolated, credential-free environment to run student software. Editing permission is not permission to send messages, spend money or deploy.

The default is your own public repo. If publication, age eligibility or personal circumstances make that inappropriate, arrange an equivalent route privately. Certificates and identity mappings stay private unless you explicitly choose otherwise.

## What the certificate means

After ongoing review and your presentation, Jared decides **complete** or **revision/support needed** against the agreed expectations. Completion recognizes this course and project, not professional licensure or guaranteed expert readiness. No automatic certificate, point threshold or separate student exam. Missing work gets clear next steps and a chance to present improvements.

© 2026 Jared Cluff. Student rights in original work are preserved.
