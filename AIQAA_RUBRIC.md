# AIQAA project rubric — one standard, different products

**Standard: AIQAA-1.0.** This operationalizes [the credential policy](CREDENTIALS.md). The project and its development record are the assessment. There is **no separate certification test**, hidden task or requirement to work without AI. Completion remains a separate decision.

The decision rules are deterministic **given the same approved agreement and verified findings**. Observing usability, interpreting a diff and confirming understanding still require human judgment. This rubric makes that judgment explicit and reviewable; it does not claim that software or an AI judge can eliminate it. It is an initial standard to calibrate before issuance, not an empirically validated assessment instrument.

## 1. Agree what this product must do

Use [the project assessment agreement](templates/project-assessment-agreement.md). Approve its scope and competency mappings at Session 02; finish its exact acceptance cases during Session 04, before reviewing the completed features. Early development may explore the approved slice, but expectations cannot be reverse-engineered from whatever happened to work.

The agreement names the audience, three connected core features, main journey, state transitions, synthetic inputs, expected outputs, supported environments, risks, UI states and evidence locations. It maps **every criterion below** to the product. The same artifact may support several criteria; no duplicate paperwork is required.

An acceptance case specifies starting state, exact input/action, expected visible result **and saved state**, reset procedure and environment. “Looks professional,” “works well” and “has enough commits” are not acceptance cases. Agree tolerances and timing only when the product needs them, with a reason; there is no universal millisecond or line-count target.

Equivalents change the evidence route, not the skill or passing bar. No accounts? Validate untrusted file input and explain a hypothetical permissions boundary. No cloud? Local import/export is an integration. Non-browser product? Agree an equivalent accessible interaction and layout matrix. A core criterion cannot be marked N/A or waived by the learner. If a project cannot demonstrate a competency, reshape the project before approval.

Evidence must not depend on the luck of encountering a particular bug or model error. For Q2/A2 only, if genuine exploration has not produced a suitable example, Jared may approve a **clearly labeled negative control within the learner's own project work**: a deliberately incorrect disposable code/artifact variant, the verification that rejects it, and the correct version that passes. Keep it separate from the release and document its purpose before performing it. This demonstrates fault detection and verification, not a claimed natural discovery. It is an agreed project engineering activity, not a hidden certification test. It cannot substitute for genuine development history, human feedback or the other competencies.

Freeze the agreement version and commit. Later material changes require an approval record explaining what changed, why, affected criteria and replacement cases. Keep the old version. Do not remove a failing core case at the final review to manufacture a pass. Legitimate scope changes remain possible with equivalent evidence and time to build and review it. Optional features add no certification credit, but their effects on required behavior and safety remain in scope.

## 2. Use three evidence states, not points

| State | Exact decision rule |
| --- | --- |
| **Demonstrated** | Every condition in the criterion is supported by inspected evidence and the stated checks; no unresolved contradictory observation. Record the exact revision, method and actual result. |
| **Not yet demonstrated** | A check was performed and a required condition was not met. Identify the condition, expected/actual result and a specific correction. |
| **Unverified** | Evidence is missing, stale without a justified carry-forward, inaccessible, ambiguous, or not inspected; or an environment problem prevents observation. State what must be inspected or clarified. This is not a pass or a finding that the learner lacks the skill. |

When a row has both a confirmed failure and missing evidence, record **not yet demonstrated** and list both gaps. A review-wide unresolved dispute or safety concern puts the overall decision on hold. No averaging: an excellent interface cannot offset failed recovery, missing GitHub understanding or unsafe handling.

## 3. The 21 criteria

Every bullet within a criterion is required. Product-specific expected outcomes come from the agreement. **All 21 criteria must be demonstrated.** Minimum examples below establish evidence coverage, not quotas that prove competence by themselves.

| Skill area | Criteria | What the review establishes |
| --- | --- | --- |
| Working software | P1–P3 | Required behavior, state/recovery and safe boundaries |
| Visual and interaction quality | V1–V3 | Intentional design, accessibility and understandable use |
| QA reasoning and evidence | Q1–Q3 | Risk coverage, a real repair and dependable verification |
| Development over time | H1–H3 | Genuine progression, substantive feedback and explained decisions |
| GitHub understanding | G1–G3 | Actual workflow, artifact-based explanation and repository hygiene |
| Responsible, effective AI | A1–A3 | Bounded tasks, corrected mistakes and affordable workflow evaluation |
| Business communication and handoff | B1–B3 | Evidence-based decisions, reproducible delivery and honest release judgment |

### P1 — Required behavior

- Run every agreed core acceptance case at the release candidate: all three features and the complete main journey meet their expected results.
- Observe visible output and underlying state where relevant; a success toast alone is not evidence that the action succeeded.
- Every core case has a recorded actual result. No unexplained failure, skipped core case or contradiction between the demo and result log remains.

### P2 — State and recovery

- Create and edit representative records; reload/restart and verify the agreed persistence, including relationships and summary calculations.
- Exercise the agreed export/import or equivalent handoff and compare meaningful values before and after; verify safe reset and restoration with synthetic data.
- Check invalid input, duplicate/repeated actions and interrupted operation against the agreed recovery rules. Prior good state must remain intact where the contract promises it; unsupported durability is clearly stated.

### P3 — Trust and safe boundaries

- Trace at least one real untrusted-input boundary and run its permitted positive control plus invalid/malformed case. Validate the observed rejection and resulting state, not just a hidden UI control.
- Mark each account, permission and external-service control as implemented, simulated or excluded. Where real authorization exists, check allowed and denied access at the enforcing boundary.
- Inspect publication and execution risks: no unresolved credential exposure, private data, unsafe privileged workflow or misleading security claim. Handle suspected exposure privately; never copy a secret into evidence.

### V1 — Intentional, consistent design

- A small design sheet defines typography roles, spacing, colors, navigation and primary/secondary actions; the agreed screens consistently apply it. Inspect a component inventory across all those screens; document any intentional exception with its user-facing purpose.
- Every agreed view has a visible purpose and action hierarchy, readable real sample content and no placeholder instructions or unfinished starter content. The primary action and current location are identifiable without author hints.
- Two real design/review iterations show before/after evidence, the observed user problem and the change addressing it. A palette change without a reason is not a substantive iteration. Templates are allowed; adapting them to the product is the evidence.

### V2 — Responsive and accessible main journey

- Complete the main journey at 375, 768 and 1440 CSS-pixel widths, plus the agreed zoom/reflow check. No clipped essential controls or overlapping content; any intentional two-dimensional region is identified in the agreement, not excused after failure.
- Complete the same journey with the keyboard: operable controls, visible focus, no trap, meaningful form labels and errors that identify the field and correction. Non-browser equivalents must preserve these interaction outcomes.
- Measure text/background contrast for each text style and state used in the journey. Ordinary text meets 4.5:1; large text may use 3:1 under the W3C definition. Record actual colors/ratios and any applicable exception rather than relying on an accessibility score. These targeted checks do not establish full WCAG conformance.

The contrast thresholds and large-text definition are explained at [W3C Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Use [W3C Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) to define the browser reflow case, normally a 320 CSS-pixel-wide viewport; additionally check 200% browser zoom without losing functionality. [W3C Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) explains the keyboard requirement. Agree any format-specific equivalent before implementation; these are scoped course checks, not an accreditation claim.

### V3 — Understandable states and feedback

- Demonstrate each agreed empty, populated, invalid, success and recovery state; loading/busy states are required only where an operation can wait. Each tells the user what happened and what they can do next.
- A person other than the author follows the written main-journey task from clean data without coaching, completing it and identifying the result. Record where assistance was needed; revise and repeat an obstructed step.
- Remaining visual issues are classified by observable impact, not reviewer taste. Any issue that obscures a required action/result, contradicts the design sheet or fails V1/V2 prevents the affected criterion from passing. An optional decorative preference does not.

### Q1 — Risk-based evidence coverage

- Map every core acceptance case to a requirement and observed evidence. Each core feature has a positive and a relevant negative or boundary case; justify which boundary matters.
- Rank at least three distinct product risks by harmed outcome, likelihood rationale and impact. Each highest-priority risk has a check and mitigation or a documented limitation that does not contradict required behavior.
- Include manual exploration beyond the scripted main journey, recording scope, observations and coverage limits. A long generated case list without executed evidence is insufficient.

### Q2 — Defect detection and repair

- Show an actual requirement mismatch from this project's development, or the preapproved, openly labeled project negative control: reproducible starting state/input, expected/actual behavior and the affected revision.
- Show a meaningful automated regression fail for the defect at the earlier revision and pass after the fix, with command, versions, outputs and exact SHAs. Failure must be the asserted behavior—not a missing dependency or broken test setup.
- Connect the fix diff to the cause and retain the check in the release suite. A fabricated history or deliberately planted bug presented as a discovery is not evidence. In a negative-control route, show the deliberate fault separately and retain the check against the correct release; never merge the fault just to create a story.

### Q3 — Dependable verification

- Run the documented automated checks locally and in the learner's own-repo CI at the candidate revision. Assertions cover behavior, not merely compilation or HTTP 200; the Q2 regression is included.
- Rerun the required release suite twice from the documented clean state. Explain any nondeterminism; unresolved inconsistent required results cannot be marked demonstrated by selecting a green run.
- Preserve outputs, environment and known limits. Do not treat a CI badge, coverage percentage, mock result or unrelated class-fixture test as proof the product works.

### H1 — Genuine development progression

- Inspect four actual stages: approved plan/kickoff, intermediate working slice, test/fix and release preparation. Each has a revision plus artifact and observed change in capability or understanding.
- The sequence is corroborated by real milestone reviews, PR discussion or instructor observations; dates and commit counts alone are insufficient.
- Squash/rebase/offline work is explained and remains traceable through preserved PRs, patches or checkpoints. Do not penalize uneven schedules or demand fabricated historical commits.

### H2 — Feedback changed the work

- Inspect substantive human reviews at kickoff, working slice and release. A review identifies a specific artifact, evaluates a requirement/risk and receives a reasoned response; “LGTM” alone does not satisfy this.
- Show a review-driven change and its verification. Other feedback may be declined with a requirement-based explanation; blindly accepting every suggestion is not required.
- Record reviewer, reviewed SHA, feedback and disposition. Three reviews on a single finished upload do not replace the development-stage coverage.

### H3 — Traceable ownership of decisions

- Trace the selected progression through meaningful diffs, issue/PR discussions and milestones; distinguish student changes from starter code, generated work and disclosed collaboration.
- During scheduled reviews the learner explains what changed, why and what evidence influenced the decision, using their own artifacts and notes. Record a concrete explanation, not “seemed confident.”
- Resolve inconsistencies privately using evidence and follow-up on the existing work. Typing speed, accent, presentation polish, AI use and an authorship detector are not grounds for a failed criterion.

### G1 — Complete GitHub workflow

- Trace an actual issue → topic branch → focused PR → human feedback → response/fix → verification → merge chain, with links and revisions. Reuse the substantive reviews in H2.
- PR descriptions explain purpose, affected scope and checks; the selected merge includes the reviewed fix and evidence for its actual head revision.
- A release tag resolves to the reviewed candidate SHA. Squash merging is acceptable; explain how the PR's changes reached that tag. No paid branch-protection feature is required.

### G2 — Explain the workflow, not commands from memory

- In ongoing project discussions, the learner identifies why their branch/PR exists and explains a selected diff's effect on a requirement.
- They locate a review request, its response and the verification that supports the response; distinguish a green check from human approval.
- Using the existing repository, they show how to locate the reviewed release and describe how to revisit it safely without overwriting current work. Notes, UI navigation and AI assistance are allowed; a generic generated explanation without locating their actual artifacts is insufficient. No new coding task is introduced.

### G3 — Repository hygiene and publication

- Changes are focused enough to review; unrelated work is explained or separated. Generated/build files and dependency directories follow the documented ignore policy; required source and dependency versions/lockfiles are available.
- Sources, assets, starter code and licenses are acknowledged. Synthetic data and public artifacts are separated from private identity, coaching and credential records.
- Inspect the selected history and publication surface for sensitive content and unsafe instructions; any finding is remediated privately before certification. Neither an automated scan nor an AI claim proves the whole history safe.

### A1 — Bounded, verifiable AI work

- Inspect a real task brief naming outcome, relevant context, allowed changes, constraints and completion checks; record exact client/model and local or hosted route.
- Show the proposed output, inspected diff/artifact and verification before acceptance. Disclose meaningful collaborator/AI contributions without publishing private chats.
- Durable project instructions reflect the current structure and verification steps. Tool authority is bounded; permission to draft is not permission to send, publish or spend.

### A2 — Independently challenged AI output

- Show one actual incorrect or unsupported model output from the project, why it was wrong and evidence independent of the model's self-assessment. The approved negative-control route instead starts with a real model artifact and a clearly labeled incorrect variant; show that the verification distinguishes them without falsely attributing the variant to the model.
- Show the learner's correction or rejection and a check of the resulting artifact; identify the change to context/workflow that reduces recurrence.
- Preserve a sanitized excerpt or factual record, not an entire chat log. Identify which route was used and its approval. Until either route is actually inspected, the row is unverified; never fabricate a model failure or claim a control was a natural discovery.

### A3 — Affordable workflow evaluation

- Compare two documented workflows on the same bounded project task, starting from the same inputs, with success checks fixed before the comparison. The same inexpensive model with two context versions qualifies; no model purchase is necessary.
- Record actual outputs, quality checks, retries and available usage/cost information for each. Label unavailable measurements; local inference is not claimed to have zero total cost merely because no API fee was charged.
- Choose a workflow based on observed tradeoffs and update the project playbook. One small comparison supports this task-level choice, not a sweeping model ranking.

### B1 — Evidence-based business communication

- Inspect a relevant synthetic raw/clean dataset and reproducible spreadsheet or script/CSV analysis; independently recalculate one decision-relevant result.
- A decision memo connects that result and attributable sources to a product choice, distinguishing evidence, assumptions and limits.
- A concise stakeholder update states status, risk and next action consistently with the product evidence. Local documents suffice; no real messages or customer data are required.

### B2 — Reproducible handoff

- A person other than the author follows the README in a clean, isolated supported environment to set up, run, check and reset the exact release without undocumented help. Record versions and any corrected instructions, then retry failed steps.
- List supported OS/browser/runtime and requirements honestly. Default course tooling instructions address Mac, Linux and Windows; product-specific support exceptions are agreed early, not used to dismiss a promised platform failure.
- Provide synthetic seed data, source/dependency information and known limits; a reliable local product is sufficient. A hosted outage alone is not a product failure if the agreed local route is independently reproducible.

### B3 — Honest release and integration decision

- Map inputs/outputs, trust boundaries and failure/retry behavior for at least one real integration, including local file exchange. Distinguish actual behavior from hypothetical services.
- Reconcile open findings against required cases. State impact, workaround, owner and next action for deferred issues; none contradict a required criterion or hide a safety concern.
- Present the project and an evidence-based release recommendation personally to Jared (or an agreed accessible presentation equivalent). The packet and ongoing reviews do the detailed assessment; a polished demo cannot substitute for missing evidence.

## 4. Make review repeatable

1. **Freeze inputs.** Record criteria version, course/rubric commit (and checker revision if used), approved agreement version/commit, release SHA, seed data, environment and evidence index. Tags alone can move; retain SHAs. Inspect source before running untrusted software in an isolated, credential-free environment.
2. **Review before the presentation.** Inspect all required acceptance cases and all 21 rows. Re-run the main journey, recovery/boundary cases and release suite independently; examine other case evidence and rerun any unsupported or contradictory result. Use the selected defect, four development stages and three human reviews for depth, not random commit counting. Extend inspection when evidence conflicts.
3. **Record per row.** For every bullet, identify evidence and observed result in [the worksheet](templates/aiqaa-evidence-review.md). Record what was directly rerun versus artifact-inspected or carried forward. Missing evidence stays unverified. Record existing-work explanations during ordinary reviews; the final presentation is not an extra oral exam.
4. **Separate taste from impact.** Review V1 against the agreed design sheet, V2 against explicit checks, V3 against observed usability. If the objection is merely “I prefer a different color,” it is coaching, not a certification failure. Missing required states, an inconsistent action hierarchy or unreadable text identify a criterion and reproducible impact.
5. **Resolve disagreements.** Two reviewers inspect the same evidence independently for calibration and disputed cases. Preserve initial decisions. Compare the exact condition and observation, reproduce the disputed behavior and record Jared's evidence-based resolution. Until resolved, the review is pending. No majority vote or hidden points adjustment.
6. **Calculate readiness.** Invalid/incomplete decision records require repair. Unverified rows, unresolved holds or unconfirmed agreement/presentation mean **review pending**. Once these are resolved, any failed row or outstanding coursework means **not yet demonstrated**. Only completed coursework plus all demonstrated rows and no holds is **eligible for Jared's certification decision**. The calculator cannot issue an award.
7. **Revise without restarting.** Give criterion IDs, expected/actual observations and the smallest necessary follow-up. At a new SHA, rerun the release suite and main journey; recheck changed and dependent criteria. Carry historical evidence forward only with a recorded unchanged-applicability explanation. A new build invalidates blanket “all previously passed” claims, not the learner's genuine earlier history.

An unavailable reviewer environment produces unverified evidence, not a product defect. A documented product setup that fails in its promised environment is a B2 failure. A failure in a required case remains a failure even if someone calls it “minor.” Optional cosmetic defects may be deferred only if every required condition still holds. Safety and integrity concerns pause certification for private investigation; suspicion is not a misconduct finding.

## 5. Calibrate and adapt the standard

Use [the worked project mappings and reviewer calibration cases](AIQAA_CALIBRATION.md) before the first cohort and when reviewers change. At first delivery, double-review the first three projects and every disputed decision. Thereafter, double-review at least one in five projects, selected by the private review queue order before viewing outcomes, plus all disputes. If a sampled review changes eligibility, pause final decisions for that reviewer batch and reconcile affected rows before issuance. Budget this separately from the two-hour lessons.

Record initial per-row agreement as matching row decisions divided by jointly rated rows, excluding neither failures nor unverified cases. Also record complete-decision agreement and every disagreement's cause; a high average must not conceal a disputed safety or certification decision. This is a reviewer quality check, not a student score, and no reliability rate is claimed until real independent reviews occur. Track time spent and evidence burden; pilot whether the project remains feasible within its homework allowance.

Fix ambiguous wording and maintain fictional borderline examples. Substantive changes to the bar require a new standard version, prospective cohort adoption and an announced transition; do not silently raise requirements for an enrolled learner. Model names, runtime choices and evidence formats can change through the agreement while the same competencies remain. Larger models and expensive hosting confer no advantage by definition.

## Tools and records

The [private review template](templates/aiqaa-certification-review.md) authorizes neither award by itself. An optional local consistency checker is documented in [the decision-record guide](AIQAA_DECISION_TOOL.md); it checks record structure and aggregates human observations, **not** repository quality, authorship or truth. It never executes student software, calls an AI model, follows evidence links or issues credentials. AI can organize consented evidence or flag missing fields; it cannot be the independent second reviewer.

© 2026 Jared Cluff. Student rights in original work are preserved.
