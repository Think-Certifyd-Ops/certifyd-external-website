import {getAllForPages} from "@/lib/for-pages";
import {ReadingLinks,StorySection} from "./StoryParts";
export function IndustryRoleLinks({industry}:{industry:string}){
 const pages=getAllForPages().filter(page=>page.industry===industry);
 return <StorySection title="Review evidence requirements for related roles."><ReadingLinks items={pages.map(page=>({href:`/for/${page.slug}/`,title:page.title,copy:page.intro}))}/>{["recruitment","workforce"].includes(industry)&&<p><a href="/contract-activation/">Explore the human-reviewed Contract Activation pilot</a></p>}</StorySection>;
}
