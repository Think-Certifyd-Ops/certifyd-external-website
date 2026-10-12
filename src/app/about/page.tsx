import Image from "next/image";
import Link from "next/link";
import {TEAM} from "@/lib/constants";
import {pageMetadata} from "@/lib/story/metadata";
import {StoryShell,StoryHero,StorySection,StoryCTA} from "@/components/story/StoryParts";
export const metadata=pageMetadata("Meet the Certifyd team","Meet the team building Certifyd’s connected workforce records, personal credentials and company review workflows.","/about/");
export default function Page(){return <StoryShell><StoryHero label="About Certifyd" title="Connect trust to the working day." intro="We’re building a shared thread between the person, their credentials, the organisation and the place they work." action="Explore the platform" href="/"/>
<StorySection label="What we’re building" title="Give people their own record. Give teams a clear view."><p>Our workforce platform connects personal credentials to company requirements and review records. HR and compliance teams can follow the evidence they need, while people keep their personal documents with them.</p><p>That work grows from a broader ambition: make it easier to understand who someone is, who they represent and what information supports that relationship.</p><Link href="/outcomes/portable-worker-credentials/">See how personal and company records connect ↗</Link></StorySection>
<StorySection label="The team" title="Meet the people building Certifyd."><div className="story-team">{TEAM.map(member=><article key={member.name}><Image src={member.photo || "/images/connected/mark.svg"} alt={member.name} width={128} height={144}/><div><h3>{member.name}</h3><p>{member.title}</p><p>{member.description}</p><a href={member.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></div></article>)}</div></StorySection>
<StorySection label="Start with a real workflow" title="Show us the records your team manages."><p>We’re interested in how requirements, evidence and reviews work in practice. Bring the spreadsheet, document process or repeated check you want to improve.</p><Link href="/resources/worker-record-review-checklist/">Work through a record review checklist ↗</Link></StorySection>
<StoryCTA title="Walk through your next review with us."/>
</StoryShell>}
