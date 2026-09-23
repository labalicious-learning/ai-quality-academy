# Labalicious course brochure and email copy

© 2026 Jared Cluff. All rights reserved.

## One-page brochure

The build generates `dist/training.html` from `scripts/training-page.html`, using the existing logo and `site/training.css`. It has a mobile layout, print styling, social-preview metadata and no scripts, tracking pixels, embedded forms, external fonts or cookies of its own. Signup goes through the existing course signup information page and Google Form; those services have their own privacy behavior.

Intended public URL **after publication**: https://learn.labalicious.com/training.html

Run `npm run build` to preview the generated page locally. Print / Save as PDF uses the compact one-page layout; check the preview and turn off browser headers/footers. Do not send the public URL until the deployment is verified.

With Chrome installed, `npm run check:training` checks mobile/desktop layouts, keyboard access and the one-page Letter print layout. It writes local preview screenshots and `dist/review/training-letter.pdf`; these are generated artifacts, not a separately maintained brochure. Keep private recipients and campaign data out of the build directory.

This brochure markets the course, not a specific scheduled cohort or tonight's rehearsal. Dates, delivery arrangements, tuition and places are not promised. Confirm those details before revising the page. The two awards, workload, public materials and interest-versus-enrollment distinction follow the existing course policy. No invented testimonials, job outcomes, accreditation or provider endorsements.

## Ready-to-personalize email

**Subject:** Go from asking AI to building with it

Hi [first name],

I’m putting together a Labalicious training cohort for people who want to do more with AI than ask questions.

Across 13 hands-on, two-hour sessions, you’ll practice building useful software, checking AI’s work and applying it to spreadsheets, documents and everyday business tasks. You’ll develop your own project with feedback and learn real GitHub habits along the way. No coding experience is required to start.

The project is the assessment—there’s no separate exam. Course completion and skills certification are separate, reviewed achievements.

Take a look and register your interest:
https://learn.labalicious.com/training.html

Cohort dates are still to be announced. Registering interest does not reserve a place. Plan for 2–3 hours of project work between sessions; a premium AI subscription is not required.

Jared Cluff
Labalicious Academy

## Before sending

- Verify the brochure and signup flow from a signed-out browser. Do not claim the brochure is live just because the local build passed.
- Personalize only with information you are authorized to use; remove the greeting placeholder.
- Send through an approved email system with the appropriate sender identification, contact details and opt-out handling. Honor suppression lists. This copy is not a complete campaign configuration or legal-compliance determination.
- Course signup is not permission for unrelated marketing. Do not export or reuse the learner roster as a marketing list without a separate authorized basis.
- Keep recipient lists and campaign records outside this public repository. No email is sent by this page or the build.
