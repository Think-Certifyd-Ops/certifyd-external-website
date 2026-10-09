import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/import-compliance-records.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Bring your records into Certifyd. | Certifyd"
  },
  "description": "Plan your move from worker spreadsheets to Certifyd. Bring existing worker details across, set role requirements and plan the evidence review.",
  "alternates": {
    "canonical": "/outcomes/import-compliance-records/"
  },
  "openGraph": {
    "title": "Bring your records into Certifyd. | Certifyd",
    "description": "Plan your move from worker spreadsheets to Certifyd. Bring existing worker details across, set role requirements and plan the evidence review.",
    "url": "https://certifyd.io/outcomes/import-compliance-records/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
