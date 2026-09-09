# Local authorization request collection

All IDs and roles are fictional. Start `npm start` in one terminal. From the course folder in a second terminal, run these commands on Mac, Linux or Windows:

```text
node scripts/lab-request.mjs --list
node scripts/lab-request.mjs list-beacon buggy
node scripts/lab-request.mjs detail-atlas buggy
node scripts/lab-request.mjs patch-cross-tenant buggy
node scripts/lab-request.mjs patch-staff buggy
node scripts/lab-request.mjs patch-owner buggy
node scripts/lab-request.mjs detail-beacon buggy
node scripts/lab-request.mjs send-staff buggy
```

Repeat with `fixed` instead of `buggy`. If using the alternate port, add `4179` as the final argument. The runner connects only to 127.0.0.1 and prints request context, status and body. It never uses credentials.

| Request name | Method/path | Simulated tenant/role | Purpose |
| --- | --- | --- | --- |
| list-beacon | GET /api/contacts | Beacon/staff | List boundary |
| detail-atlas | GET /api/contacts/A-101 | Beacon/staff | Direct-ID boundary |
| patch-cross-tenant | PATCH /api/contacts/A-101 | Beacon/owner | Tenant denial independently of staff denial |
| patch-staff | PATCH /api/contacts/B-201 | Beacon/staff | Same-tenant role denial |
| patch-owner | PATCH /api/contacts/B-201 | Beacon/owner | Allowed authorization probe, no persistence |
| detail-beacon | GET /api/contacts/B-201 | Beacon/owner | Reread unchanged record |
| send-staff | GET /api/send | Beacon/staff | Compare browser and server denial |
| unsupported-allocation-write | PATCH /api/allocation | Beacon/staff | 405 means unsupported method, not proof of isolation |

Expected outcomes come from [the classroom requirements](allocation-requirements.md). A 404 protects inaccessible contact details; a 403 denies a PATCH/send decision; a 405 says this operation is not implemented. A 200 alone never proves a write persisted.
