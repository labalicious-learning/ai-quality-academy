import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {contacts, contactDetail, canSend, allocation, ingest} from './domain.mjs';

export function createServer() {
  // Separate in-memory event lists for the two candidates; no external calls.
  const events = {buggy:[], fixed:[]};
  return http.createServer(async (req,res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const mode = url.searchParams.get('mode') === 'fixed' ? 'fixed' : 'buggy';
    const tenant = url.searchParams.get('tenant') === 'Beacon' ? 'Beacon' : 'Atlas';
    const role = url.searchParams.get('role') || 'staff';
    const json = (status,body) => {res.writeHead(status, {'Content-Type':'application/json','Cache-Control':'no-store'}); res.end(JSON.stringify(body));};
    // Training identity is a selector, not authentication. Loopback only.
    try {
      if (url.pathname === '/') {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        return res.end(await readFile(new URL('./index.html',import.meta.url)));
      }
      if (url.pathname === '/api/health') return json(200,{mode, build:mode+'-candidate-1'});
      if (url.pathname === '/api/contacts') return json(200,contacts.filter(c=>c.tenant===tenant));
      if (url.pathname.startsWith('/api/contacts/')) {
        const c = contactDetail(url.pathname.split('/').pop(),tenant,mode);
        if (req.method === 'PATCH') return json(c && role==='owner' ? 200:403,{allowed:!!c && role==='owner', persisted:false});
        return json(c?200:404,c || {error:'not found'});
      }
      if (url.pathname === '/api/send') return json(canSend(role,mode)?200:403,{allowed:canSend(role,mode), sent:false, destination:'local simulation'});
      if (url.pathname === '/api/allocation') {const a=allocation(mode); return json(a.status,a.body);}
      if (url.pathname === '/api/events' && req.method === 'GET') return json(200,events[mode]);
      if (url.pathname === '/api/events' && req.method === 'POST') {
        let raw='';
        for await (const chunk of req) {raw+=chunk; if(raw.length>10000) return json(413,{error:'too large'});}
        const e=JSON.parse(raw);
        if(!e.messageId || typeof e.consent!=='boolean' || typeof e.confidence!=='number') return json(400,{error:'messageId, consent:boolean, confidence:number required'});
        const result=ingest(events[mode],e,mode); return json(result.status,result.body);
      }
      return json(404,{error:'not found'});
    } catch {return json(400,{error:'invalid training request'});}
  });
}
if(process.argv[1]===fileURLToPath(import.meta.url)) {
  createServer().listen(Number(process.env.ACADEMY_PORT || 4178),'127.0.0.1',()=>console.log('Academy lab: http://127.0.0.1:4178'));
}
