# Session 08 — Visual Review, one step at a time

[Back to the lab](../labs/08-digital-showroom-visual-review.md) · [All help guides](../LAB_HELP.md)

**Finish with:** annotated captures, a keyboard/accessibility result, one evidence packet and one approved intentional change. Use 35 minutes and compare the same environment for A and B.

## 1. Open the local preview

Start the local server and open http://127.0.0.1:4178. Read [R7 and the theme contract](../fixtures/allocation-requirements.md). Click the **Showroom** navigation link or scroll to **Launch preview**. Create local `submissions/session-08` for images and `visual-review.md`.

Record OS/browser, zoom and display scaling. [Platform help](../PLATFORM_GUIDE.md#browser-evidence-and-keyboard-review) covers screenshot shortcuts and responsive tools.

## 2. Compare the three widths

Open the browser's responsive/device toolbar. Set width to **1440 CSS pixels** and browser zoom to **100%**. Select Candidate A, reload, then inspect the preview. Record selected candidate after reload; reselect B when testing B because reload resets the selection.

Capture the preview and click **Choose package**. Check the resulting text, not just the button's appearance. Repeat with Candidate B under the same conditions.

Repeat A/B at **768**, then **375** pixels. Check readable labels, horizontal overflow, clipping and whether the action remains reachable. Name captures by candidate and width, such as `candidate-a-375.png`. Add annotations without obscuring the observed problem.

**Checkpoint:** each claimed difference has matched before/after conditions. A narrow desktop browser is not proof of behavior on a physical phone.

## 3. Test the keyboard path

Reload, select the intended candidate, then use **Tab / Shift+Tab** to reach Choose package. Look for visible focus and activate with **Enter or Space**. Verify **Package selected** appears. Record what actually happened, including a passing result.

If Mac Tab navigation skips controls, check Keyboard Navigation/browser settings with the platform guide before reporting a defect. Keyboard settings are part of your environment evidence.

## 4. Separate measurements from preferences

Inspect the caption's computed foreground and background colors in developer tools. Record them; use an instructor-approved contrast checker if making a numeric contrast claim. If you have not measured it, label the contrast concern unverified. A preference for a different color is not automatically a requirement violation.

Switch **Theme** to **Creative pop-up shop**. Check the approved heading change against the contract and record it separately from defects. Candidate B is a comparison implementation, not an accessibility certificate.

## 5. Save and check your work

Use [the evidence template](../templates/evidence-packet.md) to explain one supported result and user impact. Include your keyboard check, matched captures and intentional-change note in [the practice packet](../SUBMISSIONS.md). Product styling work is separate homework.

## If you get stuck

If you cannot reproduce a visual difference, verify candidate, viewport, zoom and reload state first. If measurement is unavailable, save the observation and request help rather than inventing a ratio. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
