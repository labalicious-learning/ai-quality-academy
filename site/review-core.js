// © 2026 Jared Cluff. Public-note assembly, not grading or automatic submission.
(() => {
  const labels={P1:'Required behavior',P2:'State and recovery',P3:'Safe trust boundaries',V1:'Consistent design',V2:'Responsive and accessible',V3:'Understandable states',Q1:'Risk-based coverage',Q2:'Defect detection and repair',Q3:'Dependable verification',H1:'Development progression',H2:'Feedback changed the work',H3:'Explained decisions',G1:'GitHub workflow',G2:'Explain your workflow',G3:'Repository hygiene',A1:'Bounded AI work',A2:'Challenge AI output',A3:'Compare affordable workflows',B1:'Business evidence',B2:'Reproducible handoff',B3:'Honest release decision'};
  const fields=['session','repo','courseSha','projectSha','agreement','objective','requirements','expected','observed','verification','environment','limits','questions'];
  const required=['agreement','objective','requirements','expected','observed','verification','environment','limits','questions'];
  const escape=value=>String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/([\\`*_{}\[\]()#!|])/g,'\\$1');
  const quote=value=>escape(value).split(/\r?\n/).map(line=>'> '+line).join('\n');
  function issues(input,selected){
    const errors=[];
    if(!input||typeof input!=='object')return ['Review fields are missing.'];
    if(!/^(0[1-9]|1[0-2])$/.test(input.session||''))errors.push('Choose a project milestone, Session 01–12.');
    if(typeof input.repo!=='string'||!input.repo||input.repo.length>2000||!globalThis.LearningPath.validURL(input.repo))errors.push('Supply a safe HTTPS repository URL without embedded credentials.');
    for(const name of ['courseSha','projectSha'])if(!/^[a-f0-9]{40}$/i.test(input[name]||''))errors.push(name+': use the exact full 40-character commit, not a branch or short hash.');
    for(const name of required)if(typeof input[name]!=='string'||input[name].trim().length<15||input[name].length>3000)errors.push(name+': provide 15–3000 characters of concrete context; say explicitly when work was not run.');
    if(!Array.isArray(selected)||selected.length===0||selected.length>50)errors.push('Select 1–50 evidence references for this milestone.');
    else for(const entry of selected){
      if(!entry||typeof entry.id!=='string'||!entry.id||entry.id.length>100||typeof entry.title!=='string'||!entry.title.trim()||entry.title.length>160||entry.session!==input.session||typeof entry.url!=='string'||entry.url.length>2000||!globalThis.LearningPath.validURL(entry.url)||typeof entry.note!=='string'||entry.note.length>2000||typeof entry.includeNote!=='boolean'||!Array.isArray(entry.criteria)||entry.criteria.length>21||!entry.criteria.every(c=>Object.hasOwn(labels,c)))errors.push('Selected evidence is invalid or belongs to another milestone.');
      else if(!entry.url&&(!entry.includeNote||!entry.note.trim()))errors.push('A reference without a URL needs an explicitly included artifact-location note.');
    }
    if(Array.isArray(selected)&&new Set(selected.map(e=>e?.id)).size!==selected.length)errors.push('The same evidence reference was selected more than once.');
    return errors;
  }
  function assemble(input,selected){
    const errors=issues(input,selected);if(errors.length)throw new Error(errors.join('\n'));
    const sections=[['Goal and review request',input.objective],['Approved agreement / requirement source',input.agreement],['Requirements and case IDs',input.requirements],['Expected result',input.expected],['Observed result',input.observed],['Verification actually performed',input.verification],['Environment and reset procedure',input.environment],['Limits and unverified claims',input.limits],['Questions and next action',input.questions]];
    const out=[`# Session ${input.session} — Project review note`,'','This is learner-supplied, unverified project evidence. It is not a grade, certificate, approval, or a complete lab-submissions packet.','','## Frozen context','',`Repository: <${input.repo.replace(/[<>\s()]/g,c=>encodeURIComponent(c))}>`,`Course commit: ${input.courseSha}`,`Project commit: ${input.projectSha}`,''];
    for(const [title,body] of sections)out.push('## '+title,'',quote(body),'');
    out.push('## Explicitly selected evidence','');
    for(const [index,e] of selected.entries()){
      out.push(`### Reference ${index+1}`,'',quote(e.title),`Criteria: ${e.criteria.join(', ')||'Not mapped'}`);
      if(e.url)out.push(`Link: <${e.url.replace(/[<>\s()]/g,c=>encodeURIComponent(c))}>`);
      if(e.includeNote)out.push('',quote(e.note));
      out.push('');
    }
    out.push('## Sharing boundary','','Only explicitly selected references and public-facing fields are included. Private planner feedback, drafts, progress counts and credential decisions are excluded. No linked content or commit has been fetched or verified.');
    return out.join('\n');
  }
  function privacyFlags(text){
    // Heuristics block obvious mistakes; never claim an exhaustive privacy inspection.
    const hits=[];
    if(/(?:api[_-]?key|password|secret)\s*[=:]\s*\S{12,}|Authorization\s*:\s*\S+\s+\S+|\b(?:ghp_|github_pat_|sk-)[A-Za-z0-9_-]{16,}/i.test(text))hits.push('Possible credential or authentication material.');
    if(new RegExp('/'+'Users/[^\\s/]+|[A-Z]:\\\\Users\\\\[^\\s\\\\]+','i').test(text))hits.push('Personal absolute path; use a repository-relative artifact location.');
    const emails=text.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi)||[];
    if(emails.some(e=>!/@example\.(com|org|net)$/i.test(e)))hits.push('Possible personal email; use fictional data or remove it.');
    if(/https:\/\/[^\s<>]*[?&](?:token|key|secret|signature|sig|password)=/i.test(text))hits.push('Possible signed or credential-bearing URL.');
    return hits;
  }
  globalThis.ProjectReview={labels,fields,issues,assemble,privacyFlags};
})();
