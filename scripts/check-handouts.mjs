// © 2026 Jared Cluff. Static handout journeys, no accounts or student data.
import assert from 'node:assert/strict';
import {readdir} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
export async function checkHandouts(browser,base,root){
  const files=(await readdir(path.join(root,'labs'))).filter(n=>n.endsWith('.html')).sort();assert.equal(files.length,13);
  for(const offline of [false,true]){
    const context=await browser.createBrowserContext();
    try{
      const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setJavaScriptEnabled(false);
      for(const file of files){
        await page.goto(offline?pathToFileURL(path.join(root,'labs',file)).href:base+'labs/'+file);
        assert.equal(await page.$$eval('h1',e=>e.length),1,file);assert.equal(await page.$$eval('.session-guide',e=>e.length),1,file);
        const missing=await page.$$eval('a[href^="#"]',links=>links.filter(a=>!document.getElementById(decodeURIComponent(a.hash.slice(1)))).map(a=>a.hash));assert.deepEqual(missing,[],file);
        const ids=await page.$$eval('[id]',els=>els.map(e=>e.id));assert.equal(ids.length,new Set(ids).size,file+' duplicate IDs');
        await page.click('#session-support summary');assert.equal(await page.$eval('#session-support',e=>e.open),true);
        await page.click('#session-recall summary');assert.equal(await page.$eval('#session-recall',e=>e.open),true);
        const anchor=await page.$eval('.session-guide .session-actions a',e=>e.hash.slice(1));await page.click('.session-guide .session-actions a');assert.equal(await page.evaluate(()=>document.activeElement.id),anchor,'activity link must focus its heading');
      }
      await page.goto(offline?pathToFileURL(path.join(root,'labs',files[7])).href:base+'labs/'+files[7]);
      await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.className),'skip-link');await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'main-content');
      for(const width of [1440,768,375]){
        await page.setViewport({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'handout overflow '+width);
        if(width<950){assert.equal(await page.$eval('.handout-sidebar',e=>getComputedStyle(e).display),'none');await page.click('.handout-mobile-nav summary');assert.equal(await page.$eval('.handout-mobile-nav',e=>e.open),true);await page.click('.handout-mobile-nav summary');}
        if(!offline)await page.screenshot({path:path.join(root,`review/handout-${width}.png`),fullPage:true});
      }
      await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);assert.equal(await page.$eval('html',e=>getComputedStyle(e).scrollBehavior),'auto');
      assert.deepEqual(errors,[]);console.log(`Handouts: all 13 ${offline?'offline':'online'}, JavaScript disabled, anchors, keyboard, support and responsive checks passed`);
    }finally{await context.close();}
  }
  return 'all 13 online/offline with JavaScript disabled; navigation, keyboard and responsive checks passed';
}
