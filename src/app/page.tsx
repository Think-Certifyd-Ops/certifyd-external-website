import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import { preload } from "react-dom";
import body from "@/app/_connected-html/index.json";
export const metadata: Metadata = siteMetadata({
  "title": {
    "absolute": "Workforce compliance and worker records | Certifyd"
  },
  "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Workforce compliance and worker records | Certifyd",
    "description": "Manage workplace credentials, company records and expiry dates. Connect HR and compliance teams with the records people hold and the sites they attend.",
    "url": "https://certifyd.io/"
  }
});
export default function Page(){preload("/images/connected/roles.webp", {as:"image",fetchPriority:"high"});return <ConnectedPage html={body} />}
