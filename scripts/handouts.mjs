// © 2026 Jared Cluff. Build-time enhancement: navigation works without JavaScript.
export const escapeHTML=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function renderHandout(md,source){
  const tokens=md.parse(source,{}),headings=[],used=new Set(['main-content','session-guide','session-recall','session-support','session-finish','session-finish-title','handout-contents']);
  for(let i=0;i<tokens.length;i++)if(tokens[i].type==='heading_open'){
    const label=(tokens[i+1].children||[]).filter(t=>['text','code_inline','image'].includes(t.type)).map(t=>t.content).join('');
    const base=label.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s/g,'-')||'section';
    let id=base,n=1;while(used.has(id))id=base+'-'+n++;used.add(id);
    tokens[i].attrSet('id',id);tokens[i].attrSet('tabindex','-1');headings.push({id,label,level:Number(tokens[i].tag.slice(1))});
  }
  return {html:md.renderer.render(tokens,md.options,{}),headings};
}
const link=(label,href)=>`<a href="${escapeHTML(href)}">${escapeHTML(label)}</a>`;
export function decorateLab(rendered,guide,{labs,lessons}){
  const index=Number(guide.id),find=label=>{
    const h=rendered.headings.find(h=>h.label===label);if(!h)throw Error(`Session ${guide.id}: missing section ${label}`);return '#'+h.id;
  };
  const lesson=lessons[index].replace('.md','.html'),slide=lessons[index].replace('.md','.html');
  const prep=guide.prep.map(file=>link(file,'../'+file.replace(/\.md$/,'.html'))).join(' · ');
  const time=index===0?'120-minute setup':index===12?'8-minute demo + 4-minute discussion':'35-minute practice lab';
  const opening=`<section class="session-guide" id="session-guide" aria-label="Session orientation"><p class="session-kicker">SESSION ${guide.id} / ${time} / within a 2-hour session</p><p class="session-purpose">${escapeHTML(guide.goal)}</p><div class="session-overview"><div><strong>Evidence target</strong><p>${escapeHTML(guide.target)}</p></div><div><strong>Open alongside this lab</strong><p>${prep}</p></div></div><div class="session-actions">${link('Start the activity ↓',find(guide.start))}${link('Review the deliverables',find(guide.deliver))}${link('Lesson plan','../lessons/'+lesson)}${link('Slides','../slides/'+slide)}</div><details id="session-recall"><summary>Before you start · recall, then check</summary><p>${escapeHTML(guide.recall)}</p><p class="session-small">Use about two minutes of the existing arrival/discussion time. Try in your own words, then check the source with a partner or coach. This is ungraded practice, not a new submission.</p></details><details id="session-support"><summary>Need a hand? A supported route</summary><p>${escapeHTML(guide.support)}</p><p>${link('Mac / Linux / Windows help','../PLATFORM_GUIDE.html')} · ${link('How to ask for useful help','../LEARNER_SUPPORT.html')}</p></details></section>`;
  const toc=`<aside class="handout-sidebar"><nav aria-labelledby="handout-contents"><details open><summary id="handout-contents">On this page</summary><ol>${rendered.headings.filter(h=>h.level===2).map(h=>`<li>${link(h.label,'#'+h.id)}</li>`).join('')}</ol></details></nav><p>${link('My learning path','../my-path.html')}</p></aside>`;
  const mobileContents=`<details class="handout-mobile-nav"><summary>On this page</summary><nav aria-label="Handout sections"><ol>${rendered.headings.filter(h=>h.level===2).map(h=>`<li>${link(h.label,'#'+h.id)}</li>`).join('')}</ol></nav></details>`;
  let article=rendered.html.replace('</h1>','</h1>'+mobileContents+opening);
  const destination=index===0?'Keep your readiness card private.':index===12?'Your own product repository is the source of truth. Share its reviewed version through the instructor-approved channel.':'Practice evidence uses the lab submission workflow. Product Studio work belongs in your own product repository. These are different destinations.';
  const next=index<12?link('Next: Session '+String(index+1).padStart(2,'0'),'./'+labs[index+1].replace('.md','.html')):link('Plan any follow-up','../CREDENTIALS.html');
  const previous=index>0?link('← Session '+String(index-1).padStart(2,'0'),'./'+labs[index-1].replace('.md','.html')):link('← Course home','../index.html');
  article+=`<section class="session-finish" id="session-finish" aria-labelledby="session-finish-title"><h2 id="session-finish-title">Leave with a next step</h2><p>Use the existing closing/debrief time: explain one claim you verified, one limit and your next action. Reuse the lab’s artifacts; this adds no separate worksheet or graded test.</p><p>${escapeHTML(destination)}</p><p>${index===0?link('Your product idea bank','../PROJECT_IDEAS.html'):link('Product Studio roadmap','../COURSE_PROJECT.html')} · ${link('Sharing and review guide','../SUBMISSIONS.html')}</p><nav class="session-actions" aria-label="Session sequence">${previous}${next}</nav><p class="session-small">Opening the next session does not mark this one complete. Progress tracking is optional and does not award a credential.</p></section>`;
  return `<div class="handout-layout"><article class="handout-body">${article}</article>${toc}</div>`;
}
