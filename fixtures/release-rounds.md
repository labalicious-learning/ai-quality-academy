# Release exercise — fictional evidence, reveal one round at a time

## Round 1
Candidate B27, image digest training:27. Source build passed. Unit checks passed. Migration replay passed on an empty database. Public login smoke passed. Authenticated allocation test pending. No evidence yet for the production-like upgraded database.
Question: ready to release?

## Round 2
Authenticated test for training:27 returns 500 on allocation API. Page heading renders. Migration attestation supplied by an engineer belongs to training:26.
Question: what evidence is missing or contradictory?

## Round 3
Independent replay on the training:27 green candidate confirms the failed load. A stakeholder wants an exception before an event. No named release approver has accepted risk. No rollback readiness evidence supplied.
Question: hold, ship, or rollback? What can you establish?
