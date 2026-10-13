import {StoryShell,StoryHero,StoryCTA} from "@/components/story/StoryParts";
import {pageMetadata} from "@/lib/story/metadata";
import {ReviewChecklist} from "@/components/tools/ReviewChecklist";
export const metadata=pageMetadata("Worker-record readiness checklist | Certifyd","Work through six practical items, then follow the records and responsibilities that still need attention.","/tools/audit-readiness/");
export default function Page(){return <StoryShell><StoryHero label="Worker-record readiness checklist" title="Find the gaps in your worker-record review process." intro="Work through six practical items, then follow the records and responsibilities that still need attention." action="Use the tool" href="#tool"/><section className="story-section" id="tool"><div className="story-wrap story-reading"><ReviewChecklist/></div></section><StoryCTA title="Review your workforce process in a demo."/></StoryShell>}
