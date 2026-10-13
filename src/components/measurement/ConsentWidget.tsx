"use client";
import Script from "next/script";
export function ConsentWidget(){return <Script id="roger-group-consent" src="https://rogerson-signups.netlify.app/consent-widget.js" strategy="afterInteractive" data-brand="Certifyd" data-domain="certifyd.io" data-analytics="true" data-marketing="false" onReady={()=>{window.dispatchEvent(new Event("rogerson:consent-ready"));}}/>}
