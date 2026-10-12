"use client";
import {useEffect,useRef} from "react";
import {bookingUrls,initializeDemoBooking,DEMO_INDUSTRIES,DEMO_TOPICS} from "@/lib/demo-booking";
export function DemoBooking(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>root.current?initializeDemoBooking(root.current):undefined,[]);
 return <div ref={root} className="demo-booking-layout">
  <div className="demo-booking-details">
   <h1>Book a demo.</h1>
   <p className="demo-booking-intro">Choose a time to see how Certifyd handles your workforce records.</p>
   <div className="demo-preferences">
    <label htmlFor="demo-industry">Your industry <span>(optional)</span></label>
    <select id="demo-industry" name="demo-industry" defaultValue=""><option value="">Choose an industry</option>{DEMO_INDUSTRIES.map(i=><option key={i} value={i}>{i}</option>)}</select>
    <fieldset><legend>What would you like to see? <span>(optional)</span></legend>{DEMO_TOPICS.map((topic,i)=><label className="demo-topic" key={topic}><input type="checkbox" name="demo-topic" value={topic} id={`demo-topic-${i}`}/><span>{topic}</span></label>)}</fieldset>
    <p className="demo-preferences-note">Choose any topics before selecting a time.</p>
   </div>
  </div>
  <div className="story-booking">
   <p data-booking-status role="status">Loading available times…</p>
   <iframe title="Book a Certifyd demo" src={bookingUrls().embed} referrerPolicy="strict-origin-when-cross-origin"/>
   <p className="demo-booking-fallback"><a data-booking-fallback data-demo-cta="true" href={bookingUrls().direct}>Calendar not loading? Open it on Cal.com <span aria-hidden="true">↗</span></a></p>
  </div>
 </div>;
}
