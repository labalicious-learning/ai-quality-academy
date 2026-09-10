# Run the academy

New to the course? Begin with [Session 00](labs/00-course-setup.md) for accounts, installation, repository access and your first local run.

All labs support Mac, Linux and Windows. Use the [platform guide](PLATFORM_GUIDE.md) for shell commands, screenshots, keyboard differences, CSV imports, alternate ports and optional-tool requirements. In PowerShell, substitute `npm.cmd` / `npx.cmd` if `.ps1` execution is blocked.

## Local setup
Node 22+ and a browser are sufficient for the lab server and core checks. No cloud account, real inbox, CRM, database, or model API key is required for the simulation.

From the repository:
```text
npm start
```
Open http://127.0.0.1:4178 in your browser. Candidate A contains defects; Candidate B is the fixed comparison. Each learner runs a local copy. Restart the server to clear synthetic events. Ctrl+C stops it.

Run fixture checks:
```text
npm test
npm run verify
```

Maintainers/instructors with website dependencies installed and Chrome available also run `npm run check:labs`. It verifies browser journeys, keyboard/viewport behavior and stale-response protection; it is not a substitute for a learner's own evidence. Set CHROME_PATH if Chrome is installed in a nonstandard location. CI runs this check on Mac, Linux and Windows.

For Codex, open a learner copy of this repository in the organization's approved client. Have it inspect sandbox/ and fixtures/allocation-requirements.md. Authenticate through the client's normal sign-in flow; no course script reads credentials. Core labs are open-book, but learners reproduce their own evidence. Live model evaluation uses a separate actor workspace with only approved inputs and prompt, not this whole repository or instructor answers.

## Concrete material mapping
This mapping names the practice exercises and final showcase. Handouts and formative coaching target the stated materials; richer connected deployments are optional extensions, never unstated requirements. The individual [course project](COURSE_PROJECT.md) has its own repo, scope and milestone evidence.

| Lesson | Included material | Mode |
| --- | --- | --- |
| 1 | fixtures/claim-packet.md; screenshot captured from local allocation page | document investigation + browser |
| 2 | sandbox/domain.mjs, server.mjs, index.html; fixtures/allocation-requirements.md | local repository investigation |
| 3 | fixtures/inquiries.csv, budget.csv, discord-thread.md, github-issues.json, source-register.md | files/Sheets/Docs |
| 4 | fixtures/allocation-requirements.md; test-charter template | design and clarification |
| 5 | local CRM panel, both candidates, roles and tenants | bounded browser exploration |
| 6 | fixtures/authorization-requests.md; scripts/lab-request.mjs | simulated read/PATCH/send authorization |
| 7 | sandbox/starter.spec.mjs, plus built-in npm test | optional Playwright or assertion design |
| 8 | local launch preview, 375/768/1440 viewports, keyboard | visual and interaction review |
| 9 | fixtures/integration-cases.md; inbox JSON; /api/events | stored events and decision flags, not CRM writes |
| 10 | fixtures/release-rounds.md | tabletop exercise |
| 11 | input-only model-cases.json, mock-model-outputs.json; model-evaluation-protocol.md | offline scoring; optional bounded live trials |
| 12 | Own product repo, release and [showcase guide](labs/12-defensible-qa-verdict.md) | Individual presentation to Jared after ongoing review; no separate exam |

## Three practice-lab participation routes
- Foundation: browser, files and evidence writing. Code is explained with Codex; learner can demonstrate understanding without typing syntax.
- Builder: add an assertion, run tests, review a diff.
- Stretch: repeat experiment with another allowed model/tool, or automate a workflow and quantify errors.

Learners choose festival, gaming tournament, creative pop-up, or community event as the practice theme. Names change, but requirements and coaching remain equivalent. These practice routes do not silently waive the agreed working-product expectations; arrange project equivalents privately with the instructor.

## Business apps without enrollment friction
Core path uses the supplied exports. Learners can import CSV into their training Google Sheets account and paste the approved memo into a training Google Doc. GitHub and Discord exercises use exports unless the instructor has created an isolated course repo/channel and granted access. Lack of a connector does not prevent the lesson.

Optional connected practice: with instructor-provided training workspace access, ask Codex to list available tools, retrieve only one scoped document/issue, propose an update, and execute the already authorized change. Verify the resulting state in the original app. If no approved connector exists, use the export path; do not install an arbitrary connector.

## Playwright extension
In the learner copy only:
```text
npm install --save-dev @playwright/test
npx playwright install chromium
npx playwright test sandbox/starter.spec.mjs
```
The starter deliberately passes on a broken journey because it only checks a heading. Learners improve it, observe a failure on Candidate A, then select Candidate B to prove the fixed result. Use R3 to design the assertion before instructor debrief. This dependency is optional and requires a one-time network download.

## Shared API example
With the local server running, these Node commands work in bash/zsh, PowerShell and Command Prompt:
```text
node -e "fetch('http://127.0.0.1:4178/api/contacts/A-101?tenant=Beacon&mode=buggy&role=owner').then(async r => console.log(r.status, await r.text())).catch(e => { console.error(e.message); process.exitCode=1; })"
node -e "fetch('http://127.0.0.1:4178/api/contacts/A-101?tenant=Beacon&mode=fixed&role=owner').then(async r => console.log(r.status, await r.text())).catch(e => { console.error(e.message); process.exitCode=1; })"
```
These use synthetic identities. Do not apply the pattern to another system without authorization.

## Instructor setup before every cohort
Run npm test and npm run verify. Open both candidates, deliver one event and restart. Confirm the approved client/model route works using [the small-model guide](SMALL_MODEL_GUIDE.md); Qwen3.8-27B is recommended, with compatible hosted/local clients and no mandatory premium subscription. Print/download slides. Complete CAPABILITY_BASELINE.md's actual model/tool card. Have the export-only business path ready if a live app is unavailable.

The full production systems mentioned in original plans—real OAuth, Postgres RLS, payments, AWS release lanes—are discussed using requirements and evidence packets. This local app does not implement them and must not be used to claim they have been tested.
