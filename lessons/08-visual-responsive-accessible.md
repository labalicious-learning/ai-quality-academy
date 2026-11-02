# Lesson 8 — Visual, Responsive, and Accessibility QA

**Duration:** 90 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [08-visual-responsive-accessible](../decks/08-visual-responsive-accessible.md)  
**Lab:** [Digital Showroom Visual Review](../labs/08-digital-showroom-visual-review.md)

## Learners will be able to

- inspect mobile, tablet, and desktop interfaces for layout and interaction regressions;
- combine visual comparison with semantic accessibility checks;
- identify when a model’s visual impression requires a deterministic or human follow-up; and
- write inclusive, user-impact-based UI findings.

## Instructor preparation

Use the local launch preview, R7 and both candidates. Prepare matched-viewport captures, computed color inspection and keyboard checks. Theme-driven heading changes are intentional. There is no menu, modal, missing-label fixture or focus trap. An instructor-prepared axe scan is optional; the core targeted check is manual keyboard/semantic verification.

**Live schedule:** Mondays, 7:30–9:00 p.m. Central (America/Chicago). Full labs and product implementation happen outside class.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: display a subtle visual diff and ask what a pixel comparison cannot tell us. |
| 10–25 | Teach responsive checks, visual baselines, semantic HTML, keyboard flow, accessible names, and contrast. |
| 25–40 | Demo desktop-to-mobile inspection plus a keyboard/semantic check; use an optional preconfigured axe scan if available. Explain why a green scanner is not accessibility certification. |
| 40–50 | Guided practice: ask AI to describe a screenshot, then verify its claims with DOM, keyboard, and viewport evidence. |
| 50–60 | Break. |
| 60–65 | Independent-lab handoff: open the linked resources and walkthrough, explain the deliverable and show where to save/submit it. Complete the full lab after class. |
| 65–80 | Critique prepared findings for specificity: who cannot do what, at which viewport, under which condition? |
| 80–85 | Discuss approval of intentional visual baseline changes. |
| 85–90 | Exit ticket: write one accessibility test that is not a color-contrast scan. |

## Independent lab — after class

Teams complete a visual review at three viewports, with a keyboard-only pass and a targeted accessibility check. Budget about 35 minutes of focused practice; setup and troubleshooting may need additional time. Work solo or arrange a partner outside class. Use the lab’s linked resources and step-by-step walkthrough. Save the existing deliverables and use the [submission workflow](../SUBMISSIONS.md). Bring one verified result or a specific blocker to the next class; arrange help if you cannot finish. Product Studio homework remains separate.


## Formative coaching

Teams submit before/after evidence, viewport/device details, and at least one semantic or interaction verification for every visual claim.

## Product Studio connection — Make the product feel intentional

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 90-minute session. The build work happens as homework. Refine typography, spacing, color and useful states. Record two design iterations overall, matched before/after captures, keyboard navigation, 375/768/1440-width and zoom checks; fix a real usability issue.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
