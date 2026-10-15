import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/portable-worker-credentials.json";
export const metadata: Metadata = siteMetadata({
  "title": {
    "absolute": "Worker credentials and document sharing | Certifyd"
  },
  "description": "Let workers hold personal qualifications and certificates in the Certifyd app. Connect shared evidence to company requirements and review activity.",
  "alternates": {
    "canonical": "/outcomes/portable-worker-credentials/"
  },
  "openGraph": {
    "title": "Worker credentials and document sharing | Certifyd",
    "description": "Let workers hold personal qualifications and certificates in the Certifyd app. Connect shared evidence to company requirements and review activity.",
    "url": "https://certifyd.io/outcomes/portable-worker-credentials/"
  }
});
export default function Page(){return <ConnectedPage html={body} />}
