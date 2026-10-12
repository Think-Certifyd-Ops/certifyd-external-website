interface Window {
  rogersonConsent?: {has:(category:string)=>boolean;get:()=>unknown;open:()=>void};
  gtag?: (...args: unknown[]) => void;
}
