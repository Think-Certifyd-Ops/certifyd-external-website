import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Identity Verification, Compliance & Trust Insights",
  description:
    "Insights on identity verification, right-to-work compliance, deepfake threats, and building trust in UK businesses. Expert analysis from the Certifyd team.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Certifyd Blog — Identity Verification & Compliance Insights",
    description:
      "Expert insights on identity verification, right-to-work compliance, and building trust in UK businesses.",
    url: "https://certifyd.io/blog/",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold">Blog</h1>
          <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mt-6">
            Insights on identity verification, compliance, and building trust in
            business.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-light">
        <div className="section-container">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-on-light-muted text-lg">
                Blog posts coming soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group bg-white border border-warm-border rounded-sm p-6 hover:border-certifyd-blue/30 hover:shadow-lg transition-all"
                >
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-lg font-semibold text-text-on-light group-hover:text-certifyd-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-on-light-muted text-sm mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-4 text-xs text-text-on-light-muted">
                    <span>{post.author}</span>
                    <span>&middot;</span>
                    <time>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
