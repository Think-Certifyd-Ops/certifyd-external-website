import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/platform.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Workforce compliance platform | Certifyd"
  },
  "description": "Manage role requirements, worker credentials, company records, expiry dates and site attendance in one workforce compliance platform.",
  "alternates": {
    "canonical": "/platform/"
  },
  "openGraph": {
    "title": "Workforce compliance platform | Certifyd",
    "description": "Manage role requirements, worker credentials, company records, expiry dates and site attendance in one workforce compliance platform.",
    "url": "https://certifyd.io/platform/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
