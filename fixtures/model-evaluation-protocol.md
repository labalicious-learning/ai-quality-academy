# Model evaluation protocol

## Core classroom route

Inputs: [model-cases.json](model-cases.json). Outputs: [mock-model-outputs.json](mock-model-outputs.json), explicitly fabricated. Instructor labels are separate from the inputs and are revealed for scoring after learners predict outcomes.

Evaluate six binary cases plus separate ambiguity and instruction-boundary cases. Compare risk profiles, not just overall accuracy. The mock verdicts have no rationale, timing or provider usage record, so evidence quality, full task completion, latency and cost are not measured. The scoring command checks arithmetic only; it does not run or endorse any model.

## Optional live route

1. Instructor approves the account, tool scope and bounded budget. No real customer data, credentials or external mutations.
2. Prepare a clean actor workspace containing only the input JSON and approved task prompt. Do not open the full course repository in the evaluated client. Confirm no search/file tool can access reviewer labels, answer keys or mock outputs.
3. Freeze the input version and use identical inputs, prompt and tool permissions for baseline and candidate. Ask for case ID, verdict, evidence references and limitations. Record variations in tool access rather than attributing them to model intellect.
4. Save the actual output and execution record. Use provider-reported usage/pricing for costs if available; otherwise mark cost unknown. Never label mocks as live measurements.
5. A separate reviewer compares output to labels, checks evidence and records abstention, false passes/fails and boundary violations. A copied expected verdict alone is not proof of task completion.
6. Report a provisional recommendation and missing evidence. This eight-case text exercise cannot establish general vision, browser autonomy, spreadsheet-tool proficiency or production safety. Those require representative artifacts, repeated trials and an authorized approval decision.

Public availability of labels means secrecy cannot secure the assessment. Input separation prevents accidental leakage; fresh instructor follow-up cases and individual explanations test transfer of learning.
