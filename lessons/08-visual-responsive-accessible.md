# Lesson 8 — Visual, Responsive, and Accessibility QA

**Duration:** 120 minutes  

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

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: display a subtle visual diff and ask what a pixel comparison cannot tell us. |
| 10–25 | Teach responsive checks, visual baselines, semantic HTML, keyboard flow, accessible names, and contrast. |
| 25–40 | Demo desktop-to-mobile inspection plus a keyboard/semantic check; use an optional preconfigured axe scan if available. Explain why a green scanner is not accessibility certification. |
| 40–50 | Guided practice: ask AI to describe a screenshot, then verify its claims with DOM, keyboard, and viewport evidence. |
| 50–60 | Break. |
| 60–95 | Teams complete a visual review at three viewports, with a keyboard-only pass and a targeted accessibility check. |
| 95–110 | Critique findings for specificity: who cannot do what, at which viewport, under which condition? |
| 110–115 | Discuss approval of intentional visual baseline changes. |
| 115–120 | Exit ticket: write one accessibility test that is not a color-contrast scan. |

## Formative coaching

Teams submit before/after evidence, viewport/device details, and at least one semantic or interaction verification for every visual claim.

## Product Studio connection — Make the product feel intentional

Use up to five minutes of the existing closing/debrief time for a project next-step check; do not extend the 120-minute session. The build work happens as homework. Refine typography, spacing, color and useful states. Record two design iterations overall, matched before/after captures, keyboard navigation, 375/768/1440-width and zoom checks; fix a real usability issue.

Follow [the milestone map](../COURSE_PROJECT.md) and [review checklist](../templates/project-review.md). Record support needs privately; practice lab quality criteria are coaching, not an exam or numeric completion gate.
