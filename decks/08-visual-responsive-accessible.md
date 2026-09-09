---
marp: true
theme: default
paginate: true
footer: "AI Quality Academy · Lesson 8"
---

<!-- _class: lead -->

# Visual, Responsive, and Accessibility QA

## Lesson 8 · A beautiful screenshot is not enough

---

# Today’s outcome

- Inspect desktop, tablet, and mobile behavior
- Combine visual and semantic checks
- Validate AI visual claims
- Describe user impact precisely

---

# Four kinds of visual quality

- composition and layout
- responsive adaptation
- interaction and keyboard behavior
- semantic accessibility

All four affect whether people can use the product.

---

# Visual baseline discipline

Baseline → candidate → controlled environment → diff → human decision

An intentional design change should be approved, not silently accepted or automatically called a bug.

---

# Accessibility is not a scanner score

Check:

- accessible names and structure
- keyboard focus/order
- usable error messages
- contrast and zoom
- meaningful state announcements

---

# Demo: desktop to mobile

At each viewport, test:

1. readable content
2. reachable controls
3. no clipping/overflow
4. expected option state
5. keyboard/touch interaction

---

# AI vision: hypothesis, not verdict

AI can spot possible visual issues.

Confirm with viewport details, DOM/accessibility evidence, keyboard behavior, screenshots, or a human review.

---

# Lab: Digital Showroom Visual Review

Review the configurator at 1440px, 768px, and 375px plus keyboard-only flow.

**Deliver:** annotated evidence and user-impact findings.

---

# Strong finding

> At 375px width, a keyboard user cannot reach the overlay close button after selecting a wheel option; focus remains behind the overlay.

Specific user. Specific condition. Observable impact.

---

# Exit ticket

Write one accessibility test that an automated color check would miss.
