// © 2026 Jared Cluff. Browser-local planner; never a submission or certification service.
(() => {
  const C=globalThis.LearningPath, $=id=>document.getElementById(id);
  let state=C.blank(), savedRaw=null, storageAvailable=true, corrupt=false, conflict=false, unsaved=false, pending=null, importEpoch=0;
  const say=message=>{$('path-status').textContent=message;};
  function node(tag,text,props={}){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;Object.assign(e,props);return e;}
  function link(label,href,external=false){const e=node('a',label,{href});if(external){e.target='_blank';e.rel='noopener noreferrer';}return e;}
  const select=(values,value,change,id)=>{const e=node('select');if(id)e.id=id;for(const [v,label] of Object.entries(values))e.add(new Option(label,v));e.value=value;e.addEventListener('change',()=>change(e.value));return e;};
  const button=(label,run)=>{const e=node('button',label,{type:'button'});e.addEventListener('click',run);return e;};
  const uid=()=>crypto.randomUUID();
  const editing={evidence:null,feedback:null};
  let drafts;
  function reveal(id,focus=true){
    const target=$(id);if(!target)return;
    for(let panel=target.closest('details');panel;panel=panel.parentElement?.closest('details'))panel.open=true;
    if(focus){
      if(!target.matches('a,button,input,select,textarea,summary'))target.tabIndex=-1;
      target.focus({preventScroll:true});target.scrollIntoView({block:'center',behavior:'instant'});
    }
  }
  function showSchedule(){
    const schedule=globalThis.CourseContext?.schedule||[], now=Date.now(), upcoming=globalThis.CourseSchedule?.next(schedule,now);
    if(!upcoming){
      $('schedule-title').textContent=schedule.length?'No upcoming dates listed':'Dates not announced yet';
      $('schedule-time').textContent='You can use the public lessons at your own pace. Check with your instructor for the next cohort.';
      $('schedule-zone').textContent='Calendar invitations follow instructor approval and confirmed dates. This planner does not confirm enrollment.';
      return;
    }
    const format=new Intl.DateTimeFormat(undefined,{dateStyle:'medium',timeStyle:'short'});
    $('schedule-title').textContent=(Date.parse(upcoming.start)<=now?'In progress':'Next class')+' · Session '+upcoming.session;
    $('schedule-time').textContent=format.format(new Date(upcoming.start))+' – '+format.format(new Date(upcoming.end));
    $('schedule-zone').textContent='Times shown in '+format.resolvedOptions().timeZone+'. Public course dates—not confirmation of your enrollment. Use your instructor’s invitation for joining details.';
  }
  function cancelEdit(kind){editing[kind]=null;const form=$(kind+'-form');form.reset();delete form.dataset.editId;delete form.dataset.editBase;form.querySelector('button').textContent='Add '+kind;$(kind+'-cancel-edit').hidden=true;drafts?.clear(kind+'-form');}
  function edit(kind,item){
    if(drafts?.has(kind+'-form')&&!confirm('Replace the unfinished form draft with this saved entry? Copy any text you want to keep first.'))return;
    editing[kind]=item.id;const form=$(kind+'-form');form.reset();
    form.dataset.editId=item.id;form.dataset.editBase=JSON.stringify(item);
    for(const name of kind==='evidence'?['title','url','note','session']:['title','why','needed','session','criterion'])form.elements[name].value=item[name];
    if(kind==='evidence')for(const box of form.querySelectorAll('[name=criteria]'))box.checked=item.criteria.includes(box.value);
    $(kind+'-cancel-edit').hidden=false;form.querySelector('button').textContent='Save changes';reveal(form.id,false);form.elements.title.focus({preventScroll:true});form.elements.title.scrollIntoView({block:'center',behavior:'instant'});say('Editing this '+kind+' entry. Save the form to apply changes, or cancel.');
    drafts?.capture(kind+'-form');
  }
  try {savedRaw=localStorage.getItem(C.key);if(savedRaw!==null)state=C.parse(savedRaw);}
  catch(error){if(savedRaw!==null){corrupt=true;say('Saved data could not be read. Saving is paused. Export the original backup before restoring or clearing this planner.');}else{storageAvailable=false;say('Browser storage is unavailable. Changes stay in this tab only; export before leaving.');}}
  function markConflict(){conflict=true;$('path-conflict').hidden=false;say('Saving paused: another tab changed the saved planner. Export this view or reload.');}
  function commit(next){
    try {next=C.validate(next);}catch{say('Please check the fields: use HTTPS links without embedded credentials, a title and the requested evidence details. Limits: 150 entries per list and 1 MB total backup size.');return false;}
    if(conflict||corrupt){say('Saving is paused. Export first, then reload, restore a valid backup or explicitly clear damaged data.');return false;}
    if(storageAvailable){
      try {
        if(localStorage.getItem(C.key)!==savedRaw){markConflict();return false;}
        const raw=JSON.stringify(next);localStorage.setItem(C.key,raw);savedRaw=raw;unsaved=false;say('Saved on this browser. Export a backup to keep another copy.');
      } catch {unsaved=true;say('Could not save to browser storage. Your changes are in this tab only—export a backup before leaving.');}
    }else{unsaved=true;say('Changes are in this tab only. Export before leaving; browser storage is unavailable.');}
    state=next;render();return true;
  }
  function update(change){const next=structuredClone(state);change(next);return commit(next);}
  function showProject(){for(const name of ['name','repo'])$('project-form').elements[name].value=state.project[name];}
  function render(){
    const focus=document.activeElement?.id;
    const next=C.today(state), session=C.sessions.find(s=>s.id===next.session);
    $('next-title').textContent=next.title;$('next-task').textContent=next.task;$('next-done').textContent=next.done;
    $('today-context').textContent='SESSION '+next.session+' · '+(next.kind==='feedback'?'FOLLOW UP':next.kind==='waiting'?'WAITING FOR FEEDBACK':'YOUR NEXT MOVE');
    $('today-primary').href=next.primary.href;$('today-primary').textContent=next.primary.label+' →';
    $('today-project-title').textContent=next.projectTitle;$('today-project-task').textContent=next.projectTask;
    $('today-project-status').textContent=(state.project.name||'Your project')+' · '+next.projectStage+' (your notes, not instructor approval)';
    const prep=globalThis.CourseContext?.preparation.find(p=>p.session===next.session);
    $('today-goal').textContent=prep?.goal||'Open the assigned lesson and lab for preparation guidance.';
    $('today-prep').replaceChildren(...(prep?.files||[]).map(file=>{const li=node('li');li.append(link(file.label,file.href));return li;}));
    $('next-links').replaceChildren(link('Open lesson',session.lesson),link('Open hands-on lab',session.lab),link(next.kind==='feedback'?'Review feedback':'Project roadmap',next.kind==='feedback'?'#feedback-title':'COURSE_PROJECT.html'));
    $('next-links').append(button('Update this milestone',()=>reveal('lesson-'+session.id)));
    const lessons=Object.values(state.progress).filter(p=>p.lessonDone).length, milestones=Object.values(state.progress).filter(p=>p.stage==='done').length;
    $('path-counts').textContent=`${lessons} / 13 lessons self-tracked · ${milestones} / 13 setup/project steps done · ${state.evidence.length} evidence references`;
    $('path-progress').value=lessons;
    $('path-milestones').replaceChildren(...C.sessions.map(s=>{
      const card=node('article',undefined,{className:'path-milestone',id:`milestone-${s.id}`}), p=state.progress[s.id];
      card.append(node('span',`SESSION ${s.id}`,{className:'path-session'}),node('h3',s.title),node('p',s.task));
      const links=node('div',undefined,{className:'path-links'});links.append(link('Lesson',s.lesson),link('Lab',s.lab));card.append(links);
      const lesson=node('label',undefined,{className:'path-check'}), box=node('input',undefined,{type:'checkbox',checked:p.lessonDone,id:`lesson-${s.id}`});
      box.addEventListener('change',()=>{if(!update(n=>{n.progress[s.id].lessonDone=box.checked;}))box.checked=state.progress[s.id].lessonDone;});
      lesson.append(box,document.createTextNode('I finished this lesson activity'));card.append(lesson);
      const label=node('label',s.id==='00'?'Setup step':'Project milestone');
      label.append(select(C.stages,p.stage,value=>{if(!update(n=>{n.progress[s.id].stage=value;}))$(`stage-${s.id}`).value=state.progress[s.id].stage;},`stage-${s.id}`));card.append(label);return card;
    }));
    $('feedback-list').replaceChildren(...state.feedback.map((f,index)=>{
      const card=node('article',undefined,{className:'path-item'});card.append(node('h3',f.title),node('p',`Session ${f.session}${f.criterion?' · '+f.criterion+' — '+ProjectReview.labels[f.criterion]:''}`),node('p','Why: '+f.why),node('p','Evidence to resolve: '+f.needed));
      const label=node('label','My follow-up status'), picker=select(C.feedbackStates,f.status,status=>{if(!update(n=>{n.feedback.find(item=>item.id===f.id).status=status;}))picker.value=f.status;},`feedback-status-${index}`);
      label.append(picker);card.append(label,button('Edit feedback',()=>edit('feedback',f)),document.createTextNode(' '),button('Remove feedback',()=>{if(confirm('Remove this feedback note from this planner?')&&update(n=>{n.feedback=n.feedback.filter(item=>item.id!==f.id);})&&editing.feedback===f.id)cancelEdit('feedback');}));return card;
    }));
    if(!state.feedback.length)$('feedback-list').append(node('p','No feedback recorded yet. After a review, capture one useful next action.',{className:'path-empty'}));
    renderEvidence();
    if(focus)$(focus)?.focus({preventScroll:true});
  }
  function renderEvidence(){
    const filter=$('evidence-filter').value, items=state.evidence.filter(e=>!filter||e.criteria.includes(filter));
    $('evidence-list').replaceChildren(...items.map(e=>{
      const card=node('article',undefined,{className:'path-item'});card.append(node('h3',e.title),node('p',`Session ${e.session} · ${e.criteria.join(', ')||'No criteria mapped yet'}`));
      if(e.url)card.append(link('Open evidence link ↗',e.url,true));if(e.note)card.append(node('p',e.note));
      card.append(button('Edit evidence',()=>edit('evidence',e)),document.createTextNode(' '),button('Remove evidence',()=>{if(confirm('Remove this reference? The original file or link will not be deleted.')&&update(n=>{n.evidence=n.evidence.filter(item=>item.id!==e.id);})&&editing.evidence===e.id)cancelEdit('evidence');}));return card;
    }));
    if(!items.length)$('evidence-list').append(node('p',filter?'No references for this criterion yet.':'Your shelf is empty. Save a useful PR, observation or check result here.',{className:'path-empty'}));
    $('coverage-list').replaceChildren(...C.criteria.map(id=>node('span',`${id}: ${state.evidence.filter(e=>e.criteria.includes(id)).length} references`,{className:'path-badge'})));
  }
  function renderHints(){
    const s=C.sessions.find(s=>s.id===$('help-session').value), content=$('path-hints');content.replaceChildren();
    for(const [i,hint] of s.hints.entries()){const d=node('details');d.append(node('summary',i===0?'1 · Clarify the goal':'2 · Try an investigation'),node('p',hint));content.append(d);}
    const d=node('details'), pre=node('pre',C.brief(s.id),{id:'ai-brief',tabIndex:0});
    d.append(node('summary','3 · Prepare a bounded AI task brief'),node('p','Review this brief before sharing it. Add only the specific files and synthetic evidence you authorize. No project notes are automatically included.'),pre,button('Copy task brief',async()=>{try{await navigator.clipboard.writeText(pre.textContent);say('Task brief copied. Review it before pasting into your chosen tool.');}catch{say('Clipboard access unavailable. Select and copy the displayed task brief manually.');pre.focus();}}));content.append(d);
  }
  for(const picker of document.querySelectorAll('.session-options,#help-session'))for(const s of C.sessions)picker.add(new Option(`${s.id} · ${s.title}`,s.id));
  for(const id of ['feedback-criterion','evidence-filter']){$(id).add(new Option(id==='evidence-filter'?'All criteria':'No criterion selected',''));for(const c of C.criteria)$(id).add(new Option(c+' — '+ProjectReview.labels[c],c));}
  for(const c of C.criteria){const label=node('label'), input=node('input',undefined,{type:'checkbox',name:'criteria',value:c});label.append(input,document.createTextNode(c+' · '+ProjectReview.labels[c]));$('evidence-criteria').append(label);}
  $('help-session').value=C.next(state).session;$('help-session').addEventListener('change',renderHints);$('evidence-filter').addEventListener('change',renderEvidence);
  $('project-form').addEventListener('submit',event=>{event.preventDefault();const f=new FormData(event.target);if(update(n=>{n.project={name:f.get('name').trim(),repo:f.get('repo').trim()};})&&!unsaved)drafts?.clear('project-form');});
  for(const kind of ['evidence','feedback']){
    const cancel=button('Cancel edit',()=>{cancelEdit(kind);say('Edit cancelled. Saved entry is unchanged.');});cancel.id=kind+'-cancel-edit';cancel.hidden=true;$(kind+'-form').append(cancel);
    $(kind+'-form').addEventListener('submit',event=>{
      event.preventDefault();const f=new FormData(event.target), old=state[kind].find(item=>item.id===editing[kind]);
      if(editing[kind]&&(!old||JSON.stringify(old)!==event.target.dataset.editBase)){say('The original entry changed or no longer exists. Your draft is retained: copy needed text, cancel the edit, then reopen the current entry.');return;}
      const item={id:old?.id||uid(),title:f.get('title').trim(),session:f.get('session')};
      if(kind==='evidence')Object.assign(item,{url:f.get('url').trim(),note:f.get('note').trim(),criteria:f.getAll('criteria')});
      else Object.assign(item,{why:f.get('why').trim(),needed:f.get('needed').trim(),criterion:f.get('criterion'),status:old?.status||'open'});
      if(update(n=>{if(old)n[kind][n[kind].findIndex(entry=>entry.id===old.id)]=item;else n[kind].push(item);})){if(!unsaved)cancelEdit(kind);else{
        // A retry must save the same in-memory entry, not append a duplicate.
        editing[kind]=item.id;event.target.dataset.editId=item.id;event.target.dataset.editBase=JSON.stringify(item);event.target.querySelector('button').textContent='Save changes';$(kind+'-cancel-edit').hidden=false;drafts?.capture(kind+'-form');
      }}
    });
  }
  $('path-export').addEventListener('click',()=>{
    if(drafts?.hasAny()&&!confirm('Planner backups do not include unfinished form drafts. Continue with saved planner entries only? Cancel to finish or copy your drafts first.'))return;
    const raw=corrupt?savedRaw:JSON.stringify(state,null,2), url=URL.createObjectURL(new Blob([raw],{type:'application/json'})), a=link('Download',url);
    a.download=corrupt?'labalicious-original-recovery.json':'labalicious-learning-path.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    say('Backup download requested. Keep it private and confirm the file was saved. It is not a submission.');
  });
  $('path-import').addEventListener('change',async event=>{
    const epoch=++importEpoch;pending=null;$('path-restore').hidden=true;const file=event.target.files[0];if(!file)return;
    try{
      if(file.size>1024*1024)throw new Error('size');const parsed=C.parse(await file.text());if(epoch!==importEpoch)return;pending=parsed;
      $('restore-summary').textContent=`${pending.project.name||'Unnamed project'} · ${pending.evidence.length} evidence references · ${pending.feedback.length} feedback notes. Only supported version 1 data was accepted.`;
      $('path-restore').hidden=false;reveal('restore-confirm');say('Valid backup previewed. Nothing has been replaced.');
    }catch{if(epoch===importEpoch)say('Backup rejected: invalid, unsupported or larger than 1 MB. Current data is unchanged.');}
    if(epoch===importEpoch)event.target.value='';
  });
  $('restore-cancel').addEventListener('click',()=>{importEpoch++;pending=null;$('path-restore').hidden=true;say('Restore cancelled. Current data is unchanged.');reveal('path-import');});
  $('restore-confirm').addEventListener('click',()=>{
    if(!pending)return;const wasCorrupt=corrupt;corrupt=false;
    if(drafts?.hasAny()&&!confirm('Restoring replaces the planner but retains private drafts separately. Save or copy important draft text first. Continue?')){corrupt=wasCorrupt;return;}
    if(commit(pending)){pending=null;$('path-restore').hidden=true;if(!drafts?.has('project-form'))showProject();}else corrupt=wasCorrupt;
  });
  $('path-reset').addEventListener('click',()=>{
    if(!confirm('Clear this planner’s saved progress, evidence references and feedback? Export a backup first if you want to keep them. This cannot be undone without a backup.'))return;
    try{if(storageAvailable){if(localStorage.getItem(C.key)!==savedRaw){markConflict();return;}localStorage.removeItem(C.key);}}
    catch{say('Could not clear saved browser data. Nothing was cleared.');return;}
    savedRaw=null;state=C.blank();corrupt=false;conflict=false;unsaved=false;pending=null;importEpoch++;$('path-conflict').hidden=true;$('path-restore').hidden=true;
    if(!drafts?.has('project-form'))showProject();render();say(storageAvailable?'This planner was cleared. Private form drafts are separate: use Discard private drafts to remove them too. Original project files and other browser data were not changed.':'This tab’s planner was cleared. Browser storage is unavailable, so any previously saved record could not be removed. Use browser site-data settings to remove inaccessible saved data.');
  });
  $('path-reload').addEventListener('click',()=>{if(confirm('Reload the saved planner? Export this tab’s view first if you need it. Only successfully autosaved form drafts can be recovered.'))location.reload();});
  addEventListener('storage',event=>{if((event.key===C.key||event.key===null)&&event.newValue!==savedRaw)markConflict();});
  addEventListener('beforeunload',event=>{if(unsaved){event.preventDefault();event.returnValue='';}});
  $('path-app').addEventListener('click',event=>{
    const anchor=event.target.closest('a[href^="#"]');if(!anchor)return;
    const id=anchor.getAttribute('href').slice(1);if(!$(id))return;
    event.preventDefault();reveal(id);
  });
  const revealHash=()=>{try{if(location.hash)reveal(decodeURIComponent(location.hash.slice(1)));}catch{/* Ignore malformed fragments. */}};
  addEventListener('hashchange',revealHash);addEventListener('focus',showSchedule);setInterval(showSchedule,60000);
  $('path-app').hidden=false;showProject();render();renderHints();showSchedule();revealHash();
  drafts=LocalFormDrafts.attach({key:'labalicious.path-drafts.v1',status:'draft-status',forms:{'project-form':['name','repo'],'evidence-form':['title','url','note','session','criteria'],'feedback-form':['title','why','needed','session','criterion']},onRecover:(id,record)=>{
    reveal(id,false);const kind=id.replace('-form','');if(kind==='evidence'||kind==='feedback'){editing[kind]=record.editId||null;if(record.editId){$(kind+'-cancel-edit').hidden=false;$(id).querySelector('button').textContent='Save changes';}}
  },onDiscard:id=>{const kind=id.replace('-form','');if(kind==='project')showProject();else{editing[kind]=null;$(kind+'-cancel-edit').hidden=true;$(id).querySelector('button').textContent='Add '+kind;}}});
  $('discard-drafts').addEventListener('click',()=>{if(confirm('Permanently discard the unfinished private form drafts? Saved planner entries will not be deleted.'))drafts.discardAll();});
})();
