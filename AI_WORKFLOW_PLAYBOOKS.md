# Current AI Workflow Playbooks

This is the practical companion to Lesson 3. It uses a **Summer 2026 capability baseline**: current, organization-approved Codex/ChatGPT models; file and image inputs; web research where enabled; connected tools/apps where approved; and tool-using workflows with explicit permissions. Actual model, connector, browser/computer-use, and cloud-task availability depends on the organization’s plan, administrator controls, and learner account. Instructors must verify availability before class and must not teach a capability from an older model as if it were the current standard.

OpenAI’s current documentation groups work across connected data, code, analysis, automation, research, quality, and business workflows. See the [current use-case library](https://learn.chatgpt.com/use-cases) and [current model guidance](https://developers.openai.com/api/docs/guides/latest-model).

## The universal work contract

For the individual product, use [the small-model guide](SMALL_MODEL_GUIDE.md): Qwen3.8-27B is recommended, with a compatible client and local or capped hosted inference. These contracts also apply in OpenCode or another approved client; the example Codex wording does not require a premium model or live business connector. Use portable exports when a tool is unavailable.

Every workflow starts with the same five questions:

1. **Outcome:** What reviewable artifact or action should exist?
2. **Authority:** Which sources, tools, and accounts are approved?
3. **Boundary:** What must not be changed, sent, exposed, or inferred?
4. **Proof:** What verifies the result?
5. **Record:** Where do the sources, output, review, and decision live?

## 1. Code and QA with Codex

**Best use:** understand a repository, map a request path, draft a small patch, extend a test, review a diff, or explain a failing build.

**Use the current workflow:** inspect project instructions and relevant files; ask for a bounded plan; review a proposed diff; run the project’s check; record the result in the issue/PR. Keep durable repository context in `AGENTS.md`, design docs, scripts, and tests—not only in a conversation.

**Prompt shape:** “Outcome: investigate why synthetic staff users cannot send an inquiry update. Read `AGENTS.md`, the named client/server paths, and test. Do not edit files or use credentials. Return a cited request-path map, hypotheses labeled as hypotheses, one recommended check, and questions requiring a human.”

**Verification:** a reviewer traces cited files; an approved test/build runs; the result matches the acceptance criterion.

**Never:** let a model silently merge, deploy, edit production data, or decide that a change passed without real test evidence.

## 2. Spreadsheets and CSV exports

**Best use:** clean a working copy, identify data-quality anomalies, summarize trends, propose formulas, explain a model, or create a draft decision memo.

**Workflow:** preserve raw export → create working copy → document transforms → ask AI for hypotheses → independently verify formulas, totals, and samples → publish a decision with sources/assumptions.

**Prompt shape:** “Analyze this synthetic CSV for duplicate inquiries, incomplete consent, unusually long response time, and conflicting values. Do not alter the raw file. Return a table with row identifiers, reason, confidence, and the calculation/source for every conclusion. Flag ambiguous cases for review.”

**Verification:** raw row count/checksum preserved; formulas reviewed; random samples reconciled; a human owns the decision.

**Never:** upload private finance/customer exports to an unapproved provider or let AI alter the source-of-truth workbook without a reviewable diff.

## 3. Documents, proposals, and presentations

**Best use:** turn scattered notes into a structured outline, audience-specific first draft, executive summary, FAQ, release note, meeting brief, or slide storyline.

**Workflow:** name audience and decision → supply approved source material → ask for structure/draft → fact-check each claim against sources → human edits voice, legal/brand commitments, and claims → approve before external sharing.

**Prompt shape:** “Draft a one-page customer update for allocation holders using only the supplied approved facts. Audience: people awaiting an ordering window. Tone: direct and optimistic without promising a date. Include an open-questions section for details the sources do not establish.”

**Verification:** source links/citations, named owner review, brand/legal check where relevant, and explicit approval before publishing/sending.

## 4. Google/web research

**Best use:** create a research plan, locate primary sources, compare claims, extract structured facts, and draft a decision memo with uncertainty.

**Workflow:** define question and decision → identify authoritative sources → research with date/source capture → separate quote/fact/inference → compare conflicts → human makes the decision.

**Prompt shape:** “Research current US requirements relevant to this narrowly defined issue. Use primary government or standards sources where available. Return claim, source URL, publication/effective date, supporting excerpt, uncertainty, and what should be confirmed with counsel. Do not treat a secondary summary as authority.”

**Verification:** open the cited source, validate date/jurisdiction, and use a qualified human for legal, medical, financial, employment, or safety decisions.

## 5. GitHub issues, pull requests, and projects

**Best use:** transform an issue into acceptance criteria, map a change to tests, summarize a reviewable diff, triage defects, or identify documentation and release-note gaps.

**Workflow:** issue/requirement → task brief → code/test evidence → reviewable PR summary → human code review → CI/release gate. Use AI to make the chain more legible, not to bypass it.

**Prompt shape:** “Review this diff against these acceptance criteria. List behavior changed, tests added/affected, missing negative cases, security/tenant-risk questions, migration/release concerns, and citations to exact files/lines. Do not claim a defect unless the diff or test evidence supports it.”

**Verification:** reviewers inspect diff and CI artifacts; required status checks remain authoritative; PR describes limits and follow-up work.

## 6. Discord and team communication

**Best use:** convert a noisy discussion into decision records, action items, risks, customer themes, questions, and meeting agendas.

**Workflow:** use only authorized channel content → extract statements with speaker/date references → distinguish decision from suggestion → send a draft back to participants for correction → store approved action record in the system of record.

**Prompt shape:** “From this authorized thread, produce confirmed decisions, action items with explicitly named owners/dates, unresolved questions, and suggestions that were not agreed. Quote the message reference for each item. Do not assign an owner or deadline that was not stated.”

**Verification:** participants confirm; sensitive material stays within approved retention/access rules; no automated outbound commitment without owner approval.

## 7. Connected tools, browser tasks, and automation

**Best use:** bounded repetitive work where target systems, actions, accounts, and completion checks are explicit—for example, a synthetic QA journey, a draft created in a review queue, or a report refreshed from approved sources.

**Workflow:** allowlisted tools/origins → least-privilege account → synthetic or approved data → limited action/time budget → evidence/result → human review for external, financial, identity, legal, or irreversible actions.

**Prompt shape:** “In the training CRM only, sign in with the provided synthetic QA profile and verify this five-step inquiry workflow. Stay on the listed origins; do not create external messages, change permissions, or modify infrastructure. Save screenshots and deterministic check results. If the requirement is ambiguous, stop and report it rather than guessing.”

**Verification:** deterministic postconditions, redacted evidence, output review, and policy logs. Never use a model’s self-reported completed status as the pass condition.

## Selecting a model/tool in 2026

Do not select “the smartest model” globally. Select an approved capability for a specific task class. Current frontier models can reason over code, documents, images, and tool outputs, but that does not make their verdicts or actions automatically trustworthy. Before adopting a new model, run the golden corpus in Lesson 11 and measure task completion, false pass, false fail, evidence completeness, safety-policy compliance, latency, and cost.

Record the result in `templates/model-evaluation-card.md`. A model may be approved for drafting, restricted for spreadsheet analysis, sandboxed for browser exploration, and prohibited from making release decisions—all at the same time.
