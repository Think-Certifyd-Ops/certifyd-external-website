import type { Metadata } from "next";
export function pageMetadata(title:string,description:string,path:string):Metadata{
 return {title:{absolute:title},description,alternates:{canonical:path},openGraph:{title,description,url:`https://certifyd.io${path}`},twitter:{card:"summary_large_image",title,description}};
}
