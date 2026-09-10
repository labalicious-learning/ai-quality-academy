# Small models, serious work, modest budget

**Course recommendation: Qwen3.8-27B. Guidance checked 10 September 2026 against summer-2026 releases.** The goal is a good product and trustworthy engineering, not buying the largest model. The project can be built with inexpensive inference, and the finished app does not need to call any model at runtime.

## Know which layer you are choosing

| Layer | What you record | What it does not guarantee |
| --- | --- | --- |
| Model | Exact ID, revision and quantization when available | Permission to use your computer or access accounts |
| Host | Local runtime or hosted provider; endpoint and data policy | Identical speed, context, tools or cost on every route |
| Coding client | OpenCode, Codex CLI or Claude Code; version | That every model works with every client feature |
| Workflow | Scoped files, tools, approval boundaries and checks | Correctness without observing the results |

The official [Qwen model card](https://huggingface.co/Qwen/Qwen3.8-27B) describes a 27B dense vision-language model with coding, tool-oriented work and adjustable thinking. Those capabilities make it a plausible course choice; the provider's benchmarks are not a classroom validation. Reasoning settings can trade work per attempt against retries. Lower reasoning is not automatically faster overall. Local quantization, serving software and available memory matter; an advertised long context window is not a promise that a laptop can use it comfortably.

## Pick a route with your instructor

| Route | Best fit | Before you start |
| --- | --- | --- |
| **OpenCode + OpenRouter + Qwen3.8-27B** | No capable local hardware; small, capped hosted budget | Verify exact model, current provider price, tool support and spending controls. |
| **Local Qwen3.8-27B + compatible client** | Existing computer can serve a suitable quantization | Verify runtime support and a small edit/check cycle. Do not buy hardware for this course. |
| **Codex CLI + verified custom/local provider** | Learners using Codex who have a working compatible endpoint | Instructor validates API protocol, auth, tool loop and actual selected model. |
| **Claude Code + compatible gateway** | Learners with a separately verified route | Experimental for this model unless demonstrated; do not assume Qwen compatibility. |
| **Instructor-supported access** | No eligible account, billing access or adequate hardware | Arrange supervised/shared-device inference without sharing passwords; learner still owns and explains the product. |

### Hosted Qwen with OpenCode

1. Install the client for your OS using https://opencode.ai/docs/. Follow the docs matching your installed version; record the version. Use [the platform guide](PLATFORM_GUIDE.md) for terminal differences.
2. Review the model at https://openrouter.ai/qwen/qwen3.8-27b. The upstream ID is `qwen/qwen3.8-27b`. Confirm it is available through your account, not just listed in a stale client menu.
3. In https://openrouter.ai/settings/keys, create a dedicated course key with a spending limit appropriate to your agreed budget. Review billing controls privately; don't enable automatic top-ups for the course. OpenRouter documents a USD key limit at https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key; check the dashboard's actual limit and reset behavior rather than assuming an alert stops requests.
4. Start OpenCode in your **own product folder**. Use `/connect`, select OpenRouter and enter the key in its credential prompt. Use `/models` to choose Qwen3.8-27B. Never put a key in the repo, chat, screenshot or README.
5. Run the smoke check below and inspect actual usage at https://openrouter.ai/activity. A model-picker label alone does not establish a successful request.

The [OpenCode provider guide](https://opencode.ai/docs/providers/) documents this connection flow. Version-specific config schemas differ: do not combine examples from https://opencode.ai/docs/providers/ and https://opencode.ai/v2/docs/providers. If selection fails, a coach checks the installed version and matching config rather than repeatedly sending paid requests.

### Local route: no metered API fees, not zero hardware cost

Start with the official model card's runtime/quantization links: https://huggingface.co/Qwen/Qwen3.8-27B. Select an exact supported artifact, not a guessed registry tag. A 27B model at four bits is approximately 13.5 GB of weights by arithmetic alone; runtime, context cache, vision components and other applications add memory. This is **not** a minimum-RAM recommendation or a promise of usable speed.

Have the instructor preflight an appropriate runtime, such as Ollama or LM Studio, on the actual computer. Follow https://docs.ollama.com/ or https://lmstudio.ai/docs for the installed OS/runtime. Bind local inference to loopback, not a public network interface. In the client, select that local endpoint and exact installed model, then run the same smoke check. If serving is slow or unstable, lower context/concurrency or use the capped hosted route; no GPU purchase is required.

For an OpenCode local endpoint, use the version-matched model guide: https://opencode.ai/v2/docs/models. Record what actually supports tools and images; a model's vision capability does not mean your quantization/client can accept screenshots. Text-only students can inspect the UI themselves and provide a concise description.

### Codex and Claude Code: compatibility is a checkpoint

Codex CLI supports custom model providers, including local routes. Follow the official [custom-provider documentation](https://developers.openai.com/codex/config-advanced#custom-model-providers). Configure machine-local provider/auth settings in your user configuration, outside the public project; check the current [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference#configtoml). Matching a base URL is insufficient: the endpoint must support the wire protocol and tool interactions the installed client expects. Inspect `/status` and prove the smoke check. This is not a claim that the hosted ChatGPT/Codex experience can select any arbitrary model.

OpenRouter documents [Claude Code gateway integration](https://openrouter.ai/docs/cookbook/coding-agents/claude-code-integration), but guarantees compatibility only with its Anthropic first-party route. Qwen is therefore **not** a guaranteed drop-in for Claude Code. An instructor may verify a compatible setup with this model; otherwise use OpenCode. Do not overwrite an existing working login or change account credentials merely to try a different client. A Claude subscription is not OpenRouter credit.

The course teaches Codex-style disciplined agent work, not dependence on a particular client. Use the same task briefs, git history and verification evidence on every route.

## Five-minute smoke check, then stop configuring

Use a disposable local folder with no credentials or personal files. Ask the client to read a tiny instructor-provided function, explain its behavior and cite the file. Then authorize one small change to a copy plus one local check. Review the diff and actual output. Confirm:

- Selected model, client version and host are the intended ones.
- File reading, one edit and the local check work—or record a text-only limitation and arrange an approved alternate route.
- No unapproved network action, billing escalation or secret access occurred.
- Hosted usage appears on the correct account; local mode did not silently call a paid fallback.

Use `fixtures/setup-example.mjs` from Session 00 only as a copied practice function. Do not give the model later lab answer keys. Run a single bounded smoke task; do not benchmark by spending through many models. If blocked twice, ask for support rather than enabling unlimited retries.

## Spend on useful progress

Suggested planning target: **$10 for the whole project, with an instructor-agreed maximum of $20** if needed—not a purchase requirement or cost guarantee. Learners may agree a $0 metered-API route. Stay within actual provider controls and stop before reaching the ceiling; do not assume an alert itself blocks spending. Provider fees, taxes and minimum credit purchases may differ.

On 10 September 2026 the [OpenRouter model listing](https://openrouter.ai/qwen/qwen3.8-27b) displayed starting prices of **$0.15 per million input tokens and $2 per million output tokens**. At those rates, 100,000 input and 10,000 output tokens are about **$0.035** before other charges. This illustrates one usage amount, not a whole agent session or project estimate. Provider routing, output/reasoning volume, repeated context and retries can change the bill. Recheck the selected provider's rate before each cohort.

Use `cost = input tokens / 1,000,000 × input rate + output tokens / 1,000,000 × output rate`, then reconcile with actual provider usage. Record billable categories as reported; don't silently omit reasoning or treat displayed text length as the entire bill. Never publish billing screenshots or account identifiers.

- One outcome and a few relevant files per task. Ask for a short plan before a broad edit.
- Stop after two failed attempts. Read the error, narrow scope and ask a human question.
- Run deterministic checks locally; don't pay a model to repeatedly guess their result.
- Save decisions and commands in project files; start a fresh task with that concise context.
- Use one agent at a time by default. Broad parallel runs multiply usage.
- Freeze features before polish week. A smaller, finished product beats an unfinished rewrite.
- Do not automatically fall back to a premium model. Escalate only with budget approval; instructor help is a valid escalation.

## Strengths and failure modes to discuss in Session 02

These are **workflow hypotheses to observe**, not measured rankings or claims that all small models behave alike.

| Task | Why a smaller model can be useful | How to support and verify it |
| --- | --- | --- |
| Small feature or test | Short context, concrete expected behavior | One acceptance criterion, relevant files, actual local checks |
| Documentation and CSV work | Repeated structure and explicit examples | Verify formulas, sources, row counts and factual claims |
| UI iteration | Fast changes to a bounded component | Give design tokens and screenshots if supported; inspect keyboard/mobile behavior yourself |
| Large refactor | Many interacting constraints may be lost | Map dependencies first, split into reversible PRs, rerun regressions |
| Ambiguous requirements | A plausible answer may invent business rules | Ask for questions and assumptions before implementation |
| Long agent task | Tool errors or repeated wrong approaches can snowball | Short checkpoints, observed state, retry/time/spend limits |
| Security or integration | Attractive code can hide broken boundaries | Synthetic negative cases, independent review, no secrets or live privileged deployment |

## Session 02 mini-workshop: make the same model more effective

In 15 minutes, the instructor shows a vague request (“improve this form”) beside a bounded brief specifying one field, an invalid case, allowed files and a check. Predict failure modes; run one bounded example using approved inference or prepared, clearly labeled outputs. Compare the plan, diff, checks and uncertainty—not fluent wording. Students write a better brief for their first issue. Use the final minutes to confirm each student's route and budget; installations happen in setup/support time, not during the workshop.

## Session 11: improve without buying another model

Choose one small task from your product. Use an isolated copy at the same starting commit and the same requirements/checks for two runs: original brief vs improved brief/context on the **same model**. Reset by creating a fresh scratch copy, not destroying current work. Record exact model/client, context difference, actual outcome, retries, elapsed time and reported usage; missing metrics stay “not measured.” This evaluates the workflow change, not a model-vs-model benchmark. A second model is optional, not necessary for completion.

Recheck current IDs, rates and client docs at cohort start and after a material change. Preserve a working baseline; compare the same small tasks before switching. Don't rewrite expected behavior to flatter a newer model. No live Qwen/client combination has been validated by writing this guide; the instructor smoke check remains required.

© 2026 Jared Cluff.
