import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/portable-worker-credentials.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Let workers manage their own credentials. | Certifyd"
  },
  "description": "Let workers hold personal qualifications and certificates in the Certifyd app. Connect shared evidence to company requirements and review activity.",
  "alternates": {
    "canonical": "/outcomes/portable-worker-credentials/"
  },
  "openGraph": {
    "title": "Let workers manage their own credentials. | Certifyd",
    "description": "Let workers hold personal qualifications and certificates in the Certifyd app. Connect shared evidence to company requirements and review activity.",
    "url": "https://certifyd.io/outcomes/portable-worker-credentials/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
