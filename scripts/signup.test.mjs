// Copyright 2026 Jared Cluff. All rights reserved.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {signupSection} from './signup.mjs';

test('configured responder link matches the public signup guide',async()=>{
  const config=JSON.parse(await readFile(new URL('../site.config.json',import.meta.url),'utf8'));
  const guide=await readFile(new URL('../SIGNUP.md',import.meta.url),'utf8');
  assert.ok(guide.includes(']('+config.signupUrl+')'));
  const html=signupSection(config);
  assert.ok(html.includes('href="'+config.signupUrl+'"'));
  assert.ok(html.includes('href="SIGNUP.html"'));
  assert.ok(html.includes('Dates are pending'));
  assert.ok(html.includes('instructor approval'));
  assert.ok(!html.includes('<iframe'));
});
test('no signup configuration produces no enrollment promotion',()=>assert.equal(signupSection({}),''));
for(const url of ['javascript:alert(1)','https://docs.google.com/forms/d/private/edit','https://docs.google.com.evil.example/forms/d/e/abc/viewform','https://docs.google.com/forms/d/e/abc/viewform" onclick="alert(1)','https://docs.google.com/spreadsheets/d/private/edit']) {
  test('rejects unsafe or private destination '+url,()=>assert.throws(()=>signupSection({signupUrl:url}),/responder URL/));
}
