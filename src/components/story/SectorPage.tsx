import {IndustryRoleLinks} from "./IndustryRoleLinks";
import Link from "next/link";
import Image from "next/image";
import type { SectorStory } from "@/lib/story/sectors";
import {StoryShell,StoryHero,RecordExample,StorySection,StoryCTA,ReadingLinks} from "./StoryParts";
export function SectorPage({story:s}:{story:SectorStory}){return <StoryShell>
<StoryHero label={s.label} title={s.title} intro={s.intro} href={`/contact/?sector=${s.slug}`} visual={<RecordExample compact person={s.person} role={s.role} record={s.record} action={s.next} slot={`${s.slug}.hero`}/>}/>
<nav className="story-wrap story-links" aria-label="Follow the sector workflow"><div className="story-chapter-links">{s.chapters.map(c=><a key={c.id} href={`#${c.id}`}>{c.label}</a>)}</div></nav>
{s.chapters.map((c,i)=><StorySection key={c.id} id={c.id} label={c.label} title={c.title} visual={i===0?<figure className="story-screen" data-demo-slot={`${s.slug}.${c.id}`}><Image src="/images/connected/roles.webp" alt="Role selection in the Certifyd company workspace" width={1440} height={1144}/><figcaption>Set up roles in the company workspace.</figcaption></figure>:<RecordExample person={s.person} role={s.role} record={c.record} action={c.action} owner={c.owner} slot={`${s.slug}.${c.id}`}/>}><p>{c.copy}</p><p>{c.detail}</p><Link href={c.href}>{c.link} ↗</Link></StorySection>)}
<StorySection label="Clear responsibilities" title="Review worker-shared evidence alongside company records."><p>{s.ownership}</p><Link href="/security/">Review access and data handling ↗</Link></StorySection>
<StorySection label="Prepare your process" title="Prepare your workforce checks."><ReadingLinks items={s.guides}/></StorySection>
<IndustryRoleLinks industry={s.slug}/>
<StoryCTA title={`Review ${s.slug==="nhs"?"staff-credential":s.slug==="care"?"care-worker":s.slug==="recruitment"?"placement evidence":"workforce"}${s.slug==="recruitment"?"":" records"} in a demo.`} copy={s.demo} href={`/contact/?sector=${s.slug}`}/>
</StoryShell>}
