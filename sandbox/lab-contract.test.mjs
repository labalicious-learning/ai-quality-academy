import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from './server.mjs';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';

test('lab 6 request collection proves each independent boundary without claiming persistence',async()=>{
  const server=createServer();
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  try {
    const base='http://127.0.0.1:'+server.address().port;
    for(const mode of ['buggy','fixed']) {
      const call=async(path,role='staff',method='GET')=>{
        const r=await fetch(base+path+'?'+new URLSearchParams({mode,tenant:'Beacon',role}),{method});
        return {status:r.status,allow:r.headers.get('allow'),body:await r.json()};
      };
      assert.deepEqual((await call('/api/contacts')).body.map(c=>c.id),['B-201']);
      assert.equal((await call('/api/contacts/A-101')).status,mode==='buggy'?200:404);
      assert.equal((await call('/api/contacts/A-101','owner','PATCH')).body.allowed,mode==='buggy');
      assert.equal((await call('/api/contacts/B-201','staff','PATCH')).status,403);
      const before=(await call('/api/contacts/B-201','owner')).body;
      assert.deepEqual((await call('/api/contacts/B-201','owner','PATCH')).body,{allowed:true,persisted:false});
      assert.deepEqual((await call('/api/contacts/B-201','owner')).body,before);
      assert.equal((await call('/api/send')).status,403);
      const unsupported=await call('/api/allocation','staff','PATCH');
      assert.equal(unsupported.status,405); assert.equal(unsupported.allow,'GET');
    }
  } finally {await new Promise(resolve=>server.close(resolve));}
});

test('lab 9 healthy, rejected, review, opt-out and redelivery evidence matches simulation limits',async()=>{
  const server=createServer();
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  try {
    const base='http://127.0.0.1:'+server.address().port;
    for(const mode of ['buggy','fixed']) {
      const url=base+'/api/events?mode='+mode;
      const stored=async()=>await (await fetch(url)).json();
      const post=async(event)=>{const r=await fetch(url,{method:'POST',body:JSON.stringify(event)});return {status:r.status,body:await r.json()};};
      const e={messageId:'healthy-01',consent:true,confidence:.95};
      assert.equal((await post(e)).body.queued,true);
      for(const [field,value,status] of [['oauth','expired',401],['attachment','malformed',422]]) {
        const rejected={...e,messageId:field+'-01',[field]:value};
        const before=(await stored()).length;
        assert.equal((await post(rejected)).status,status);
        assert.equal((await stored()).length,before);
        delete rejected[field];
        assert.equal((await post(rejected)).status,201);
      }
      assert.equal((await post({...e,messageId:'review-01',confidence:.5})).body.state,'review');
      const optout={...e,messageId:'optout-01',consent:false};
      assert.equal((await post(optout)).body.queued,mode==='buggy');
      const count=(await stored()).length;
      await post(optout);
      assert.equal((await stored()).length,count+(mode==='buggy'?1:0));
      assert.equal((await post({...e,messageId:'threshold-01',confidence:.8})).body.queued,true);
      assert.equal((await post({...e,messageId:'below-01',confidence:.799})).body.queued,false);
      assert.equal((await post({messageId:'invalid',confidence:.95})).status,400);
    }
  } finally {await new Promise(resolve=>server.close(resolve));}
});

test('portable request runner uses the selected local port and rejects invalid inputs',async()=>{
  const run=promisify(execFile);
  const script=fileURLToPath(new URL('../scripts/lab-request.mjs',import.meta.url));
  const server=createServer();
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  try {
    const port=String(server.address().port);
    const {stdout}=await run(process.execPath,[script,'patch-owner','fixed',port]);
    const result=JSON.parse(stdout);
    assert.equal(result.status,200);
    assert.deepEqual(result.body,{allowed:true,persisted:false});
    assert.equal(new URL(result.url).hostname,'127.0.0.1');
    assert.equal(new URL(result.url).port,port);
    await assert.rejects(run(process.execPath,[script,'patch-owner','fixed','65536']));
    await assert.rejects(run(process.execPath,[script,'unknown-request','fixed',port]));
  } finally {await new Promise(resolve=>server.close(resolve));}
});
