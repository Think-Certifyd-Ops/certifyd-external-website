import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/index.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Certifyd | Workplace credentials and compliance"
  },
  "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Certifyd | Workplace credentials and compliance",
    "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
    "url": "https://certifyd.io/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
