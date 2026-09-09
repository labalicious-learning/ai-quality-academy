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

1. Read `AGENTS.md`, the issue, and the supplied acceptance criterion.
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
