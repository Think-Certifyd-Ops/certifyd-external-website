import Link from "next/link";
import { onboardingPages } from "@/lib/onboarding-pages";
export function OnboardingWorkflowSections({slug}:{slug:string}) {
 const page=onboardingPages.find(p=>p.slug===`solutions/${slug}`);
 if(!page)return null;
 return <section className="section on-paper" aria-labelledby="workflow-detail-title"><div className="wrap stack gap-24"><h2 id="workflow-detail-title" className="h2">{page.title}</h2><p className="lead">{page.description}</p><div className="grid-2">{page.sections.map(([title,copy])=><article key={title} className="card-flat pad stack gap-12"><h3 className="h3">{title}</h3><p className="body">{copy}</p></article>)}</div><h3 className="h3">Explore the steps in your process</h3><div className="btn-row">{onboardingPages.filter(p=>!p.slug.endsWith("healthcare-staffing")&&!p.slug.endsWith("care-providers")).map(p=><Link className="btn btn-secondary" key={p.slug} href={`/${p.slug}/`}>{p.title}</Link>)}</div></div></section>
}
