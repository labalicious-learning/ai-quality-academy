# Lab 8 — Digital Showroom Visual Review

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Record OS/browser/version, CSS viewport, zoom and display scaling. Use the platform guide's capture and keyboard routes; on macOS check Keyboard Navigation if Tab skips controls. Compare screenshots within the same OS/browser baseline; font smoothing differences alone are not bugs. The included target is the local launch preview; phone-width emulation is not a real-device test.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The Community Launch digital showroom has shipped a new configuration overlay. Marketing says it “looks fine,” but an owner reports trouble using it on a phone.

## Mission

Conduct a visual, responsive, and keyboard-accessibility review without confusing aesthetic preference for a defect.

## Test matrix

| Viewport | Required check |
| --- | --- |
| Desktop 1440px | option state, layout, visual baseline comparison |
| Tablet 768px | readable labels, overlay position, no clipped controls |
| Mobile 375px | menu/overlay interaction, touch target intent, no horizontal trap |
| Keyboard-only | visible focus, logical order, ability to select/close |

## Deliverables

- annotated screenshots with viewport and build details;
- targeted accessibility-check result;
- one evidence packet written in user-impact language;
- one intentional visual change that should be approved rather than reported as a defect.

## Stretch

Use an AI visual review to generate hypotheses. Validate or reject each one through DOM, keyboard, or reproducible viewport evidence.
