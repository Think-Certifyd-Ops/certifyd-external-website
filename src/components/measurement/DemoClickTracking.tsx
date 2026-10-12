"use client";
import {useEffect} from "react";
import {trackWebsiteEvent} from "@/lib/measurement";
export function DemoClickTracking(){useEffect(()=>{const click=(e:MouseEvent)=>{const a=e.target instanceof Element?e.target.closest("a"):null;if(!a)return;const url=new URL(a.href,location.href);const external=url.origin==="https://cal.com"&&url.pathname==="/andrew-speer/certifyd-discovery";const enquiry=url.origin===location.origin&&url.pathname.replace(/\/$/,"")==="/contact";if(!external&&!enquiry)return;trackWebsiteEvent("demo_cta_click",{destination:external?"cal_booking":"contact",placement:a.closest("header")?"header":a.closest("footer")?"footer":"page"})};document.addEventListener("click",click);return()=>document.removeEventListener("click",click)},[]);return null}
