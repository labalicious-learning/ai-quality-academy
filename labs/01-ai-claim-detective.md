# Lab 1 — The AI Claim Detective

**Time:** 35 minutes  
**Team:** two learners; driver and verifier switch after 17 minutes

## Mac / Linux / Windows

**Submission:** prepare the deliverables below using [the public-safe packet and review workflow](../SUBMISSIONS.md). One PR per lab; private review is equally available. Never publish grades or personal information.

Use the same synthetic claim packet on Mac, Linux or Windows. Follow the platform guide for screenshots and browser developer tools; record OS/browser, viewport and zoom so evidence is comparable.

See the [platform guide](../PLATFORM_GUIDE.md) and [included local lab track](../LAB_SETUP.md).

## Scenario

An AI assistant has reviewed a fictional Community Launch allocation page and produced three claims. The product owner wants to know whether to hold a release.

## Mission

Classify each claim as **proven**, **plausible but unproven**, or **unsupported**. Produce one evidence packet for the highest-risk proven finding, or a supported no-defect conclusion if none is proven.

## Supplied evidence and your capture

- Read [claim-packet.md](../fixtures/claim-packet.md): E01–E05 contain the requirement, browser observation, fictional network excerpt, explicit absence of database evidence and release note, followed by three claims.
- Capture your own screenshot of the analogous local allocation failure. Label it with the local candidate, not the packet's fictional build ID.
- A database record and console export are not supplied. Mark them unavailable; do not manufacture them or treat the local screenshot as evidence about the fictional B27 deployment.

## Rules

- Do not infer a backend result from the page’s appearance.
- Do not copy customer-like data into a model. Use only the supplied synthetic artifacts.
- The AI statement itself cannot be evidence.

## Deliverables

1. A three-row claim table: one row per claim, with classification, source, and reason.
2. A completed [evidence packet](../templates/evidence-packet.md).
3. One sentence stating what your conclusion does **not** prove.

## Success rubric

| 0 points | 1 point | 2 points |
| --- | --- | --- |
| Claims accepted/rejected by intuition | Some sources cited | Every claim has a precise evidence-based classification and limitation |

## Stretch

Ask an approved AI tool to rewrite the most overconfident claim as a calibrated finding. Review every word against the sources.
