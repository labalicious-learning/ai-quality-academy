// © 2026 Jared Cluff. Public preparation/date metadata only; never a roster.
import {sessionGuides} from './session-guides.mjs';
export function courseContext(config){
  const sessions=config.publicSchedule??[];
  if(!Array.isArray(sessions)||sessions.length>13)throw Error('publicSchedule must contain at most 13 confirmed course dates.');
  const ids=new Set();
  const schedule=sessions.map(row=>{
    if(!row||Object.keys(row).sort().join(',')!=='end,session,start'||typeof row.session!=='string'||!/^([0][0-9]|1[0-2])$/.test(row.session)||ids.has(row.session))throw Error('Use only session, start and end in the public schedule.');
    ids.add(row.session);
    for(const value of [row.start,row.end]){
      if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d:[0-5]\d(Z|[+-]([01]\d|2[0-3]):[0-5]\d)$/.test(value)||!Number.isFinite(Date.parse(value)))throw Error('Course dates need ISO timestamps with explicit UTC offsets.');
      const date=value.slice(0,10), parts=date.split('-').map(Number);
      if(new Date(Date.UTC(parts[0],parts[1]-1,parts[2])).toISOString().slice(0,10)!==date)throw Error('Invalid calendar date.');
    }
    if(Date.parse(row.end)-Date.parse(row.start)!==7200000)throw Error('Course sessions must be two hours.');
    return {session:row.session,start:new Date(row.start).toISOString(),end:new Date(row.end).toISOString()};
  }).sort((a,b)=>a.start.localeCompare(b.start));
  if(schedule.some((s,i)=>i>0&&(s.start<schedule[i-1].end||s.session<=schedule[i-1].session)))throw Error('Course dates must be ordered without overlaps.');
  const labels={'PLATFORM_GUIDE.md':'Mac, Linux & Windows guide','LAB_SETUP.md':'Local lab setup','AGENTS.md':'Repository instructions (AGENTS.md)'};
  const label=file=>labels[file]||file.split('/').at(-1).replace(/\.[^.]+$/,'').replaceAll(/[-_]/g,' ').replace(/^./,s=>s.toUpperCase());
  return {preparation:sessionGuides.map(s=>({session:s.id,goal:s.goal,files:s.prep.map(file=>({label:label(file),href:file.replace(/\.md$/,'.html')}))})),schedule};
}
