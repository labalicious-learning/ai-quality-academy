// © 2026 Jared Cluff. Public brochure checks; no enrollment or email actions.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
const source=await readFile(new URL('./training-page.html',import.meta.url),'utf8');
test('brochure preserves scope, workload, enrollment and separate award expectations',()=>{
  for(const term of ['13 sessions','Two hours each','2–3 hours','Mac · Linux · Windows','Dates to be announced','Enrollment subject to approval','Tuition has not been announced','completion certificate','AIQAA certification','Neither is automatic','not marketing consent','no separate exam'])assert.ok(source.includes(term),term);
  assert.equal((source.match(/<h1\b/g)||[]).length,1);
  assert.equal((source.match(/class="cta" href="SIGNUP.html"/g)||[]).length,2);
  assert.ok(source.includes('href="CREDENTIALS.html"'));
});
test('brochure has no active collection, tracking scripts, external resources or private destinations',()=>{
  assert.doesNotMatch(source,/<(?:script|iframe|form|input|video|audio)\b/i);
  assert.doesNotMatch(source,/on(?:click|load|error)\s*=/i);
  for(const [,url] of source.matchAll(/(?:src|href)="([^"]+)"/g))assert.ok(!/^(?:javascript:|data:|https?:\/\/)/i.test(url)||url==='https://learn.labalicious.com/training.html',url);
  assert.ok(source.includes('name="viewport"'));
  assert.ok(source.includes('property="og:title"'));
  assert.ok(source.includes('id="main" tabindex="-1"'));
});
test('brochure course destinations and assets have maintained sources',async()=>{
  for(const file of ['SIGNUP.md','CREDENTIALS.md','site/labalicious-logo.png','site/training.css'])assert.ok((await stat(new URL('../'+file,import.meta.url))).isFile());
  const css=await readFile(new URL('../site/training.css',import.meta.url),'utf8');
  assert.ok(css.includes('@media print'));assert.ok(css.includes(':focus-visible'));
  const build=await readFile(new URL('./build-site.mjs',import.meta.url),'utf8');
  assert.ok(build.includes("path.join(out,'training.html')"));
});
