// © 2026 Jared Cluff. Incomplete form text is private, not shared evidence.
(() => {
  function attach({forms,key,status,onRecover=()=>{},onDiscard=()=>{}}){
    const ids=Object.keys(forms), statusNode=document.getElementById(status);
    let records={},raw=null,blocked=false,unsaved=false;
    const message=text=>{statusNode.textContent=text;};
    const shape=value=>{
      if(!value||value.version!==1||!value.forms||typeof value.forms!=='object'||Array.isArray(value.forms)||Object.keys(value).sort().join(',')!=='forms,version')throw Error('format');
      if(new TextEncoder().encode(JSON.stringify(value)).length>100000)throw Error('size');
      for(const [id,record] of Object.entries(value.forms)){
        if(!ids.includes(id)||!record||Object.keys(record).sort().join(',')!=='base,editId,fields'||typeof record.editId!=='string'||record.editId.length>100||typeof record.base!=='string'||record.base.length>15000||!record.fields||typeof record.fields!=='object'||Array.isArray(record.fields))throw Error('fields');
        const form=document.getElementById(id);
        for(const [name,value] of Object.entries(record.fields)){
          if(!forms[id].includes(name))throw Error('field');
          const controls=[...form.elements].filter(e=>e.name===name);
          if(controls[0]?.type==='checkbox'){
            if(!Array.isArray(value)||value.length>30||!value.every(v=>typeof v==='string'&&controls.some(e=>e.value===v)))throw Error('options');
          }else if(typeof value!=='string'||value.length>(controls[0]?.maxLength>=0?controls[0].maxLength:3000))throw Error('value');
        }
      }
      return value.forms;
    };
    try{raw=localStorage.getItem(key);if(raw!==null)records=shape(JSON.parse(raw));}
    catch{blocked=true;message('Draft storage is unavailable or damaged. Existing data is not overwritten; keep a private copy of your text before leaving.');}
    function save(){
      unsaved=true;
      if(blocked){message('Draft autosave is paused. Keep a private copy of your form text; do not rely on reload recovery.');return;}
      try{
        if(localStorage.getItem(key)!==raw){blocked=true;message('Another tab changed these drafts. Autosave is paused; copy this tab’s text before reloading.');return;}
        const next=JSON.stringify({version:1,forms:records});shape(JSON.parse(next));
        if(Object.keys(records).length)localStorage.setItem(key,next);else localStorage.removeItem(key);
        raw=Object.keys(records).length?next:null;unsaved=false;
        message(Object.keys(records).length?'Private form draft saved on this browser. Use the form’s Save/Add action to finish the entry.':'No unfinished form drafts.');
      }catch{message('Could not autosave drafts. Keep a private copy of your text before leaving.');}
    }
    function capture(id){
      const form=document.getElementById(id), fields={};
      for(const name of forms[id]){const controls=[...form.elements].filter(e=>e.name===name);fields[name]=controls[0]?.type==='checkbox'?controls.filter(e=>e.checked).map(e=>e.value):controls[0]?.value||'';}
      records[id]={fields,editId:form.dataset.editId||'',base:form.dataset.editBase||''};save();
    }
    function clear(id){delete records[id];save();}
    for(const id of ids){
      const form=document.getElementById(id),record=records[id];
      if(record){
        form.dataset.editId=record.editId;form.dataset.editBase=record.base;
        onRecover(id,record);
        for(const [name,value] of Object.entries(record.fields))for(const control of [...form.elements].filter(e=>e.name===name)){
          if(control.type==='checkbox')control.checked=value.includes(control.value);else control.value=value;
        }
        message('Recovered unfinished private form drafts. Review them before saving or sharing.');
      }
      form.addEventListener('input',()=>capture(id));form.addEventListener('change',()=>capture(id));
    }
    addEventListener('storage',event=>{if((event.key===key||event.key===null)&&event.newValue!==raw){blocked=true;message('Another tab changed these drafts. Autosave paused; copy your text before reloading.');}});
    addEventListener('beforeunload',event=>{if(unsaved){event.preventDefault();event.returnValue='';}});
    return {capture,clear,has:id=>Object.hasOwn(records,id),hasAny:()=>Object.keys(records).length>0,
      discardAll(){
        try{if(localStorage.getItem(key)!==raw)throw Error('conflict');localStorage.removeItem(key);}catch{message('Could not discard saved drafts. Nothing was overwritten.');return false;}
        records={};raw=null;blocked=false;unsaved=false;
        for(const id of ids){const form=document.getElementById(id);form.reset();delete form.dataset.editId;delete form.dataset.editBase;onDiscard(id);}
        message('Private drafts discarded. Saved planner entries are unchanged.');return true;
      }};
  }
  globalThis.LocalFormDrafts={attach};
})();
