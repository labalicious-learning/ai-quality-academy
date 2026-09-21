// © 2026 Jared Cluff. Synthetic learner state only; never sends a signup or invitation.
import assert from 'node:assert/strict';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {click,type} from './browser-actions.mjs';
export async function checkToday(browser,base,root){
  for(const offline of [false,true]){
    const context=await browser.createBrowserContext();
    try{
      const page=await context.newPage(),errors=[],external=[];
      page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith(base))external.push(r.url());});
      const url=offline?pathToFileURL(path.join(root,'my-path.html')).href:base+'my-path.html';
      await page.emulateTimezone('America/Chicago');await page.goto(url);
      assert.equal(await page.$eval('h1',e=>e.textContent),'Today');
      assert.equal(await page.$eval('#today-primary',e=>e.getAttribute('href')),'labs/00-course-setup.html');
      assert.equal(await page.$$eval('.path-section[open]',e=>e.length),0);
      assert.equal(await page.$$eval('#today-prep a',e=>e.length),2);
      assert.equal(await page.$eval('#schedule-title',e=>e.textContent),'Dates not announced yet');
      for(const width of [1440,768,375]){
        await page.setViewport({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Today overflow '+width);
        if(!offline)await page.screenshot({path:path.join(root,`review/today-${width}.png`),fullPage:true});
      }
      await page.focus('#next-links button');await page.keyboard.press('Enter');
      assert.equal(await page.$eval('#milestones-panel',e=>e.open),true);assert.equal(await page.evaluate(()=>document.activeElement.id),'lesson-00');
      await click(page,'#milestones-panel>summary');
      await click(page,'a[href="#feedback-title"]');assert.equal(await page.$eval('#feedback-panel',e=>e.open),true);assert.equal(await page.evaluate(()=>document.activeElement.id),'feedback-title');
      await click(page,'a[href="#feedback-title"]');assert.equal(await page.$eval('#feedback-panel',e=>e.open),true,'revisiting an anchor must not close its panel');
      await type(page,'#project-form [name=name]','Fictional product');await click(page,'#project-form button');
      assert.match(await page.$eval('#today-project-status',e=>e.textContent),/Fictional product/);
      const saved=await page.evaluate(()=>localStorage.getItem(LearningPath.key));await page.reload();assert.equal(await page.evaluate(()=>localStorage.getItem(LearningPath.key)),saved);
      await page.goto(url+'#evidence-title');assert.equal(await page.$eval('#evidence-panel',e=>e.open),true);
      await page.evaluate(()=>{
        CourseContext.schedule=[{session:'02',start:new Date(Date.now()+86400000).toISOString(),end:new Date(Date.now()+93600000).toISOString()}];dispatchEvent(new Event('focus'));
      });
      assert.match(await page.$eval('#schedule-title',e=>e.textContent),/Next class.*02/);assert.match(await page.$eval('#schedule-zone',e=>e.textContent),/America\/Chicago/);
      await page.emulateTimezone('Europe/Berlin');await page.evaluate(()=>dispatchEvent(new Event('focus')));assert.match(await page.$eval('#schedule-zone',e=>e.textContent),/Europe\/Berlin/);
      await page.evaluate(()=>{CourseContext.schedule=[];dispatchEvent(new Event('focus'));});assert.equal(await page.$eval('#schedule-title',e=>e.textContent),'Dates not announced yet');
      await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);assert.equal(await page.$eval('html',e=>getComputedStyle(e).scrollBehavior),'auto');
      assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
      console.log('Today: '+(offline?'offline':'online')+' primary action, disclosures, keyboard, persistence, dates/timezones and responsive layout passed');
    }finally{await context.close();}
  }
  return 'online/offline, keyboard, progressive disclosure, existing storage and local timezone checks passed';
}
