import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/records.json";
export const metadata: Metadata = siteMetadata({
  "title": {
    "absolute": "Track workforce expiry dates and reviews | Certifyd"
  },
  "description": "Track worker-document expiry dates, review upcoming renewals and keep supporting evidence with each workforce record.",
  "alternates": {
    "canonical": "/platform/records/"
  },
  "openGraph": {
    "title": "Track workforce expiry dates and reviews | Certifyd",
    "description": "Track worker-document expiry dates, review upcoming renewals and keep supporting evidence with each workforce record.",
    "url": "https://certifyd.io/platform/records/"
  }
});
export default function Page(){return <ConnectedPage html={body} />}
