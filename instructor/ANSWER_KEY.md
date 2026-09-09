# Instructor answer key — use during debrief

These public answers describe supplied synthetic fixtures and the local simulation only. Ask learners to predict and collect evidence before debrief. Do not claim the answers are secret or supply them to a model under evaluation.

## 1 · Claims
A is supported: failure on candidate B27 is observed. B is a plausible hypothesis, not established cause. C is unsupported: no payment/database evidence. Good reports do not upgrade an error message into data-loss claims. Capture a real screenshot from the sandbox for visual practice.

## 2 · Repository
UI in sandbox/index.html calls /api/send; server delegates to canSend in sandbox/domain.mjs. R1 allows owner and concierge; buggy candidate allows only owner. Staff denial is correct. A fix that grants staff access fails the requirement. Students should cite all three layers. npm test passes because it verifies the teaching fixture, including expected buggy behavior; it is not a release assertion.

## 3 · Business work
Eight input rows. I03 repeats message M01/I01; deduplicate by message_id, yielding seven unique inquiries. Eligible event update contacts are C01 and C07: two. C03 has missing consent and is held; C05 opted out. C02 and C06 are parts; C04 merchandise. Zero quantity on I07 needs review, not silent deletion. Budget corrected: 400 + (40*5) + (4*25) = 700. Reported total 545 differs by 155. Formula =B3+C3 is wrong; =B3*C3 is right. August 1 is proposed, not approved. Casey owns budget verification by July 10; Blair owns final wording approval, with no deadline assigned. FAQ has no owner/deadline. G101 is not resolved by a title rendering. Do not compute revenue from these inquiry amounts as if they were purchases.

## 4 · Charter
Expect prioritized role/tenant, concurrency, deposit confirmation, retry/dedup and consent criteria. R8 is deliberately unresolved. Learners must ask about refund/cancellation/concurrent reservation; the sandbox does not implement payment or a real event order. No single exact test count is required.

An explicit clarification blocker with decision owner and conditional test satisfies an unresolved coverage area. Do not reward invented business rules.

## 5 · Browser
Candidate A returns 500 for allocation even though heading renders. Candidate B shows AL-01 reserved. The actual network response is stronger than a title assertion. Concierge update fails in A but succeeds in B. Lists are tenant-filtered in both; direct detail leaks across tenants in A. Interface does not implement an entire production CRM.

## 6 · Isolation
As Beacon: list shows only B-201, but A-101 detail in buggy mode returns Atlas data. Fixed mode returns 404. Owner PATCH simulates an authorization decision; no data is actually persisted. API caller-selected roles/tenants are training stand-ins, not real authentication or RLS. Students may demonstrate the difference but must not claim this proves OAuth or database policies.

Four-lock details: cross-tenant owner PATCH is incorrectly allowed in A and denied in B; same-tenant staff PATCH is denied in both. Same-tenant owner PATCH is allowed with persisted:false in both; reread remains unchanged. Staff send is denied in both browser and API. Allocation PATCH gives 405 in both: an unsupported method, not an authorization control.

## 7 · Automation
Weak starter test checks only heading, passing both candidates. Improved test waits for GET /api/allocation and asserts status 200 plus visible “Allocation AL-01: reserved”. It fails A, passes B. Learners explain the failure before asking Codex to fix. A change to expected status 500 hides the regression and is unacceptable. A separate fixture test intentionally asserts A is broken; clarify test intent.

Start the response wait before clicking to avoid a race. Grade the explicitly unexecuted design route on selector/response reasoning and limits, not imaginary run logs. No domain fix or branch switch is needed.

## 8 · Visual
Candidate A has showroom width 720px, causing horizontal overflow at 375px. Caption color is pale on pale background; inspect measured contrast before claiming a numeric ratio. Candidate B removes fixed width and pale text override. Keyboard flow is provided with labels/focus indicators. No deliberately planted focus trap or missing label exists: learners should not fabricate those because an earlier exercise description suggests them. Optional axe scan is an extension, not included dependency.

## 9 · Integration
A processes M01 twice and queues consent=false at high confidence. B deduplicates and suppresses opt-out. confidence=.5 goes to review; oauth=expired gives 401 and saves no event; attachment=malformed gives 422. Fix input to simulate recovery and retry same ID. JSON missing required fields gives 400. This is an OAuth outcome simulator, not an IdP integration. No external email is sent, no real webhook receiver exists.

For rejected OAuth/attachment payloads only, remove the error field and retry. Accepted low-confidence/opt-out events remain unchanged on fixed-candidate redelivery; review resolution and changing consent are unimplemented. A 422 review response is not a stored review item. Assess stored events and decision flags, never nonexistent CRM writes or delivered messages.

## 10 · Release
Round 1: evidence incomplete; hold pending authenticated and upgrade evidence. Round 2: hold; 500 reproduced, digest mismatch. Round 3: hold remains supported. Rollback requires evidence the failing build already serves users and a viable prior candidate; not established here. A request for an exception is not an approved exception.

## 11 · Evaluation
Six binary cases: E1 pass, E2/E4/E5/E6/E7 fail; E3 ambiguous; E8 instruction-boundary.
Mock A: binary accuracy 5/6; false-pass rate 1/5 known-fail cases; false-fail rate 0/1 known-pass cases; abstention failure on E3; instruction violation E8.
Mock B: binary accuracy 5/6; false-pass rate 0/5; false-fail rate 1/1; handles E3/E8 as keyed.
Same accuracy conceals different risk. These tiny fabricated samples do not justify approving a real model. Missing cost/latency is unknown, never zero. Actual adoption needs representative repeated runs and human labels.

Use model-labels.json only on the reviewer side. Input-only cases live in fixtures/model-cases.json. `node scripts/score-model-outputs.mjs` verifies mock arithmetic. Full task completion and evidence rationale are also not measured; E8's verdict is not observed browser safety. Follow fixtures/model-evaluation-protocol.md for optional live trials.
An actor and a judge can share mistakes even when separated; evidence and independent checks remain necessary.

## 12 · Capstone cards
Assign [the runnable cards](../fixtures/capstone-cards.md). C1 requires independent positive and negative controls, not a single denial. C2 distinguishes approved heading changes from overflow and demonstrates keyboard operation. C3 tests the 0.799/0.8 boundary, opt-out, accepted replay and recovery after rejection. C4 reviews the weak heading assertion and the separate value of UI and response checks.

Choose a card-specific changed condition after the initial verdict: role/tenant for C1, viewport/theme for C2, input/order for C3, removed assertion for C4. Do not vary irrelevant roles in the visual exercise. Require individual prediction and explanation. The tasks are public/open-book; assess transfer, not secrecy. Four teams need 32 minutes of presentations/defense; use parallel panels for larger groups.

## Scoring: 20 points
Score five dimensions 0–4 each: problem/risk framing, test coverage, reproducible evidence, AI/tool use, communication.
0 absent; 1 unsupported; 2 partly correct with material gaps; 3 correct and reproducible; 4 correct with explicit limits and useful follow-up.
Proposed pilot threshold: 14/20 plus no fabricated evidence and no unauthorized external action. Reassess after remediation. This is course completion, not a claim of top-tier professional readiness.
