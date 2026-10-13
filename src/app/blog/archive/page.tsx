import {getAllPosts} from "@/lib/blog";
import {siteMetadata} from "@/lib/story/metadata";
import {StoryShell,StoryHero,StorySection,ReadingLinks} from "@/components/story/StoryParts";
export const metadata=siteMetadata({title:"Historical security editorial archive",description:"Earlier security articles, revised to distinguish sourced context from historical Certifyd concepts and currently available workforce features.",alternates:{canonical:"/blog/archive/"},robots:{index:false,follow:true}});
export default function Page(){const posts=getAllPosts(true).filter(post=>post.archived);return <StoryShell>
 <StoryHero label="Historical reading" title="Security editorial archive." intro="These earlier articles preserve their original URLs and publication dates. Their revised text explains the source evidence and separates past security concepts from the current workforce offer." action="Read current workforce guides" href="/blog/"/>
 <StorySection title="Browse the historical articles."><ReadingLinks items={posts.map(post=>({href:`/blog/${post.slug}/`,title:post.title,copy:post.excerpt}))}/></StorySection>
 </StoryShell>}
