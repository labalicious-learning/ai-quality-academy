# My learning path — your private course companion

Open **My learning path** from the course navigation. Once published, its complete URL is https://learn.labalicious.com/my-path.html. In a locally built course, open `dist/my-path.html`. The planner works with the static course files; no account, server, paid model or GitHub connection is required.

## A small next step, connected to your product

The planner opens to **Today**: one prominent next action, the matching preparation links and your current project milestone. Open **Your project**, **Progress & milestones**, **Evidence**, **Feedback**, **Help**, or **Backup & privacy** when you need those tools. Shortcuts open the correct section and move keyboard focus there. Recovered form drafts open their section so unfinished work is not hidden.

The next action follows your self-tracked lesson/project progress and recorded feedback; it is not an AI recommendation or instructor approval. A waiting-for-feedback action prepares a review request but does not send it. Existing version 1 planner backups and saved progress remain compatible.

The schedule card displays only course dates deliberately published by the instructor, in your browser's local timezone. With no dates published, it says **Dates not announced yet**. This is not a live Google Calendar connection, attendance tracker or enrollment check. Use your actual instructor invitation for meeting access; the public site never includes participant lists or private meeting links.

1. Save an alias-safe product name and optional repository link.
2. Track each lesson separately from its setup/project milestone. Choose not started, underway, waiting for feedback or done. These are your notes, not instructor approvals.
3. Follow **Your next move**: an in-progress/open feedback item comes first, then your earliest unfinished lesson or milestone. Waiting means prepare a focused review request; you can still visit any lesson. The planner does not send that request or verify scope approval.
4. Add evidence references: a PR, issue, screenshot location or observed check result, with its session and relevant rubric IDs. Include exact revisions in your notes. Use **Edit evidence** to update an entry after a new revision. Files stay in your project; the planner does not fetch links, upload images, execute code or validate evidence.
5. Capture a sanitized feedback summary: what needs attention, why, and what evidence would resolve it. Edit the summary or mark your follow-up status as you work. Use the Add/Save button to save form entries before navigating away or exporting; unfinished form text is not included in backups. Private instructor decisions, identities and assessment records belong outside this planner.
6. Use **Help me get unstuck** for a goal hint, an investigation hint and an optional bounded AI task brief. Hints are prepared guidance, not live AI. Choose the session explicitly; copying a brief does not send it anywhere. Review it before sharing and add only the files you authorize. It contains no personal planner notes or instructor answer keys.

You can use the same artifact for several [rubric criteria](AIQAA_RUBRIC.md). Reference counts measure organization, not evidence quality or demonstrated skills. Even when every box is checked, [completion and certification](CREDENTIALS.md) remain Jared's separate decisions. This is not a submission system, gradebook or certificate issuer.

## Storage, backup and privacy

Data is stored in this browser profile for this site's origin, under `labalicious.learning-path.v1`. It is **not encrypted** or account-protected. Other people using the profile, browser extensions and other scripts on the same origin may be able to access it. Use a separate browser profile on shared machines. Do not enter secrets, real customer/student data, private identities or sensitive feedback. Evidence links are opened only when you click them; use caution with imported links.

- Export a JSON backup regularly, especially before clearing browser data, moving computers, changing browsers/site addresses or using a private window. Keep exports private; do not commit them or submit them to the public lab-submissions repository.
- Restore on Mac, Linux or Windows by choosing that file, inspecting the preview and explicitly confirming replacement. Restore is not a merge. Export the destination planner first if you want to retain it. Cancelling or rejecting an invalid backup leaves current data unchanged.
- Only version 1 backups, at most 1 MB, with supported fields and safe HTTPS links are accepted. There is a limit of 150 evidence references and 150 feedback notes. A future unsupported format is rejected rather than silently dropping fields.
- Clearing browser data, deleting a profile or closing some private sessions may erase progress. Different devices, browsers, origins and local-file locations do not automatically share progress. Local-file storage behavior varies; export before leaving an offline/local copy.
- If storage is unavailable or full, the planner warns that changes remain only in the current tab. Export before leaving. A damaged saved record is not overwritten automatically; the export button offers its original contents for recovery.
- Another tab's saved change pauses further saves in this tab. Export this view if needed, then reload the latest saved progress. There is no collaborative merge; use one editing tab at a time. The check reduces accidental overwrites but is not a transactional multi-user database.
- **Clear this planner** requires confirmation and removes only this planner's saved record. It does not delete repository files, original evidence, other site records or your downloaded backups. Without a backup, cleared progress cannot be restored by the course team.

The dashboard makes no background network/API requests. Loading the hosted course still requests its normal static assets; following a link leaves the page, and manually pasting a brief into an AI service is your own sharing action. No telemetry, credentials or automatic model spending is added by this feature.

## Instructor use

Introduce the planner during Session 00 and connect milestones to Product Studio in Sessions 01–02. Learners may instead use the existing Markdown milestone template; this planner adds no assessed deliverable. At a review, inspect original evidence and the approved agreement, not a screenshot of checked boxes. Use the existing submission process for actual review requests.

## Recover drafts and prepare a review

Unfinished project, evidence and feedback forms autosave separately from saved planner entries. Reloading the same page in the same browser profile recovers those drafts when storage succeeds. Use each form’s Save/Add action to finish it. The dashboard also has section shortcuts, an **Update this milestone** button and readable criterion names.

Drafts are **not included in planner JSON backups** or automatically included in review notes. Finish or privately copy them before changing browsers or clearing site data. “Discard private drafts” removes unfinished form text; clearing the planner removes saved entries, not those drafts. If storage fails or another tab changes a draft, autosave pauses and warns you. Do not depend on reload recovery after that warning.

From the dashboard, choose **Prepare a project review**:

1. Choose Session 01–12 and supply the public project URL, full course/project commit SHAs and public-facing context.
2. Select saved evidence for that milestone. Every reference is opt-in; each planner note has its own opt-in checkbox. A URL-less reference needs an included artifact-location note.
3. State expected vs. observed results, actual verification, environment/reset steps, limits and your review question. You can honestly say a check has not been run.
4. Generate the Markdown preview. Inspect every line and the linked artifacts. An obvious-secret check is only a reminder, not a comprehensive privacy guarantee.
5. Approve that exact preview and download `project-review.md`. Changing inputs or source evidence clears approval. Nothing is posted, fetched, graded or submitted automatically.

Review-form drafts are stored separately, but evidence selection and sharing approval are never restored. Private planner feedback, progress and unrelated notes are excluded from the download. This note is **not a complete lab-submissions packet**: the manifest, evidence directory, public-safety review and AI-use note in [Submit work](SUBMISSIONS.md) still apply when using that intake. Use your own project PR or the instructor-approved channel for project review.

All planner data and drafts are plaintext browser-local storage. Anyone with access to that browser profile may be able to read them. They do not synchronize between devices, browser profiles, domains or local-file and hosted versions. Never store credentials, private instructor records or real customer data here.

See [Shift Garden](EXAMPLE_PROJECT.md) for a runnable fictional example of a boundary defect, regression and honest review evidence.

© 2026 Jared Cluff. Student rights in original work are preserved.
