import test from 'node:test';
import assert from 'node:assert/strict';
import {collectResources,pageFor,sessionBody} from './class-materials.mjs';
test('collects linked and inline supplied resources without admitting private paths',()=>{
 const known=new Set(['fixtures/claim-packet.md','templates/evidence-packet.md','instructor/ANSWER_KEY.md']);
 const actual=collectResources([['labs/01-example.md','[packet](../fixtures/claim-packet.md#e01) templates/evidence-packet.md [key](../instructor/ANSWER_KEY.md) [external](https://example.com/private.md) [private](../../state/transcript.txt)']],['fixtures/claim-packet.md'],known);
 assert.deepEqual(actual,[...known].sort());
});
test('routes rendered documents, slides and raw files correctly',()=>{
 assert.equal(pageFor('decks/01-demo.md'),'slides/01-demo.html');
 assert.equal(pageFor('fixtures/claim-packet.md'),'fixtures/claim-packet.html');
 assert.equal(pageFor('fixtures/budget.csv'),'fixtures/budget.csv');
});
test('separates instructor context and does not pretend recordings are protected',()=>{
 const html=sessionBody({id:'01',title:'<unsafe>',guide:{goal:'Evidence',target:'Claims'},lab:'labs/01-lab.md',lesson:'lessons/01-demo.md',resources:['fixtures/test.md','instructor/ANSWER_KEY.md'],titles:{}});
 assert.ok(html.includes('&lt;unsafe>'));
 const students=html.split('<section id="students">')[1].split('<section id="teachers">')[0];
 assert.ok(!students.includes('instructor/ANSWER_KEY'));
 assert.ok(html.includes('No protected replay is linked here yet'));
 assert.ok(!html.includes('videos.labalicious.com'));
 assert.ok(html.includes('Use fictional data only'));
 assert.ok(!html.includes('Slide downloads:'));
});
