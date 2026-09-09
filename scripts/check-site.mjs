import {readFile,readdir,stat,mkdir} from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
const root=path.resolve(import.meta.dirname,'../dist');
async function walk(dir){const files=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())files.push(...await walk(p));else files.push(p);}return files;}
let links=0;
for(const file of (await walk(root)).filter(p=>p.endsWith('.html') && !p.includes(path.sep+'slides'+path.sep))){
  const html=await readFile(file,'utf8');
  for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
    const ref=m[1].split('#')[0].split('?')[0];
    if(/^[a-z]+:/i.test(ref))continue;
    const target=path.resolve(path.dirname(file),ref);await stat(target);links++;
  }
}
const server=http.createServer(async(req,res)=>{
  const u=new URL(req.url,'http://localhost');
  if(!u.pathname.startsWith('/academy/')){res.writeHead(404);return res.end();}
  const file=path.resolve(root,decodeURIComponent(u.pathname.slice('/academy/'.length)) || 'index.html');
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  try{const body=await readFile(file);const type={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml'}[path.extname(file)] || 'application/octet-stream';res.writeHead(200,{'Content-Type':type});res.end(body);}catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
let browser;
try{
 const executablePath=process.env.CHROME_PATH || (process.platform==='darwin'?'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome':'/usr/bin/google-chrome');
 browser=await puppeteer.launch({executablePath,headless:true});const page=await browser.newPage();
 const base='http://127.0.0.1:'+server.address().port+'/academy/';
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await mkdir(path.join(root,'review'),{recursive:true});
 for(const width of [1440,375]){
  await page.setViewport({width,height:1000});await page.goto(base);
  assert.equal(await page.$$eval('.session',s=>s.length),13);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'homepage horizontal overflow');
  await page.screenshot({path:path.join(root,'review/home-'+width+'.png'),fullPage:true});
 }
 await page.type('#course-search','Codex');
 assert.ok((await page.$$eval('.session:not(.hidden)',s=>s.length))<13);
 await page.goto(base+'labs/00-course-setup.html');
 assert.ok((await page.$eval('h1',e=>e.textContent)).includes('Session 00'));
 let slides=0;
 for(const file of await readdir(path.join(root,'slides'))){
   await page.goto(base+'slides/'+file);
   const results=await page.$$eval('section',ss=>ss.map(s=>({over:s.scrollHeight>s.clientHeight+2 || s.scrollWidth>s.clientWidth+2})));
   assert.ok(!results.some(s=>s.over),'slide overflow: '+file);slides+=results.length;
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({localLinks:links,sessions:13,slides,mobile:'passed',search:'passed',pageErrors:0}));
}finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
