import Link from "next/link";
import {ContactForm} from "@/components/contact/ContactForm";
import {pageMetadata} from "@/lib/story/metadata";
import {StoryShell,StoryHero,StorySection} from "@/components/story/StoryParts";
export const metadata=pageMetadata("Book a workforce records demo | Certifyd","Book a Certifyd demo or ask about worker credentials, company records, review dates, imports and site attendance.","/contact/");
export default function Page(){return <StoryShell><StoryHero label="Talk through your workflow" title="See how your records fit together." intro="Bring a role and the records you manage today. We’ll show the worker and company views, then discuss the next step." action="Choose a 20-minute demo" href="https://cal.com/andrew-speer/certifyd-discovery"/>
<StorySection label="What we’ll cover" title="Start with the task your team needs to improve."><p>Choose requirements and evidence reviews, an import, renewal tracking, worker documents or site attendance. We’ll focus the conversation on your organisation and the workflow you want to see.</p><p>If you prefer to send your questions first, use the form below. For account help, email <a href="mailto:team@certifyd.io">team@certifyd.io</a>.</p><Link href="/security/">Review access and data handling before the call ↗</Link></StorySection>
<StorySection id="enquiry" label="Send the team a question" title="Tell us what you need to work through."><div className="story-form"><ContactForm/></div></StorySection>
</StoryShell>}
