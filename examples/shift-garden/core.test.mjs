// © 2026 Jared Cluff. Synthetic tests, not evidence of learner development history.
import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {create,assign,unassign,coverage,validate,demo} from './core.mjs';
test('SG-01: bounded creation is immutable; duplicate IDs and malformed imports are rejected',()=>{
  const before=demo(),after=create(before,{id:'tea',name:' Tea table ',capacity:1});assert.equal(before.length,2);assert.equal(after[2].name,'Tea table');
  assert.equal(create(before,{id:'large',name:'Large table',capacity:20})[2].capacity,20);
  for(const capacity of [0,21,1.5,'2',NaN])assert.throws(()=>create(before,{id:'tea',name:'Tea',capacity}));
  assert.throws(()=>create(before,{id:'welcome',name:'Same ID',capacity:2}));
  assert.throws(()=>validate([{...before[0],extra:true}]));assert.throws(()=>validate({}));
});
test('SG-02/03: reject duplicates and full shifts, allow replacement after removal',()=>{
  const before=demo(),full=assign(before,'welcome','V02');assert.equal(before[0].volunteers.length,1);
  assert.throws(()=>assign(full,'welcome','V01'),/already/);assert.throws(()=>assign(full,'welcome','V03'),/full/);
  const freed=unassign(full,'welcome','V01');assert.equal(assign(freed,'welcome','V03')[0].volunteers.length,2);
  assert.throws(()=>assign(full,'absent','V03'),/not found/);assert.throws(()=>assign(before,'welcome','Real person'),/fictional/);
});
test('SG-04: totals and JSON round trip preserve a valid schedule',()=>{
  assert.deepEqual(coverage(demo()),{filled:1,total:5});assert.deepEqual(validate(JSON.parse(JSON.stringify(demo()))),demo());
  assert.deepEqual(coverage([]),{filled:0,total:0});
});
test('SG-03: identical regression really fails on negative control and passes corrected snapshot',()=>{
  const script=new URL('./regression.mjs',import.meta.url);
  const red=spawnSync(process.execPath,[fileURLToPath(script),'--negative'],{encoding:'utf8'}),green=spawnSync(process.execPath,[fileURLToPath(script)],{encoding:'utf8'});
  assert.equal(red.status,1);assert.match(red.stderr,/Missing expected exception/);assert.equal(green.status,0);assert.match(green.stdout,/PASS SG-03/);
});
