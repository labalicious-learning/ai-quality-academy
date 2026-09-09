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
 for(const m of text.matchAll(/\]\(([^)]+)\)/g)){
   const link=m[1].split('#')[0];if(!link || /^[a-z]+:/i.test(link))continue;
   try{await stat(path.resolve(path.dirname(file),link));links++;}catch{errors.push(path.relative(root,file)+': missing '+link);}
 }
}
for(const dir of ['lessons','decks','labs']){
 const names=(await readdir(path.join(root,dir))).filter(n=>n.endsWith('.md')).sort();
 if(names.length!==13 || !names[0].startsWith('00-'))errors.push(dir+': expected sessions 00–12');
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('Verified sessions 00–12, '+links+' links, and publication marker/credential checks.');
