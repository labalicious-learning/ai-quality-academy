# AI Quality Academy

A practical course in using AI across quality assurance and everyday business work. Thirteen two-hour sessions: Session 00 gets you set up; Sessions 01–12 develop investigation, test design, automation and professional judgment.

All scenarios, people, records and applications are fictional teaching examples. This repository contains no production application code, internal architecture documents, company data or private repository history.

## Start here

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

```bash
npm ci
npm run build
```

Open dist/index.html to browse locally. HTML presentations work offline. Build PDF and image-based PowerPoint exports with npm run build:full (Chrome required). Markdown remains the editable slide source.

## Local lab
```bash
npm start
```

Open http://127.0.0.1:4178. The simulation is intentionally defective in Candidate A. Candidate B provides a corrected comparison. It makes no external calls.

## Verify
```bash
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
26 contact hours including setup form a foundation for supervised apprenticeship. Completion does not certify expert performance. Codex access is provided through the learner's or instructor's approved account; the course does not include a paid AI subscription. GitHub, Google and Discord accounts are separate. Optional live integrations require access granted specifically for the course.

Source content is publicly readable; a reuse license has not yet been selected. Third-party dependencies retain their own licenses.
