// © 2026 Jared Cluff. Shared browser/Node logic; no network or student execution.
(() => {
  const rows = [
    ['00','course-setup','course-setup','Get ready','Complete the setup lab and verify your local workspace.','You can open the course files and run the documented setup check.','Start with the setup lab for your operating system.','For the explanation exercise, inspect only fixtures/setup-example.mjs.',''],
    ['01','quality-and-evidence','ai-claim-detective','Pitch your product','Sketch one user journey and propose three connected features.','Your proposal identifies the audience, scope, synthetic data and budget; request instructor approval.','Who is this for, and what should they accomplish?','Sketch the start, action and useful result before choosing a framework.','P1,H1'],
    ['02','codex-as-teammate','codebase-detective','Make your first PR','After scope approval, open a focused kickoff PR in your own repository.','Your PR links an issue, explains its purpose and asks for human feedback. Start the assessment agreement.','Choose one small change you can explain.','Compare your branch with main; inspect the diff before requesting review.','G1,H1,A1'],
    ['03','ai-for-business-work','operations-intelligence','Understand your data','Use synthetic data to support one product decision.','A checked calculation, source log, decision memo and mock update support the decision.','Which decision would a useful number help you make?','Keep raw data unchanged, clean a copy and independently recalculate one result.','B1'],
    ['04','requirements-to-test-design','allocation-test-charter','Define done','Agree concrete acceptance cases and rubric mappings with your instructor.','Cases specify starting state, input, expected visible/saved result and reset. The agreement is approved.','Replace “works well” with an observable result.','Try one positive case and one meaningful boundary for each core feature. Resolve unclear rules.','P1,Q1'],
    ['05','browser-and-workflow-qa','crm-journey-expedition','Build one complete journey','Connect one user action to a saved result and check it after reload.','Your working slice has observed expected/actual results and a substantive human review.','Follow one user from a clean starting state to a useful outcome.','Record state before the action, after it and after reload; distinguish a toast from saved data.','P1,P2,H2'],
    ['06','api-data-permissions','tenant-boundary-escape-room','Protect a boundary','Check a valid input and an invalid input at a real trust boundary.','Evidence shows allowed behavior, rejection and resulting state; real and simulated controls are labeled.','What information enters from outside your trusted code?','Try valid input first, then malformed input; verify saved state stays within the agreed rules.','P3,Q1'],
    ['07','automation-with-codex','durable-regression-check','Keep a bug fixed','Retain a meaningful behavioral regression and run it locally and in your own-repo CI.','Record fail-before/pass-after at exact revisions. Use the rubric’s approved labeled-control route if needed.','What assertion would detect the incorrect behavior?','Check that the earlier failure is the behavioral assertion, not a missing dependency.','Q2,Q3,G1'],
    ['08','visual-responsive-accessible','digital-showroom-visual-review','Make it usable','Refine your interface and check the primary journey on narrow screens and with a keyboard.','Design iterations, agreed widths/zoom, labels, focus and contrast checks have evidence.','Which action or result is hardest to understand?','Walk the whole journey without a mouse, then inspect the agreed screen widths and UI states.','V1,V2,V3'],
    ['09','integrations-and-business-ops','inquiry-to-crm-reliability','Recover with confidence','Exercise import/export or the approved local integration and its failure path.','Malformed data, repeated action and recovery checks show state before and after.','What should remain safe when an operation fails halfway?','Use synthetic data; compare values before export and after restore, then try an invalid file.','P2,P3,B3'],
    ['10','release-and-incident-quality','ship-no-ship-release-room','Prepare your release','Freeze a candidate and reconcile open findings with required behavior.','The release SHA, check results, known limits, recovery and human review support a release recommendation.','Which unresolved finding contradicts a core acceptance case?','Rerun the main journey and required checks on the exact candidate, not a previous green build.','Q3,H2,B3'],
    ['11','ai-agents-and-model-change','model-olympics','Improve your AI workflow','Compare two bounded workflows on the same small project task.','Inputs and success checks stay fixed; actual outputs, retries, usage limits and your choice are recorded.','Which repeated task would benefit from a clearer brief?','The same inexpensive model with two context versions is enough; do not invent missing cost data.','A1,A2,A3'],
    ['12','capstone-and-professional-practice','defensible-qa-verdict','Show what you built','Prepare your individual project presentation and evidence index for Jared.','The tagged release, agreement, history, QA evidence and handoff are ready for human review.','Tell the story of one useful journey and the decisions behind it.','Trace one issue through branch, PR, feedback, fix and release. Identify any unverified claims.','H3,G2,G3,B2,B3']
  ];
  const sessions = rows.map(([id,lesson,lab,title,task,done,hint1,hint2,criteria]) => ({id,title,task,done,hints:[hint1,hint2],criteria:criteria?criteria.split(','):[],lesson:`lessons/${id}-${lesson}.html`,lab:`labs/${id}-${lab}.html`}));
  const criteria = ['P1','P2','P3','V1','V2','V3','Q1','Q2','Q3','H1','H2','H3','G1','G2','G3','A1','A2','A3','B1','B2','B3'];
  const stages = {not_started:'Not started',underway:'Underway',waiting:'Waiting for feedback',done:'Done (self-tracked)'};
  const feedbackStates = {open:'Open',in_progress:'Working on it',resolved:'Resolved (self-tracked)'};
  const key = 'labalicious.learning-path.v1';
  const blank = () => ({version:1,project:{name:'',repo:''},progress:Object.fromEntries(sessions.map(s=>[s.id,{lessonDone:false,stage:'not_started'}])),evidence:[],feedback:[]});
  function validURL(value) {
    if(value==='')return true;
    try { const u=new URL(value);return u.protocol==='https:' && !u.username && !u.password; } catch { return false; }
  }
  function validate(value) {
    const fail = () => {throw new Error('Unsupported or invalid backup. Your current data has not been replaced.');};
    const obj=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
    const str=(x,n=2000)=>typeof x==='string'&&x.length<=n;
    const keys=(o,names)=>obj(o)&&Object.keys(o).length===names.length&&names.every(k=>Object.hasOwn(o,k));
    if(!keys(value,['version','project','progress','evidence','feedback'])||value.version!==1)fail();
    if(!keys(value.project,['name','repo'])||!str(value.project.name,120)||!str(value.project.repo,1000)||!validURL(value.project.repo))fail();
    if(!keys(value.progress,sessions.map(s=>s.id)))fail();
    for(const s of sessions){const p=value.progress[s.id];if(!keys(p,['lessonDone','stage'])||typeof p.lessonDone!=='boolean'||typeof p.stage!=='string'||!Object.hasOwn(stages,p.stage))fail();}
    for(const [kind,names] of [['evidence',['id','title','url','note','session','criteria']],['feedback',['id','title','why','needed','session','criterion','status']]]){
      if(!Array.isArray(value[kind])||value[kind].length>150)fail();
      const ids=new Set();
      for(const item of value[kind]){
        if(!keys(item,names)||!str(item.id,100)||!item.id||ids.has(item.id)||!str(item.title,160)||!item.title.trim()||!sessions.some(s=>s.id===item.session))fail();
        ids.add(item.id);
        if(kind==='evidence'){
          if(!str(item.url,1000)||!validURL(item.url)||!str(item.note)||(!item.url&&!item.note.trim())||!Array.isArray(item.criteria)||item.criteria.length>21||new Set(item.criteria).size!==item.criteria.length||!item.criteria.every(c=>criteria.includes(c)))fail();
        }else if(!str(item.why)||!str(item.needed)||!item.why.trim()||!item.needed.trim()||!['',...criteria].includes(item.criterion)||typeof item.status!=='string'||!Object.hasOwn(feedbackStates,item.status))fail();
      }
    }
    if(new TextEncoder().encode(JSON.stringify(value,null,2)).length>1024*1024)fail();
    return JSON.parse(JSON.stringify(value));
  }
  function parse(raw){if(typeof raw!=='string'||raw.length>1024*1024||new TextEncoder().encode(raw).length>1024*1024)throw new Error('Backup must be smaller than 1 MB.');return validate(JSON.parse(raw));}
  function next(state){
    const feedback=state.feedback.find(f=>f.status==='in_progress')||state.feedback.find(f=>f.status==='open');
    if(feedback)return {kind:'feedback',session:feedback.session,title:feedback.title,task:feedback.why,done:feedback.needed};
    const s=sessions.find(s=>!state.progress[s.id].lessonDone||state.progress[s.id].stage!=='done');
    if(!s)return {kind:'review',session:'12',title:'Bring your evidence to review',task:'Your self-tracked activities are complete. Recheck your evidence index and arrange your presentation or follow-up.',done:'Only Jared can decide course completion and certification. This dashboard awards neither.'};
    const p=state.progress[s.id];
    if(!p.lessonDone)return {kind:'lesson',session:s.id,title:`Session ${s.id}: ${s.title}`,task:'Work through the lesson and hands-on lab, then record your progress below.',done:s.done};
    return {kind:p.stage==='waiting'?'waiting':'project',session:s.id,title:s.title,task:p.stage==='waiting'?'Prepare one specific feedback question with your PR or evidence link. You can explore other lessons while you wait.':s.task,done:s.done};
  }
  function brief(id){const s=sessions.find(s=>s.id===id);return `Help me investigate this course task: ${s.task}\nUse only the assigned lesson/lab and the specific files I explicitly provide. ${id==='00'?'For the setup explanation, use only fixtures/setup-example.mjs. ':''}Do not use instructor answer keys or expected evaluation labels.\nFirst ask what I observed and suggest one small investigation. Do not implement a fix until I authorize it.\nCheck: ${s.done}\nUse synthetic data. Do not access secrets, send messages, publish, deploy, install packages or spend money. Distinguish observed results from assumptions. Stop and ask when requirements are unclear.`;}
  function today(state){
    const action=next(state), session=sessions.find(s=>s.id===action.session);
    const primary=action.kind==='lesson'?{label:action.session==='00'?'Start your setup lab':'Continue Session '+action.session,href:session.lab}:
      action.kind==='feedback'?{label:'Work through this feedback',href:'#feedback-title'}:
      ['waiting','review'].includes(action.kind)?{label:'Prepare a review request',href:'review-packet.html'}:
      {label:'Work on this milestone',href:'#milestone-'+action.session};
    return {...action,primary,projectTitle:session.title,projectTask:session.task,projectStage:stages[state.progress[session.id].stage]};
  }
  globalThis.LearningPath={sessions,criteria,stages,feedbackStates,key,blank,validate,parse,next,today,brief,validURL};
})();
