import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllEpisodeSlugs, getEpisodeBySlug, getAllEpisodes } from "@/lib/podcast";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  PodcastEpisodeSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { AudioPlayer } from "@/components/podcast/AudioPlayer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEpisodeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};
  const today = new Date().toISOString().split("T")[0];
  if (!episode.meta.date || episode.meta.date > today) return {};
  return {
    title: `${episode.meta.title} — Gone Phishing Podcast`,
    description: episode.meta.description,
    alternates: { canonical: `/podcast/${slug}/` },
    openGraph: {
      title: episode.meta.title,
      description: episode.meta.description,
      url: `https://www.certifyd.io/podcast/${slug}/`,
      type: "article",
      publishedTime: episode.meta.date,
    },
    twitter: {
      card: "summary",
      title: episode.meta.title,
      description: episode.meta.description,
    },
  };
}

export default async function PodcastEpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();
  const today = new Date().toISOString().split("T")[0];
  if (!episode.meta.date || episode.meta.date > today) notFound();

  const { meta, content } = episode;
  const audioUrl = `/podcast/audio/${meta.audioFile}`;

  // Calculate episode number (oldest = 1)
  const allEpisodes = getAllEpisodes();
  const episodeNumber = allEpisodes.length - allEpisodes.findIndex((e) => e.slug === slug);

  return (
    <>
      <PodcastEpisodeSchema
        title={meta.title}
        description={meta.description}
        slug={slug}
        date={meta.date}
        duration={meta.duration}
        audioUrl={`https://www.certifyd.io${audioUrl}`}
        guestName={meta.guest.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Podcast", href: "/podcast/" },
          { name: meta.title, href: `/podcast/${slug}/` },
        ]}
      />

      {/* Header */}
      <section className="section-dark bg-grid-pattern pt-32 pb-16">
        <div className="section-container max-w-3xl">
          <Link
            href="/podcast/"
            className="text-text-on-dark-muted hover:text-white transition-colors text-sm mb-8 inline-block"
          >
            &larr; Back to Podcast
          </Link>
          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
            Episode {episodeNumber}
          </span>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-text-on-dark-muted">
            <span>
              with {meta.guest.name} — {meta.guest.title}, {meta.guest.company}
            </span>
            <span>&middot;</span>
            <time>
              {new Date(meta.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{meta.duration}</span>
          </div>
        </div>
      </section>

      {/* Audio Player */}
      <section className="bg-warm-white py-8">
        <div className="section-container max-w-3xl">
          <AudioPlayer src={audioUrl} title={meta.title} />
        </div>
      </section>

      {/* Chapters */}
      {meta.chapters.length > 0 && (
        <section className="bg-warm-white pb-8">
          <div className="section-container max-w-3xl">
            <details className="bg-white border border-warm-border rounded-sm">
              <summary className="px-6 py-4 cursor-pointer font-heading font-semibold text-sm text-text-on-light hover:text-certifyd-blue transition-colors">
                Chapters ({meta.chapters.length})
              </summary>
              <div className="px-6 pb-4">
                <ol className="space-y-2">
                  {meta.chapters.map((chapter, i) => (
                    <li key={i} className="flex items-baseline gap-3 text-sm">
                      <span className="font-mono text-text-on-light-muted text-xs flex-shrink-0">
                        {chapter.time}
                      </span>
                      <span className="text-text-on-light">
                        {chapter.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-warm-white py-8 lg:py-12">
        <div className="section-container max-w-3xl">
          <article className="prose prose-lg prose-certifyd max-w-none prose-headings:font-heading prose-a:text-certifyd-blue prose-a:underline-offset-2 prose-strong:text-text-on-light prose-img:rounded-sm">
            <MDXRemote source={content} />
          </article>
        </div>
      </section>
    </>
  );
}
