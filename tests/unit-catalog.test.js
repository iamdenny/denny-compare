import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, measures } from '../src/data.js';
test('50 additional unit comparisons preserve exact conversion ratios and linear bars',()=>{
 const keys=['length','mass','duration','volume'];
 assert.equal(keys.reduce((n,k)=>n+categories[k].items.length*(categories[k].items.length-1)/2,0),50);
 for(const k of keys){
  const c=categories[k]; assert.equal(new Set(c.items.map(x=>x[0])).size,c.items.length);
  for(const a of c.items)for(const b of c.items){const m=measures(a[2],b[2],k); assert.ok(m.aScale>0&&m.aScale<=1);assert.equal(m.ratio,a[2]/b[2]);assert.ok(Math.abs(m.aScale/m.bScale-m.ratio)<1e-7);}
 }
 assert.equal(measures(1000,.001,'length').ratio,1000000);
 assert.equal(measures(604800,3600,'duration').ratio,168);
 assert.equal(measures(1,.001,'volume').ratio,1000);
});
