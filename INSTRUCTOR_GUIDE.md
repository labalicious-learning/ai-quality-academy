# Instructor Guide

Start with [Session 00](lessons/00-course-setup.md). The program now has 13 sessions and 26 contact hours. All core labs use fictional data and the included local app.

## Staffing and room design

Plan for one lead instructor and one coach for every 12–16 learners. Use tables
of two or three, a projected screen, a shared Discord channel or equivalent,
and one local simulator copy per learner (no sandbox login). Make each activity accessible without prior
coding experience: teams can produce evidence and test designs before they edit
automation. Offer an advanced extension in every lab rather than moving faster
through the core exercise.

## Before the first cohort

For the included local track, use [LAB_SETUP.md](LAB_SETUP.md) and the supplied fixtures. The provisioning steps below describe an optional future production-like training environment, not a requirement for running this package.

1. Provision a training-only CRM, fake identity provider, and synthetic tenant
   data. Include a handful of intentional, documented defects.
2. Create learner accounts with least privilege. Use named QA roles, never a
   shared admin account.
3. Fork a small training repository with a passing baseline and tagged buggy
   branches. Include the templates in this package.
4. Establish one channel for questions and one channel for findings. Teach the
   difference: a question is not a defect; a defect needs reproduction and
   evidence.
5. Give students the course safety card before tool access.

## Assessment

Use [the submission workflow](SUBMISSIONS.md) and the separate repository's instructor guide. Scores and identities stay private. For a numeric interpretation of the five dimensions below, score each 0–4 (0 missing, 1 developing, 2 partial, 3 ready, 4 strong), equally weighted: total /20; 14/20 is 70%. Require the separate safety gate and individual demonstration. AI feedback and passing structural checks are not grades or acceptance decisions.

Score work on evidence and judgment, not how many bugs a learner reports.

| Dimension | Developing | Ready | Strong |
| --- | --- | --- | --- |
| Problem framing | Restates a request | Names user, goal, and risk | Identifies assumptions and failure boundaries |
| Test design | Happy path only | Covers positive, negative, and edge cases | Prioritizes by customer/business risk |
| Evidence | Screenshot or assertion alone | Reproducible steps with relevant evidence | Triangulates UI, data, logs, and expected behavior |
| AI use | Accepts output | Checks and corrects it | Uses AI efficiently while maintaining a durable playbook/eval |
| Communication | Vague conclusion | Clear finding and next action | Makes a calibrated ship/no-ship recommendation |

For the pilot, privately score sessions 01–12 out of 20 each. Overall score is their equal-weight mean: require at least 14/20 overall, at least 14/20 on the capstone, all required packets accepted, and the separate safety gate. Session 00 is unscored readiness. Permit remediation and equivalent paired/mock/design routes; record unexecuted skills as apprenticeship follow-up, not fictional execution. An unsupported or
invented finding cannot be "made up" by a large number of lower-risk reports.

## Instructor response to AI mistakes

When a learner’s model produces a plausible but unsupported answer, do not
simply say it hallucinated. Ask:

1. What exact claim did it make?
2. What source, application state, or deterministic check would prove it?
3. What should the model have been given to make the task safer?
4. Does this become a new test, a prompt/playbook improvement, or a reason to
   keep the work human-reviewed?

This turns failure into evaluation literacy.

## Model-change playbook

The program should evolve on a monthly review and on every material model/tool
change.

1. Follow fixtures/model-evaluation-protocol.md: give actors input-only cases and keep reviewer labels outside their access. Classroom mocks are not adoption evidence.
2. Compare task completion, false pass, false fail, safety-policy compliance,
   evidence completeness, latency, and cost.
3. Review a representative set of outputs blind, with instructors judging the
   evidence rather than knowing the model.
4. Approve, restrict, or reject the candidate for each task class separately:
   drafting, code exploration, browser exploration, spreadsheet analysis, and
   verdict review are different jobs.
5. Version the model card and affected lesson playbook. Teach the observed
   behavioral change in the next cohort.

Never let a provider’s benchmark, a model’s self-description, or a demo replace
this local evaluation.

## Rendering decks

The deck files use Marp Markdown. The exported PowerPoint slides are image-based; edit the Markdown source and regenerate to change slide content. The browser HTML is also presentable offline. In a prepared teaching environment, install
the approved Marp tooling once and render, for example:

```bash
npm install
npm run slides:html
npm run slides:pdf
npm run slides:pptx
```

Keep generated PDF/PPTX files out of the source repository unless a particular
cohort needs a frozen release. The Markdown is the version-controlled source of
truth.
