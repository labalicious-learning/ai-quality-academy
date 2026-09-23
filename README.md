# Labalicious Academy

Deployment destination: https://learn.labalicious.com

Repository destination: https://github.com/labalicious-learning/ai-quality-academy

## Course signup

Sharing the course with prospective learners? The build includes a standalone `training.html` brochure. See [the brochure and email guide](MARKETING.md) for preview, publication checks and invitation copy.

Interested in an instructor-led cohort? See [signup and calendar details](SIGNUP.md). Dates are pending; submitting interest does not confirm enrollment. The public lessons and local labs remain available without signing up.

## My learning path

The planner now opens to **Today**: your next action, preparation and project milestone, with evidence, feedback, progress and backup tools in expandable sections. Existing saved progress remains compatible. Public class dates appear in the learner's local timezone only after the instructor publishes them; the default is **Dates not announced yet**.

Each published lab now includes a session guide: purpose, evidence target, preparation links, a short recall prompt, a supported route and direct links to its activity, deliverables, lesson and slides. Long handouts have section navigation and keyboard skip links. Start with [learner support](LEARNER_SUPPORT.md) if you are blocked or catching up. These aids add no exam, paid service or required worksheet.

Use **My learning path** in the site navigation for a private browser-local planner: next steps, separate lesson/project milestones, evidence references, feedback follow-up and graduated hints. No account or AI spending is required. Read [the storage and backup guide](LEARNING_PATH.md); self-tracked progress is not a certification decision.

Unfinished forms now recover as local drafts. From the dashboard, **Prepare a project review** creates an explicitly selected, previewed Markdown note—without posting or including private feedback. [Shift Garden](EXAMPLE_PROJECT.md) demonstrates a runnable fictional product slice and a real failing/passing regression. Start it locally with `npm run example` on Mac, Linux or Windows.

## Markdown reader

After `npm run build`, open `dist/reader.html` in your browser. Choose any course document or use **Open a local .md file** to read your own Markdown. It works offline, keeps local files in your browser, renders tables and code, and supports printing to PDF. Raw HTML is disabled and remote images are not loaded. Each built handout links to the reader; this does not change your operating system's default app for `.md` files.

A practical course in using AI across quality assurance and everyday business work. Thirteen two-hour sessions: Session 00 gets you set up; Sessions 01–12 develop investigation, test design, automation and professional judgment.

All supplied scenarios, people, records and applications are fictional teaching examples. Learner products use synthetic data. This repository contains no production application code, internal architecture documents, company data or private repository history.

## Start here

Your main assessment is [Product Studio](COURSE_PROJECT.md): build your own software in a personal public repo, get feedback throughout the course, and present it to Jared. [Two separate achievements](CREDENTIALS.md) recognize completed learning activities with a completion certificate and demonstrated competence with Labalicious Certified AIQAA after product-quality, development-history and GitHub-skills review. No separate student exam. [The project rubric](AIQAA_RUBRIC.md) defines 21 required criteria, adapted through an early assessment agreement; [worked examples](AIQAA_CALIBRATION.md) show the same standard across different products. Start with [20 project ideas](PROJECT_IDEAS.md) and the [small-model guide](SMALL_MODEL_GUIDE.md), recommending Qwen3.8-27B.

Finished a practice lab? See [Submit and review your work](SUBMISSIONS.md). Practice packets go to the separate submission repository; product code and milestones go to each learner's own repository. Neither belongs in the curriculum.

Mac, Linux and Windows learners: start with the [platform guide](PLATFORM_GUIDE.md). It covers shells, installation, screenshots, API requests and optional browser automation without assuming one operating system.

- [Session 00: your course workspace](labs/00-course-setup.md)
- [Instructor's Session 00 plan](lessons/00-course-setup.md)
- [Run the local lab](LAB_SETUP.md)
- [Course facilitation](INSTRUCTOR_GUIDE.md)
- [AI capabilities and sources](CAPABILITY_BASELINE.md)
- [Business AI workflows](AI_WORKFLOW_PLAYBOOKS.md)
- [Publication scope](PUBLICATION.md)

The published site links to this repository in its navigation. Learners can read/download a public repository without joining its owner's organization.

## Local course site
Install Node.js 22+ from https://nodejs.org/en/download, then:

```text
npm ci
npm run build
```

Open dist/index.html to browse locally. HTML presentations work offline. Build PDF and image-based PowerPoint exports with npm run build:full (Chrome required). Markdown remains the editable slide source.

## Local lab
```text
npm start
```

Open http://127.0.0.1:4178. The simulation is intentionally defective in Candidate A. Candidate B provides a corrected comparison. It makes no external calls.

## Verify
```text
npm test
npm run verify
```

## Structure
- lessons/ — instructor plans
- decks/ — slide sources
- labs/ — learner handouts
- fixtures/ — synthetic data and evidence
- sandbox/ — original local training app
- templates/ — reusable work artifacts
- instructor/ — public solutions; avoid during blind exercises
- site/ and scripts/ — static course website
- .github/workflows/ — verification and GitHub Pages deployment

## Delivery and access
26 contact hours including setup form a foundation for supervised apprenticeship. Completion does not certify expert performance. Use an approved Codex or compatible alternative client with capped hosted or locally served inference; the course does not require a premium AI subscription. Follow the small-model guide and instructor setup check. GitHub, Google and Discord accounts are separate. Optional live integrations require access granted specifically for the course.

© 2026 Jared Cluff. All rights reserved. Publicly readable does not mean open-source licensed. See [Copyright](COPYRIGHT.md). Third-party dependencies retain their own licenses.
