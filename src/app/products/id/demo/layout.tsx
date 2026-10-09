import type { Metadata } from "next";
export const metadata: Metadata = {
  "title": {
    "absolute": "Certifyd Id interactive demo"
  },
  "robots": {
    "index": false,
    "follow": true
  },
  "alternates": {
    "canonical": "/products/id/demo/"
  }
};
export default function Layout({children}:{children:React.ReactNode}){return children}
