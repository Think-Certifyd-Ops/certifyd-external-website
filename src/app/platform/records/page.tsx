import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/records.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "See what expires. Act while there is time | Certifyd"
  },
  "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
  "alternates": {
    "canonical": "/platform/records/"
  },
  "openGraph": {
    "title": "See what expires. Act while there is time | Certifyd",
    "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
    "url": "https://certifyd.io/platform/records/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
