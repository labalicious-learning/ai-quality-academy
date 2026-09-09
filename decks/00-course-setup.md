---
marp: true
theme: academy
paginate: true
footer: "© 2026 Jared Cluff · Labalicious · Session 00"
---

<!-- _class: lead -->

# Your workspace.<br>Your first win.

## SESSION 00 / SET UP TO LEARN

Two hours. Your own accounts. A working local lab.

---

# Three places. Three jobs.

| Place | What happens there |
| --- | --- |
| GitHub | Read, copy and collaborate on course files |
| Your computer | Run the fictional training lab |
| Codex | Work with an AI teammate on the files you provide |

<!-- Show each place separately. Ask learners which service owns which action. -->

---

# Make your GitHub account

1. Open https://github.com/signup
2. Verify your email
3. Secure your account privately

Already registered? https://github.com/login

<!-- 10–25 minutes. Never collect passwords or recovery codes. -->

---

# Find your way around

**README** → course overview  
**labs/** → your hands-on instructions  
**decks/** → editable slide sources  
**sandbox/** → the local teaching app

Public reading needs no organization invitation.

---

# Copy, fork, or clone?

**Download ZIP** / a simple local copy  
**Fork** / your own repository on GitHub  
**Clone** / a local copy with Git history

Start with the route that works on your device.

---

<!-- _class: lead -->

# Take a break.

## Next: make the lab run on your computer.

---

# Install your local toolkit

Node.js 22+ / https://nodejs.org/en/download

GitHub Desktop (Mac/Windows) / https://desktop.github.com/download/

Optional editor / https://code.visualstudio.com/download

Check: node --version and npm --version

<!-- Linux: use ZIP or Git CLI. On Windows use npm.cmd if PowerShell blocks npm.ps1. See PLATFORM_GUIDE.md. -->

---

# Your first launch

Open the course folder in a terminal.

```bash
npm start
```

Visit http://127.0.0.1:4178

Keep the terminal running. Ctrl+C stops the lab.

---

# Check the startup

Select **Candidate B** and load an allocation.

Confirm a reserved record appears.

Later labs investigate behavior; this is just a startup check.

---

# Bring Codex into the workspace

Use your instructor-approved client and account.

Official setup: https://developers.openai.com/codex/quickstart

Ask it to read only fixtures/setup-example.mjs.

Predict the output, then run: node fixtures/setup-example.mjs

<!-- Account availability varies. Do not promise a free plan or a specific model. -->

---

# Check one claim

Locate the function Codex cites.

Can you connect the explanation to the actual file?

Save one verified observation and one question.

---

# Ready to go?

✓ GitHub email verified  
✓ Course files located  
✓ Local lab starts and stops  
✓ AI account ready, or coach follow-up recorded  
✓ Session 01 handout found

<!-- Assess a demonstration, not installation speed. -->
