"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BreadcrumbSchema} from "./JsonLd";

const pages:Record<string,[string,string?]>={
 "/platform/records":["Tracked records"],
 "/outcomes/reduce-compliance-risk":["Compliance gaps"],
 "/outcomes/import-compliance-records":["Import records"],
 "/outcomes/reduce-compliance-admin":["Document requests and renewals"],
 "/outcomes/verified-worker-check-in":["Site check-in"],
 "/outcomes/portable-worker-credentials":["Worker credentials"],
 "/industries/care":["Care workforce records"],
 "/industries/recruitment":["Recruitment placement evidence"],
 "/industries/nhs":["NHS staff credentials"],
 "/industries/workforce":["Workforce compliance records"],
 "/industries/trades":["Visiting-worker profiles"],
 "/products/id":["ID-document sharing"],
 "/security":["Record access and sharing"],
 "/about":["About Certifyd"],
 "/blog":["Workforce compliance guides"],
 "/tools":["Workforce compliance tools"],
 "/tools/cost-calculator":["Review cost calculator","/tools/"],
 "/tools/roi-calculator":["Process cost comparison","/tools/"],
 "/tools/audit-readiness":["Worker-record review checklist","/tools/"],
 "/tools/audit-probability":["Enforcement data guide","/tools/"],
 "/tools/penalty-calculator":["Right-to-work penalty scenarios","/tools/"],
 "/resources/right-to-work-guide":["Right-to-work guide"],
 "/resources/fair-work-agency-checklist":["Fair Work Agency checklist"],
 "/resources/worker-record-review-checklist":["Worker-record review checklist"],
 "/resources/recruitment-placement-evidence-checklist":["Placement-evidence checklist"],
};
export function PageBreadcrumbs(){
 const path=usePathname().replace(/\/$/,"");const page=pages[path];if(!page)return null;
 const items=[{name:"Home",href:"/"},...(page[1]?[{name:"Tools",href:page[1]}]:[]),{name:page[0],href:`${path}/`}];
 return <><BreadcrumbSchema items={items}/><nav aria-label="Breadcrumb" className="site-breadcrumbs"><ol>{items.map((item,i)=><li key={item.href}>{i>0&&<span aria-hidden="true">/</span>}{i===items.length-1?<span aria-current="page">{item.name}</span>:<Link href={item.href}>{item.name}</Link>}</li>)}</ol></nav></>;
}
