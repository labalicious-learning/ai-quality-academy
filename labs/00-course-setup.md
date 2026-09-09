# Session 00 — Get ready to learn

**Time:** 120 minutes with your instructor. Keep this checklist open. Use your own accounts and a local course copy.

## 1. Create your GitHub account
Open https://github.com/signup. Choose a username and complete email verification. Existing account? Sign in at https://github.com/login instead of making a duplicate.

Open https://github.com/settings/security to configure two-factor authentication. Store recovery codes privately. Review https://github.com/settings/emails before publishing commits so you understand email visibility.

GitHub's account guide: https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github

## 2. Find the course repository
Use **Course repository** in the site navigation, or the exact URL your instructor supplies. Confirm the name is ai-quality-academy. Read README, open labs/, and find 01-ai-claim-detective.md.

Public reading does not require membership in the owner's organization. A star bookmarks the project; it does not give write access. A fork is your copy on GitHub; a clone is a local Git copy; Download ZIP is a local file copy without Git history.

## 3. Install the local tools
Node.js: https://nodejs.org/en/download — install a supported LTS version, version 22 or newer.
Optional GitHub Desktop: https://desktop.github.com/download/
Optional editor: https://code.visualstudio.com/download

Reopen Terminal (macOS/Linux) or Command Prompt/PowerShell (Windows). Check:
```bash
node --version
npm --version
```

If an organization-managed device prevents installation, ask your instructor. You can read the site and pair on an approved machine while access is arranged.

## 4. Get a local copy
**Simple path:** repository → Code → Download ZIP → extract → open the extracted folder.
**Git path:** GitHub Desktop → File → Clone repository → URL → paste the exact course URL → choose a local folder.

Open a terminal inside that folder. Confirm package.json is present. You do not need admin rights to the course repository.

## 5. Run your first lab
```bash
npm start
```
Open http://127.0.0.1:4178. Leave the terminal running. Click Load allocation in Candidate A, then select Candidate B and try again. Observe the difference. Nothing is sent to a real business.

Press Ctrl+C in the terminal to stop. Run npm start again to restart.
For built-in checks, stop the server if desired and run:
```bash
npm test
npm run verify
```
The basic lab uses Node's built-in libraries. npm ci is only needed for rebuilding the website/slides.

## 6. Set up Codex
Follow the current official quickstart: https://developers.openai.com/codex/quickstart

Use the desktop/client route your instructor has approved for your OS. Sign in through its browser/login flow with your own authorized account. The course does not require an API key. Account plan, model availability and tool access vary; your instructor confirms the cohort's setup.

Open your local course folder. Ask:
> Explain sandbox/domain.mjs in plain language. Do not change files. Cite the function that controls who can send an update, and describe how Candidate A differs from Candidate B.

Open the cited function yourself and verify one claim. Record the model/client shown in your account; do not guess based on the course date.

## 7. Save your readiness card
Create a personal note outside the public repo, or in the ignored submissions/ folder:
- GitHub account verified: yes / blocked
- Course repo located: yes / blocked
- Local lab starts and stops: yes / blocked
- Codex can explain a file: yes / blocked
- One claim I checked:
- One question for my instructor:

Do not record passwords, email addresses, tokens or recovery codes.

## If something fails
- “npm not found”: reopen terminal; check Node installation.
- “package.json not found”: open the extracted course folder, not its parent.
- “Address already in use”: another server is using the port; ask a coach.
- Browser cannot reach localhost: keep npm start running.
- GitHub works but Codex does not: they have separate logins and entitlements.
- No AI access yet: finish setup and evidence reading with a partner. Do not buy an unapproved subscription to finish class.

## Ready for Session 01
You can start the lab, find the next handout, and explain where the files live.
