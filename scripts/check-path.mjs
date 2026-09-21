// © 2026 Jared Cluff. Browser journeys use synthetic records only.
import assert from 'node:assert/strict';
import {click,type,select} from './browser-actions.mjs';
import {pathToFileURL} from 'node:url';
import path from 'node:path';

export async function checkLearningPath(browser,base,root){
  for(const url of [base+'my-path.html',pathToFileURL(path.join(root,'my-path.html')).href]){
    const log=phase=>console.log('Learning path '+(url.startsWith('http')?'online':'offline')+': '+phase);
    log('start');
    const context=await browser.createBrowserContext();
    try{
      const page=await context.newPage(), errors=[], external=[];
      let expectedDialog=false;
      page.on('dialog',async dialog=>{if(!expectedDialog)errors.push('Unexpected browser dialog: '+dialog.type());expectedDialog=false;await dialog.accept();});
      page.on('pageerror',e=>errors.push(e.message));page.on('request',req=>{if(/^https?:/.test(req.url())&&!req.url().startsWith(base))external.push(req.url());});
      await page.goto(url);await page.waitForSelector('#path-app:not([hidden])');
      assert.equal(await page.$$eval('.path-milestone',els=>els.length),13);
      await type(page,'#project-form [name=name]','Shift Garden');await click(page,'#project-form button');
      await click(page,'#lesson-00');await select(page,'#stage-00','done');
      assert.match(await page.$eval('#next-title',e=>e.textContent),/Session 01/);
      await page.reload();assert.equal(await page.$eval('#project-form [name=name]',e=>e.value),'Shift Garden');assert.equal(await page.$eval('#lesson-00',e=>e.checked),true);
      log('saved progress survives reload');
      await type(page,'#evidence-form [name=title]','<img src=x onerror=alert(1)>');await type(page,'#evidence-form [name=note]','Observed synthetic state after reload at a recorded revision.');await select(page,'#evidence-form [name=session]','05');await click(page,'#evidence-form [value=P2]');await click(page,'#evidence-form button');
      assert.equal(await page.$$eval('#evidence-list img',els=>els.length),0);assert.match(await page.$eval('#evidence-list',e=>e.textContent),/<img/);
      await click(page,'#evidence-list button');await page.$eval('#evidence-form [name=title]',e=>{e.value='Reload check';});await click(page,'#evidence-form button');
      assert.equal(await page.$$eval('#evidence-list .path-item',els=>els.length),1);assert.equal(await page.$eval('#evidence-list h3',e=>e.textContent),'Reload check');
      // Repeated physical edit/save interactions must update stored data, not just a toast.
      for(const title of ['Boundary revision','Recovery revision','Reload check']){
        await click(page,'#evidence-list button');
        await page.$eval('#evidence-form [name=title]',(e,value)=>{e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));},title);
        await click(page,'#evidence-form button');
        assert.equal(await page.evaluate(()=>LearningPath.parse(localStorage.getItem(LearningPath.key)).evidence[0].title),title);
        assert.equal(await page.$$eval('#evidence-list .path-item',els=>els.length),1);
      }
      await select(page,'#evidence-filter','A1');assert.equal(await page.$$eval('#evidence-list .path-item',els=>els.length),0);await select(page,'#evidence-filter','P2');
      await type(page,'#feedback-form [name=title]','Verify persistence');await type(page,'#feedback-form [name=why]','A success toast is insufficient.');await type(page,'#feedback-form [name=needed]','Compare values before and after reload.');await select(page,'#feedback-form [name=session]','05');await click(page,'#feedback-form button');
      assert.equal(await page.$eval('#next-title',e=>e.textContent),'Verify persistence');await select(page,'#feedback-status-0','resolved');assert.match(await page.$eval('#next-title',e=>e.textContent),/Session 01/);
      log('evidence and feedback CRUD');
      await select(page,'#help-session','00');await click(page,'#path-hints details:nth-child(3) summary');assert.match(await page.$eval('#ai-brief',e=>e.textContent),/only fixtures\/setup-example.mjs/);assert.ok(!(await page.$eval('#ai-brief',e=>e.textContent)).includes('Shift Garden'));
      // Capture the exact export payload without downloading private browser state to disk.
      await page.evaluate(()=>{const original=URL.createObjectURL;URL.createObjectURL=blob=>{window.exportedBlob=blob;return original(blob);};});await click(page,'#path-export');
      const exported=await page.evaluate(()=>window.exportedBlob.text()), original=JSON.parse(exported);
      log('export captured');
      assert.equal(original.project.name,'Shift Garden');assert.equal(original.evidence.length,1);
      const upload=async record=>{await page.evaluate(raw=>{const t=new DataTransfer();t.items.add(new File([raw],'fictional.json',{type:'application/json'}));const input=document.getElementById('path-import');input.files=t.files;input.dispatchEvent(new Event('change'));},JSON.stringify(record));};
      const saved=await page.evaluate(()=>localStorage.getItem(LearningPath.key));
      await upload({...original,version:99});await page.waitForFunction(()=>document.getElementById('path-status').textContent.startsWith('Backup rejected'));assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),saved);
      const restored=structuredClone(original);restored.project.name='Restored planner';await upload(restored);await page.waitForSelector('#path-restore:not([hidden])');assert.equal(await page.$eval('#project-form [name=name]',e=>e.value),'Shift Garden');await click(page,'#restore-cancel');assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),saved);
      await upload(restored);await page.waitForSelector('#path-restore:not([hidden])');await click(page,'#restore-confirm');assert.equal(await page.$eval('#project-form [name=name]',e=>e.value),'Restored planner');
      log('restore preview, cancellation and confirmation');
      for(const width of [1440,768,375]){await page.setViewport({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'planner overflow at '+width);if(url.startsWith('http'))await page.screenshot({path:path.join(root,`review/my-path-${width}.png`),fullPage:true});}
      // Quota failure keeps visible edits exportable, without reporting a successful save.
      await page.evaluate(()=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new DOMException('full','QuotaExceededError');};});
      await click(page,'#lesson-01');assert.match(await page.$eval('#path-status',e=>e.textContent),/Could not save/);assert.equal(await page.$eval('#lesson-01',e=>e.checked),true);await page.evaluate(()=>{Storage.prototype.setItem=window.originalSet;});await click(page,'#project-form button');
      log('responsive layouts and storage failure');
      if(url.startsWith('http')){
        const other=await context.newPage();await other.goto(url);await click(other,'#lesson-02');await page.bringToFront();await page.waitForSelector('#path-conflict:not([hidden])');const latest=await other.evaluate(()=>localStorage.getItem(LearningPath.key));await click(page,'#project-form button');assert.equal(await other.evaluate(()=>localStorage.getItem(LearningPath.key)),latest);await other.close();await page.bringToFront();await page.reload();
      }
      // Explicit clear preserves other keys; corrupt startup never silently overwrites data.
      log('multi-tab check complete');
      await page.evaluate(()=>localStorage.setItem('unrelated-course-setting','keep'));
      expectedDialog=true;await click(page,'#path-reset');assert.equal(await page.evaluate(()=>localStorage.getItem('unrelated-course-setting')),'keep');assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),null);
      await page.evaluate(()=>localStorage.setItem(LearningPath.key,'{damaged'));await page.reload();assert.match(await page.$eval('#path-status',e=>e.textContent),/Saved data could not be read/);await click(page,'#lesson-00');assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),'{damaged');
      await upload(original);await page.waitForSelector('#path-restore:not([hidden])');await click(page,'#restore-confirm');assert.equal(await page.$eval('#project-form [name=name]',e=>e.value),'Shift Garden');
      assert.equal(await page.evaluate(()=>LearningPath.parse(localStorage.getItem(LearningPath.key)).project.name),'Shift Garden');
      assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
      log('recovery complete; no external requests or script errors');
    }finally{await context.close();}
  }
  // Managed/private browser with storage denied: functional, explicitly ephemeral mode.
  const context=await browser.createBrowserContext();
  try{const page=await context.newPage();await page.evaluateOnNewDocument(()=>{Storage.prototype.getItem=function(){throw new DOMException('denied','SecurityError');};});await page.goto(base+'my-path.html');assert.match(await page.$eval('#path-status',e=>e.textContent),/storage is unavailable/);await click(page,'#lesson-00');assert.equal(await page.$eval('#lesson-00',e=>e.checked),true);assert.match(await page.$eval('#path-status',e=>e.textContent),/tab only/);}finally{await context.close();}
  return 'online/offline, CRUD, backup/restore, privacy, recovery, multi-tab and responsive checks passed';
}
