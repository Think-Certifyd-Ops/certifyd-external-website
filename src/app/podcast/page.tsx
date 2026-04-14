import type { Metadata } from "next";
import Link from "next/link";
import { getAllEpisodes, SHOW_CONFIG } from "@/lib/podcast";

export const metadata: Metadata = {
  title: "Gone Phishing Podcast — Conversations About Identity & Trust",
  description: SHOW_CONFIG.description,
  alternates: {
    canonical: "/podcast/",
    types: {
      "application/rss+xml": "/podcast/feed.xml",
    },
  },
  openGraph: {
    title: "Gone Phishing with Certifyd",
    description: SHOW_CONFIG.description,
    url: "https://www.certifyd.io/podcast/",
  },
};

export default function PodcastPage() {
  const episodes = getAllEpisodes();

  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            Podcast
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold">
            Gone Phishing
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mt-6">
            {SHOW_CONFIG.subtitle}
          </p>

          {/* Subscribe buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="/podcast/feed.xml"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 rounded-sm text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
              </svg>
              RSS Feed
            </a>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-light">
        <div className="section-container">
          {episodes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-on-light-muted text-lg">
                Episodes coming soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {episodes.map((episode, index) => (
                <Link
                  key={episode.slug}
                  href={`/podcast/${episode.slug}/`}
                  className="group block bg-white border border-warm-border rounded-sm p-6 hover:border-certifyd-blue/30 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-certifyd-navy text-white flex items-center justify-center font-heading font-bold text-lg">
                      {episodes.length - index}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-lg font-semibold text-text-on-light group-hover:text-certifyd-blue transition-colors">
                        {episode.title}
                      </h2>
                      <p className="text-sm text-text-on-light-muted mt-1">
                        with {episode.guest.name} — {episode.guest.title},{" "}
                        {episode.guest.company}
                      </p>
                      <p className="text-text-on-light-muted text-sm mt-3 leading-relaxed">
                        {episode.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-text-on-light-muted">
                        <time>
                          {new Date(episode.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <span>&middot;</span>
                        <span>{episode.duration}</span>
                        {episode.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-certifyd-blue/10 text-certifyd-blue"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
