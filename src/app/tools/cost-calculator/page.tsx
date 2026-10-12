import {StoryShell,StoryHero,StoryCTA} from "@/components/story/StoryParts";
import {pageMetadata} from "@/lib/story/metadata";
import {WorkloadCalculator} from "@/components/tools/WorkloadCalculator";
export const metadata=pageMetadata("Workforce compliance cost calculator | Certifyd","Enter your monthly review volume, staff time and costs. Use the result to discuss the work your team needs to manage.","/tools/cost-calculator/");
export default function Page(){return <StoryShell><StoryHero label="Workforce compliance cost calculator" title="Calculate the time and cost of reviewing worker records." intro="Enter your monthly review volume, staff time and costs. Use the result to discuss the work your team needs to manage." action="Use the tool" href="#tool"/><section className="story-section" id="tool"><div className="story-wrap story-reading"><WorkloadCalculator/></div></section><StoryCTA title="Bring your process and review the working records."/></StoryShell>}
