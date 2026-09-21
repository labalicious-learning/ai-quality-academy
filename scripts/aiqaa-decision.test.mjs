// © 2026 Jared Cluff. All records below are fictional calculator fixtures.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {criterionIds, criteriaVersion, evaluateReview} from './aiqaa-decision.mjs';

const make = () => ({schemaVersion: 1, criteriaVersion, releaseSha: 'a'.repeat(40), coursework: 'complete',
  presentationReviewed: true, agreement: {version: 'fictional-v1', sha: 'b'.repeat(40), approved: true, applicabilityConfirmed: true}, holds: [],
  results: criterionIds.map(id => ({id, status: 'demonstrated', evidence: ['fictional-private-worksheet#' + id], rationale: 'Fictional verified conditions for aggregation testing, not real assessment.'}))});

test('all demonstrated permits human decision, never issues an award', () => {
  const result = evaluateReview(make());
  assert.equal(result.readiness, 'eligible_for_jared_decision');
  assert.equal(result.awardIssued, false);
});
test('every individual criterion is a non-compensable gate', () => {
  for (const id of criterionIds) {
    const record = make(); record.results.find(row => row.id === id).status = 'not_yet';
    const result = evaluateReview(record);
    assert.equal(result.readiness, 'not_yet_demonstrated'); assert.deepEqual(result.notYet, [id]);
  }
});
test('missing observation is pending, not failure or success', () => {
  const record = make(); record.results[0].status = 'unverified'; record.results[0].evidence = [];
  assert.equal(evaluateReview(record).readiness, 'review_pending');
  record.results[1].status = 'not_yet';
  assert.deepEqual(evaluateReview(record).notYet, ['P2']);
});
test('every hold prevents eligibility without implying misconduct', () => {
  for (const kind of ['safety', 'integrity', 'disagreement', 'environment']) {
    const record = make(); record.holds = [{kind, rationale: 'Fictional unresolved observation', evidence: ['private-record']}];
    assert.equal(evaluateReview(record).readiness, 'review_pending');
  }
});
test('approval, current applicability and presentation require explicit confirmation', () => {
  for (const field of ['approved', 'applicabilityConfirmed']) {
    const record = make(); record.agreement[field] = false;
    assert.equal(evaluateReview(record).readiness, 'review_pending');
  }
  const record = make(); record.presentationReviewed = false;
  assert.equal(evaluateReview(record).readiness, 'review_pending');
});
test('coursework completion is separate and necessary for certification eligibility', () => {
  const record = make(); record.coursework = 'outstanding';
  assert.equal(evaluateReview(record).readiness, 'not_yet_demonstrated');
  record.coursework = 'unverified'; assert.equal(evaluateReview(record).readiness, 'review_pending');
});
test('reject missing, duplicate, unknown and waived criteria', () => {
  for (const mutate of [r => r.results.pop(), r => r.results.push(r.results[0]), r => r.results[0].id = 'X1', r => r.results[0].status = 'N/A']) {
    const record = make(); mutate(record); assert.equal(evaluateReview(record).readiness, 'invalid_record');
  }
});
test('reject malformed versions, revisions, evidence, booleans and holds', () => {
  const mutations = [r => r.criteriaVersion = 'AIQAA-2.0', r => r.schemaVersion = '1', r => r.releaseSha = 'main',
    r => r.agreement.sha = 'short', r => r.agreement.approved = 'false', r => r.presentationReviewed = 'true',
    r => r.holds = null, r => r.holds = [{kind: 'safety'}], r => r.results[0].evidence = [],
    r => r.results[0].evidence = 'not an array', r => r.results[0].rationale = ' ', r => r.coursework = true];
  for (const mutate of mutations) { const record = make(); mutate(record); assert.equal(evaluateReview(record).readiness, 'invalid_record'); }
  for (const bad of [null, [], false, {}, {results: [null]}]) assert.equal(evaluateReview(bad).readiness, 'invalid_record');
});
test('row order does not change the decision and inputs are not mutated', () => {
  const record = make(); record.results[3].status = 'not_yet';
  const original = structuredClone(record); const result = evaluateReview(record);
  assert.deepEqual(record, original); record.results.reverse();
  assert.deepEqual(evaluateReview(record), result);
});
test('summary never echoes private narratives or evidence locations', () => {
  const record = make(); record.results[0].rationale = 'PRIVATE_SENTINEL'; record.results[0].evidence = ['PRIVATE_SENTINEL'];
  assert.ok(!JSON.stringify(evaluateReview(record)).includes('PRIVATE_SENTINEL'));
});
test('published rubric and agreement enumerate the exact calculator criteria', () => {
  const rubric = readFileSync(new URL('../AIQAA_RUBRIC.md', import.meta.url), 'utf8');
  const agreement = readFileSync(new URL('../templates/project-assessment-agreement.md', import.meta.url), 'utf8');
  assert.deepEqual([...rubric.matchAll(/^### ([PVQHGAB][123]) —/gm)].map(m => m[1]), criterionIds);
  assert.deepEqual([...agreement.matchAll(/^\| ([PVQHGAB][123]) \|/gm)].map(m => m[1]), criterionIds);
  assert.equal(criterionIds.length, 21);
});
