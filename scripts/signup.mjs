// Copyright 2026 Jared Cluff. All rights reserved.
export function signupSection(config) {
  if (!config.signupUrl) return '';
  if (!/^https:\/\/docs\.google\.com\/forms\/d\/e\/[A-Za-z0-9_-]+\/viewform$/.test(config.signupUrl)) {
    throw new Error('signupUrl must be a public Google Forms responder URL, not an editor or private workspace link.');
  }
  return '<section class="toolstrip enrollment" aria-labelledby="signup-title"><h2 id="signup-title">Learn together. Build something real.</h2><p>Interested in an instructor-led cohort? Start with the signup details. Dates are pending; enrollment requires instructor approval.</p><div class="actions"><a class="button" href="SIGNUP.html">Course signup →</a><a href="'+config.signupUrl+'">View the Google signup form ↗</a></div><p>Public lessons remain available without enrollment. Calendar invitations follow approval and a confirmed schedule.</p></section>';
}
