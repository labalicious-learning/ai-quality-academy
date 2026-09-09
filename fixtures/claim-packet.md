# Evidence packet for Lesson 1
Everything below is fabricated classroom evidence. No real deployment was tested.

E01 · Requirement: after clicking Load allocation, AL-01 must render as reserved. A title alone is insufficient.
E02 · Browser observation: title “Allocation dashboard” visible. After click: “Unable to load allocation”.
E03 · Network: GET /api/allocation, candidate B27, 500, response {"error":"allocation table unavailable"}.
E04 · Database support note: no database inspection has been performed.
E05 · Release note: candidate B27 changes allocation loading. Root cause investigation is pending.

AI report A: “The allocation journey fails on B27. E02 and E03 support the failed load.”
AI report B: “The migration probably did not run. That might explain the error.”
AI report C: “All customer deposits were deleted and production lost $400,000.”

Classify each report. Use the local browser lab to capture your own screenshot of the analogous failure. Do not assume its candidate ID or cause matches these fictional reports.
