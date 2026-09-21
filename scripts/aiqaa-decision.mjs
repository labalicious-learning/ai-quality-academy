// © 2026 Jared Cluff. Record consistency only; never a credential issuer.
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const rubric = JSON.parse(readFileSync(new URL('../fixtures/aiqaa-criteria.json', import.meta.url), 'utf8'));
export const criteriaVersion = rubric.version;
export const criterionIds = Object.freeze([...rubric.criteria]);
const text = value => typeof value === 'string' && value.trim().length > 0;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const sha = value => typeof value === 'string' && /^[a-f0-9]{40}$/i.test(value);
const strings = value => Array.isArray(value) && value.every(text);

export function evaluateReview(record) {
  const errors = [];
  const invalid = () => ({readiness: 'invalid_record', awardIssued: false, errors});
  if (!object(record)) { errors.push('Review must be an object.'); return invalid(); }
  if (record.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
  if (record.criteriaVersion !== criteriaVersion) errors.push('Unsupported criteriaVersion.');
  if (!sha(record.releaseSha)) errors.push('releaseSha must be a full commit SHA.');
  if (!['complete', 'outstanding', 'unverified'].includes(record.coursework)) errors.push('Invalid coursework state.');
  if (typeof record.presentationReviewed !== 'boolean') errors.push('presentationReviewed must be boolean.');
  if (!object(record.agreement)) errors.push('Missing agreement.');
  else {
    if (!text(record.agreement.version) || !sha(record.agreement.sha)) errors.push('Agreement needs version and full SHA.');
    if (typeof record.agreement.approved !== 'boolean' || typeof record.agreement.applicabilityConfirmed !== 'boolean') errors.push('Agreement confirmation fields must be boolean.');
  }
  if (!Array.isArray(record.holds)) errors.push('holds must be an explicit array, empty if none.');
  else for (const hold of record.holds) {
    if (!object(hold) || !['safety', 'integrity', 'disagreement', 'environment'].includes(hold.kind) || !text(hold.rationale) || !strings(hold.evidence) || !hold.evidence.length) errors.push('Each open hold needs a known kind, rationale and evidence reference.');
  }
  const rows = new Map();
  if (!Array.isArray(record.results)) errors.push('results must be an array.');
  else for (const row of record.results) {
    if (!object(row) || !criterionIds.includes(row.id)) { errors.push('Unknown or malformed criterion row.'); continue; }
    if (rows.has(row.id)) errors.push('Duplicate criterion: ' + row.id);
    rows.set(row.id, row);
    if (!['demonstrated', 'not_yet', 'unverified'].includes(row.status)) errors.push(row.id + ': invalid status; no N/A or waived state.');
    if (!text(row.rationale)) errors.push(row.id + ': missing rationale.');
    if (!strings(row.evidence)) errors.push(row.id + ': evidence must be an array of references.');
    else if (row.status !== 'unverified' && !row.evidence.length) errors.push(row.id + ': observed findings require evidence references.');
  }
  for (const id of criterionIds) if (!rows.has(id)) errors.push('Missing criterion: ' + id);
  if (errors.length) return invalid();

  // Canonical order ensures equivalent records produce identical summaries.
  const notYet = criterionIds.filter(id => rows.get(id).status === 'not_yet');
  const unverified = criterionIds.filter(id => rows.get(id).status === 'unverified');
  const pending = [];
  if (!record.agreement.approved) pending.push('agreement_not_approved');
  if (!record.agreement.applicabilityConfirmed) pending.push('agreement_applicability_unconfirmed');
  if (!record.presentationReviewed) pending.push('presentation_not_reviewed');
  if (record.coursework === 'unverified') pending.push('coursework_unverified');
  if (record.holds.length) pending.push('open_review_holds');
  if (unverified.length) pending.push('unverified_criteria');
  const readiness = pending.length ? 'review_pending'
    : notYet.length || record.coursework === 'outstanding' ? 'not_yet_demonstrated'
    : 'eligible_for_jared_decision';
  return {readiness, awardIssued: false, criteriaVersion, releaseSha: record.releaseSha,
    coursework: record.coursework, notYet, unverified, pending, holdCount: record.holds.length};
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    if (process.argv.length !== 3) throw new Error('usage');
    const result = evaluateReview(JSON.parse(readFileSync(process.argv[2], 'utf8')));
    // Deliberately omit evidence references, learner identity and narrative from output.
    console.log(JSON.stringify(result, null, 2));
    process.exitCode = result.readiness === 'invalid_record' ? 2 : 0;
  } catch {
    console.error('Cannot read review JSON. Usage: node scripts/aiqaa-decision.mjs PATH_TO_PRIVATE_REVIEW.json');
    process.exitCode = 2;
  }
}
