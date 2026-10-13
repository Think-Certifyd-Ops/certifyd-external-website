import {getAllPosts} from "@/lib/blog";
import {pageMetadata} from "@/lib/story/metadata";
import {StoryShell,StoryHero,StorySection,ReadingLinks} from "@/components/story/StoryParts";
export const metadata=pageMetadata("Workforce records and compliance guides | Certifyd","Practical guides to worker evidence, right-to-work checks, review dates and managing workforce records.","/blog/");
export default function Page(){const posts=getAllPosts();const priority=["right-to-work-check-documents-list","right-to-work-follow-up-checks","agency-worker-compliance-who-checks","care-sector-rtw-compliance-guide"];
const first=posts.filter(p=>priority.includes(p.slug));const rest=posts.filter(p=>!priority.includes(p.slug));return <StoryShell><StoryHero label="Practical reading" title="Read workforce compliance guides." intro="Start with the evidence, check method and next action your team needs to understand." action="Use the review checklist" href="/resources/worker-record-review-checklist/"/>
<StorySection title="Choose a guide for your next workforce check."><ReadingLinks items={first.map(p=>({href:`/blog/${p.slug}/`,title:p.title,copy:p.excerpt}))}/></StorySection>
<StorySection title="Browse all workforce articles."><ReadingLinks items={rest.map(p=>({href:`/blog/${p.slug}/`,title:p.title,copy:p.excerpt}))}/></StorySection></StoryShell>}
