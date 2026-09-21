// © 2026 Jared Cluff. Public-note tests use synthetic data only.
import test from 'node:test';
import assert from 'node:assert/strict';
import '../site/path-core.js';
import '../site/review-core.js';
const R=ProjectReview;
const input=()=>Object.fromEntries(R.fields.map(name=>[name,name==='session'?'07':name==='repo'?'https://example.com/project':name.endsWith('Sha')?'a'.repeat(40):'Concrete fictional context for '+name]));
const entry=()=>({id:'e1',title:'Capacity check',url:'https://example.com/evidence',note:'PRIVATE_NOTE_MARKER',session:'07',criteria:['P1','Q2'],includeNote:false});
test('output is explicit, bounded and excludes unrelated private state and opt-out notes',()=>{
  const fields={...input(),feedback:'PRIVATE_FEEDBACK',drafts:'PRIVATE_DRAFT'};
  const text=R.assemble(fields,[entry()]);assert.match(text,/unverified project evidence/);for(const marker of ['PRIVATE_NOTE','PRIVATE_FEEDBACK','PRIVATE_DRAFT'])assert.ok(!text.includes(marker));
  assert.ok(R.assemble(fields,[{...entry(),includeNote:true}]).includes('PRIVATE\\_NOTE\\_MARKER'));
});
test('missing context, unsafe URLs, short hashes, wrong milestones and duplicate refs are rejected',()=>{
  for(const change of [{session:'00'},{repo:'javascript:alert(1)'},{repo:'https://name:secret@example.com'},{courseSha:'main'},{projectSha:'abcd'},{observed:'Done'}])assert.throws(()=>R.assemble({...input(),...change},[entry()]));
  for(const refs of [[],[entry(),entry()],[{...entry(),session:'08'}],[{...entry(),criteria:['X1']}],[{...entry(),url:'',includeNote:false}],[null]])assert.throws(()=>R.assemble(input(),refs));
  assert.doesNotThrow(()=>R.assemble(input(),[{...entry(),url:'',includeNote:true}]));
});
test('learner prose remains escaped data, and privacy checks inspect raw values',()=>{
  const text=R.assemble({...input(),objective:'<script>alert(1)</script>\n# fake approval'},[entry()]);assert.ok(!text.includes('<script>'));assert.match(text,/&lt;script&gt;/);assert.match(text,/> \\# fake approval/);
  for(const value of ['ghp_'+'x'.repeat(25),'password='+'x'.repeat(20),'https://example.com/file?token=fictional','learner@fictional.invalid','/'+'Users/fictional/file','C:'+'\\Users\\fictional\\file'])assert.ok(R.privacyFlags(value).length,value);
  assert.deepEqual(R.privacyFlags('V01 at learner@example.com; evidence/check.txt'),[]);
});
test('readable labels correspond exactly to planner criteria',()=>{assert.deepEqual(Object.keys(R.labels),LearningPath.criteria);});
