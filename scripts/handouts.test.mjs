// © 2026 Jared Cluff. Build-time tests; website dependencies installed via npm ci.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import MarkdownIt from 'markdown-it';
import {renderHandout,decorateLab} from './handouts.mjs';
import {sessionGuides} from './session-guides.mjs';
const root=new URL('../',import.meta.url),md=new MarkdownIt({html:false,linkify:true});
const labs=(await readdir(new URL('labs/',root))).filter(n=>n.endsWith('.md')).sort();
const lessons=(await readdir(new URL('lessons/',root))).filter(n=>n.endsWith('.md')).sort();
test('every session has a guide anchored to its actual handout and valid preparatory sources',async()=>{
  assert.deepEqual(sessionGuides.map(s=>s.id),Array.from({length:13},(_,i)=>String(i).padStart(2,'0')));
  for(const [index,guide] of sessionGuides.entries()){
    assert.ok(labs[index].startsWith(guide.id+'-'));assert.ok(lessons[index].startsWith(guide.id+'-'));
    const source=await readFile(new URL('labs/'+labs[index],root),'utf8'),rendered=renderHandout(md,source),html=decorateLab(rendered,guide,{labs,lessons});
    assert.match(html,/not a new submission/);assert.match(html,/does not award a credential/);
    for(const field of ['goal','target','recall','support'])assert.ok(guide[field].length>30);
    for(const file of guide.prep)assert.ok((await stat(new URL(file,root))).isFile());
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'duplicate ID '+guide.id);
    for(const ref of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(ref[1]),ref[1]);
    assert.equal((html.match(/<h1\b/g)||[]).length,1);
    if(index===0)assert.ok(!html.includes('Session -1'));
    if(index===12)assert.ok(!html.includes('Session 13'));
  }
});
test('heading IDs are stable, unique, Unicode-safe and do not collide with the wrapper',()=>{
  const source='# Title\n\n## Hello, world!\n\n## Hello, world!\n\n## Main content\n\n## Café\n\n## `code` label\n';
  const r=renderHandout(md,source);assert.deepEqual(r.headings.map(h=>h.id),['title','hello-world','hello-world-1','main-content-1','café','code-label']);assert.equal(r.html,renderHandout(md,source).html);
});
test('raw HTML and guide prose remain text, and missing source anchors fail the build',async()=>{
  const r=renderHandout(md,'# <img src=x onerror=alert(1)>\n\n## Safe\n');assert.ok(!r.html.includes('<img'));assert.match(r.html,/&lt;img/);
  const rendered=renderHandout(md,await readFile(new URL('labs/'+labs[0],root),'utf8'));
  const html=decorateLab(rendered,{...sessionGuides[0],goal:'<script>unsafe()</script>'},{labs,lessons});assert.ok(!html.includes('<script>'));assert.match(html,/&lt;script&gt;/);
  assert.throws(()=>decorateLab(rendered,{...sessionGuides[0],start:'No such section'},{labs,lessons}),/missing section/);
});
test('core practice feedback has no numeric scoring or completion gates',async()=>{
  for(const file of labs){const source=await readFile(new URL('labs/'+file,root),'utf8');assert.ok(!/\b[012] points\b|earns full credit|Grade that design/.test(source),file);}
});
