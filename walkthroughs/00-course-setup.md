# Session 00 — Setup, one step at a time

[Back to the setup lab](../labs/00-course-setup.md) · [All help guides](../LAB_HELP.md)

**You will finish with:** a local lab you can start and stop, one AI explanation you checked, and a private readiness note. Skip steps you have already verified. Work at your own pace within the two-hour setup session.

## 1. Know which window you need

| Window | What you do there |
| --- | --- |
| Browser: learn.labalicious.com | Read lessons and these instructions |
| Browser: github.com | Read or download the course repository |
| Editor, such as VS Code | Open local files and write your work |
| Terminal / PowerShell / Command Prompt | Run commands such as `node --version` |
| Codex or approved AI client | Enter the plain-language prompt in step 6 |
| Browser: http://127.0.0.1:4178 | Use the practice app running on your computer |

Do not paste terminal commands into the browser address bar or an AI chat. Copy only the command, without a leading `PS`, `$`, prompt path, or Markdown backticks. Run one line, inspect its result, then continue.

## 2. Get your account and course files

1. Create or sign in to your GitHub account at https://github.com/signup or https://github.com/login. Complete email verification. Follow the [setup lab's account security instructions](../labs/00-course-setup.md#1-create-your-github-account); keep recovery details private.
2. Open https://github.com/labalicious-learning/ai-quality-academy.
3. Choose **Code → Download ZIP**. Extract it; on Windows use **Extract All**. Do not work inside the ZIP preview. If you already cloned the course, use that copy instead.
4. Open the extracted folder in your editor. VS Code's menu is **File → Open Folder**. An editor is available at https://code.visualstudio.com/download.
5. Confirm you can see `package.json`, `labs`, `fixtures`, and `sandbox` together. If you see just another folder, open that inner folder.

**Checkpoint:** you can open `fixtures/setup-example.mjs` in your editor. README is a file of instructions, pronounced “reed me.” A repository is a project's files and history; a ZIP gives you files but no Git history. You do not need permission to edit the course's upstream repository.

## 3. Install Node and verify it

Open https://nodejs.org/en/download. Choose a supported **LTS** release, version 22 or newer, for your computer.

- **Windows:** choose the prebuilt **Windows Installer (.msi)** for your architecture. If a package-manager command is displayed, use the installer download option instead. This course does not require Chocolatey or its optional native-build tools.
- **Mac:** use the **macOS Installer (.pkg)** matching your computer. Homebrew is optional.
- **Linux:** follow the official download instructions for your distribution and architecture. If dependencies or permissions block installation, ask a coach; there is no single package command that fits every distribution.

Close and reopen your terminal after installation. In VS Code, fully restart the editor if it was open during installation. Use **Terminal → New Terminal** in the course folder. Run these separately:

```text
node --version
npm --version
```

**Checkpoint:** both print versions, and Node is 22 or newer. In Windows PowerShell, if `npm.ps1` is blocked, run `npm.cmd --version` and use `npm.cmd` below. No execution-policy change is required. If either command is missing, stop here and use [the troubleshooting table](#if-you-get-stuck).

## 4. Run the practice app

In the terminal opened inside the course folder, run:

```text
npm start
```

Windows PowerShell alternative:

```powershell
npm.cmd start
```

Leave that terminal running. Open http://127.0.0.1:4178 in a browser on the same computer. This is different from the public course website. You do not need `npm install` or `npm ci` for this practice app.

1. Find **Candidate** and select **Candidate B**.
2. Click **Load allocation**.
3. Look for **Allocation AL-01: reserved**.
4. Return to the server terminal and press **Control+C** (also Control+C on Mac).
5. Run the start command again and reload the browser.

**Checkpoint:** you can start, stop and restart the app. Keep the server terminal for the server; open a second terminal for other commands.

## 5. Open your approved AI client

Use the client and budget route agreed with your instructor. If Codex already works, skip installation. If using Codex CLI with the Node/npm route, the official instructions are at https://learn.chatgpt.com/docs/codex/cli.

Mac/Linux terminal:

```sh
npm install -g @openai/codex
codex --version
codex
```

Windows PowerShell:

```powershell
npm.cmd install -g @openai/codex
codex.cmd --version
codex.cmd
```

Run each line separately. The install needs internet access. If it fails with a permissions error, ask a coach to choose an approved installation route; do not add `sudo` or disable safeguards. Launch the client from the **course folder**. Use its normal sign-in flow and your approved account/provider. GitHub sign-in does not automatically sign you into an AI service.

**Checkpoint:** the client is ready for a prompt and its working folder is the course copy. If access or cost blocks you, pair on an approved machine and record the blocker. See [affordable routes](../SMALL_MODEL_GUIDE.md); do not purchase a subscription just to catch up.

## 6. Check one AI explanation

Paste this into your **AI client**, not PowerShell:

> Read only fixtures/setup-example.mjs. Explain describeCount in plain language without changing files. Predict its output for 1 and 3, cite the relevant lines, and tell me how to check your claim.

Open that file yourself. In a separate ordinary terminal in the course folder, run:

```text
node fixtures/setup-example.mjs
```

Compare the printed output with the prediction. Write what matched or differed. This step does not need access to later exercises or instructor answers.

## 7. Save and check your work

Create a private readiness note following [the readiness card](../labs/00-course-setup.md#7-save-your-readiness-card). Include your OS/shell/browser, which checks worked, the AI claim you verified, and any blocker. Do not include email addresses, passwords or account screenshots. Show it privately to your instructor; **Session 00 has no public submission PR**.

## If you get stuck

| What you see | Next action |
| --- | --- |
| Chocolatey says it is already installed | Pause that installer. Check `node --version` first. If Node is absent, use the official Node installer; repairing Chocolatey is not required for the lab. |
| `node` or `npm` is not recognized | Reopen your terminal/editor. If still missing, show your coach the installation result and exact command. Do not guess at PATH entries. |
| `package.json` cannot be found | Open the extracted folder that actually contains `package.json`, then open a new terminal there. |
| `npm.ps1` cannot be loaded | Use `npm.cmd` in PowerShell or open Command Prompt. |
| Browser cannot connect | Confirm the server terminal is still running. Use the address it prints on the same computer. |
| Address already in use | Stop your own earlier lab server, or follow the [alternate port instructions](../PLATFORM_GUIDE.md#if-port-4178-is-occupied). |
| AI command or sign-in fails | Record the exact error and ask a coach. Continue file-reading practice with a partner. |

After one retry, send a coach the step number, OS, shell, exact command and sanitized error. Keep private tabs and secrets out of screenshots. [More help](../LAB_HELP.md).

© 2026 Jared Cluff.
