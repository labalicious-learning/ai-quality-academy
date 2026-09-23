// © 2026 Jared Cluff. Read-only browser checks and generated preview artifacts.
import assert from 'node:assert/strict';
import {mkdir,stat} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import puppeteer from 'puppeteer-core';

export async function checkTraining(browser,base,root){
  const page=await browser.newPage(),errors=[],external=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('request',request=>{
    const url=request.url();
    if(/^https?:/.test(url)&&!url.startsWith(base))external.push(url);
  });
  try{
    await page.setJavaScriptEnabled(false);
    await mkdir(path.join(root,'review'),{recursive:true});
    for(const width of [320,375,768,1440]){
      await page.setViewport({width,height:1000});
      await page.goto(base+'training.html');
      assert.equal(await page.$$eval('h1',nodes=>nodes.length),1);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'brochure overflow at '+width);
      assert.deepEqual(await page.$$eval('a.cta',nodes=>nodes.map(n=>n.getAttribute('href'))),['SIGNUP.html','SIGNUP.html']);
      assert.equal(await page.$$eval('form,iframe,script',nodes=>nodes.length),0);
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('href')),'#main');
      await page.keyboard.press('Enter');
      assert.equal(await page.evaluate(()=>document.activeElement.id),'main');
      await page.evaluate(()=>document.activeElement.blur());
      if([375,1440].includes(width))await page.screenshot({path:path.join(root,'review/training-'+width+'.png'),fullPage:true});
    }
    await page.emulateMediaType('print');
    const pdf=await page.pdf({path:path.join(root,'review/training-letter.pdf'),format:'Letter',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false});
    const pages=(Buffer.from(pdf).toString('latin1').match(/\/Type\s*\/Page\b/g)||[]).length;
    assert.equal(pages,1,'brochure must print on one Letter page');
    assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
    return '320/375/768/1440 layouts, keyboard, no scripts/external requests, one-page Letter PDF passed';
  }finally{await page.close();}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  const candidates=process.env.CHROME_PATH?[process.env.CHROME_PATH]:process.platform==='darwin'?['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']:process.platform==='win32'?[
    path.join(process.env.PROGRAMFILES||'C:\\Program Files','Google/Chrome/Application/chrome.exe'),
    path.join(process.env['PROGRAMFILES(X86)']||'C:\\Program Files (x86)','Google/Chrome/Application/chrome.exe'),
    path.join(process.env.LOCALAPPDATA||'C:\\Users\\Default\\AppData\\Local','Google/Chrome/Application/chrome.exe')
  ]:['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'];
  let executablePath;
  for(const candidate of candidates){try{if((await stat(candidate)).isFile()){executablePath=candidate;break;}}catch{}}
  assert.ok(executablePath,'Install Chrome or set CHROME_PATH for brochure checks.');
  const root=path.resolve(import.meta.dirname,'../dist');
  const browser=await puppeteer.launch({executablePath,headless:true,pipe:true,timeout:60000});
  try{console.log(await checkTraining(browser,pathToFileURL(root+path.sep).href,root));}finally{await browser.close();}
}
