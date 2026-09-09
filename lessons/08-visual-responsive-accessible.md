# Lesson 8 — Visual, Responsive, and Accessibility QA

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [08-visual-responsive-accessible](../decks/08-visual-responsive-accessible.md)  
**Lab:** [Digital Showroom Visual Review](../labs/08-digital-showroom-visual-review.md)

## Learners will be able to

- inspect mobile, tablet, and desktop interfaces for layout and interaction regressions;
- combine visual comparison with semantic accessibility checks;
- identify when a model’s visual impression requires a deterministic or human follow-up; and
- write inclusive, user-impact-based UI findings.

## Instructor preparation

Prepare a Community Launch configurator/showroom sandbox with responsive screenshots and deliberate defects: clipped text, missing accessible name, low-contrast text, a mobile menu trap, and a visually plausible but wrong option overlay. Have an axe scan ready but do not let it be the only exercise.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: display a subtle visual diff and ask what a pixel comparison cannot tell us. |
| 10–25 | Teach responsive checks, visual baselines, semantic HTML, keyboard flow, accessible names, and contrast. |
| 25–40 | Demo desktop-to-mobile inspection plus a focused axe run. Explain why an all-green scanner does not equal an accessible experience. |
| 40–50 | Guided practice: ask AI to describe a screenshot, then verify its claims with DOM, keyboard, and viewport evidence. |
| 50–60 | Break. |
| 60–95 | Teams complete a visual review at three viewports, with a keyboard-only pass and a targeted accessibility check. |
| 95–110 | Critique findings for specificity: who cannot do what, at which viewport, under which condition? |
| 110–115 | Discuss approval of intentional visual baseline changes. |
| 115–120 | Exit ticket: write one accessibility test that is not a color-contrast scan. |

## Assessment

Teams submit before/after evidence, viewport/device details, and at least one semantic or interaction verification for every visual claim.
