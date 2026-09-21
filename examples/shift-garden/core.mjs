// © 2026 Jared Cluff. Fictional teaching application, not a real scheduling service.
export const aliases=['V01','V02','V03','V04','V05','V06'];
export function validate(shifts){
  if(!Array.isArray(shifts)||shifts.length>30)throw Error('Use at most 30 shifts.');
  const ids=new Set();
  for(const s of shifts){
    if(!s||Object.keys(s).sort().join(',')!=='capacity,id,name,volunteers'||typeof s.id!=='string'||!s.id||s.id.length>100||ids.has(s.id)||typeof s.name!=='string'||!s.name.trim()||s.name.length>60||!Number.isInteger(s.capacity)||s.capacity<1||s.capacity>20||!Array.isArray(s.volunteers)||s.volunteers.length>s.capacity||new Set(s.volunteers).size!==s.volunteers.length||!s.volunteers.every(v=>aliases.includes(v)))throw Error('Invalid shift data. Keep unique IDs, capacities 1–20 and fictional volunteer aliases.');
    ids.add(s.id);
  }
  return structuredClone(shifts);
}
export function create(shifts,{id,name,capacity}){return validate([...validate(shifts),{id,name:name.trim(),capacity,volunteers:[]}]);}
export function assign(shifts,id,alias){
  const copy=validate(shifts),shift=copy.find(s=>s.id===id);
  if(!shift)throw Error('Shift not found.');
  if(!aliases.includes(alias))throw Error('Choose a fictional volunteer alias.');
  if(shift.volunteers.includes(alias))throw Error('That volunteer is already assigned.');
  if(shift.volunteers.length>=shift.capacity)throw Error('This shift is full.');
  shift.volunteers.push(alias);return validate(copy);
}
export function unassign(shifts,id,alias){
  const copy=validate(shifts),shift=copy.find(s=>s.id===id);if(!shift)throw Error('Shift not found.');
  shift.volunteers=shift.volunteers.filter(v=>v!==alias);return validate(copy);
}
export function coverage(shifts){return validate(shifts).reduce((n,s)=>({filled:n.filled+s.volunteers.length,total:n.total+s.capacity}),{filled:0,total:0});}
export const demo=()=>[{id:'welcome',name:'Welcome desk',capacity:2,volunteers:['V01']},{id:'seedlings',name:'Seedling table',capacity:3,volunteers:[]}];
