import test from 'node:test';
import assert from 'node:assert/strict';
import {comparisonExpansion} from '../src/comparison-expansion.js';
import {categories,measures} from '../src/data.js';
test('100 new sourced comparisons preserve positive, finite ratios',()=>{
 const count=c=>Object.values(c).reduce((n,x)=>n+x.items.length*(x.items.length-1)/2,0);
 assert.equal(count(comparisonExpansion),100);assert.equal(count(categories),302);
 for(const [key,c] of Object.entries(comparisonExpansion)){
  assert.equal(c.items.length,5);assert.ok(c.source.startsWith('https://'));assert.ok(c.note.length>40);
  for(const a of c.items) for(const b of c.items){
   const m=measures(a[2],b[2],key);assert.ok(Number.isFinite(m.ratio)&&m.ratio>0);
   assert.ok(Math.abs((m.aScale/m.bScale)/m.ratio-1)<1e-12);
  }
 }
 const get=(c,k)=>categories[c].items.find(x=>x[0]===k)[2];
 assert.equal(get('storage','kib')/get('storage','kb'),1.024);
 assert.equal(get('energy','kwh'),3600000);
 assert.ok(Math.abs(get('speed','kmh')-5/18)<1e-15);
 assert.equal(get('land-area','km2')/get('land-area','cm2'),1e10);
});
