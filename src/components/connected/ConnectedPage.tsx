"use client";
import { useEffect, useRef } from "react";
import { initializeConnected } from "./interactions";
export function ConnectedPage({html}:{html:string}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{if(ref.current)return initializeConnected(ref.current)},[html]);return <div ref={ref} className="connected" dangerouslySetInnerHTML={{__html:html}}/>}
