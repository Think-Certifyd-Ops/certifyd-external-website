import assert from 'node:assert/strict';
import {readAttribution,initializeAttribution,submissionAttribution} from '../src/lib/attribution.ts';
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
class NodeStub extends EventTarget{constructor(){super();this.attrs={};this.textContent='';this.value='';this.style={};}getAttribute(k){return k==='src'?this.src??null:this.attrs[k]??null}}
const frame=new NodeStub();frame.contentWindow={postMessage(){}};
const industry=new NodeStub(),status=new NodeStub(),fallback=new NodeStub(),root=new NodeStub();
const nodes={'iframe':frame,'#demo-industry':industry,'[data-booking-status]':status,'[data-booking-fallback]':fallback};
root.querySelector=s=>nodes[s]??null;root.querySelectorAll=()=>[];
globalThis.sessionStorage={getItem:()=>null};globalThis.location={search:'',pathname:'/contact/'};
globalThis.document=Object.assign(new EventTarget(),{activeElement:null,referrer:''});
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

// Saved-choice startup must preserve the original landing; withdrawal must clear it.
globalThis.window=new EventTarget();globalThis.location={pathname:'/contact/',search:'?utm_source=google&utm_medium=organic'};globalThis.document={referrer:'https://www.google.com/search?q=private'};
const storage=new Map([['certifyd_utm',JSON.stringify({_landing:'/blog/guide/',utm_source:'google',utm_medium:'organic'})],['certifyd_demo_entry','{}']]);
globalThis.sessionStorage={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value),removeItem:key=>storage.delete(key)};
const attributionCleanup=initializeAttribution();assert.equal(storage.has('certifyd_utm'),true,'Waiting for the manager must not erase consented first-touch context');
window.rogersonConsent={has:()=>true};window.dispatchEvent(new Event('rogerson:consent-ready'));
assert.equal(submissionAttribution('contact-page')._landing,'/blog/guide/');
window.rogersonConsent.has=()=>false;window.dispatchEvent(new CustomEvent('rogerson:consent',{detail:{analytics:false}}));
assert.equal(storage.size,0);assert.deepEqual(submissionAttribution('contact-page'),{page_path:'/contact/',placement:'contact-page'});
window.rogersonConsent.has=()=>true;window.dispatchEvent(new CustomEvent('rogerson:consent',{detail:{analytics:true}}));
const captured=JSON.parse(storage.get('certifyd_utm'));assert.equal(captured._referrer,'www.google.com');assert.equal(captured.utm_source,'google');assert.equal(captured._landing,'/contact/');assert.equal(JSON.stringify(captured).includes('private'),false);
attributionCleanup();console.log('Saved consent startup, first-touch preservation, denied choice and withdrawal clearing passed.');

// Consent after client navigation retains the original route without pre-consent persistence.
storage.clear();globalThis.window=new EventTarget();window.location=location;
window.rogersonConsent={has:()=>false};location.pathname='/blog/right-to-work-checks-2026-update/';location.search='?utm_source=seo-fixture&utm_campaign=review';
document=Object.assign(new EventTarget(),{activeElement:null,referrer:'https://www.google.com/search?q=private'});
const landingCleanup=initializeAttribution();assert.equal(storage.size,0);
location.pathname='/contact/';location.search='';
const calendarCleanup=initializeDemoBooking(root);const initialSrc=frame.src;
window.rogersonConsent.has=()=>true;window.dispatchEvent(new CustomEvent('rogerson:consent',{detail:{analytics:true}}));await Promise.resolve();
assert.equal(submissionAttribution('contact-calendar')._landing,'/blog/right-to-work-checks-2026-update/');
assert.notEqual(frame.src,initialSrc);assert.match(new URL(frame.src).searchParams.get('notes'),/utm_source: seo-fixture/);
const consentedSrc=frame.src;window.dispatchEvent(new Event('rogerson:consent-ready'));await Promise.resolve();assert.equal(frame.src,consentedSrc,'Repeated readiness must not reload an unchanged calendar');
document.activeElement=frame;window.dispatchEvent(new Event('blur'));
window.rogersonConsent.has=()=>false;window.dispatchEvent(new CustomEvent('rogerson:consent',{detail:{analytics:false}}));await Promise.resolve();
assert.equal(frame.src,consentedSrc,'Withdrawal must preserve an engaged booking draft');assert.doesNotMatch(new URL(fallback.href).searchParams.get('notes'),/seo-fixture/);assert.equal(storage.size,0);
calendarCleanup();landingCleanup();document.activeElement=null;

// A trusted pending booking locks the calendar, while its GA4 event remains excluded.
const pendingCleanup=initializeDemoBooking(root);const pendingSrc=frame.src;
booking('pending-calendar-fixture','PENDING');window.rogersonConsent.has=()=>true;
storage.set('certifyd_utm',JSON.stringify({_landing:'/blog/guide/',utm_source:'new-fixture'}));window.dispatchEvent(new Event('rogerson:consent-ready'));await Promise.resolve();
assert.equal(frame.src,pendingSrc);assert.match(new URL(fallback.href).searchParams.get('notes'),/new-fixture/);
pendingCleanup();const finalHref=fallback.href;storage.clear();window.dispatchEvent(new Event('rogerson:consent-ready'));await Promise.resolve();assert.equal(fallback.href,finalHref,'Cleanup removes the consent refresh listener');
console.log('Late consent preserves the initial route, updates an untouched calendar, preserves focused/pending forms, refreshes fallback and cleans up listeners.');
