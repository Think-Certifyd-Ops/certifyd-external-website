import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getAllForPageSlugs,getForPageBySlug} from "@/lib/for-pages";
import {pageMetadata} from "@/lib/story/metadata";
import {BreadcrumbSchema} from "@/components/seo/JsonLd";
import {StoryShell,StoryHero,StorySection,StoryCTA,RecordExample} from "@/components/story/StoryParts";
interface Props{params:Promise<{slug:string}>}
export function generateStaticParams(){return getAllForPageSlugs().map(slug=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params,page=getForPageBySlug(slug);if(!page)return {};
 return {...pageMetadata(page.title,page.description,`/for/${slug}/`),...(page.archive?{robots:{index:false,follow:true}}:{})};
}
export default async function Page({params}:Props){
 const {slug}=await params,page=getForPageBySlug(slug);if(!page)notFound();
 if(page.archive)return <StoryShell><div className="story-reading"><Link className="story-back" href="/about/">About Certifyd</Link><p className="story-label">Historical concept</p><h1>{page.title}</h1><p>{page.intro}</p><p>This page records an earlier idea, reviewed on 13 October 2026. It does not describe an available Certifyd product, integration or verification service.</p><h2>What the concept would need to establish</h2><p>Shared information and an additional confirmation can help a person review a request. They do not automatically establish legal identity, permission, professional competence or safe conduct. A recognised device and a human decision also answer different questions.</p><h2>Certifyd’s current focus</h2><p>Certifyd now focuses on workplace credentials, company records, expiry and review dates, the worker app and recorded site attendance. The security and consumer concepts are separate from that workforce scope.</p><Link href="/">Explore the current workforce platform</Link></div></StoryShell>;
 return <><BreadcrumbSchema items={[{name:"Home",href:"/"},{name:page.title,href:`/for/${slug}/`}]}/><StoryShell><nav className="site-breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><span aria-hidden="true">/</span><span aria-current="page">{page.title}</span></li></ol></nav>
 <StoryHero label="Workforce evidence and reviews" title={page.title} intro={page.intro} href={`/contact/?sector=${page.industry}`} visual={<RecordExample compact person="Jamie Taylor" role={page.role} record="Role requirements" action="Your organisation reviews the evidence required for the work." owner="Company review record"/>}/>
 <StorySection title={`Set evidence requirements for the ${page.role.toLowerCase()} role.`}><ul>{page.requirements.map(requirement=><li key={requirement}>{requirement}</li>)}</ul><p>{page.review}</p></StorySection>
 <StorySection title="Connect the review to the work and recorded dates."><p>{page.work}</p><Link href="/platform/records/">Review expiry dates and supporting evidence</Link></StorySection>
 <StorySection title="Use the appropriate source for each decision."><p>{page.boundary}</p>{page.source&&<p><a href={page.source.href}>{page.source.title}</a></p>}<p><Link href={`/industries/${page.industry}/`}>Explore the related workforce workflow</Link></p></StorySection>
 <StoryCTA title={`Review ${page.role.toLowerCase()} evidence in a demo.`} href={`/contact/?sector=${page.industry}`}/>
 </StoryShell></>;
}
