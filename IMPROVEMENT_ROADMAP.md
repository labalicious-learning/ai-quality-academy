# Learning experience improvements

© 2026 Jared Cluff. All rights reserved.

## First implementation increment

- Browser-local form draft recovery, current-milestone shortcut and readable rubric labels in **My learning path**.
- Guided public-facing project-review note: explicit evidence selection, opt-in notes, raw-input privacy reminders, exact-preview approval and local download. It does not post to GitHub or replace the lab intake.
- [Shift Garden](EXAMPLE_PROJECT.md): runnable fictional product slice, negative control, shared regression and an annotated evidence/review narrative. This is not a complete certified example or authentic student development history.

These features require no account connection, paid inference or new service. See [the learner guide](LEARNING_PATH.md) for storage limits and the distinction between private backups, unfinished drafts and shareable review notes. Publication is a separate step after verification.

## Second increment: a consistent student journey

The September 15 review found useful hands-on assignments and strong evidence boundaries, but uneven orientation, long handouts without section navigation, and leftover point-based coaching language. Implemented:

- Session guides for all 13 labs, with purpose, evidence target, source preparation and links to the activity/deliverables.
- Optional recall and support prompts within existing class time; no new test or worksheet.
- Static section navigation, stable heading anchors, keyboard skip links and responsive handout layouts.
- A learner help/catch-up guide and descriptive coaching language in place of numeric lab scoring.

The earlier browser check reached all Shift Garden interactions; its remaining failure was a browser-generated favicon request outside the test server’s course-path prefix. An explicit no-request favicon now prevents that fallback. The September 15 local full browser run passed: 1,695 file links, 163 slides, reader, planner, review notes, Shift Garden and all 13 guided handouts online/offline with JavaScript disabled. Handouts were checked at 375/768/1440 widths, with keyboard navigation and reduced motion. The 39 core tests, four handout build tests, content checks and build also passed. These observations are from local macOS/Chrome, not proof that Windows/Linux CI or an assistive-technology audit has run. No changes have been published as part of this increment.

These changes improve access and orientation. They do not by themselves establish learning effectiveness. Highest-value remaining work is a real mixed-experience pilot, timely private human feedback and complete examples with authentic development provenance. More dashboards or a general-purpose chatbot should not precede those needs.

## Third increment: Today and release reliability

Implemented locally September 20:

- A Today view using the existing planner, with one prominent next action, session preparation, project milestone and honest schedule-pending state.
- Native expandable sections for detailed tools, keyboard-focusable shortcuts and automatic reveal of recovered drafts. Version 1 saved state and exports remain unchanged.
- An optional public-date configuration with strict field validation, no roster or meeting links, and local-timezone display. It is not a live Calendar integration or enrollment record.
- Stable-target browser actions and immediate focus positioning for editing/restoring. Prior broad-browser failures varied between evidence editing and backup restore; isolated editing passed. Earlier click diagnostics showed changing control positions during scrolling. No assertion or required persistence behavior was removed.

Verification results belong to the release evidence, not this implementation list. Signups, approval emails and invitations still require live end-to-end verification; passing static-site tests does not establish that integration. No schedule is invented and no real learners are contacted by the test suite.

September 20 local verification: 53 automated tests and four handout build tests passed. The full macOS/Chrome browser run passed 1,799 local links, 163 slides, homepage search, online/offline Markdown reading, Today, planner CRUD/repeated edit saves/backup restore/multi-tab recovery, review-packet privacy checks, Shift Garden and all 13 handouts. Today was checked at 375/768/1440 widths, with keyboard navigation and Chicago/Berlin timezone emulation. No script errors were reported. This is not Windows/Linux CI evidence, a screen-reader audit, a learner pilot, or live Google enrollment verification. The changes remain local until a deliberate publication step.

### Publishing public dates

Keep `publicSchedule` in `site.config.json` empty until dates are confirmed. Each optional row has exactly `session` (00–12), `start`, and `end` (ISO timestamps with explicit UTC offsets). Use actual two-hour sessions in session order. Do not add email addresses, names, meeting URLs, private Calendar IDs or signup records. Changes must be rebuilt and published; they do not reschedule existing Google invitations.

## Next: complete examples, not fabricated history

Build an end-to-end exemplar through real staged work and independent human review. Preserve the actual branches, PR discussion, revision SHAs and corrections. Annotate one demonstrated criterion and one not-yet-demonstrated criterion at a time, then assemble full worked reviews for contrasting project types. Do not declare eligibility while any required provenance or observation remains unverified.

## Next: private instructor review workspace

Start from the approved agreement, 21-row private worksheet and local decision checker. Needed capabilities: queue, frozen evidence/version references, independent reviewer findings, follow-up requests, decision history and separate completion/certification decisions. AI may help organize evidence; it cannot impersonate a second reviewer or issue an award.

Before implementation, decide the private hosting/access model and retention/export policy. The public static course and student browser planner must not become the gradebook. Do not add real identities, student decisions or credentials to this repository.

## Next: a real learner pilot

Invite a small voluntary group with mixed experience and Mac/Linux/Windows access. Use fictional aliases in public material; keep contact details and observation records private. Get appropriate permission before recording screens or collecting any personal information, especially with younger participants.

Ask each participant to complete setup, save/recover a draft, find the current milestone, reproduce the example regression and prepare a safe review note. Observe without coaching first; record blockers, unclear labels, time spent and unintended sharing. Inspect the downloaded file together. Collect usability feedback, not test scores.

Have two humans independently review the same frozen example evidence using the same agreement. Compare criterion-level findings and time; reconcile disagreements before changing guidance. Set improvement targets from the baseline instead of claiming reliability from automated checks alone.

The pilot has not been run. Browser automation establishes repeatable UI behavior, not whether beginners can learn effectively from it.
