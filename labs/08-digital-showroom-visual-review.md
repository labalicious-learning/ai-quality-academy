# Lab 8 — Digital Showroom Visual Review

**Time:** 35 minutes  
**Team:** groups of three

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Record OS/browser/version, CSS viewport, zoom and display scaling. Use the platform guide's capture and keyboard routes; on macOS check Keyboard Navigation if Tab skips controls. Compare screenshots within the same OS/browser baseline; font smoothing differences alone are not bugs. The included target is the local launch preview; phone-width emulation is not a real-device test.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

The Community Launch preview lets visitors choose a package. Marketing says it “looks fine,” but a visitor reports trouble using it on a phone. Test [R7](../fixtures/allocation-requirements.md) against both candidates. There is no menu, modal or overlay in this target.

## Mission

Conduct a visual, responsive, and keyboard-accessibility review without confusing aesthetic preference for a defect.

## Test matrix

| Viewport | Required check |
| --- | --- |
| Desktop 1440px | capture each candidate; activate Choose package and verify “Package selected” |
| Tablet 768px | readable labels, preview containment and reachable controls |
| Mobile 375px | compare document width to viewport; inspect clipping and reachability of Choose package |
| Keyboard-only | Tab to Choose package, check visible focus and activate with Enter or Space; verify the resulting text |

Keep OS/browser, viewport and zoom identical for each A/B comparison. Reload before each interaction run. Inspect the caption's computed foreground/background colors; measure contrast before making a numeric claim. A passing keyboard check is valid evidence—do not invent a focus trap.

For an approved intentional change, switch Theme from Community festival to Creative pop-up shop. The heading is designed to change to the selected theme; compare that change separately from layout defects. Candidate B is a comparison implementation, not an automatic accessibility certification.

## Deliverables

- annotated screenshots with viewport and build details;
- targeted accessibility-check result;
- one evidence packet written in user-impact language;
- one intentional visual change that should be approved rather than reported as a defect.

## Stretch

Use an AI visual review to generate hypotheses. Validate or reject each one through DOM, keyboard, or reproducible viewport evidence.
