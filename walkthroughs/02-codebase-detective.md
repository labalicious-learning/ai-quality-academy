# Session 02 — Codebase Detective, one step at a time

[Back to the lab](../labs/02-codebase-detective.md) · [All help guides](../LAB_HELP.md)

**Finish with:** an AI task brief, a verified map of at least three code references, one actual check result and one unresolved product/engineering question. Use the existing 35-minute lab; this guide adds no extra assignment.

## 1. Open and prepare

Open the course folder in your editor. Read [AGENTS.md](../AGENTS.md), the [lab report](../labs/02-codebase-detective.md#scenario), [R1](../fixtures/allocation-requirements.md) and issue G102 in [github-issues.json](../fixtures/github-issues.json). Create local `submissions/session-02` scratch space using [the saving guide](../LAB_HELP.md#save-your-work).

**Checkpoint:** you can distinguish the staff report from the concierge report. A denied action may be required behavior for one role.

## 2. Write a bounded AI task

Copy [the task brief](../templates/ai-task-brief.md) into your scratch folder. Name the outcome, sources, your OS/shell, allowed read/test actions and no-edit/no-send limits. Give the assistant the brief, then ask it to inspect only the relevant files under `sandbox/`, R1 and G102. Do not supply instructor answers.

Ask: “Trace Send inquiry update from the click handler through the local route to its permission decision. Cite exact files and functions. Explain differences between staff and concierge. Propose an investigation plan before any edit.”

## 3. Verify three references yourself

Open `sandbox/index.html`, `sandbox/server.mjs` and `sandbox/domain.mjs`. Use your editor's Find command for `send` or the name the assistant cited. Check that each claimed function and behavior exists.

Create `investigation.md` with this table:

| File and function/line | Role in the request | What I checked myself | Open question |
| --- | --- | --- | --- |
| Your reference | Your explanation | Your evidence | Your question |

Add at least three verified references. A repository map is this small trace, not a drawing of every file.

## 4. Run one existing check

In an ordinary terminal inside the course folder, run `npm test` (`npm.cmd test` if PowerShell blocks npm). Save the relevant result and command in your notes. Record a failure as a failure. These tests verify intentionally seeded fixture behavior; a green suite does not mean Candidate A is ready to release.

**Checkpoint:** your result comes from your run, not from an AI prediction. No message was sent and no application files were changed.

## 5. Save and check your work

Explain the likely request path, what the evidence establishes, what remains unknown and the next investigation step. Include one question requiring a product owner or engineer. Follow [the practice submission workflow](../SUBMISSIONS.md). Your separate product repository kickoff belongs to Product Studio homework.

## If you get stuck

If AI cites a missing function, check spelling/case and ask for a corrected citation; do not invent the reference. If command execution is blocked, preserve the map and mark the check pending for coaching. [Ask for help with the step and exact error](../LAB_HELP.md).

© 2026 Jared Cluff.
