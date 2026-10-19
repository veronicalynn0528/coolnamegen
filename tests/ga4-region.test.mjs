import {test} from 'node:test';import assert from 'node:assert/strict';import {consentRegion} from '../src/lib/consent-region.mjs';
const strict="AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH".split(" ");
for(const country of strict.concat(['US','BR','JP','XX','ZZ','T1',''])) test('trusted '+country,async()=>{const r=consentRegion(new Request('https://coolnamegen.com/api/consent-region',{headers:{'x-vercel-ip-country':country}}),true);assert.deepEqual(await r.json(),{region:strict.includes(country)?'strict':['US','BR','JP'].includes(country)?'default':'unknown'});assert.match(r.headers.get('cache-control'),/no-store/);});
test('local spoof fails closed',async()=>assert.equal((await consentRegion(new Request('http://localhost/api/consent-region',{headers:{'x-vercel-ip-country':'US'}})).json()).region,'unknown'));
test('write rejected',()=>assert.equal(consentRegion(new Request('https://coolnamegen.com/api/consent-region',{method:'POST'}),true).status,405));
test('HEAD empty',async()=>assert.equal(await consentRegion(new Request('https://coolnamegen.com/api/consent-region',{method:'HEAD'}),true).text(),''));
