import {StoryShell,StoryHero,StoryCTA} from "@/components/story/StoryParts";
import {pageMetadata} from "@/lib/story/metadata";
import {WorkloadCalculator} from "@/components/tools/WorkloadCalculator";
export const metadata=pageMetadata("Workforce process comparison | Certifyd","Use your own assumptions to compare staff time, monthly costs and setup costs across a year.","/tools/roi-calculator/");
export default function Page(){return <StoryShell><StoryHero label="Workforce process comparison" title="Compare the cost of your current and proposed process." intro="Use your own assumptions to compare staff time, monthly costs and setup costs across a year." action="Use the tool" href="#tool"/><section className="story-section" id="tool"><div className="story-wrap story-reading"><WorkloadCalculator compare/></div></section><StoryCTA title="Bring your process and review the working records."/></StoryShell>}
