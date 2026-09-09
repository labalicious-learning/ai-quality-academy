import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const read=file=>readFile(new URL('../'+file,import.meta.url),'utf8');

test('evaluation inputs exclude labels and mock arithmetic matches reviewer expectations',async()=>{
  const cases=JSON.parse(await read('fixtures/model-cases.json'));
  const labels=JSON.parse(await read('instructor/model-labels.json'));
  const outputs=JSON.parse(await read('fixtures/mock-model-outputs.json'));
  assert.equal(cases.length,8);
  assert.deepEqual(cases.map(c=>c.id).sort(),Object.keys(labels).sort());
  for(const c of cases)assert.deepEqual(Object.keys(c).sort(),['evidence','id','task']);
  for(const [name,expected] of [['A',{correct:5,fp:1,ff:0}],['B',{correct:5,fp:0,ff:1}]]) {
    assert.deepEqual(outputs[name].map(o=>o.id).sort(),Object.keys(labels).sort());
    let correct=0,fp=0,ff=0;
    for(const o of outputs[name])if(['pass','fail'].includes(labels[o.id])) {
      correct+=Number(o.verdict===labels[o.id]);
      fp+=Number(o.verdict==='pass'&&labels[o.id]==='fail');
      ff+=Number(o.verdict==='fail'&&labels[o.id]==='pass');
    }
    assert.deepEqual({correct,fp,ff},expected);
  }
});

test('business fixture retains intended deduplication and budget arithmetic',async()=>{
  const csv=(await read('fixtures/inquiries.csv')).trim().split('\n').map(r=>r.split(','));
  const headers=csv.shift();const rows=csv.map(row=>Object.fromEntries(headers.map((h,i)=>[h,row[i]])));
  const unique=[...new Map(rows.map(r=>[r.message_id,r])).values()];
  assert.equal(rows.length,8);assert.equal(unique.length,7);
  assert.deepEqual(unique.filter(r=>r.category==='event'&&r.consent==='yes').map(r=>r.contact_id),['C01','C07']);
  const budget=(await read('fixtures/budget.csv')).trim().split('\n').slice(1).map(r=>r.split(','));
  assert.equal(budget.reduce((sum,r)=>sum+Number(r[4]),0),545);
  assert.equal(budget.reduce((sum,r)=>sum+Number(r[1])*Number(r[2]),0),700);
});
