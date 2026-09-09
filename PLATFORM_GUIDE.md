# Mac, Linux and Windows lab guide

Every core lab has the same learning goals on macOS, Linux and Windows. Use a supported OS, a current browser and a supported Node.js LTS release, version 22 or newer. Optional tools have their own OS requirements; a missing optional tool is not a failed assessment.

## Choose your workstation route

| Task | macOS | Linux | Windows |
| --- | --- | --- | --- |
| Shell used in this course | Terminal, zsh or bash | Terminal, bash | PowerShell; Command Prompt is a fallback |
| Get the files | Download ZIP and extract; Git CLI or GitHub Desktop optional | Download ZIP and extract; Git CLI optional | Download ZIP → Extract All; Git CLI or GitHub Desktop optional |
| Open the correct folder | Editor: File → Open Folder, then Terminal → New Terminal | Same editor route, or file manager's Open in Terminal | Same editor route; do not run inside the ZIP preview |
| Node installation | Official installer matching Apple silicon or Intel | Official download instructions for your distribution/architecture; confirm the version afterward | Official installer matching x64 or ARM64; reopen your terminal afterward |
| Copy / paste in editor | Command+C / Command+V | Ctrl+C / Ctrl+V | Ctrl+C / Ctrl+V |
| Stop the lab server | Control+C, not Command+C | Ctrl+C | Ctrl+C; answer the batch-termination prompt if shown |

Node downloads: https://nodejs.org/en/download

Optional editor: https://code.visualstudio.com/download

Optional Git CLI: https://git-scm.com/downloads

GitHub Desktop is officially available for macOS and Windows, not Linux. Linux learners do not need an unofficial port. [Official installation guide](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)

No course task requires Homebrew, WSL, Docker, a paid desktop office suite or changing your machine's security policy. Managed-device installation may need your administrator's approval. Pair on an approved machine if installation is blocked.

## Common commands

Run each line separately in the folder containing `package.json`. These commands work in the shells above:

```text
node --version
npm --version
npm start
```

Keep that terminal open. Open http://127.0.0.1:4178 in a browser on the same computer. This address is the local lab, not the public course site. A remote AI/cloud session cannot reach your computer's loopback server. Do not expose it with a public tunnel: its role selector is a simulation, not authentication.

Open a second terminal in the same folder for checks:

```text
npm test
npm run verify
```

If PowerShell blocks `npm.ps1` or `npx.ps1`, use `npm.cmd` / `npx.cmd` in place of `npm` / `npx`, or use Command Prompt. Do not change execution policy or run the course as administrator to bypass this.

Use the editor's Open Folder command instead of copying another learner's absolute path. In commands, double-quote paths containing spaces. Preserve the exact case of filenames: Linux commonly distinguishes `labs` from `Labs`. Save text as UTF-8, and show file extensions so a handout is not accidentally saved as `.md.txt`. Use relative paths in evidence and remove your username from shared screenshots.

## If port 4178 is occupied

Stop your earlier course server first. If another program owns the port, leave it alone and use 4179 in a new terminal:

macOS/Linux (zsh/bash):

```sh
ACADEMY_PORT=4179 npm start
```

Windows PowerShell:

```powershell
$env:ACADEMY_PORT = "4179"
npm.cmd start
```

Windows Command Prompt:

```bat
set "ACADEMY_PORT=4179"
npm.cmd start
```

Then open http://127.0.0.1:4179. Substitute 4179 in API examples too. For optional Playwright, set `ACADEMY_PORT` in its second terminal as well. Closing the terminals clears these session-only settings. Do not kill unrelated processes or open firewall ports.

## Browser evidence and keyboard review

Use Chrome, Edge or Firefox for the shared exercise; record the browser and version rather than assuming they behave identically. Open developer tools using the browser menu (More tools / Browser tools → Developer tools) if a shortcut is intercepted by your OS. In Chrome/Edge the shortcut is Command+Option+I on Mac and Ctrl+Shift+I on Windows/Linux. Use the Network and Console tabs, then reload the local page.

Set responsive viewport widths to 375, 768 and 1440 CSS pixels and browser zoom to 100%. A narrow desktop viewport does not prove real-phone behavior. Record OS/version, browser/version, viewport, zoom and any display scaling with each screenshot. Compare visual baselines on the same OS/browser/font environment; font smoothing alone is not a functional defect.

| Capture a region | Method |
| --- | --- |
| macOS | Shift+Command+4 |
| Windows | Windows+Shift+S; save the capture to a file |
| Linux | Desktop screenshot application; shortcuts vary by desktop/Wayland configuration |

For keyboard-only testing, use Tab / Shift+Tab to move, Enter or Space to activate, and Escape where the component supports dismissal. On Mac, check the system Keyboard Navigation setting if Tab skips controls; browser keyboard settings can also affect this. Record the setting rather than misreporting a platform preference as an app defect. Use browser menus for Save / Print → PDF; Linux labels and PDF destinations vary. Screenshots and exported network logs must contain synthetic data only.

## API requests without shell-specific curl syntax

With the server running, either open the GET URL directly and inspect its Network status, or run this Node command in a second terminal. It works in zsh, bash, PowerShell and Command Prompt and prints both status and body, including 403 responses:

```text
node -e "fetch('http://127.0.0.1:4178/api/contacts/A-101?tenant=Beacon&mode=buggy&role=owner').then(async r => console.log(r.status, await r.text())).catch(e => { console.error(e.message); process.exitCode=1; })"
node -e "fetch('http://127.0.0.1:4178/api/contacts/A-101?tenant=Beacon&mode=fixed&role=owner').then(async r => console.log(r.status, await r.text())).catch(e => { console.error(e.message); process.exitCode=1; })"
```

The role and tenant parameters are fictional training inputs, not real credentials. Use the inbox simulator UI for POST exercises so JSON escaping does not become the lesson. In Windows PowerShell, `curl` may be an alias rather than the curl executable; use the shared Node example instead.

## Optional browser automation

In your learner copy, install the instructor-approved Playwright version and Chromium using the commands in [Lab setup](LAB_SETUP.md). The browser download needs network access. On supported Linux distributions, missing browser libraries may require the instructor/admin to approve `npx playwright install --with-deps chromium`; do not blindly use sudo or disable the browser sandbox.

Check the current [Playwright OS requirements](https://playwright.dev/docs/intro) and [browser dependency instructions](https://playwright.dev/docs/browsers). If your OS is unsupported, use the assertion-design route or an approved partner machine; record the limitation instead of claiming an automated pass. A headless browser result is not a substitute for the manual keyboard review.

To switch the starter test to Candidate B after writing an assertion, keep the server running and use these commands in the test terminal:

```sh
# macOS/Linux
CANDIDATE=fixed npx playwright test sandbox/starter.spec.mjs
```

```powershell
# Windows PowerShell
$env:CANDIDATE = "fixed"
npx.cmd playwright test sandbox/starter.spec.mjs
Remove-Item Env:CANDIDATE
```

```bat
REM Windows Command Prompt
set "CANDIDATE=fixed"
npx.cmd playwright test sandbox/starter.spec.mjs
set "CANDIDATE="
```

Without that setting, the starter selects Candidate A. Record which candidate was actually tested; a heading-only pass is deliberately insufficient.

## Codex and business apps

Use the current [Codex quickstart](https://developers.openai.com/codex/quickstart) to select an instructor-approved client for your OS. Do not assume a desktop-only client exists on every platform. For native Windows, follow the [official Windows sandbox guidance](https://developers.openai.com/codex/windows); WSL is not a requirement of these labs. If an instructor deliberately uses WSL, keep Node, dependencies and the repository inside that environment instead of sharing `node_modules` with native Windows. Confirm browser-to-server connectivity with the instructor.

Before asking AI to run commands, tell it your OS, shell, working folder and allowed actions. Require commands for that shell, inspect them, then verify the results. If approved AI access is unavailable, pair on an approved workstation or use supplied model outputs; do not disable safeguards or buy an unapproved subscription.

Google Sheets/Docs and GitHub/Discord exercises have browser/export-only routes on all three platforms. CSV imports should preserve raw files, use UTF-8, and explicitly check delimiter, date/number locale, formulas and leading-zero identifiers. Excel and LibreOffice are optional; record the application and locale when results differ. Do not upload production files.

## Instructor cross-platform preflight

Before each cohort, verify one supported Mac, Linux and Windows workstation: extract/clone → open folder → check Node → start/stop server → run tests → capture evidence → open Markdown reader → complete the assigned AI workflow. Exercise the PowerShell `.cmd` fallback and Linux optional-browser dependency route where relevant. Record OS, shell, browser and tool versions plus pass/blocked evidence; automated CI is not proof that every managed learner device works.

The repository's platform CI checks the core tests, content scan, static build and browser reader on hosted macOS, Linux and Windows runners. Review actual CI results, not just the existence of the workflow. Instructors still verify installation, permissions, accessibility settings and the approved AI account on real cohort devices.
