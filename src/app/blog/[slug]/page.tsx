import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  BlogPostSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return siteMetadata({});
  const today = new Date().toISOString().split("T")[0];
  if (!post.meta.date || post.meta.date > today) return siteMetadata({});
  return siteMetadata({
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    ...(post.meta.archived ? {robots: {index: false, follow: true}} : {}),
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `https://certifyd.io/blog/${slug}/`,
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated || post.meta.date,
      authors: [post.meta.author],
    },
    twitter: {
      card: "summary",
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const today = new Date().toISOString().split("T")[0];
  if (!post.meta.date || post.meta.date > today) notFound();

  return (
    <>
      <BlogPostSchema
        title={post.meta.title}
        description={post.meta.excerpt}
        slug={slug}
        date={post.meta.date}
        updated={post.meta.updated}
        author={post.meta.author}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: post.meta.archived ? "Editorial archive" : "Blog", href: post.meta.archived ? "/blog/archive/" : "/blog/" },
          { name: post.meta.title, href: `/blog/${slug}/` },
        ]}
      />
      <div className="story"><div className="story-reading">
        <Link href={post.meta.archived ? "/blog/archive/" : "/blog/"} className="story-back">← {post.meta.archived ? "Browse the editorial archive" : "Browse practical guides"}</Link>
        <p className="story-label">{post.meta.archived ? "Historical editorial archive" : post.meta.category}</p>
        <h1>{post.meta.title}</h1>
        <p className="story-byline">{post.meta.author} · Published <time dateTime={post.meta.date}>{new Date(post.meta.date).toLocaleDateString("en-GB")}</time>{post.meta.updated&&<> · Updated <time dateTime={post.meta.updated}>{new Date(post.meta.updated).toLocaleDateString("en-GB")}</time></>}</p>
        <article className="prose prose-lg prose-certifyd max-w-none prose-headings:font-heading prose-a:text-certifyd-blue"><MDXRemote source={post.content}/></article>
      </div></div>
    </>
  );
}
