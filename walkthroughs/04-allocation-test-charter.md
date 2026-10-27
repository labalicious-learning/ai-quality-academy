# Session 04 — Test Charter, one step at a time

[Back to the lab](../labs/04-allocation-test-charter.md) · [All help guides](../LAB_HELP.md)

**Finish with:** a risk-ranked charter and your first three proposed tests. This is a 35-minute design exercise; you do not need to run payments or build a feature.

## 1. Open the request and template

Read [the feature request and required coverage](../labs/04-allocation-test-charter.md), then [the classroom requirements](../fixtures/allocation-requirements.md), especially R8. Copy [the charter template](../templates/test-charter.md) into local `submissions/session-04/charter.md`. Use a text editor or approved document app on any OS.

**Charter** means a focused plan describing what to investigate, why it matters and what evidence to gather. **Risk** means something that could cause harm. You do not have to know a formal scoring system.

## 2. State the journey and its limits

Fill in user, goal, before/after state and in/out of scope. Separate approved requirements from missing rules. For example, if a refund rule is absent, write a question and who should decide it; do not turn a suggested rule into an approved one.

**Checkpoint:** every stated expected result either cites a requirement or is labeled a proposal awaiting a decision.

## 3. Cover each required area

Create one or more rows for each area in the lab: successful reservation/update, duplicate/concurrent attempt, deposit delay/failure, wrong role/organization, consent, accessible/mobile confirmation, and recovery/audit evidence.

For each row, record who could be harmed, what you would do, what you would inspect and the requirement or clarification blocker. If a rule is missing, include a conditional test: “If the owner approves ___, then check ___.” Do not claim the sandbox implements payment or concurrency behavior it does not have.

## 4. Ask AI to challenge your coverage

Provide the request, approved requirements and your draft. Ask for missing cases, then label each suggestion **keep**, **reject**, or **needs clarification**, with a reason. If AI is unavailable, have a partner challenge your list and disclose that route.

Rank risks using harm, likelihood and how easily failure could escape detection. A plain-language high/medium/low assessment with reasons is enough.

## 5. Save and check your work

Choose the first three checks you would perform and explain their order. Ensure every required coverage area has an observable result or a named decision owner and conditional test. Review with your group, then use [the practice submission workflow](../SUBMISSIONS.md). Product Studio's charter belongs in your own product repository.

## If you get stuck

Ask: “What would the user see or lose if this failed?” Then name a specific observation that would settle the question. Missing business rules are valid blockers; ask the instructor rather than inventing them. [Help checklist](../LAB_HELP.md).

© 2026 Jared Cluff.
