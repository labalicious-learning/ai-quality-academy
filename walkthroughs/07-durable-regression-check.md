# Session 07 — Regression Check, one step at a time

[Back to the lab](../labs/07-durable-regression-check.md) · [All help guides](../LAB_HELP.md)

**Finish with:** a small test diff, actual red/green results, locator rationale and coverage limit. Use 35 minutes. If browser automation is blocked, use the lab's assertion-design route and label execution unverified.

## 1. Open the starter and requirement

Read R3 in [the requirements](../fixtures/allocation-requirements.md). In your local course copy, open `sandbox/starter.spec.mjs`. It checks a heading after clicking **Load allocation**. Ask yourself what that fails to establish about the record.

Create local `submissions/session-07` for your brief, notes and run results. Only the learner starter test should change; preserve the deliberately buggy candidate, fixed comparison and requirements.

## 2. Prepare the two terminals

In terminal 1, run `npm start` and keep it running. In terminal 2, follow [the optional Playwright setup](../LAB_SETUP.md#playwright-extension). On Windows PowerShell use `npm.cmd` and `npx.cmd` if needed. Linux browser dependencies may need instructor help; [platform guidance](../PLATFORM_GUIDE.md#optional-browser-automation) explains the supported route.

**Checkpoint:** http://127.0.0.1:4178 opens and the starter can run. A green heading-only starter is not sufficient evidence of a successful allocation journey.

## 3. Plan the assertion before editing

Copy [the task brief](../templates/ai-task-brief.md). Tell Codex to inspect the starter, R3 and relevant local markup/API code, explain the weakness, then propose the smallest patch. Ask for a stable selector, an observable reserved-record assertion and a relevant response/status condition. Review the proposal yourself before applying it.

Do not make the expected outcome weaker to obtain a pass. A wait for the relevant response must be registered before the click that triggers it; fixed sleeps and repeated retries can hide defects.

## 4. Run the same changed test against both candidates

Use terminal 2. Mac/Linux:

```sh
CANDIDATE=buggy npx playwright test sandbox/starter.spec.mjs
CANDIDATE=fixed npx playwright test sandbox/starter.spec.mjs
```

Windows PowerShell:

```powershell
$env:CANDIDATE = "buggy"
npx.cmd playwright test sandbox/starter.spec.mjs
$env:CANDIDATE = "fixed"
npx.cmd playwright test sandbox/starter.spec.mjs
Remove-Item Env:CANDIDATE
```

Windows Command Prompt:

```bat
set "CANDIDATE=buggy"
npx.cmd playwright test sandbox/starter.spec.mjs
set "CANDIDATE=fixed"
npx.cmd playwright test sandbox/starter.spec.mjs
set "CANDIDATE="
```

Run lines separately and save the results before continuing. These environment settings select runtime candidates; they are not Git branches. If using an alternate port, set `ACADEMY_PORT` in both terminals using [the platform instructions](../PLATFORM_GUIDE.md#if-port-4178-is-occupied).

**Checkpoint:** the improved check fails A for the intended allocation problem and passes B. Installation, timeout or connection errors do not count as a meaningful red result. `npm test` does not run this Playwright test.

## 5. Save and check your work

Review the before/after test diff, stable-locator explanation and one uncovered behavior. Git users can inspect `git diff -- sandbox/starter.spec.mjs`; ZIP users can compare a preserved starter copy in their editor. Include the diff and genuine run evidence in [the practice packet](../SUBMISSIONS.md).

## If you get stuck

If installation cannot be completed, write the exact selector, expected record, response/status condition, expected A/B behavior and why it detects the defect. Mark runs **unverified** and arrange hands-on follow-up. Never invent logs. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
