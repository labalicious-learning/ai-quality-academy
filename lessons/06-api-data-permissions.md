# Lesson 6 — API, Data, Permissions, and Privacy

**Duration:** 120 minutes  

**Included delivery track:** Follow [LAB_SETUP.md](../LAB_SETUP.md) for the supplied files and local simulation. Required activities use these materials; connected deployments are optional extensions. Instructor debrief: [answer key](../instructor/ANSWER_KEY.md). Real OAuth, cloud releases and payments are simulated or discussed through evidence packets.
**Deck:** [06-api-data-permissions](../decks/06-api-data-permissions.md)  
**Lab:** [Tenant-Boundary Escape Room](../labs/06-tenant-boundary-escape-room.md)

## Learners will be able to

- explain client-side role checks, server authorization, and database row-level isolation;
- test an API request/response without exposing credentials;
- recognize cross-tenant, role-escalation, and PII risks; and
- write a security finding that is factual, scoped, and responsible.

## Instructor preparation

Use fixtures/authorization-requests.md and scripts/lab-request.mjs. Verify all four locks against both candidates. PATCH is an authorization probe with persisted:false; unsupported allocation writes return 405. The send button is clickable and its API response supplies the denial. No real authentication or database isolation is tested.

## Agenda

| Time | Facilitation |
| --- | --- |
| 0–10 | Arrival: “Can a hidden button secure an API?” Learners explain and vote. |
| 10–25 | Teach the authorization path: identity → role/permission → server decision → organization filter → database policy. |
| 25–40 | Demo safe request inspection. Redact auth material; compare a browser denial to an API denial. |
| 40–50 | Practice reading a minimal JSON request/response and defining expected status/state. |
| 50–60 | Break. |
| 60–95 | Escape room: teams test contact list/detail isolation, PATCH permission, a positive owner control and UI/API send denial. Distinguish authorization from actual persistence. |
| 95–110 | Security finding clinic: distinguish an actual unauthorized result from a confusing UI or malformed request. |
| 110–115 | Explain responsible disclosure and why only sandbox testing is allowed. |
| 115–120 | Exit ticket: name two independent layers that should enforce tenant isolation. |

## Assessment

Use the evidence-packet template. Credit is awarded for correct proof of isolation too: QA should be able to establish that a control works, not only find breakage.
