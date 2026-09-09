import test from 'node:test';
import assert from 'node:assert/strict';
import {contactDetail,canSend,ingest,allocation} from './domain.mjs';
test('candidate comparison exposes tenant leak and demonstrates fixed denial',()=>{
  assert.equal(contactDetail('A-101','Beacon','buggy').tenant,'Atlas');
  assert.equal(contactDetail('A-101','Beacon','fixed'),null);
  assert.equal(contactDetail('B-201','Beacon','fixed').tenant,'Beacon');
});
test('concierge permitted by contract; staff denied on fixed',()=>{
  assert.equal(canSend('concierge','buggy'),false);
  assert.equal(canSend('concierge','fixed'),true);
  assert.equal(canSend('staff','fixed'),false);
});
test('deduplication, consent, review and recovery fixtures',()=>{
  const events=[]; const e={messageId:'1',consent:false,confidence:.95};
  assert.equal(ingest(events,e,'fixed').body.queued,false);
  ingest(events,e,'fixed'); assert.equal(events.length,1);
  assert.equal(ingest(events,{...e,messageId:'2',confidence:.5},'fixed').body.state,'review');
  assert.equal(ingest(events,{...e,oauth:'expired'},'fixed').status,401);
  assert.equal(ingest(events,{...e,attachment:'malformed'},'fixed').status,422);
  const buggy=[]; ingest(buggy,e,'buggy'); ingest(buggy,e,'buggy');
  assert.equal(buggy.length,2); assert.equal(buggy[0].queued,true);
});
test('allocation fails visibly for A and loads for B',()=>{
  assert.equal(allocation('buggy').status,500);
  assert.equal(allocation('fixed').body.status,'reserved');
});
