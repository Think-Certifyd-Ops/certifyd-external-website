import type { Metadata } from "next";
const SITE = "https://certifyd.io";
const SOCIAL_IMAGE = { url: `${SITE}/opengraph-image`, width: 1200, height: 630, alt: "Certifyd workforce compliance and worker records" };

function shortTitle(value: string): string {
  const title = value.replace(/(?:\s*\|\s*Certifyd)+$/i, "").trim();
  const limit = 60 - " | Certifyd".length;
  if (title.length <= limit) return `${title} | Certifyd`;
  const prefix = title.slice(0, limit - 1);
  const cut = prefix.lastIndexOf(" ");
  return `${cut > limit * 0.65 ? prefix.slice(0, cut) : prefix}… | Certifyd`;
}

export function siteMetadata(value: Metadata): Metadata {
  const raw = typeof value.title === "string" ? value.title : value.title && ("absolute" in value.title ? value.title.absolute : value.title.default);
  if (!raw) return value;
  const title = shortTitle(raw);
  const canonical = value.alternates?.canonical;
  const path = typeof canonical === "string" ? canonical : canonical instanceof URL ? canonical.href : "/";
  const url = new URL(path, SITE).href;
  return {
    ...value,
    title: { absolute: title },
    openGraph: { ...value.openGraph, title, description: value.description || undefined, url, images: [SOCIAL_IMAGE] },
    twitter: { ...value.twitter, card: "summary_large_image", title, description: value.description || undefined, images: [SOCIAL_IMAGE.url] },
  } as Metadata;
}
export function pageMetadata(title:string,description:string,path:string):Metadata{
 return siteMetadata({title:{absolute:title},description,alternates:{canonical:path},openGraph:{title,description,url:`https://certifyd.io${path}`},twitter:{card:"summary_large_image",title,description}});
}
