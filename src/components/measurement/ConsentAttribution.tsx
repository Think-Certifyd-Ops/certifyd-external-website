"use client";
import {useEffect} from "react";
import {initializeAttribution} from "@/lib/attribution";
export function ConsentAttribution(){useEffect(initializeAttribution,[]);return null}
