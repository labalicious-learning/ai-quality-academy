# Event-processing case cards

Paste JSON into the local inbox simulator. Use View stored events before and after each attempt. These are fabricated payloads; neither email nor credentials are needed.

## Healthy baseline

```json
{"messageId":"healthy-01","consent":true,"confidence":0.95}
```

## Pick one failure/recovery sequence

| Card | First attempt | Recovery / repeat |
| --- | --- | --- |
| Duplicate delivery | `{"messageId":"duplicate-01","consent":true,"confidence":0.95}` | Submit identical JSON again; compare event count and queued flags |
| Expired authorization | `{"messageId":"auth-01","consent":true,"confidence":0.95,"oauth":"expired"}` | Remove `oauth` and retry the same ID; this simulates resolved authorization, not a real login |
| Malformed attachment | `{"messageId":"attachment-01","consent":true,"confidence":0.95,"attachment":"malformed"}` | Remove `attachment` and retry the same ID to simulate a corrected payload |
| Opt-out | `{"messageId":"optout-01","consent":false,"confidence":0.95}` | Redeliver unchanged; consent must stay false—do not fabricate opt-in to make a send succeed |
| Low confidence | `{"messageId":"review-01","consent":true,"confidence":0.5}` | Redeliver unchanged; it should remain in review. Human review resolution is not implemented |
| Delayed redelivery | `{"messageId":"delay-01","consent":true,"confidence":0.95}` | Perform another UI action, then resubmit unchanged; only redelivery semantics are tested, not real delay handling |

Use a unique message ID for each card. Correct rejected payloads may be retried using the same ID because no event was saved. Accepted low-confidence or opted-out events are not edited by resubmitting different fields; changed-consent and review-resolution workflows are out of scope.

Record actual status, stored count, state and queued decision against [R4–R6](allocation-requirements.md). For a rejected attachment, `state:review` in an error response is not proof that a review item was stored. Explain that limitation.
