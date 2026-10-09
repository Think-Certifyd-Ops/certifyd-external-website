"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import html from "./header-content.json";
export function MarketingHeader(){
 const ref=useRef<HTMLDivElement>(null);const pathname=usePathname();
 useEffect(()=>{const root=ref.current;if(!root)return;const controller=new AbortController();const signal=controller.signal;
 const groups=[...root.querySelectorAll<HTMLDetailsElement>('details')];const button=root.querySelector<HTMLButtonElement>('#menu-toggle');const menu=root.querySelector<HTMLElement>('#mobile-menu');
 const close=()=>{if(menu)menu.hidden=true;if(button){button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation')}groups.forEach(g=>g.open=false)};close();
 button?.addEventListener('click',()=>{if(!menu)return;const open=menu.hidden;menu.hidden=!open;button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation')},{signal});
 groups.forEach(g=>g.addEventListener('toggle',()=>{if(g.open)groups.forEach(other=>{if(other!==g)other.open=false})},{signal}));
 document.addEventListener('click',e=>{if(!root.contains(e.target as Node))groups.forEach(g=>g.open=false)},{signal});
 document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const open=groups.find(g=>g.open);if(open){open.open=false;open.querySelector('summary')?.focus()}else if(menu&&!menu.hidden){close();button?.focus()}},{signal});
 matchMedia('(min-width:1200px)').addEventListener('change',e=>{if(e.matches)close()},{signal});
 root.querySelectorAll('a').forEach(a=>{if(new URL(a.href).pathname===pathname)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 return()=>controller.abort();},[pathname]);
 return <div ref={ref} dangerouslySetInnerHTML={{__html:html}}/>;
}
