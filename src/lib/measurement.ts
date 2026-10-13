export const GA_MEASUREMENT_ID = "G-FNMZS9PQ1S";
// Matches the consent widget's data-marketing=false setting.
export const MARKETING_ENABLED = false;
const eventFields = new Set(["event_category", "event_label", "booking_provider", "booking_flow", "destination", "placement"]);
export function trackWebsiteEvent(name:string,params:Record<string,string|number>){
 if(typeof window==="undefined"||!window.rogersonConsent?.has("analytics")||typeof window.gtag!=="function")return false;
 const safe = Object.fromEntries(Object.entries(params).filter(([key])=>eventFields.has(key)));
 window.gtag("event",name,{...safe,page_path:window.location.pathname,send_to:GA_MEASUREMENT_ID});return true;
}
export function trackLeadEvent(name:"generate_lead"|"sign_up",params:Record<string,string|number>,adsLabel:string){
 const analytics=trackWebsiteEvent(name,params);
 const ads=typeof window!=="undefined"&&MARKETING_ENABLED&&window.rogersonConsent?.has("marketing")&&typeof window.gtag==="function"&&!!adsLabel;
 if(ads)window.gtag!("event","conversion",{send_to:adsLabel});
 return {analytics,ads:!!ads};
}
export function completedBooking(data:unknown):data is {uid:string;status:string}{if(!data||typeof data!=="object")return false;const d=data as Record<string,unknown>;return typeof d.uid==="string"&&d.uid.length>0&&d.status==="ACCEPTED"&&d.paymentRequired!==true}

export function readCalMessage(event:{origin:string;source:unknown;data:unknown},expectedSource:unknown):{action:string;data:Record<string,unknown>}|null{if(!expectedSource||event.origin!=="https://app.cal.com"||event.source!==expectedSource||!event.data||typeof event.data!=="object")return null;const message=event.data as Record<string,unknown>;const prefix="CAL:certifyd-demo:";if(message.originator!=="CAL"||typeof message.fullType!=="string"||!message.fullType.startsWith(prefix))return null;return {action:message.fullType.slice(prefix.length),data:message.data&&typeof message.data==="object"?message.data as Record<string,unknown>:{}}}
