import assert from 'node:assert/strict';
import {readAttribution} from '../src/lib/attribution.ts';
import {bookingUrls,initializeDemoBooking} from '../src/lib/demo-booking.ts';
import demoEnquiry from '../netlify/functions/demo-enquiry.mts';
import leadMagnet from '../netlify/functions/lead-magnet.mts';
assert.deepEqual(readAttribution({_landing:'/blog/guide/?private=1',_referrer:'WWW.Google.COM',utm_source:'organic',unknown:'private',email:'fixture@example.test',utm_content:'x'.repeat(201)}),{utm_source:'organic',_landing:'/blog/guide/',_referrer:'www.google.com'});
const urls=bookingUrls('Recruitment',['Tracked records and renewals','unsupported'],{_landing:'/blog/guide/',page_path:'/industries/recruitment/',placement:'page',gclid:'fixture-only',email:'fixture@example.test'});
for(const url of Object.values(urls)){
 const notes=new URL(url).searchParams.get('notes');
 assert.match(notes,/Recruitment/);assert.match(notes,/_landing: \/blog\/guide\//);
 assert.doesNotMatch(notes,/fixture|unsupported|gclid|email/);
}
class NodeStub extends EventTarget{constructor(){super();this.attrs={};this.textContent='';this.value='';this.style={};}getAttribute(k){return this.attrs[k]??null}}
const frame=new NodeStub();frame.contentWindow={postMessage(){}};
const industry=new NodeStub(),status=new NodeStub(),fallback=new NodeStub(),root=new NodeStub();
const nodes={'iframe':frame,'#demo-industry':industry,'[data-booking-status]':status,'[data-booking-fallback]':fallback};
root.querySelector=s=>nodes[s]??null;root.querySelectorAll=()=>[];
globalThis.sessionStorage={getItem:()=>null};globalThis.location={search:'',pathname:'/contact/'};
globalThis.window=new EventTarget();window.location=location;
let consent=false,events=[];window.rogersonConsent={has:()=>consent};window.gtag=(...args)=>events.push(args);
const cleanup=initializeDemoBooking(root);
function booking(uid,bookingStatus='ACCEPTED'){
 const event=new Event('message');Object.assign(event,{origin:'https://app.cal.com',source:frame.contentWindow,data:{originator:'CAL',fullType:'CAL:certifyd-demo:bookingSuccessfulV2',data:{uid,status:bookingStatus}}});window.dispatchEvent(event);
}
booking('denied-fixture');assert.equal(status.textContent,'Your demo is booked.');assert.equal(events.length,0);
consent=true;booking('denied-fixture');assert.equal(events.length,0);
booking('pending-fixture','PENDING');assert.equal(events.length,0);
booking('accepted-fixture');booking('accepted-fixture');assert.equal(events.length,1);assert.equal(events[0][1],'demo_booking_completed');
cleanup();booking('after-cleanup');assert.equal(events.length,1);
// Exercise real function handlers with stubbed services. No external request is sent.
globalThis.Netlify={env:{get:key=>key==='ATTIO_API_KEY'?'fixture-only':undefined}};
const requests=[];
globalThis.fetch=async(url,options)=>{requests.push({url,body:JSON.parse(options.body)});return new Response(JSON.stringify({data:{id:{record_id:url.includes('people')?'fixture-person':'fixture-company'}}}),{status:200,headers:{'Content-Type':'application/json'}})};
for(const handler of [demoEnquiry,leadMagnet]){
 requests.length=0;
 const body={email:'fixture@example.test',company:'SEO fixture',firstName:'Test',source:'fixture-only',_landing:'/blog/guide/',page_path:'/contact/',placement:'page',utm_source:'organic',unknown:'omit-me'};
 const response=await handler(new Request('http://example.test',{method:'POST',body:JSON.stringify(body)}),{});
 assert.equal(response.status,200);
 const note=requests.find(row=>row.url.endsWith('/notes'))?.body.data.content;
 assert.match(note,/_landing: \/blog\/guide\//);assert.match(note,/page_path: \/contact\//);assert.match(note,/utm_source: organic/);assert.doesNotMatch(note,/omit-me/);
 const person=requests.find(row=>row.url.includes('objects/people/records?'));
 assert.equal(person.body.data.values.description,undefined,'Acquisition must not overwrite an existing CRM description');
}
console.log('Attribution sanitization, Cal notes and consent-safe deduplication, and mocked CRM acquisition notes passed.');
