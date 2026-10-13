export const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "_landing", "_referrer", "page_path", "placement"] as const;
export function readAttribution(input:unknown):Record<string,string>{
 if(!input||typeof input!=="object")return {};
 const data=input as Record<string,unknown>,result:Record<string,string>={};
 for(const key of ATTRIBUTION_KEYS){
  const value=data[key];if(typeof value!=="string"||!value||value.length>200)continue;
  if(key==="_landing"||key==="page_path"){
   if(value.startsWith("/")&&!value.startsWith("//"))result[key]=value.split(/[?#]/)[0];
  }else if(key==="_referrer"){
   if(/^[a-z0-9.-]+$/i.test(value))result[key]=value.toLowerCase();
  }else if(/^[a-z0-9_.:/ -]+$/i.test(value))result[key]=value;
 }
 return result;
}
export function attributionSummary(input:unknown):string{
 const data=readAttribution(input);
 return Object.entries(data).map(([key,value])=>`${key}: ${value}`).join("\n");
}
export function submissionAttribution(placement:string):Record<string,string>{
 if(typeof window==="undefined")return {};
 let stored:unknown={};try{stored=JSON.parse(sessionStorage.getItem("certifyd_utm")||"{}")}catch{}
 return readAttribution({...readAttribution(stored),page_path:location.pathname,placement});
}
