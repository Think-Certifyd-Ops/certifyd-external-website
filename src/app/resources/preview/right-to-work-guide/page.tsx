import { siteMetadata } from "@/lib/story/metadata";
import {ResourcePage} from "@/components/story/ResourcePage";
import {pageMetadata} from "@/lib/story/metadata";
export const metadata=siteMetadata({...pageMetadata("Right-to-work guide for employers | Certifyd","Prepare employer right-to-work checks with a practical guide to methods, evidence, review records and follow-up dates.","/resources/right-to-work-guide/"),robots:{index:false,follow:true}});
export default function Page(){return <ResourcePage slug="right-to-work-guide" preview/>}
