# Public release scope

© 2026 Jared Cluff. All rights reserved. The repository-wide [copyright notice](COPYRIGHT.md) covers original course content; third-party rights and licenses remain intact.

Only this academy repository and its generated static site are intended for publication. Do not change visibility, organization policy, membership or permissions for other repositories.

This repository starts with fresh Git history. Its published content consists of original teaching text, fictional examples, an original local simulator, original CSS/SVG graphics and build tooling. No private application source, screenshots, company assets, copied architecture documents, internal links, customer records or real incident details are included. Scenario names and release identifiers are fabricated.

The source scan is a backstop, not a legal ownership opinion. Review new contributions for provenance. Public solutions and synthetic evaluation answers are deliberately included for self-study; do not use them as secret assessment material.

## Hosting
Approved destination: https://learn.labalicious.com, with repository https://github.com/labalicious-learning/ai-quality-academy. Configure the custom domain in this repository's Pages settings before adding the `learn` CNAME pointing to `labalicious-learning.github.io`. Leave apex, www, mail and all other DNS records unchanged. Enable HTTPS enforcement after GitHub issues the certificate. These are deployment destinations, not proof that publication has completed.

GitHub Pages hosts the generated site, docs, slides and downloadable handouts. It does not execute the Node API lab. Learners run that lab locally.

Pages configuration: repository Settings → Pages → Source: GitHub Actions.
Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

The workflow builds only this repository and uploads dist/. It does not check out or modify any other repository. Pull requests run checks without deployment; pushes to main deploy the course. No organization-wide token is required.

## Release checklist
1. Set site.config.json repository to the exact approved owner/name.
2. Run npm ci, npm test, npm run verify, npm run build:full.
3. Review the rendered homepage and setup handout.
4. Commit only this repository's sources and lockfile.
5. Publish this one repository; enable its Pages workflow.
6. Verify the deployed URL and a Session 00 link.
