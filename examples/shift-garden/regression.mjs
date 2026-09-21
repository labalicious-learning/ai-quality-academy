// © 2026 Jared Cluff. Same boundary assertion against either teaching snapshot.
import assert from 'node:assert/strict';
const target=process.argv.includes('--negative')?'./negative-control.mjs':'./core.mjs';
const {assign}=await import(target);
const full=[{id:'desk',name:'Welcome desk',capacity:2,volunteers:['V01','V02']}];
assert.throws(()=>assign(full,'desk','V03'),/full/,'SG-03: third distinct volunteer must be rejected at capacity two');
assert.equal(full[0].volunteers.length,2,'Input must remain unchanged');
console.log('PASS SG-03: reject a third distinct volunteer at capacity two; input unchanged.');
