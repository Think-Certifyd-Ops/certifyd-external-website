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
  if(url.origin!==location.origin||url.pathname.startsWith("//")||url.href===location.href||url.pathname.includes(".")||/^\/(sponsors|api)(\/|$)/.test(url.pathname)||url.pathname.startsWith("/.netlify/"))return;
  const samePage=url.pathname===location.pathname&&url.search===new URL(location.href).search;
  // Query changes on the current page keep their existing document reload.
  if(url.pathname===location.pathname&&!samePage)return;
  // Native fragment entries have no App Router tree. Manage these too so Back
  // restores the page content as well as the address after a later page visit.
  click.preventDefault();push(url.pathname+url.search+url.hash);
  if(samePage&&url.hash==="#page-content")root.getElementById("page-content")?.focus({preventScroll:true});
 },{signal:controller.signal});
 return()=>controller.abort();
}
