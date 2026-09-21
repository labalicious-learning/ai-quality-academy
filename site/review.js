// © 2026 Jared Cluff. Local preparation only; no posting, fetching or grading.
(() => {
  const $=id=>document.getElementById(id),C=LearningPath,R=ProjectReview,form=$('review-form');
  const labels={agreement:'Agreement / requirement source and revision',objective:'Goal and requested review',requirements:'Requirements and case IDs',expected:'Expected result',observed:'Observed result',verification:'Verification actually performed',environment:'Environment and reset procedure',limits:'Limits and unverified claims',questions:'Questions and next action'};
  let evidence=[],preview='',sourceRaw=null,sourceOkay=false;
  const say=text=>{$('review-status').textContent=text;};
  function invalidate(){preview='';$('review-preview').value='';$('review-ack').checked=false;$('review-ack').disabled=true;$('review-download').disabled=true;}
  for(const s of C.sessions.filter(s=>s.id!=='00'))$('review-session').add(new Option(`${s.id} · ${s.title}`,s.id));
  for(const [name,text] of Object.entries(labels)){
    const label=document.createElement('label'),area=document.createElement('textarea');label.textContent=text;area.name=name;area.required=true;area.minLength=15;area.maxLength=3000;area.rows=4;label.append(area);$('review-narrative').append(label);
  }
  function renderEvidence(){
    const list=$('review-evidence');list.replaceChildren();
    for(const item of evidence.filter(e=>e.session===form.elements.session.value)){
      const card=document.createElement('div');card.className='path-item';card.dataset.evidenceId=item.id;
      const label=document.createElement('label'),box=document.createElement('input');box.type='checkbox';box.className='review-pick';label.append(box,document.createTextNode(' Include: '+item.title));card.append(label);
      const description=document.createElement('p');description.textContent=(item.url||'No URL — including an artifact-location note is required.')+' · '+(item.criteria.join(', ')||'No criteria mapped');card.append(description);
      const noteLabel=document.createElement('label'),noteBox=document.createElement('input');noteBox.type='checkbox';noteBox.className='review-note';noteBox.disabled=true;noteLabel.append(noteBox,document.createTextNode(' Also include this reference’s planner note'));card.append(noteLabel);
      const note=document.createElement('p');note.textContent=item.note||'(No note)';note.className='path-private-note';card.append(note);
      box.addEventListener('change',()=>{noteBox.disabled=!box.checked;if(!box.checked)noteBox.checked=false;});list.append(card);
    }
    if(!list.children.length)list.textContent='No saved evidence for this milestone. Add a safe reference in My learning path, then return here.';
  }
  function readSource(){
    evidence=[];sourceOkay=false;
    try{sourceRaw=localStorage.getItem(C.key);const state=sourceRaw===null?C.blank():C.parse(sourceRaw);evidence=state.evidence;sourceOkay=true;$('review-source-status').textContent='Reading saved planner references only. Private feedback is excluded.';}
    catch{$('review-source-status').textContent='Planner storage is unavailable or invalid. Repair or restore it in My learning path; no damaged data was changed.';}
    invalidate();renderEvidence();
  }
  function selected(){return [...$('review-evidence').children].filter(card=>card.querySelector('.review-pick')?.checked).map(card=>({...evidence.find(e=>e.id===card.dataset.evidenceId),includeNote:card.querySelector('.review-note').checked}));}
  function input(){const data=new FormData(form);return Object.fromEntries(R.fields.map(name=>[name,String(data.get(name)||'').trim()]));}
  function fresh(){try{if(!sourceOkay||localStorage.getItem(C.key)!==sourceRaw){readSource();say('The saved planner changed or is unavailable. Recheck your evidence selection and regenerate the preview.');return false;}return true;}catch{invalidate();say('Cannot verify the saved planner. Sharing is paused; keep your form text privately.');return false;}}
  form.addEventListener('input',invalidate);form.addEventListener('change',invalidate);
  form.elements.session.addEventListener('change',renderEvidence);
  form.addEventListener('submit',event=>{
    event.preventDefault();invalidate();if(!fresh())return;
    const values=input(),refs=selected(),errors=R.issues(values,refs);
    const raw=[...Object.values(values),...refs.flatMap(e=>[e.title,e.url,e.includeNote?e.note:''])].join('\n');
    errors.push(...R.privacyFlags(raw));
    if(errors.length){say(errors.join(' '));return;}
    preview=R.assemble(values,refs);$('review-preview').value=preview;$('review-ack').disabled=false;say('Preview ready. Inspect the exact text and linked artifacts before approving a download.');$('review-preview').focus();
  });
  $('review-ack').addEventListener('change',()=>{$('review-download').disabled=!preview||!$('review-ack').checked;});
  $('review-download').addEventListener('click',()=>{
    if(!fresh()||!preview||!$('review-ack').checked)return;
    const url=URL.createObjectURL(new Blob([preview],{type:'text/markdown;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='project-review.md';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);say('Download requested. Confirm it was saved and review it before sharing. Nothing was submitted.');
  });
  readSource();
  const drafts=LocalFormDrafts.attach({forms:{'review-form':R.fields},key:'labalicious.review-drafts.v1',status:'review-draft-status',onDiscard:()=>{invalidate();renderEvidence();}});
  renderEvidence();
  $('review-discard').addEventListener('click',()=>{if(confirm('Discard the unfinished review fields saved in this browser? Downloaded files and planner entries will not change.'))drafts.discardAll();});
  addEventListener('storage',event=>{if(event.key===C.key||event.key===null){readSource();say('Planner source changed. Evidence choices and sharing approval were cleared.');}});
  $('review-app').hidden=false;
})();
