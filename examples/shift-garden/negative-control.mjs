// © 2026 Jared Cluff. DELIBERATELY WRONG teaching snapshot; never used by the app.
import {validate,aliases} from './core.mjs';
export function assign(shifts,id,alias){
  const copy=validate(shifts),shift=copy.find(s=>s.id===id);
  if(!shift)throw Error('Shift not found.');
  if(!aliases.includes(alias))throw Error('Choose a fictional volunteer alias.');
  if(shift.volunteers.includes(alias))throw Error('That volunteer is already assigned.');
  // Defect: equality at capacity is allowed. Output is also not validated.
  if(shift.volunteers.length>shift.capacity)throw Error('This shift is full.');
  shift.volunteers.push(alias);return copy;
}
