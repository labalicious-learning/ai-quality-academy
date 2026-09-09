# Lesson 1 — Quality, Evidence, and Responsible AI

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Its material mapping supersedes the optional richer sandbox preparation below. Instructor solutions: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Audience:** first-time and experienced learners together  
**Deck:** [01-quality-and-evidence](../decks/01-quality-and-evidence.md)  
**Lab:** [The AI Claim Detective](../labs/01-ai-claim-detective.md)

## Learners will be able to

- distinguish a request, observation, hypothesis, finding, and verdict;
- write a defect report another person can reproduce;
- use an AI assistant without treating its answer as proof; and
- name data/actions that are off limits in a training environment.

## Instructor preparation

Prepare three short AI-answer cards about a fictional Community Launch order page: one supported by logs, one partly supported, and one invented. Create a shared folder with redacted screenshots, a synthetic order record, and a short release note. Print or share `templates/evidence-packet.md`.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: show a beautiful but wrong AI answer. Ask, “Would you ship on this?” Learners vote and explain why. |
| 10–25 | Teach the ladder: observation → hypothesis → reproducible finding → evidence-backed recommendation. Emphasize that confidence is not evidence. |
| 25–40 | Live demo: ask an approved assistant to summarize a small bug packet; compare its claims to the sources. Model the phrase “I cannot prove that from the supplied evidence.” |
| 40–50 | Pairs classify ten statements as fact, inference, question, or unsupported claim. Review together. |
| 50–60 | Break. Instructor privately checks that every learner can explain why screenshots alone may mislead. |
| 60–95 | Run the lab in pairs. Driver reads sources; verifier maintains the evidence table. Switch at midpoint. |
| 95–110 | Gallery walk: teams review another team’s packet and circle one claim that lacks proof. |
| 110–115 | Debrief: what AI behavior was useful? What behavior would be dangerous? |
| 115–120 | Exit ticket: one sentence distinguishing a lead from a defect, plus one safety rule. |

## Teaching notes

Keep the first session human-centered: good QA protects a customer from a bad experience and protects a team from bad decisions. Do not introduce prompt tricks as the core skill. The core skill is calibrated judgment.

If students finish early, ask them to improve an overconfident AI answer using only citations to the supplied sources. If students need support, give them the sentence starters: “I observed…”, “I expected… because…”, and “This evidence does not establish…”.

## Assessment

A learner is ready to continue when their packet includes an expected outcome, observed outcome, reproducible steps, and a clear limit on what the evidence does not prove.
