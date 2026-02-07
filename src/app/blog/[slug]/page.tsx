import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
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
