import test from 'node:test';
import assert from 'node:assert/strict';
import { scienceComparisons } from '../src/science-comparisons.js';
import { measures } from '../src/data.js';
import { readFileSync } from 'node:fs';
test('100 SI comparisons have complete translations, exact decimal-prefix scaling and reversible ratios',()=>{
 const messages=JSON.parse(readFileSync(new URL('../src/messages.json',import.meta.url)));
 let count=0;
 for(const [key,c] of Object.entries(scienceComparisons)){
  assert.equal(c.items.length,5);assert.equal(new Set(c.items.map(a=>a[0])).size,5);
  for(const field of ['label','dimension','note']) for(const l of ['en','ko','ja','es'])assert.ok(messages[c[field]][l]);
  for(let i=0;i<5;i++)for(let j=i+1;j<5;j++){
   count++;const a=c.items[i][2],b=c.items[j][2],m=measures(a,b,key),reverse=measures(b,a,key);
   assert.ok(m.ratio>0);assert.ok(Math.abs(m.ratio*reverse.ratio-1)<1e-12);
   assert.ok(Math.abs(m.aScale/m.bScale/m.ratio-1)<1e-12);
  }
 }
 assert.equal(count,100);
 const c=scienceComparisons.capacitance.items;
 assert.equal(c[4][2]/c[0][2],1e12); // One farad is one trillion picofarads.
 assert.equal(scienceComparisons.force.items[3][2],1000);
});
