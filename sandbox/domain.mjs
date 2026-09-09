// Intentionally faulty teaching functions. See instructor/ANSWER_KEY.md.
export const contacts = [
  {id:'A-101', tenant:'Atlas', name:'Alex Example', interest:'event', consent:true},
  {id:'B-201', tenant:'Beacon', name:'Blair Example', interest:'parts', consent:false}
];
export function contactDetail(id, tenant, mode) {
  const contact = contacts.find(c => c.id === id);
  if (!contact || (mode === 'fixed' && contact.tenant !== tenant)) return null;
  return contact;
}
export function canSend(role, mode) {
  return mode === 'fixed' ? ['owner','concierge'].includes(role) : role === 'owner';
}
export function allocation(mode) {
  return mode === 'fixed' ? {status:200, body:{id:'AL-01', status:'reserved'}} :
    {status:500, body:{error:'fixture: allocation table unavailable'}};
}
export function ingest(events, event, mode) {
  if (event.oauth === 'expired') return {status:401, body:{state:'reauthorize'}};
  if (event.attachment === 'malformed') return {status:422, body:{state:'review', reason:'attachment'}};
  const duplicate = events.find(e => e.messageId === event.messageId);
  if (mode === 'fixed' && duplicate) return {status:200, body:duplicate};
  const review = event.confidence < 0.8;
  const saved = {...event, state: review ? 'review' : 'classified',
    queued: !review && (mode === 'buggy' || event.consent === true)};
  events.push(saved);
  return {status:201, body:saved};
}
