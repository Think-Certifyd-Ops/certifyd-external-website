import { siteMetadata } from "@/lib/story/metadata";
import {ResourcePage} from "@/components/story/ResourcePage";
import {pageMetadata} from "@/lib/story/metadata";
export const metadata=siteMetadata({...pageMetadata("Fair Work Agency record-keeping checklist | Certifyd","Review your employment record-keeping process with a practical Fair Work Agency checklist and links to current official guidance.","/resources/fair-work-agency-checklist/"),});
export default function Page(){return <ResourcePage slug="fair-work-agency-checklist"/>}
