# Lab 2 — Codebase Detective

**Time:** 35 minutes  
**Team:** driver and verifier

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Tell Codex whether you use macOS zsh, Linux bash, Windows PowerShell or Command Prompt before requesting commands. Open the extracted repository in your editor, preserve filename case, and run `npm test` (`npm.cmd test` if PowerShell blocks npm). Do not use another learner's absolute paths.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The training CRM’s “Send inquiry update” button appears to do nothing for staff users. You are asked to investigate the report, not to rush a fix.

## Mission

Use Codex and repository tools to map the relevant request path and create a focused investigation plan. You may read and run approved tests; do not edit production-like settings or send a message.

## Steps

1. Read `AGENTS.md`, the report in this handout, [R1](../fixtures/allocation-requirements.md) and [issue G102](../fixtures/github-issues.json). The staff report and concierge issue are different claims; investigate each without assuming either demands a permissions change.
2. Complete an [AI task brief](../templates/ai-task-brief.md) asking Codex to locate the relevant code and tests.
3. Ask Codex for a plan before any proposed code change.
4. Independently verify the files/functions it cites.
5. Run one approved existing test or static check.
6. Write your investigation result: likely path, evidence, open question, and recommended next step.

## Deliverables

- AI task brief
- repository map with at least three verified paths/references
- one tool/test result
- one question that requires a product owner or engineer rather than a guess

## Success rubric

A successful team is able to say “we do not yet know” precisely. A speculative root cause is not a finding.

## Stretch

Have Codex propose a small test addition. Review the diff for scope, selector/fixture stability, and whether the expected behavior is actually specified.

## Product Studio homework — Kick off your own repository

Finish the approved-proposal PR, three initial issues, README and project instructions. Confirm your client/model/host and spending ceiling. Build only the first small approved slice; arrange human feedback on the kickoff PR.

Budget two to three hours, including evidence and review preparation; ask for coaching or scope adjustment if blocked. Record progress using [the milestone template](../templates/project-milestone.md) in **your own product repository**, not the practice packet. See [the complete project roadmap](../COURSE_PROJECT.md), [GitHub workflow](../PROJECT_GITHUB.md) and [small-model guide](../SMALL_MODEL_GUIDE.md). The practice lab above remains separate from your individual product.
