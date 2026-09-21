// © 2026 Jared Cluff. Fictional learning-planner fixtures only.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import '../site/path-core.js';
const C=globalThis.LearningPath;
const evidence=()=>({id:'fictional-e1',title:'Reload observation',url:'https://example.com/evidence',note:'Synthetic evidence only',session:'05',criteria:['P1','P2']});
const feedback=()=>({id:'fictional-f1',title:'Check reload',why:'State may be lost',needed:'Show expected/actual values after reload',session:'05',criterion:'P2',status:'open'});
test('fresh planner starts with setup; lesson and milestone advance independently',()=>{
  const s=C.blank();assert.equal(C.next(s).session,'00');assert.equal(C.next(s).kind,'lesson');
  s.progress['00'].lessonDone=true;assert.equal(C.next(s).kind,'project');s.progress['00'].stage='waiting';assert.equal(C.next(s).kind,'waiting');
  s.progress['00'].stage='done';assert.equal(C.next(s).session,'01');
});
test('feedback priority is explicit and resolving it returns to the learning path',()=>{
  const s=C.blank();s.feedback.push(feedback(),{...feedback(),id:'second',status:'in_progress',title:'Active feedback'});
  assert.equal(C.next(s).title,'Active feedback');s.feedback.forEach(f=>f.status='resolved');assert.equal(C.next(s).kind,'lesson');
});
test('all self-tracked progress still requires human review and awards nothing',()=>{
  const s=C.blank();for(const p of Object.values(s.progress)){p.lessonDone=true;p.stage='done';}
  assert.equal(C.next(s).kind,'review');assert.match(C.next(s).done,/awards neither/);
});
test('round-trip preserves supported data without mutation or references',()=>{
  const s=C.blank();s.evidence.push(evidence());s.feedback.push(feedback());const copy=C.parse(JSON.stringify(s));assert.deepEqual(copy,s);copy.project.name='Different';assert.equal(s.project.name,'');
});
test('reject invalid fields, unknown versions, unsafe links and fabricated certification state',()=>{
  for(const mutate of [s=>s.version=2,s=>s.certified=true,s=>s.project.repo='javascript:alert(1)',s=>s.project.repo='https://name:secret@example.com',s=>s.progress['00'].lessonDone='yes',s=>s.progress['00'].stage='certified',s=>delete s.progress['12'],s=>s.evidence.push({...evidence(),criteria:['P1','P1']}),s=>s.evidence.push({...evidence(),criteria:['X1']}),s=>s.evidence.push({...evidence(),url:'data:text/html,unsafe'}),s=>s.evidence.push(evidence(),evidence()),s=>s.feedback.push({...feedback(),status:'approved'}),s=>s.feedback.push({...feedback(),needed:''})]){
    const s=C.blank();mutate(s);assert.throws(()=>C.validate(s));
  }
  for(const value of [null,[],{},true])assert.throws(()=>C.validate(value));
});
test('bounded imports reject oversized input, huge lists and empty evidence',()=>{
  assert.throws(()=>C.parse(' '.repeat(1024*1024+1)));assert.throws(()=>C.parse('{'));
  const s=C.blank();s.evidence=Array.from({length:151},(_,i)=>({...evidence(),id:String(i)}));assert.throws(()=>C.validate(s));
  s.evidence=[{...evidence(),url:'',note:''}];assert.throws(()=>C.validate(s));
});
test('status values must be strings, and every valid state fits its own UTF-8 backup',()=>{
  const s=C.blank();s.progress['00'].stage=['done'];assert.throws(()=>C.validate(s));
  s.progress['00'].stage='done';s.feedback=[{...feedback(),status:['open']}];assert.throws(()=>C.validate(s));
  s.feedback=Array.from({length:150},(_,i)=>({...feedback(),id:String(i),why:'界'.repeat(2000),needed:'界'.repeat(2000)}));assert.throws(()=>C.validate(s));
});
test('text content is retained as data, not evaluated by the model',()=>{
  const s=C.blank();s.evidence.push({...evidence(),title:'<img src=x onerror=alert(1)>'});assert.equal(C.validate(s).evidence[0].title,s.evidence[0].title);
});
test('all 13 curriculum links exist and rubric mappings match the canonical IDs',()=>{
  assert.equal(C.sessions.length,13);assert.deepEqual(C.criteria,JSON.parse(readFileSync(new URL('../fixtures/aiqaa-criteria.json',import.meta.url),'utf8')).criteria);
  for(const s of C.sessions){for(const file of [s.lesson,s.lab])assert.ok(existsSync(new URL('../'+file.replace('.html','.md'),import.meta.url)),file);assert.ok(s.criteria.every(c=>C.criteria.includes(c)));assert.equal(s.hints.length,2);}
});
test('AI briefs are bounded, input-only and contain no private planner data',()=>{
  const s=C.blank();s.project.name='PRIVATE_SENTINEL';
  for(const lesson of C.sessions){const brief=C.brief(lesson.id);assert.match(brief,/Do not use instructor answer keys/);assert.match(brief,/Do not implement a fix until I authorize/);assert.ok(!brief.includes(s.project.name));}
  assert.match(C.brief('00'),/only fixtures\/setup-example.mjs/);
});
