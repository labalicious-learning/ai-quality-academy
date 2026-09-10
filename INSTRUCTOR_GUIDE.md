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

## Project-based completion, not exams

[Product Studio](COURSE_PROJECT.md) is the individual course assessment. Introduce it in Session 01; approve each pitch before Session 02 kickoff. Each learner builds in their own public repo, with an equivalent private route arranged when necessary. Practice lab packets are formative coaching, not scored examinations or a points-based graduation gate.

Review evidence and judgment over time: problem framing, test design, reproducibility, AI use, communication, GitHub practice and product usability. Use [the project review checklist](templates/project-review.md) with **ready for next step / revise and return / instructor support needed**. Match expectations to the approved scope. Fabricated evidence, unsafe handling and unverified claims need correction, not compensating points. Software regression tests remain required engineering work; there is no separate test of the learner.

Jared Cluff reviews progress, hears each individual final presentation and decides **complete / revision or support needed**. He alone authorizes the certificate of course completion. No AI-issued certificate, numeric threshold, hidden defense or claim of expert qualification. Offer coaching, equivalents and a follow-up presentation for gaps.

## Project review operations

Before the cohort, privately establish a submission/contact channel, learner aliases, review appointments and an approved model route. Preflight Qwen3.8-27B using [the small-model guide](SMALL_MODEL_GUIDE.md); record actual compatibility, account eligibility and spending ceilings. Do not require hardware purchases or a premium subscription.

- Session 01 → 02: review one-page proposals and wireframes between classes; confirm three core features, exclusions, synthetic data, OS/run approach and budget.
- Each session: scan the milestone index and address one blocker. Use coaches for triage; schedule focused reviews outside the two-hour lesson when needed.
- Sessions 02, 05 and 10–12: ensure substantive human PR feedback at kickoff, working slice and release; add a visual/recovery review in Sessions 08–09.
- Record exact repository/PR URLs and head SHAs. Public feedback is artifact-focused; identities, decisions, accommodations and coaching stay private.
- Review student source before any execution. Use an isolated, credential-free environment; never run untrusted installs or workflows on a privileged instructor machine.
- Use [the showcase plan](lessons/12-capstone-and-professional-practice.md): at most six 12-minute individual presentations in one two-hour block. Book additional blocks/appointments with Jared for larger cohorts; parallel coach panels cannot replace presenting to him.

Copy [the empty progress register](templates/project-progress.csv) and [certificate template](templates/course-completion-certificate.md) to approved **private** storage. Never commit filled records. For each review record alias, repo, milestone, reviewed SHA, observed evidence, next action and follow-up. After presentation, Jared records the final decision/date and any revisions privately. Issue the certificate only after his approval, using the learner's privately supplied preferred certificate name. Deliver privately; public sharing or promotional use requires a separate choice.

The repository supplies templates, not a credential-issuing service or hosted student records system. Do not award a certificate simply because CI or packet-safety checks are green.

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
