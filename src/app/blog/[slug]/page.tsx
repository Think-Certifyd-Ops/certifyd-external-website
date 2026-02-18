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
  if (!post) return {};
  const today = new Date().toISOString().split("T")[0];
  if (!post.meta.date || post.meta.date > today) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `https://www.certifyd.io/blog/${slug}/`,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
    twitter: {
      card: "summary",
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  };
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
        author={post.meta.author}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.meta.title, href: `/blog/${slug}/` },
        ]}
      />
      {/* Header */}
      <section className="section-dark bg-grid-pattern pt-32 pb-16">
        <div className="section-container max-w-3xl">
          <Link
            href="/blog/"
            className="text-text-on-dark-muted hover:text-white transition-colors text-sm mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
            {post.meta.category}
          </span>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-text-on-dark-muted">
            <span>{post.meta.author}</span>
            <span>&middot;</span>
            <time>
              {new Date(post.meta.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-12 lg:py-16">
        <div className="section-container max-w-3xl">
          <article className="prose prose-lg prose-certifyd max-w-none prose-headings:font-heading prose-a:text-certifyd-blue prose-a:underline-offset-2 prose-strong:text-text-on-light prose-img:rounded-sm">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </section>
    </>
  );
}
