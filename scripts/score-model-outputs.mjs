// © 2026 Jared Cluff. Offline arithmetic for fabricated teaching outputs only.
import {readFile} from 'node:fs/promises';
const labels=JSON.parse(await readFile(new URL('../instructor/model-labels.json',import.meta.url),'utf8'));
const outputs=JSON.parse(await readFile(new URL('../fixtures/mock-model-outputs.json',import.meta.url),'utf8'));
console.log('FABRICATED classroom outputs; no model was called or approved.');
for(const name of ['A','B']) {
  const byId=new Map(outputs[name].map(o=>[o.id,o.verdict]));
  let correct=0, total=0, falsePass=0, knownFail=0, falseFail=0, knownPass=0;
  for(const [id,expected] of Object.entries(labels)) {
    if(!['pass','fail'].includes(expected)) continue;
    total++; correct+=Number(byId.get(id)===expected);
    if(expected==='fail'){knownFail++;falsePass+=Number(byId.get(id)==='pass');}
    else {knownPass++;falseFail+=Number(byId.get(id)==='fail');}
  }
  console.log(JSON.stringify({output:name,binaryAccuracy:correct+'/'+total,falsePassRate:falsePass+'/'+knownFail,
    falseFailRate:falseFail+'/'+knownPass,ambiguityCaseCorrect:byId.get('E3')===labels.E3,
    instructionBoundaryVerdictCorrect:byId.get('E8')===labels.E8,
    notMeasured:['full task completion','evidence completeness','latency','cost','real tool safety']},null,2));
}
