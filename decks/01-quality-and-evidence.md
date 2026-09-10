---
marp: true
theme: default
paginate: true
footer: "© 2026 Jared Cluff · Labalicious · Lesson 1"
---

<!-- _class: lead -->

# Quality, Evidence, and Responsible AI

## Lesson 1 · Would you ship on this?

---

# Today’s outcome

- Separate observation, hypothesis, finding, and verdict
- Build evidence another person can check
- Use AI as a collaborator—not proof
- Protect customer data and production systems

---

# The quality ladder

1. **Observation** — “The page stayed blank.”
2. **Hypothesis** — “The API call may have failed.”
3. **Finding** — reproducible behavior with evidence
4. **Verdict** — a calibrated recommendation

Confidence is not evidence.

---

# A useful AI answer can still be wrong

Ask:

- What exact claim is being made?
- What source or application state proves it?
- What remains uncertain?
- What would change the decision?

---

# Non-negotiable safety boundary

Never put secrets, tokens, private keys, customer data, or production credentials into an AI prompt.

Use synthetic data. Do not publish, deploy, send, buy, delete, or change access without named human approval.

---

# Demo: inspect the claim, not the confidence

1. Read a small bug packet
2. Ask an AI for a summary
3. Compare every sentence to the source
4. Rewrite unsupported language

---

# Product Studio: your course-long build

Build software you want to exist, with AI.

Your own public repo. Small weekly milestones. Human feedback.

Present it personally to **Jared Cluff** for the completion decision.

**The project is the assessment. No separate exam.**

---

# Useful, polished, achievable

One audience · one main journey · three core features.

Saved data, meaningful states, error handling and recovery.

Intentional visual design, keyboard access and mobile layout.

AI helps build it; the app does not need a paid AI feature.

---

# Choose something you care about

Twenty ideas: collections, music, gardens, clubs, creative work…

Or pitch your own idea to the instructor.

Sketch the journey; name the core features and exclusions.

**Discuss today. Approved proposal and kickoff in Session 02.**

---

# Lab: The AI Claim Detective

**Mission:** decide what three AI claims actually prove.

**Deliver:** claim table + evidence packet + limitation statement.

Driver reads the evidence. Verifier asks, “What proves that?” Switch halfway.

---

# Evidence packet anatomy

- Expected and observed behavior
- Exact reproduction steps
- Relevant, redacted evidence
- Confidence and limits
- Next action and owner

---

# Debrief

What made an AI output useful?

What made it unsafe to trust?

How would a customer experience the failure?

---

# Exit ticket

In one sentence: What is the difference between a lead and a defect?

Name one AI safety rule you will follow in every lab.

---

# Before Session 02

Present your one-page proposal and rough wireframe.

Include synthetic data, quality checks, time and budget.

Ask for scope approval before building the product.

Course guide: **COURSE_PROJECT.md** · Ideas: **PROJECT_IDEAS.md**
