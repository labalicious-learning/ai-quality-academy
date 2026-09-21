// © 2026 Jared Cluff. Fictional state/dates; no runtime signup or calendar access.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {courseContext} from './course-context.mjs';
import '../site/path-core.js';
import '../site/schedule-core.js';
const C=globalThis.LearningPath;
const date=(session='00',start='2027-01-12T18:00:00-06:00',end='2027-01-12T20:00:00-06:00')=>({session,start,end});
test('Today starts with one setup action and does not mutate or migrate saved state',()=>{
  const state=C.blank(), before=JSON.stringify(state), today=C.today(state);
  assert.equal(today.primary.href,'labs/00-course-setup.html');assert.equal(today.projectStage,'Not started');assert.equal(JSON.stringify(state),before);assert.equal(state.version,1);
});
test('Today separates lesson, project, waiting and feedback next actions',()=>{
  const s=C.blank();s.progress['00'].lessonDone=true;assert.equal(C.today(s).primary.href,'#milestone-00');
  s.progress['00'].stage='waiting';assert.equal(C.today(s).primary.href,'review-packet.html');
  s.feedback=[{id:'f1',title:'Check a boundary',why:'Need evidence',needed:'Show rejection',session:'06',criterion:'P3',status:'open'}];
  assert.equal(C.today(s).primary.href,'#feedback-title');assert.equal(C.today(s).session,'06');assert.equal(C.today(s).projectTitle,'Protect a boundary');
});
test('completed self-tracking leads to review, not a certificate',()=>{
  const s=C.blank();Object.values(s.progress).forEach(p=>{p.lessonDone=true;p.stage='done';});
  assert.equal(C.today(s).kind,'review');assert.equal(C.today(s).primary.href,'review-packet.html');assert.match(C.today(s).done,/awards neither/);
});
test('default metadata has preparation for all 13 sessions and no invented dates',()=>{
  const context=courseContext({});assert.deepEqual(context.schedule,[]);assert.equal(context.preparation.length,13);
  assert.equal(context.preparation[0].files[0].href,'PLATFORM_GUIDE.html');assert.ok(!JSON.stringify(context).includes('ANSWER_KEY'));
});
test('public schedule normalizes offsets and excludes all other config fields',()=>{
  const context=courseContext({publicSchedule:[date()],privateNote:'PRIVATE_SENTINEL'});
  assert.equal(context.schedule[0].start,'2027-01-13T00:00:00.000Z');assert.ok(!JSON.stringify(context).includes('PRIVATE_SENTINEL'));
});
test('public dates reject roster data, meeting links, ambiguous times and impossible dates',()=>{
  for(const row of [{...date(),email:'learner@example.com'},{...date(),meetingUrl:'https://example.com/private'},date('13'),date('00','2027-01-12T18:00:00'),date('00','2027-02-30T18:00:00Z','2027-02-30T20:00:00Z'),date('00','2027-01-12T18:00:00Z','2027-01-12T21:00:00Z')])assert.throws(()=>courseContext({publicSchedule:[row]}));
  assert.throws(()=>courseContext({publicSchedule:[date(),date()]}));
  assert.throws(()=>courseContext({publicSchedule:[date('00','2027-01-12T24:00:00Z','2027-01-13T02:00:00Z')]}));
  assert.throws(()=>courseContext({publicSchedule:[date(),date('01','2027-01-13T01:00:00Z','2027-01-13T03:00:00Z')]}));
});
test('next class selection handles upcoming, in-progress and ended sessions without changing input',()=>{
  const sessions=courseContext({publicSchedule:[date()]}).schedule, before=JSON.stringify(sessions);
  assert.equal(CourseSchedule.next(sessions,Date.parse('2027-01-12T22:00:00Z')).session,'00');
  assert.equal(CourseSchedule.next(sessions,Date.parse('2027-01-13T01:00:00Z')).session,'00');
  assert.equal(CourseSchedule.next(sessions,Date.parse('2027-01-13T02:00:00Z')),null);assert.equal(CourseSchedule.next([],0),null);assert.equal(JSON.stringify(sessions),before);
});
