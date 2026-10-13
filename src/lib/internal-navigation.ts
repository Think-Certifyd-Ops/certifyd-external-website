// Generated HTML keeps native links; route page transitions through the shared layout.
// The unpersisted landing candidate can then survive until analytics permission is granted.
export function initializeInternalNavigation(root:Document,push:(href:string)=>void){
 const controller=new AbortController();
 root.addEventListener("click",event=>{
  const click=event as MouseEvent;
  if(click.defaultPrevented||click.button!==0||click.metaKey||click.ctrlKey||click.shiftKey||click.altKey)return;
  const anchor=click.target instanceof Element?click.target.closest("a"):null;
  if(!anchor||anchor.hasAttribute("download")||(anchor.target&&anchor.target!=="_self")||anchor.rel.split(/\s+/).includes("external"))return;
  const url=new URL(anchor.href,location.href);
  if(url.origin!==location.origin||url.pathname.startsWith("//")||url.pathname===location.pathname||url.pathname.includes(".")||/^\/(sponsors|api)(\/|$)/.test(url.pathname)||url.pathname.startsWith("/.netlify/"))return;
  click.preventDefault();push(url.pathname+url.search+url.hash);
 },{signal:controller.signal});
 return()=>controller.abort();
}
