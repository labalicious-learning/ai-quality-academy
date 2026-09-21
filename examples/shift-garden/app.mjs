// © 2026 Jared Cluff. Only trusted bundled code is executed; user strings use textContent.
import {aliases,validate,create,assign,unassign,coverage,demo} from './core.mjs';
const $=id=>document.getElementById(id),key='labalicious.shift-garden.v1';
let state=demo(),raw=null,blocked=false,storage=true,unsaved=false;
const say=text=>{$('status').textContent=text;};
try{raw=localStorage.getItem(key);if(raw!==null)state=validate(JSON.parse(raw));say('Fictional demo ready. Changes save in this browser.');}
catch{if(raw!==null){blocked=true;state=[];say('Saved data is invalid. It was not overwritten. Inspect browser storage before choosing Reset fictional demo.');}else{storage=false;say('Storage unavailable. Changes last only in this tab.');}}
function change(next){
  if(blocked){say('Saving paused. Reload to inspect another tab’s saved changes, or explicitly reset the demo.');return;}
  try{
    if(storage&&localStorage.getItem(key)!==raw){blocked=true;say('Another tab changed the demo. Reload before continuing.');return;}
    if(storage){const serialized=JSON.stringify(next);localStorage.setItem(key,serialized);raw=serialized;unsaved=false;say('Saved in this browser.');}
    else{unsaved=true;say('Changed in this tab only; storage is unavailable.');}
  }catch{unsaved=true;say('Could not save. Changes are in this tab only; record them before leaving.');}
  state=next;render();
}
function button(text,run){const e=document.createElement('button');e.type='button';e.textContent=text;e.addEventListener('click',run);return e;}
function render(){
  const count=coverage(state);$('coverage').textContent=`${count.filled} / ${count.total}`;$('open-count').textContent=state.filter(s=>s.volunteers.length<s.capacity).length;
  $('shifts').replaceChildren();
  for(const s of state.filter(s=>!$('open-only').checked||s.volunteers.length<s.capacity)){
    const card=document.createElement('article');card.className='shift';card.dataset.shiftId=s.id;
    const title=document.createElement('h3'),summary=document.createElement('p');title.textContent=s.name;summary.textContent=`${s.volunteers.length} of ${s.capacity} places filled${s.volunteers.length===s.capacity?' · Full':''}`;card.append(title,summary);
    const people=document.createElement('div');people.className='volunteers';
    for(const alias of s.volunteers)people.append(button(`Remove ${alias}`,()=>{change(unassign(state,s.id,alias));$('shifts').querySelector(`[data-shift-id="${CSS.escape(s.id)}"] select`)?.focus();}));card.append(people);
    const form=document.createElement('form');form.className='assignment';const label=document.createElement('label'),picker=document.createElement('select');label.textContent='Volunteer alias';for(const alias of aliases)picker.add(new Option(alias,alias));label.append(picker);const submit=document.createElement('button');submit.textContent='Assign';form.append(label,submit);
    form.addEventListener('submit',event=>{event.preventDefault();try{change(assign(state,s.id,picker.value));const next=$('shifts').querySelector(`[data-shift-id="${CSS.escape(s.id)}"] select`);if(next){next.value=picker.value;next.focus();}else $('open-only').focus();}catch(error){say(error.message);}});card.append(form);$('shifts').append(card);
  }
  if(!$('shifts').children.length)$('shifts').textContent=state.length?'All shifts are full. Turn off the filter to see them.':'No shifts yet. Create the first one.';
}
$('create-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target);try{change(create(state,{id:crypto.randomUUID(),name:String(data.get('name')),capacity:Number(data.get('capacity'))}));if(!blocked)event.target.reset();}catch(error){say(error.message);}});
$('open-only').addEventListener('change',render);
$('reset').addEventListener('click',()=>{
  if(!confirm('Replace this browser’s fictional schedule with the starter demo? This cannot be undone.'))return;
  try{if(storage){if(localStorage.getItem(key)!==raw){say('Another tab changed the saved demo. Reload before resetting.');return;}localStorage.removeItem(key);raw=null;}}catch{say('Could not remove saved data. Nothing was reset.');return;}
  blocked=false;unsaved=false;state=demo();render();say(storage?'Demo reset. Other browser data was not changed.':'This tab’s demo reset. Inaccessible browser data could not be removed.');
});
addEventListener('beforeunload',event=>{if(unsaved){event.preventDefault();event.returnValue='';}});
render();
