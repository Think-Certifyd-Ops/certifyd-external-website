import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/reduce-compliance-admin.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Spend less time chasing documents. | Certifyd"
  },
  "description": "Reduce recurring compliance admin by connecting worker requirements, evidence and review dates. Estimate your current document follow-up workload.",
  "alternates": {
    "canonical": "/outcomes/reduce-compliance-admin/"
  },
  "openGraph": {
    "title": "Spend less time chasing documents. | Certifyd",
    "description": "Reduce recurring compliance admin by connecting worker requirements, evidence and review dates. Estimate your current document follow-up workload.",
    "url": "https://certifyd.io/outcomes/reduce-compliance-admin/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
