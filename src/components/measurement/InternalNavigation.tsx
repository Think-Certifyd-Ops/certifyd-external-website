"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {initializeInternalNavigation} from "@/lib/internal-navigation";
export function InternalNavigation(){const router=useRouter();useEffect(()=>initializeInternalNavigation(document,href=>router.push(href)),[router]);return null}
