import {readFile,readdir,writeFile,mkdir,cp,stat} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import MarkdownIt from 'markdown-it';
const root=path.resolve(import.meta.dirname,'..');process.chdir(root);
const out=path.join(root,'dist');await mkdir(out,{recursive:true});
const config=JSON.parse(await readFile('site.config.json','utf8'));
const repository=config.repository || process.env.GITHUB_REPOSITORY || null;
const repoUrl=repository?'https://github.com/'+repository:null;
const md=new MarkdownIt({html:false,linkify:true});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const nav=(prefix='')=>'<header class="top"><a class="wordmark" href="'+prefix+'index.html"><span class="mark">aq</span>AI Quality Academy</a><nav><a href="'+prefix+'labs/00-course-setup.html">Start here</a><a href="'+prefix+'index.html#sessions">Sessions</a>'+(repoUrl?'<a href="'+repoUrl+'">Course repository ↗</a>':'')+'</nav></header>';
const footer=(prefix='')=>'<footer><span>Learn by doing. Every example is fictional.</span><nav><a href="'+prefix+'INSTRUCTOR_GUIDE.html">Instructor guide</a><a href="'+prefix+'PUBLICATION.html">About this course</a></nav></footer>';
function document(title,body,prefix=''){return '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escape(title)+' · AI Quality Academy</title><link rel="stylesheet" href="'+prefix+'assets/style.css">'+nav(prefix)+'<main class="document"><a class="breadcrumb" href="'+prefix+'index.html">← All sessions</a>'+body+'</main>'+footer(prefix)+'</html>';}
await cp('site',path.join(out,'assets'),{recursive:true});
const marp=path.join(root,'node_modules/@marp-team/marp-cli/marp-cli.js');
for(const format of process.argv.includes('--exports')?['html','pdf','pptx']:['html']){
 const folder=format==='html'?'slides':format;
 const args=[marp,'--input-dir','decks','--output',path.join(out,folder),'--theme-set','theme/academy.css','--theme','academy'];
 if(format!=='html')args.push('--'+format);
 const result=spawnSync(process.execPath,args,{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);
}
const roots=['lessons','labs','templates','fixtures','instructor'];
const docs=(await readdir(root)).filter(n=>n.endsWith('.md'));
for(const dir of roots)for(const name of await readdir(dir))docs.push(dir+'/'+name);
for(const file of docs){
 const source=await readFile(file,'utf8');const prefix=file.includes('/')?'../':'';
 if(file.endsWith('.md')){
   const title=source.match(/^# (.+)$/m)?.[1] || path.basename(file);
   let html=md.render(source);
   html=html.replace(/href="([^"]+)"/g,(all,href)=>{
     if(/^[a-z]+:/i.test(href))return all;
     if(href.includes('/decks/'))return 'href="'+href.replace('/decks/','/slides/').replace(/\.md(?=#|$)/,'.html')+'"';
     return 'href="'+href.replace(/\.md(?=#|$)/,'.html')+'"';
   });
   if(file==='labs/00-course-setup.md' && repoUrl)html=html.replace('<h1>','<p>Course repository: <a href="'+repoUrl+'">'+repoUrl+'</a></p><h1>');
   const target=path.join(out,file.replace(/\.md$/,'.html'));await mkdir(path.dirname(target),{recursive:true});await writeFile(target,document(title,html,prefix));
 }
 const raw=path.join(out,file);await mkdir(path.dirname(raw),{recursive:true});await writeFile(raw,source);
}
const descriptions=[
'Create your accounts, get the files and launch your first local lab.',
'Turn observations into findings that another person can verify.',
'Give Codex context, useful tools and a clear definition of done.',
'Work across spreadsheets, documents, research, GitHub and team chat.',
'Find the risks behind a request and design meaningful tests.',
'Explore a customer journey and connect the screen to system behavior.',
'Prove who can access what with fictional organizations and roles.',
'Build a repeatable check with Codex and inspect its red-to-green result.',
'Test layout, keyboard access and the experience on a small screen.',
'Follow an inquiry through classification, consent, retries and recovery.',
'Read release evidence and make a defensible ship-or-hold decision.',
'Compare model behavior with known cases, evidence and measured errors.',
'Put your skills together and present an evidence-backed verdict.'
];
const cards=[];
for(const name of (await readdir('decks')).filter(n=>n.endsWith('.md')).sort()){
 const id=Number(name.slice(0,2));const slug=name.slice(0,-3);
 const title=(await readFile('lessons/'+name,'utf8')).match(/^# (.+)$/m)[1].replace(/^(Lesson|Session) \d+ — /,'');
 const lab=(await readdir('labs')).find(n=>n.startsWith(name.slice(0,2)));
 let downloads='';
 for(const ext of ['pdf','pptx']){try{await stat(path.join(out,ext,slug+'.'+ext));downloads+='<a href="'+ext+'/'+slug+'.'+ext+'">'+ext.toUpperCase()+'</a> ';}catch{}}
 cards.push('<article class="session"><span class="num">'+name.slice(0,2)+'</span><span class="meta">2 hours · '+(id===0?'Setup':'Hands-on')+'</span><h3>'+escape(title)+'</h3><p>'+descriptions[id]+'</p><nav><a href="labs/'+lab.replace('.md','.html')+'">Open lab →</a><a href="slides/'+slug+'.html">Slides</a><a href="lessons/'+slug+'.html">Lesson plan</a></nav>'+(downloads?'<div class="downloads">Download: '+downloads+'</div>':'')+'</article>');
}
const modules=[['00 / Get ready',cards.slice(0,1)],['01—04 / Build your foundation',cards.slice(1,5)],['05—08 / Investigate & test',cards.slice(5,9)],['09—12 / Connect, evaluate & deliver',cards.slice(9,13)]];
const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="A practical, hands-on course in AI, quality assurance and business work."><title>AI Quality Academy</title><link rel="stylesheet" href="assets/style.css">'+nav()+'<section class="hero"><div><span class="eyebrow">YOUR NEXT SKILL STARTS HERE</span><h1>Work with AI.<br>Think critically.<br><em>Prove the result.</em></h1><p>Learn to turn capable AI into useful work. Build real QA skills through approachable lessons, practical business tasks and experiments you can run yourself.</p><div class="actions"><a class="button" href="labs/00-course-setup.html">Start with Session 00 →</a><a class="button secondary" href="#sessions">Explore the course</a></div></div><img class="hero-art" src="assets/hero.svg" alt="Ask a good question, use AI and tools, then verify the result."></section><div class="stats"><div><strong>13</strong><span>Sessions</span></div><div><strong>2 hours</strong><span>Per session</span></div><div><strong>Hands-on</strong><span>From day one</span></div></div><main class="catalog" id="sessions"><div class="section-head"><div><span class="eyebrow" style="color:#126b62">THE LEARNING PATH</span><h2>One session. One step forward.</h2><p>Start at zero. Build confidence with every experiment.</p></div><label class="search">Find a topic<input id="course-search" type="search" placeholder="Try Codex, business or browser"></label></div><p id="search-status" aria-live="polite">13 sessions shown</p>'+modules.map(([label,c])=>'<section class="module"><h2 class="module-label">'+label+'</h2><div class="grid">'+c.join('')+'</div></section>').join('')+'<section class="toolstrip"><h2>Skills that travel across your work.</h2><p>Practice with fictional festivals, tournaments and small businesses. Use supplied files or an approved connected workspace.</p><div class="chips"><span>Codex</span><span>Spreadsheets</span><span>Documents</span><span>Research</span><span>GitHub</span><span>Team chat</span><span>Browser & API testing</span></div><p><a href="AI_WORKFLOW_PLAYBOOKS.html">Explore business workflows →</a></p></section><p>26 contact hours build a foundation for supervised practice. Model and tool access depend on your account. The local API lab runs on your computer; all examples are fictional.</p></main>'+footer()+'<script src="assets/site.js"></script></html>';
await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'.nojekyll'),'');
console.log('Built course site: 13 sessions, readable handouts, slides and assets.');
