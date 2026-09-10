import {readdir,readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','dist'].includes(e.name))continue;const p=path.join(dir,e.name);if(e.isDirectory())out.push(...await walk(p));else out.push(p);}return out;}
const errors=[];let links=0;
for(const file of await walk(root)){
 const text=await readFile(file,'utf8');
 // Split protected terms so the scanner does not match its own source.
 const denied=['pere'+'gryn','giga'+'bug','fire'+'fly','aeth'+'er','Pago'+'da','ffp'+'crm','jared'+'.cluff'];
 if(denied.some(s=>text.toLowerCase().includes(s.toLowerCase())))errors.push(path.relative(root,file)+': private project/name marker');
 if(/\/Users\/|BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|AKIA[A-Z0-9]{16}|ghp_[A-Za-z0-9]{30,}/.test(text) && !file.endsWith('verify.mjs'))errors.push(path.relative(root,file)+': local path or credential pattern');
 if(!file.endsWith('.md'))continue;
 if(path.dirname(file)===path.join(root,'labs') && !text.includes('../PLATFORM_GUIDE.md'))errors.push(path.relative(root,file)+': missing platform guidance link');
 for(const m of text.matchAll(/\]\(([^)]+)\)/g)){
   const link=m[1].split('#')[0];if(!link || /^[a-z]+:/i.test(link))continue;
   try{await stat(path.resolve(path.dirname(file),link));links++;}catch{errors.push(path.relative(root,file)+': missing '+link);}
 }
}
for(const dir of ['lessons','decks','labs']){
 const names=(await readdir(path.join(root,dir))).filter(n=>n.endsWith('.md')).sort();
 if(names.length!==13 || !names[0].startsWith('00-'))errors.push(dir+': expected sessions 00–12');
}
// Keep the course-long project and lesson timing from drifting apart.
const project=await readFile(path.join(root,'COURSE_PROJECT.md'),'utf8');
const ideas=await readFile(path.join(root,'PROJECT_IDEAS.md'),'utf8');
const ideaIds=[...ideas.matchAll(/^\| (\d{2}) \|/gm)].map(m=>Number(m[1]));
if(JSON.stringify(ideaIds)!==JSON.stringify(Array.from({length:20},(_,i)=>i+1)))errors.push('PROJECT_IDEAS.md: expected exactly 20 ordered ideas');
const milestones=[...project.matchAll(/^\| (\d{2}) \|/gm)].map(m=>Number(m[1]));
if(JSON.stringify(milestones)!==JSON.stringify(Array.from({length:12},(_,i)=>i+1)))errors.push('COURSE_PROJECT.md: expected milestones 01–12');
for(const file of (await readdir(path.join(root,'lessons'))).filter(n=>n.endsWith('.md'))){
 const source=await readFile(path.join(root,'lessons',file),'utf8');
 const slots=[...source.matchAll(/^\| (\d+)–(\d+) \|/gm)].map(m=>[Number(m[1]),Number(m[2])]);
 if(!slots.length || slots[0][0]!==0 || slots.at(-1)[1]!==120 || slots.some(([start,end],i)=>end<=start || (i>0 && slots[i-1][1]!==start)))errors.push('lessons/'+file+': agenda must cover 120 continuous minutes');
}
for(const file of (await readdir(path.join(root,'labs'))).filter(n=>n.endsWith('.md'))){
 if(!(await readFile(path.join(root,'labs',file),'utf8')).includes('../COURSE_PROJECT.md'))errors.push('labs/'+file+': missing individual project connection');
}
for(const file of ['INSTRUCTOR_GUIDE.md','LEARNING_DESIGN.md','SUBMISSIONS.md','instructor/ANSWER_KEY.md']){
 if(/14\/20|70%|mean of private/.test(await readFile(path.join(root,file),'utf8')))errors.push(file+': obsolete numeric completion gate');
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('Verified sessions 00–12, '+links+' links, 20 project ideas, 12 milestones, two-hour agendas, and publication checks.');
