// © 2026 Jared Cluff. Public resources only; never ingest recording folders.
import path from 'node:path';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export const pageFor=file=>file.replace(/^decks\//,'slides/').replace(/\.md$/,'.html');
export function collectResources(sources,prep,known){
 const found=new Set(prep);
 for(const [file,source] of sources){
  for(const m of source.matchAll(/\]\(([^)]+)\)/g)){
   const ref=m[1].split(/[?#]/)[0];
   if(!ref || /^(?:[a-z]+:|\/)/i.test(ref))continue;
   found.add(path.posix.normalize(path.posix.join(path.posix.dirname(file),ref)));
  }
  for(const m of source.matchAll(/\b(?:fixtures|templates|instructor)\/[\w.-]+/g))found.add(m[0]);
 }
 return [...found].filter(f=>known.has(f)).sort();
}
export function resourceList(files,titles,prefix='../'){
 return '<ul class="material-list">'+files.map(f=>'<li><a href="'+esc(prefix+pageFor(f))+'">'+esc(titles[f]||f)+'</a><small>'+esc(f)+'</small></li>').join('')+'</ul>';
}
export function sessionBody({id,title,guide,lab,lesson,resources,titles,downloads=[]}){
 const teaching=resources.filter(f=>f.startsWith('instructor/'));
 const student=resources.filter(f=>!f.startsWith('instructor/')&&!f.startsWith('lessons/')&&!f.startsWith('labs/')&&!f.startsWith('decks/'));
 const slides='slides/'+path.posix.basename(lesson,'.md')+'.html';
 return `<span class="eyebrow">CLASS MATERIALS · SESSION ${esc(id)}</span><h1>${esc(title)}</h1>
<p>${esc(guide.goal)}</p><nav class="material-jumps" aria-label="Class sections"><a href="#students">For students</a><a href="#teachers">For instructors</a><a href="#recordings">Recordings</a><a href="../materials.html">All course materials</a></nav>
<section id="students"><h2>For students</h2><p><strong>Your outcome:</strong> ${esc(guide.target)}</p>
<div class="material-actions"><a class="button" href="../${pageFor(lab)}">Open the lab</a><a class="button secondary" href="../${slides}">Open the slides</a></div>
${downloads.length?'<p>Slide downloads: '+downloads.map(f=>'<a href="../'+esc(f)+'">'+esc(path.posix.extname(f).slice(1).toUpperCase())+'</a>').join(' · ')+'</p>':''}
<h3>Files, templates and reference guides</h3><p>Use the lab to determine which files to give your AI assistant. This list is a navigation aid, not permission to load every resource into a model.</p>${resourceList(student,titles)}
<h3>Homework and submission</h3><p>Follow the homework in this session’s lab. <a href="../COURSE_PROJECT.html">Your course-long product</a> is separate from practice exercises. Use <a href="../SUBMISSIONS.html">the submission guide</a> and <a href="../my-path.html">your learning path</a> to track the next step.</p>
<aside class="material-note"><strong>Training safety:</strong> Use fictional data only. No real passwords, API keys, customer records or production credentials belong in course prompts, examples or submissions. A local model does not remove this rule. Work in the training folder with normal permission checks.</aside></section>
<section id="teachers"><h2>For instructors</h2><p>Public teaching resources—not a private staff area. Keep learner records and individual feedback elsewhere. Answer keys and reviewer labels must stay out of the context of a model being evaluated.</p>
${resourceList([lesson,'INSTRUCTOR_GUIDE.md',...teaching],titles)}<p>Pre-open the lab, slides, required evidence and templates. Rehearse the demo and keep a clearly labeled fallback ready. Protect learner practice time; move unrelated setup troubleshooting into coaching.</p></section>
<section id="recordings"><h2>Recordings and transcripts</h2><p>Class recordings and transcripts are restricted to enrolled learners and authorized guests. They are not published on this public page. No protected replay is linked here yet; ask the instructor for authorized access. Private presentation reviews and individual feedback are not public teaching materials.</p></section>
<nav class="material-jumps" aria-label="Adjacent classes">${Number(id)>0?'<a href="'+String(Number(id)-1).padStart(2,'0')+'.html">← Previous class</a>':''}${Number(id)<12?'<a href="'+String(Number(id)+1).padStart(2,'0')+'.html">Next class →</a>':''}</nav>`;
}
