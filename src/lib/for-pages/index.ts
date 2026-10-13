import pages from "./records.json";
export interface ForRecordPage{slug:string;title:string;description:string;industry:string;intro:string;role:string;requirements:string[];review:string;work:string;boundary:string;source?:{title:string;href:string};archive?:boolean}
export const FOR_PAGES:ForRecordPage[]=pages;
export const FOR_REDIRECTS:Record<string,string>={"care-homes":"/industries/care/","domiciliary-care":"/industries/care/","recruitment-agencies":"/industries/recruitment/","staffing-agencies":"/industries/recruitment/","fwa-compliance":"/blog/fair-work-agency-april-2026/","right-to-work-penalties":"/blog/right-to-work-penalties-2026/"};
export function getAllForPages(){return FOR_PAGES.filter(page=>!page.archive)}
export function getForPageBySlug(slug:string){return FOR_PAGES.find(page=>page.slug===slug)}
export function getAllForPageSlugs(){return FOR_PAGES.map(page=>page.slug)}
export function forPageHref(slug:string){return FOR_REDIRECTS[slug]||`/for/${slug}/`}
