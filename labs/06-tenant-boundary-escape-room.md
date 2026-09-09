# Lab 6 — Tenant-Boundary Escape Room

**Time:** 35 minutes  
**Team:** pairs; use supplied sandbox request collection

## Scenario

Two synthetic organizations, Atlas and Beacon, share one CRM instance. You must prove that role and organization boundaries hold despite confusing UI hints and deliberately malformed requests.

## Mission

Complete the escape room by collecting proof for all four locks:

1. A Beacon staff member cannot list Atlas contacts.
2. A Beacon staff member cannot change an Atlas allocation by guessing an ID.
3. A Beacon owner can perform the intended owner action in Beacon.
4. A forbidden UI action is also forbidden by the API/server.

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
