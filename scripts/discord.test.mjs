// Copyright 2026 Jared Cluff. All rights reserved.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {discordSection} from './discord.mjs';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
test('Discord promotion links to a first-party guide, not a public invite or embed',()=>{
 const html=discordSection();
 assert.match(html,/href="DISCORD.html"/);
 assert.match(html,/enrollment approval/);
 assert.match(html,/Zoom for classes\. Discord for coaching\./);
 assert.doesNotMatch(html,/<(?:iframe|script)|discord\.gg|discord\.com\/invite/);
});
test('guide preserves access, privacy, scheduling and platform boundaries',async()=>{
 const guide=await read('DISCORD.md');
 for(const text of ['not invitation links','15 student seats','America/Chicago','6:00–6:30 p.m.','1:30–2:00 p.m.','Google Calendar entries are not yet confirmed','Mac, Linux and Windows','Screen sharing is not remote control','SUBMISSIONS.md','LEARNER_SUPPORT.md']) assert.ok(guide.includes(text),text);
 const urls=[...guide.matchAll(/https:\/\/discord\.com\/channels\/(\d+)\/(\d+)/g)];
 assert.equal(urls.length,7);
 assert.ok(urls.every(m=>m[1]==='1554532337591656559'));
 assert.doesNotMatch(guide,/discord\.gg|discord\.com\/invite|1554542917274706090/);
 assert.match(guide,/scheduled classes use Zoom/);
 assert.match(guide,/Learners cannot create server invitations/);
 const headings=[...guide.matchAll(/^## (.+)$/gm)].map(m=>m[1]);
 assert.equal(new Set(headings).size,headings.length);
});
test('Discord guide is discoverable during signup, setup and help',async()=>{
 for(const file of ['README.md','SIGNUP.md','LEARNER_SUPPORT.md','labs/00-course-setup.md','lessons/00-course-setup.md']) assert.match(await read(file),/\]\((?:\.\.\/)?DISCORD\.md\)/,file);
 const build=await read('scripts/build-site.mjs');
 assert.match(build,/discordSection\(\)/);
 assert.match(build,/DISCORD.html">Discord &amp; help/);
});
