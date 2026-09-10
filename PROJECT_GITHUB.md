# Your product, your repository, a professional workflow

The [course project](COURSE_PROJECT.md) belongs in **your own repository**, not the curriculum or a folder of the lab-submissions repository. Start at https://github.com/new. Choose your personal account as owner, a product name, **Public**, a README and the appropriate ignore template. Do not publish unrelated local folders. Check account eligibility and arrange any school/guardian authorization privately with the instructor.

Public is not the same as open-source licensed. Choose licensing for your own work deliberately; acknowledge third-party assets/dependencies and retain notices on adapted course materials. Use synthetic data and an alias where appropriate.

## Session 02 kickoff

1. Confirm approved scope and your inference/budget route. Publish only a sanitized proposal.
2. Create the repo in GitHub's browser UI. Copy its full HTTPS URL into your private instructor handoff and public-safe progress index.
3. Create three issues: **project brief and README**, **first working journey**, **quality and data safety**. Give each a goal and observable acceptance criteria. Add later ideas separately.
4. From the branch selector, create `setup/project-brief`. On that branch, edit README and add your proposal/context files. Commit meaningful changes, open a draft PR to **your own `main`**, and link the issue. Request a peer/instructor review.
5. Inspect the diff together. Fix at least one useful improvement where feedback warrants it. Record actual feedback; never fabricate a review. Mark ready, complete the safety/check checklist and merge after the agreed review. Creating the first empty README on `main` is the bootstrap exception, not the ongoing workflow.

Browser editing works on Mac, Linux and Windows. GitHub Desktop is optional on Mac/Windows; Linux can use Git CLI. For local tools, installation, terminals, line endings and screenshots, use [the platform guide](PLATFORM_GUIDE.md). Keep client credentials outside the product repo.

## Each feature or fix

Follow [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow): start from current `main`, branch for one issue, make focused commits, open a PR, review/check, address feedback and merge. In the PR say what changed, why, how you verified it and what remains uncertain. Link an issue with `Closes #N` only when the change actually completes it.

CLI example after cloning and opening a terminal inside **your product repo**, with no uncommitted changes:

```text
git switch main
git pull --ff-only
git switch -c feat/first-journey
git status
```

Make and inspect the intended edits. Stage specific filenames through your editor or `git add` with their actual paths; don't copy an indiscriminate add-all command. Then:

```text
git diff --cached
git commit -m "Add the first saved-record journey"
git push -u origin feat/first-journey
```

Open the PR in your repository's **Pull requests** tab. If a pull or switch fails, stop and inspect; do not force-push, reset away work or disable safety controls to match the example. Bash/zsh, PowerShell and Command Prompt accept these Git commands unchanged. Quote paths containing spaces.

## A small, useful repository layout

```text
README.md                 purpose, screenshots, supported OS, setup/run/check/reset
AGENTS.md                 allowed scope, commands, constraints, no secrets
src/                      your product code (or a simpler approved layout)
tests/                    meaningful automated checks
sample-data/              synthetic fixtures only
docs/proposal.md           approved public-safe requirements and exclusions
docs/progress.md           milestone → issue/PR/evidence index
docs/milestone-NN.md       concise progress, AI/cost and QA evidence
docs/design.md             visual direction, tokens and before/after iterations
docs/ai-workflow.md        repeatable briefs, commands and model/host notes
.github/pull_request_template.md
.gitignore
```

Copy/adapt the [milestone](templates/project-milestone.md), [review](templates/project-review.md) and [showcase](templates/project-showcase.md) templates. Replace their course-relative links with full course URLs when copying into your repo, for example https://learn.labalicious.com/COURSE_PROJECT.html. Do not leave links pointing to nonexistent files in your product.

Add these protections before local development (plus your stack's generated outputs):

```gitignore
.env
.env.*
!.env.example
*.pem
*.key
node_modules/
dist/
coverage/
private/
.claude/settings.local.json
.DS_Store
Thumbs.db
```

An example env file contains **names and fake values only**. Ignore rules do not remove already tracked secrets or make files confidential. Inspect staged content and screenshots before every push. If a credential is published, stop and privately notify the instructor; revoke/rotate it first. Deleting it in a later commit does not erase history. Never put model credentials in browser code—even for a static demo.

## PR checklist to copy

```markdown
## Goal and linked issue
## Changes and scope limits
## Evidence
Commands actually run, results, environment, screenshots where useful.
What was not checked?
## AI assistance
Exact client/model, important correction and verification. No raw secret-bearing chats.
## Reviewer question
One focused question.
- [ ] Diff and files checked for secrets, personal data and licensed content
- [ ] Acceptance criteria checked; failures/limits stated
- [ ] Data, error, keyboard and mobile impact considered
- [ ] Documentation and relevant tests updated
```

## Reviews that fit an individual project

Arrange at least three substantive human reviews: kickoff, working slice and release. Peers/coaches can comment; instructor progress reviews remain required. AI review is a disclosed supplement, not human approval. A PR author cannot approve their own PR; do not create pretend reviewers. See https://docs.github.com/en/pull-requests/reference/pull-request-reviews.

For routine PRs, a learner may self-merge after the checklist and checks if the instructor agrees. For designated human-review milestones, wait for that feedback. Do not enable a required-approval rule before arranging an eligible reviewer; avoid locking a sole-owner project. Add least-privilege collaborators only when necessary, never share passwords. The instructor can inspect public code without becoming an administrator.

## CI by Session 07

First make a meaningful local automated regression command. For a Node project, define `npm test` to run your actual tests and commit the lockfile. **A command that always exits successfully is not a test.** Then add a workflow on a branch, review it, and prove it fails for the targeted defect and passes after the repair. A minimal starting point for `.github/workflows/verify.yml`:

```yaml
name: Product checks
on: [push, pull_request]
permissions:
  contents: read
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
        with:
          persist-credentials: false
      - uses: actions/setup-node@v7
        with:
          node-version: '22'
          cache: npm
      - run: npm ci
      - run: npm test
```

This runs **your own** project checks on a hosted runner with read-only repository permissions and no model/API secrets. Don't use a personal/self-hosted runner or a privileged `pull_request_target` workflow to execute incoming code. Review contributed workflows and dependencies before running them. A non-Node project uses an instructor-reviewed equivalent. Version references checked September 10, 2026: https://github.com/actions/checkout and https://github.com/actions/setup-node. Recheck supported versions before a cohort; a real green run in the student's repo is still required. General workflow guide: https://docs.github.com/en/actions/writing-workflows/quickstart.

CI on Linux is not evidence of Windows or Mac success. Test locally on your documented OS and arrange cross-platform checks with classmates; record actual outcomes and remaining limits. Add a three-OS matrix only when it supports your approved product and budget. No particular operating system earns preference.

## Submission and release

The lab-submissions repo remains for **practice packets**; the product repo is the source of truth for software, history and milestones. Follow [the submission guide](SUBMISSIONS.md) for the optional Session 12 summary/index packet. Existing bots do not follow your project links or run your code. A successful packet check is not product review.

Keep a `docs/progress.md` table of session, goal, PR, reviewed commit, evidence and next step. Hand the full repo and review URLs to the instructor through the private cohort channel. Do not post real names, private decisions or certificates in that table.

For the final demo, make a versioned release through your repo's **Releases → Draft a new release**, targeting the reviewed commit, with setup, changes and known limits. A local demo is valid. Optional GitHub Pages setup: https://docs.github.com/en/pages/quickstart. Static hosting cannot safely hide an API key or provide server authentication. Do not add paid hosting just to present the product.

© 2026 Jared Cluff. Your original product remains yours.
