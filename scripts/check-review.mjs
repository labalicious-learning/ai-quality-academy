// © 2026 Jared Cluff. Synthetic browser journeys; no student data or live services.
import assert from 'node:assert/strict';
import {click,type,select} from './browser-actions.mjs';
import path from 'node:path';
export async function checkReviewAndExample(browser,base,root){
  const context=await browser.createBrowserContext();
  try{
    const page=await context.newPage(),errors=[],external=[];
    let expectDialog=false;
    page.on('dialog',async d=>{if(!expectDialog)errors.push('Unexpected dialog '+d.type());expectDialog=false;await d.accept();});
    page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith(base))external.push(r.url());});
    await page.goto(base+'my-path.html');
    await type(page,'#evidence-form [name=title]','Unfinished capacity check');await type(page,'#evidence-form [name=note]','PRIVATE_NOTE_SENTINEL');await select(page,'#evidence-form [name=session]','07');await type(page,'#evidence-form [name=url]','https://example.com/observations');
    await page.reload();assert.equal(await page.$eval('#evidence-form [name=title]',e=>e.value),'Unfinished capacity check');assert.equal(await page.$eval('#evidence-form [name=session]',e=>e.value),'07');
    assert.match(await page.$eval('#draft-status',e=>e.textContent),/Recovered/);
    await click(page,'#evidence-form button');assert.equal(await page.evaluate(()=>localStorage.getItem('labalicious.path-drafts.v1')),null);
    await click(page,'#evidence-list button');await type(page,'#evidence-form [name=title]',' revised');await page.reload();assert.equal(await page.$eval('#evidence-form button',e=>e.textContent),'Save changes');await click(page,'#evidence-form button');assert.equal(await page.$$eval('#evidence-list .path-item',e=>e.length),1);
    await click(page,'#evidence-list button');await type(page,'#evidence-form [name=title]',' unfinished edit');
    // Simulate a saved source revision before recovering an old edit draft.
    await page.evaluate(()=>{const s=LearningPath.parse(localStorage.getItem(LearningPath.key));s.evidence[0].title='Revised elsewhere';s.feedback=[{id:'f1',title:'PRIVATE_FEEDBACK_SENTINEL',why:'Fictional private coaching',needed:'Do not share this note',session:'07',criterion:'Q2',status:'open'}];localStorage.setItem(LearningPath.key,JSON.stringify(s));});
    await page.reload();await click(page,'#evidence-form button');assert.match(await page.$eval('#path-status',e=>e.textContent),/original entry changed/);assert.ok((await page.$eval('#evidence-form [name=title]',e=>e.value)).includes('unfinished edit'));await click(page,'#evidence-cancel-edit');
    await click(page,'#next-links button');assert.equal(await page.evaluate(()=>document.activeElement.id),'lesson-07');
    // A quota failure retains the draft text and warns instead of claiming recovery.
    await page.evaluate(()=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw Error('quota');};});await type(page,'#project-form [name=name]','Private draft');assert.match(await page.$eval('#draft-status',e=>e.textContent),/Could not autosave/);await page.evaluate(()=>{Storage.prototype.setItem=window.originalSet;});await type(page,'#project-form [name=name]',' recovered');
    await page.evaluate(()=>{const original=URL.createObjectURL;URL.createObjectURL=blob=>{window.backup=blob;return original(blob);};});expectDialog=true;await click(page,'#path-export');assert.ok(!(await page.evaluate(()=>window.backup.text())).includes('Private draft'));
    expectDialog=true;await click(page,'#discard-drafts');
    // Failed main persistence followed by a retry must not duplicate the entry.
    await type(page,'#evidence-form [name=title]','Retry safety');await type(page,'#evidence-form [name=note]','evidence/retry.txt at the fictional revision');
    await page.evaluate(()=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw Error('quota');};});await click(page,'#evidence-form button');assert.equal(await page.$$eval('#evidence-list .path-item',e=>e.length),2);await page.evaluate(()=>{Storage.prototype.setItem=window.originalSet;});await click(page,'#evidence-form button');assert.equal(await page.$$eval('#evidence-list .path-item',e=>e.length),2);
    // Separate draft storage also detects conflicting writers rather than overwriting.
    const other=await context.newPage();await other.goto(base+'my-path.html');await type(other,'#project-form [name=name]','Other tab draft');const otherRaw=await other.evaluate(()=>localStorage.getItem('labalicious.path-drafts.v1'));await page.bringToFront();await type(page,'#project-form [name=name]','Local conflicting draft');assert.match(await page.$eval('#draft-status',e=>e.textContent),/paused/);assert.equal(await page.evaluate(()=>localStorage.getItem('labalicious.path-drafts.v1')),otherRaw);
    await other.close();await page.bringToFront();expectDialog=true;await page.reload();assert.equal(await page.$eval('#project-form [name=name]',e=>e.value),'Other tab draft');expectDialog=true;await click(page,'#discard-drafts');
    console.log('Review: draft recovery, edit identity, stale-edit protection, quota and backup boundaries passed');
    await page.goto(base+'review-packet.html');await select(page,'#review-session','07');
    const fill=()=>page.evaluate(()=>{const f=document.getElementById('review-form');for(const name of ProjectReview.fields){if(name==='session')continue;f.elements[name].value=name==='repo'?'https://example.com/project':name.endsWith('Sha')?'b'.repeat(40):'Concrete synthetic context for '+name;}f.dispatchEvent(new Event('input',{bubbles:true}));});
    await fill();assert.equal(await page.$eval('.review-pick',e=>e.checked),false);assert.equal(await page.$eval('#review-download',e=>e.disabled),true);
    await click(page,'#review-form button');assert.match(await page.$eval('#review-status',e=>e.textContent),/Select 1/);
    await click(page,'.review-pick');await click(page,'#review-form button');let preview=await page.$eval('#review-preview',e=>e.value);assert.ok(preview.includes('Revised elsewhere'));assert.ok(!preview.includes('PRIVATE'));assert.equal(await page.$eval('#review-download',e=>e.disabled),true);
    await click(page,'#review-ack');assert.equal(await page.$eval('#review-download',e=>e.disabled),false);
    await page.evaluate(()=>{const original=URL.createObjectURL;URL.createObjectURL=blob=>{window.noteBlob=blob;return original(blob);};});await click(page,'#review-download');assert.equal(await page.evaluate(()=>window.noteBlob.text()),preview);
    await click(page,'.review-note');assert.equal(await page.$eval('#review-ack',e=>e.checked),false);assert.equal(await page.$eval('#review-preview',e=>e.value),'');await click(page,'#review-form button');assert.match(await page.$eval('#review-preview',e=>e.value),/PRIVATE\\_NOTE\\_SENTINEL/);assert.ok(!(await page.$eval('#review-preview',e=>e.value)).includes('FEEDBACK'));
    await page.reload();assert.equal(await page.$eval('#review-session',e=>e.value),'07');assert.equal(await page.$eval('[name=projectSha]',e=>e.value),'b'.repeat(40));assert.equal(await page.$eval('.review-pick',e=>e.checked),false);assert.equal(await page.$eval('#review-ack',e=>e.disabled),true);
    await click(page,'.review-pick');await page.$eval('[name=limits]',e=>{e.value='password='+'z'.repeat(30);e.dispatchEvent(new Event('input',{bubbles:true}));});await click(page,'#review-form button');assert.match(await page.$eval('#review-status',e=>e.textContent),/Possible credential/);assert.equal(await page.$eval('#review-preview',e=>e.value),'');
    await fill();await click(page,'#review-form button');
    for(const width of [1440,768,375]){await page.setViewport({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'review overflow '+width);await page.screenshot({path:path.join(root,`review/project-review-${width}.png`),fullPage:true});}
    // The source is checked again on download, even without a storage event.
    await click(page,'#review-ack');await page.evaluate(()=>{const s=LearningPath.parse(localStorage.getItem(LearningPath.key));s.evidence=[];localStorage.setItem(LearningPath.key,JSON.stringify(s));});await click(page,'#review-download');assert.match(await page.$eval('#review-status',e=>e.textContent),/saved planner changed/);assert.equal(await page.$eval('#review-preview',e=>e.value),'');
    await page.evaluate(()=>localStorage.setItem(LearningPath.key,'{broken'));await page.reload();assert.match(await page.$eval('#review-source-status',e=>e.textContent),/invalid/);assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),'{broken');
    console.log('Review: explicit selection, privacy, approval invalidation, drafts, stale source and responsive layouts passed');
    await page.goto(base+'examples/shift-garden/index.html');await page.waitForSelector('.shift');
    assert.equal(await page.$eval('#coverage',e=>e.textContent),'1 / 5');
    const shift='[data-shift-id=welcome]';await select(page,shift+' select','V02');await click(page,shift+' .assignment button');assert.equal(await page.$eval('#coverage',e=>e.textContent),'2 / 5');
    await select(page,shift+' select','V03');await click(page,shift+' .assignment button');assert.match(await page.$eval('#status',e=>e.textContent),/full/);assert.equal(await page.$eval('#coverage',e=>e.textContent),'2 / 5');
    await select(page,shift+' select','V01');await click(page,shift+' .assignment button');assert.match(await page.$eval('#status',e=>e.textContent),/already/);
    await page.reload();assert.equal(await page.$eval('#coverage',e=>e.textContent),'2 / 5');await click(page,'#open-only');assert.equal(await page.$$eval('.shift',e=>e.length),1);await click(page,'#open-only');await click(page,shift+' .volunteers button');assert.equal(await page.$eval('#coverage',e=>e.textContent),'1 / 5');
    await type(page,'#create-form [name=name]','<img src=x onerror=alert(1)>');await click(page,'#create-form button');assert.equal(await page.$$eval('#shifts img',e=>e.length),0);assert.equal(await page.$$eval('.shift',e=>e.length),3);
    for(const width of [1440,768,375]){await page.setViewport({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'example overflow '+width);await page.screenshot({path:path.join(root,`review/shift-garden-${width}.png`),fullPage:true});}
    await page.evaluate(()=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw Error('quota');};});await select(page,shift+' select','V03');await click(page,shift+' .assignment button');assert.match(await page.$eval('#status',e=>e.textContent),/Could not save/);await page.evaluate(()=>{Storage.prototype.setItem=window.originalSet;});await select(page,shift+' select','V04');await click(page,shift+' .assignment button'); // Rejected full: no accidental successful-save claim.
    expectDialog=true;await click(page,'#reset');
    await page.evaluate(()=>localStorage.setItem('labalicious.shift-garden.v1','{damaged'));await page.reload();assert.match(await page.$eval('#status',e=>e.textContent),/invalid/);assert.equal(await page.evaluate(()=>localStorage.getItem('labalicious.shift-garden.v1')),'{damaged');expectDialog=true;await click(page,'#reset');assert.equal(await page.$eval('#coverage',e=>e.textContent),'1 / 5');
    assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
    console.log('Shift Garden: assignment boundaries, persistence, filtering, safe rendering, recovery and layouts passed');
  }finally{await context.close().catch(()=>{});}
  return 'drafts, guided sharing and fictional app checks passed; no external requests';
}
