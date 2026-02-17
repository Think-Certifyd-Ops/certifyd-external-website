"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export function BlogHighlights({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  const displayed = posts.slice(0, 3);

  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="Resources"
            title="Latest from the Blog"
            align="center"
            dark={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {displayed.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group block bg-white border border-warm-border rounded-sm p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-certifyd-blue/20 hover:shadow-md"
              >
                <span className="inline-block text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-3">
                  {post.category}
                </span>

                <h3 className="font-heading text-base font-semibold text-text-on-light leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-text-on-light-muted mt-2 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-warm-border">
                  <time className="text-xs text-text-on-light-muted font-heading">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-certifyd-blue text-sm font-heading font-medium flex items-center gap-1">
                    Read
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-10">
            <Link
              href="/blog/"
              className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium group/link"
            >
              <span className="transition-transform duration-300 group-hover/link:-translate-x-0.5">
                View all articles
              </span>
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
