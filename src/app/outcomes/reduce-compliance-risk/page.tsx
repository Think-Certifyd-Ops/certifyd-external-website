import type { Metadata } from "next";
import { ConnectedPage } from "@/components/connected/ConnectedPage";
import body from "@/app/_connected-html/reduce-compliance-risk.json";
export const metadata: Metadata = {
  "title": {
    "absolute": "Find and fix compliance gaps. | Certifyd"
  },
  "description": "Find missing workforce evidence, track credential expiries and follow review activity in Certifyd. See the compliance workflow in a demo.",
  "alternates": {
    "canonical": "/outcomes/reduce-compliance-risk/"
  },
  "openGraph": {
    "title": "Find and fix compliance gaps. | Certifyd",
    "description": "Find missing workforce evidence, track credential expiries and follow review activity in Certifyd. See the compliance workflow in a demo.",
    "url": "https://certifyd.io/outcomes/reduce-compliance-risk/"
  }
};
export default function Page(){return <ConnectedPage html={body} />}
