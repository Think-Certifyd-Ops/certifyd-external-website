import {completedBooking,readCalMessage,trackWebsiteEvent} from "@/lib/measurement";
export const DEMO_INDUSTRIES=["Care & Social Care","Recruitment","NHS & Healthcare","Trades & Home Services","Other workforce teams"];
export const DEMO_TOPICS=["Onboarding","Tracked records and renewals","Workforce overview","Worker app and reusable documents","Site check-in"];
export function bookingUrls(industry="",topics:string[]=[]){
 const lines=[];
 if(DEMO_INDUSTRIES.includes(industry))lines.push(`Industry: ${industry}`);
 const selected=DEMO_TOPICS.filter(topic=>topics.includes(topic));
 if(selected.length)lines.push(`Topics: ${selected.join(", ")}`);
 const direct=new URL("https://cal.com/andrew-speer/certifyd-discovery");
 const embed=new URL("https://app.cal.com/andrew-speer/certifyd-discovery/embed");
 embed.searchParams.set("embed","certifyd-demo");embed.searchParams.set("theme","light");embed.searchParams.set("layout","month_view");
 if(lines.length){direct.searchParams.set("notes",lines.join("\n"));embed.searchParams.set("notes",lines.join("\n"))}
 return {direct:direct.href,embed:embed.href};
}
// Shared with the standalone review. Never sends identity or preferences to analytics.
export function initializeDemoBooking(root:HTMLElement,analytics=true){
 const controller=new AbortController(),signal=controller.signal;
 const frame=root.querySelector<HTMLIFrameElement>("iframe"),industry=root.querySelector<HTMLSelectElement>("#demo-industry"),status=root.querySelector<HTMLElement>("[data-booking-status]"),fallback=root.querySelector<HTMLAnchorElement>("[data-booking-fallback]");
 if(!frame||!industry||!status||!fallback)return()=>controller.abort();
 const seen=new Set<string>();
 function update(){
  const topics=Array.from(root.querySelectorAll<HTMLInputElement>('input[name="demo-topic"]:checked')).map(input=>input.value);
  const urls=bookingUrls(industry!.value,topics);fallback!.href=urls.direct;
  if(frame!.getAttribute("src")!==urls.embed){status!.textContent="Loading available times…";frame!.src=urls.embed}
 }
 const query=new URLSearchParams(location.search);
 const sectors:Record<string,string>={care:DEMO_INDUSTRIES[0],recruitment:DEMO_INDUSTRIES[1],nhs:DEMO_INDUSTRIES[2],trades:DEMO_INDUSTRIES[3],workforce:DEMO_INDUSTRIES[4]};
 if(sectors[query.get("sector")??""])industry.value=sectors[query.get("sector")??""];
 update();root.addEventListener("change",update,{signal});
 const ready=()=>frame.contentWindow?.postMessage({originator:"CAL",method:"parentKnowsIframeReady"},"https://app.cal.com");
 frame.addEventListener("load",ready,{signal});
 window.addEventListener("message",event=>{
  const message=readCalMessage(event,frame.contentWindow);if(!message)return;
  if(message.action==="__iframeReady")ready();
  if(message.action==="bookerReady"||message.action==="linkReady")status.textContent="Choose a date and time.";
  if(message.action==="__dimensionChanged"){const height=message.data?.iframeHeight;if(typeof height==='number'&&Number.isFinite(height)&&height>=350&&height<=2000)frame.style.height=`${height}px`}
  if(message.action!=="bookingSuccessfulV2"||!completedBooking(message.data)||seen.has(message.data.uid))return;
  status.textContent="Your demo is booked.";
  if(!analytics||trackWebsiteEvent("demo_booking_completed",{booking_provider:"cal",booking_flow:"certifyd-discovery"}))seen.add(message.data.uid);
 },{signal});ready();
 return()=>controller.abort();
}
