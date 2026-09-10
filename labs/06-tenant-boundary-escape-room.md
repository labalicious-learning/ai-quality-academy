# Lab 6 — Tenant-Boundary Escape Room

**Time:** 35 minutes  
**Team:** pairs; use the [portable request runner and collection](../fixtures/authorization-requests.md)

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Use the cross-platform Node GET examples in the platform guide and Lab setup, or the browser Network panel. Windows PowerShell's `curl` alias and Command Prompt's quoting differ from bash; do not paste Unix curl examples blindly. Record HTTP status as well as body, and use the local simulator for mutations.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

Two synthetic organizations, Atlas and Beacon, share one CRM instance. You must prove that role and organization boundaries hold despite confusing UI hints and deliberately malformed requests.

## Mission

Run all four locks against both candidates and report whether each control holds or fails. A reproduced violation is a successful investigation, not a reason to invent passing evidence. Use [R1–R2 and the local PATCH contract](../fixtures/allocation-requirements.md):

1. **Read boundary:** as Beacon staff, list contacts and request A-101 directly. The list must contain only Beacon data; direct Atlas detail must be denied.
2. **Write-permission boundary:** as Beacon owner, request PATCH authorization for A-101. It must not allow a cross-organization action. Repeat as Beacon staff against B-201 to check role denial independently.
3. **Positive control:** as Beacon owner, request PATCH authorization for B-201. Expect `allowed:true`, but `persisted:false`. Reread the contact to confirm no mutation occurred.
4. **UI/API agreement:** as Beacon staff, click Send inquiry update (simulation), then call `/api/send` directly. Both must deny permission under R1. The button is clickable; the response supplies the denial.

PATCH here is an authorization probe, not a record update. Allocation writes are unsupported (405), which does not prove tenant authorization. No part of this exercise proves OAuth, database policies or persistent writes.

## Rules

- Never paste a token, cookie, or password into chat or a model.
- Use only supplied synthetic identifiers.
- Capture status, safe response summary, and expected authorization outcome; redact headers.

## Deliverables

- a four-lock evidence table;
- an evidence packet for a discovered vulnerability or an isolation-verification report;
- one recommendation for a regression test.

## Stretch

Describe which layer would still protect data if a client-side role check accidentally disappeared.

## Product Studio homework — Check a real boundary

Exercise validation, persistence and malformed input in your product. If it has accounts, test appropriate positive/negative permissions too; otherwise diagram a hypothetical permission boundary and label it unimplemented.

Budget two to three hours, including evidence and review preparation; ask for coaching or scope adjustment if blocked. Record progress using [the milestone template](../templates/project-milestone.md) in **your own product repository**, not the practice packet. See [the complete project roadmap](../COURSE_PROJECT.md), [GitHub workflow](../PROJECT_GITHUB.md) and [small-model guide](../SMALL_MODEL_GUIDE.md). The practice lab above remains separate from your individual product.
