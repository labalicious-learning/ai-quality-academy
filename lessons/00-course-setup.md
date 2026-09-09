# Session 00 — Your course workspace

**Duration:** 120 minutes. Prerequisites: laptop, browser, access to your email. A phone/authenticator is useful for securing accounts. No coding experience required.

**Slides:** [Session 00 deck](../decks/00-course-setup.md)  
**Learner checklist:** [Setup lab](../labs/00-course-setup.md)

## Outcomes
Each learner can find the course, sign into their own GitHub account, obtain a local copy, run the simulation, and use an approved Codex client to explain one file. They can distinguish GitHub login, AI login and local server startup.

## Instructor preflight
Use the [Mac/Linux/Windows platform guide](../PLATFORM_GUIDE.md). Demonstrate ZIP extraction and the editor's Open Folder → New Terminal route on all three platforms. GitHub Desktop is optional and Mac/Windows-only; Linux uses ZIP or Git CLI. Check PowerShell's npm.cmd fallback and record each learner's OS/shell/browser. Do not score installation speed or ownership of a particular OS.

Confirm the published repository URL is set in the site configuration. Test on the operating systems in the cohort. Arrange approved AI seats before class; do not promise free access. Verify relevant age/account eligibility and school/guardian arrangements through the provider's current terms for your cohort. No shared instructor password. Prepare a paired/browser-reading route for restricted school devices.

## 120-minute plan
| Time | Activity | Check |
| --- | --- | --- |
| 0–10 | Welcome: show the final local lab and the course journey | Learners identify what they will build |
| 10–25 | Create or recover a personal GitHub account; verify email | Learner shows signed-in profile, no personal details recorded |
| 25–35 | Account security and public profile/email awareness | Learner configures protection privately |
| 35–50 | Open course repo; navigate README, folders and issues | Find Session 01 lab and explain public read vs write access |
| 50–60 | Break; coach installation problems | Triage network vs permissions vs account |
| 60–80 | Install Node; obtain repo via ZIP, Git CLI or optional Mac/Windows GitHub Desktop | node --version works; package.json is in open folder |
| 80–95 | Run npm start and open local browser URL | Candidate A loads; learner switches to B |
| 95–110 | Open approved Codex client; sign in; explain one file | Response cites a real path; learner checks it |
| 110–120 | Personal readiness card and exit demonstration | Start/stop lab and find next session unaided |

## Live demonstration script
Say: “GitHub stores our course files. Your computer runs the lab. Codex assists with work in the folder you give it. These are separate systems.” Show the repo URL, then a filesystem folder, then the localhost URL. Stop the server to show why refreshing localhost fails. Start it again.

During the AI demo, ask for explanation only. Then let a volunteer identify a claim in the output and verify it against the file. Do not begin with cloud keys or external integrations.

## Troubleshooting and differentiation
Wrong directory: locate package.json before running npm. Missing command: reopen terminal after installation and check node --version. Port occupied: stop the other course server or ask coach to set ACADEMY_PORT. Windows shell policy: try Command Prompt and npm.cmd rather than broadly weakening system policy. Restricted installation: use a partner machine and the public course materials; record the blocker for the instructor.

Fast finishers create a personal branch and a local learning note; nobody needs write permission to the course organization.

## Exit evidence
Show local lab, explain Candidate A vs B, locate next session, name the two account systems. Record ready / coach follow-up with the exact blocker. No grades based on install speed.
