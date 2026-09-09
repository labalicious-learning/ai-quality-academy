// © 2026 Jared Cluff. Maintainer checks, not a learner's release verdict.
import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import {createServer} from '../sandbox/server.mjs';

const candidates=process.env.CHROME_PATH?[process.env.CHROME_PATH]:process.platform==='darwin'?
  ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']:process.platform==='win32'?
  [process.env.PROGRAMFILES,process.env['PROGRAMFILES(X86)'],process.env.LOCALAPPDATA].filter(Boolean).map(p=>path.join(p,'Google/Chrome/Application/chrome.exe')):
  ['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
let executablePath;
for(const candidate of candidates){try{if((await stat(candidate)).isFile()){executablePath=candidate;break;}}catch{}}
assert.ok(executablePath,'Install Chrome or set CHROME_PATH before maintainer browser checks.');
const server=createServer();
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
let browser;
try {
  browser=await puppeteer.launch({executablePath,headless:true});
  const page=await browser.newPage();
  const base='http://127.0.0.1:'+server.address().port;
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const result=async(button,target)=>{
    await page.click('#'+button);
    await page.waitForFunction(id=>!['Loading…','No request yet','Not loaded'].includes(document.getElementById(id).textContent),{},target);
    return page.$eval('#'+target,e=>e.textContent);
  };
  await page.goto(base);
  for(const mode of ['buggy','fixed']) {
    await page.select('#mode',mode);
    await page.select('#tenant','Atlas');
    await page.select('#role','concierge');
    assert.equal(JSON.parse(await result('list','contacts')).body[0].id,'A-101');
    assert.equal(JSON.parse(await result('detail','contacts')).body.tenant,'Atlas');
    const responsePromise=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/allocation');
    const text=await result('load','allocation');
    assert.equal((await responsePromise).status(),mode==='buggy'?500:200);
    assert.equal(text,mode==='buggy'?'Unable to load allocation':'Allocation AL-01: reserved');
    assert.equal(JSON.parse(await result('send','send-result')).status,mode==='buggy'?403:200);
    await page.select('#role','staff');
    assert.equal(JSON.parse(await result('send','send-result')).status,403);
    await page.$eval('#event',e=>e.value=JSON.stringify({messageId:'browser-01',consent:false,confidence:.95}));
    assert.equal(JSON.parse(await result('ingest','event-result')).body.queued,mode==='buggy');
    await result('ingest','event-result');
    assert.equal(JSON.parse(await result('events','event-result')).body.length,mode==='buggy'?2:1);
  }
  for(const width of [375,768,1440]) {
    await page.setViewport({width,height:1000});
    for(const mode of ['buggy','fixed']) {
      await page.select('#mode',mode);
      const actual=await page.evaluate(()=>({width:innerWidth,document:document.documentElement.scrollWidth}));
      assert.equal(actual.document>actual.width,mode==='buggy'&&width===375,'intended overflow comparison');
      await page.focus('#theme');
      for(let tab=0;tab<20 && await page.evaluate(()=>document.activeElement.id!=='choose');tab++) await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(()=>document.activeElement.id),'choose');
      await page.keyboard.press('Space');
      assert.equal(await page.$eval('#choice',e=>e.textContent),'Package selected');
    }
  }
  await page.select('#theme','Creative pop-up shop');
  assert.equal(await page.$eval('#brand',e=>e.textContent),'Creative pop-up shop');

  // Existing observations must disappear for every identity/candidate change.
  for(const [selector,value] of [['mode','buggy'],['tenant','Beacon'],['role','owner']]) {
    await result('load','allocation');await result('detail','contacts');
    await result('send','send-result');await result('events','event-result');
    await page.select('#'+selector,value);
    for(const id of ['contacts','send-result','event-result']) assert.equal(await page.$eval('#'+id,e=>e.textContent),'No request yet');
    assert.equal(await page.$eval('#allocation',e=>e.textContent),'Not loaded');
  }
  // Hold a response across a candidate switch; it must not repopulate stale data.
  await page.setRequestInterception(true);
  let heldResolve;
  const heldPromise=new Promise(resolve=>heldResolve=resolve);
  const handler=request=>{
    if(new URL(request.url()).pathname==='/api/contacts/A-101') heldResolve(request);
    else request.continue();
  };
  page.on('request',handler);
  await page.click('#detail');
  const held=await heldPromise;
  await page.select('#mode','fixed');
  const completed=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/contacts/A-101');
  await held.respond({status:200,contentType:'application/json',body:JSON.stringify({id:'A-101',tenant:'Atlas'})});
  await (await completed).text();
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  assert.equal(await page.$eval('#contacts',e=>e.textContent),'No request yet');
  page.off('request',handler);await page.setRequestInterception(false);
  assert.equal(JSON.parse(await result('detail','contacts')).status,404);
  assert.deepEqual(errors,[]);
  console.log('Lab browser checks passed: CRM observations, allocation red/green, send roles, event replay, 3 viewports, keyboard, theme change and stale-response protection.');
} finally {
  if(browser)await browser.close();
  await new Promise(resolve=>server.close(resolve));
}
