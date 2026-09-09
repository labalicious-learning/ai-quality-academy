import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from './server.mjs';
test('HTTP classroom journey and recovery',async()=>{
  const server=createServer();
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  try {
    const base='http://127.0.0.1:'+server.address().port;
    const page=await fetch(base); assert.equal(page.status,200);
    assert.match(await page.text(),/Community Launch Lab/);
    const failed=await fetch(base+'/api/allocation?mode=buggy'); assert.equal(failed.status,500);
    const loaded=await fetch(base+'/api/allocation?mode=fixed'); assert.equal((await loaded.json()).id,'AL-01');
    assert.equal((await fetch(base+'/api/contacts/A-101?mode=fixed&tenant=Beacon')).status,404);
    const post=()=>fetch(base+'/api/events?mode=fixed',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messageId:'m-1',consent:false,confidence:.95})});
    assert.equal((await (await post()).json()).queued,false); assert.equal((await post()).status,200);
    assert.equal((await (await fetch(base+'/api/events?mode=fixed')).json()).length,1);
  } finally {await new Promise(resolve=>server.close(resolve));}
});
