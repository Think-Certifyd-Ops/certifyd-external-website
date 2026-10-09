import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/verified-worker-check-in.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Know who checked in, where and when. | Certifyd"
  },
  "description": "Record worker check-in and check-out against a person and site. Review the latest attendance activity and return to the visit history with Certifyd.",
  "alternates": {
    "canonical": "/outcomes/verified-worker-check-in/"
  },
  "openGraph": {
    "title": "Know who checked in, where and when. | Certifyd",
    "description": "Record worker check-in and check-out against a person and site. Review the latest attendance activity and return to the visit history with Certifyd.",
    "url": "https://certifyd.io/outcomes/verified-worker-check-in/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
