import {StoryShell,StoryHero,StoryCTA} from "@/components/story/StoryParts";
import {pageMetadata} from "@/lib/story/metadata";
import {PenaltyScenario} from "@/components/tools/PenaltyScenario";
export const metadata=pageMetadata("Right-to-work penalty scenario | Certifyd","Explore a hypothetical worker count and published penalty rate. Read the official framework before assessing a real case.","/tools/penalty-calculator/");
export default function Page(){return <StoryShell><StoryHero label="Right-to-work penalty scenario" title="Calculate a right-to-work penalty scenario." intro="Explore a hypothetical worker count and published penalty rate. Read the official framework before assessing a real case." action="Use the tool" href="#tool"/><section className="story-section" id="tool"><div className="story-wrap story-reading"><PenaltyScenario/></div></section><StoryCTA title="Bring your process and review the working records."/></StoryShell>}
