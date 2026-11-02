# Session 00 — Your course workspace

**Duration:** 90 minutes. Prerequisites: laptop, browser, access to your email. A phone/authenticator is useful for securing accounts. No coding experience required.

**Slides:** [Session 00 deck](../decks/00-course-setup.md)  
**Learner checklist:** [Setup lab](../labs/00-course-setup.md)

## Outcomes
Each learner can find the course, sign into their own GitHub account, obtain a local copy, run the simulation, and use Codex or an approved compatible client to explain one file. They distinguish GitHub login, AI client/host access and local server startup. A local-model route need not involve an AI account login.

## Instructor preflight

During the existing course-navigation activity, show **My learning path** in the site navigation. Learners may privately track lessons, project milestones, evidence and feedback using [the planner guide](../LEARNING_PATH.md). Demonstrate export/restore and explain shared-browser privacy; self-tracked progress is not instructor approval or certification. No added lesson time or assessed deliverable.

Use the [Mac/Linux/Windows platform guide](../PLATFORM_GUIDE.md). Demonstrate ZIP extraction and the editor's Open Folder → New Terminal route on all three platforms. GitHub Desktop is optional and Mac/Windows-only; Linux uses ZIP or Git CLI. Check PowerShell's npm.cmd fallback and record each learner's OS/shell/browser. Do not score installation speed or ownership of a particular OS.

Confirm the published repository URL is set in the site configuration. Test on the operating systems in the cohort. Arrange approved AI seats before class; do not promise free access. Verify relevant age/account eligibility and school/guardian arrangements through the provider's current terms for your cohort. No shared instructor password. Prepare a paired/browser-reading route for restricted school devices.

**Live schedule:** Mondays, 7:30–9:00 p.m. Central (America/Chicago). Complete the setup checklist independently after the demonstrations; use a support appointment for installation blockers.

## 90-minute plan
| Time | Activity | Check |
| --- | --- | --- |
| 0–10 | Welcome and course journey; explain live class versus independent labs | Learner can find the lab and walkthrough |
| 10–25 | Demonstrate GitHub account, security and public/private boundaries | Learner knows which personal setup steps remain |
| 25–40 | Tour the repository, README, resource cards and local folders | Locate the Session 01 materials |
| 40–50 | Demonstrate Node installation checks and starting/stopping the sandbox | Distinguish terminal, folder and browser URL |
| 50–60 | Break | Collect blockers privately |
| 60–75 | Demonstrate the approved AI client and verify one setup-example claim | Identify the cited file and observable check |
| 75–85 | Explain the independent checklist, saving work and getting help | Each learner names a next action |
| 85–90 | Readiness check and next-session handoff | Record ready or exact blocker privately |

## Independent setup — after class
Complete the linked setup lab at your own pace before the next lesson where possible. Allow extra time for accounts, downloads and installation. Do not share credentials or rush security settings. Use the walkthrough and ask for help with a precise blocker; readiness is not graded by speed.

## Live demonstration script
Say: “GitHub stores our course files. Your computer runs the lab. Codex assists with work in the folder you give it. These are separate systems.” Show the repo URL, then a filesystem folder, then the localhost URL. Stop the server to show why refreshing localhost fails. Start it again.

During the AI demo, ask for explanation only. Then let a volunteer identify a claim in the output and verify it against the file. Do not begin with cloud keys or external integrations.

## Troubleshooting and differentiation
Wrong directory: locate package.json before running npm. Missing command: reopen terminal after installation and check node --version. Port occupied: stop the other course server or ask coach to set ACADEMY_PORT. Windows shell policy: try Command Prompt and npm.cmd rather than broadly weakening system policy. Restricted installation: use a partner machine and the public course materials; record the blocker for the instructor.

Fast finishers create a personal branch and a local learning note; nobody needs write permission to the course organization.

## Exit evidence
Show local lab, explain the setup example's output, locate next session, name the two account systems. Record ready / coach follow-up with the exact blocker. No grades based on install speed.

## Affordable project access

During the existing tool-readiness checks, introduce [the small-model guide](../SMALL_MODEL_GUIDE.md). Qwen3.8-27B is the recommended project model; preflight one compatible client/host route before Session 02. A premium subscription and new hardware are not requirements. Send unresolved installation, account-eligibility or spending issues to a private support appointment, not extra work inside the 90-minute agenda. Product selection is introduced in Session 01.
