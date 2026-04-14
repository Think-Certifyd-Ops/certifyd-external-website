/**
 * Build-time RSS feed generator for the Gone Phishing podcast.
 * Runs after `next build` and writes feed.xml into the static export directory.
 *
 * Usage: tsx scripts/generate-rss.ts
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const OUT_DIR = path.join(process.cwd(), "out");
const PODCAST_DIR = path.join(process.cwd(), "content", "podcast");
const AUDIO_DIR = path.join(process.cwd(), "public", "podcast", "audio");
const BASE_URL = "https://www.certifyd.io";

const SHOW = {
  title: "Gone Phishing with Certifyd",
  subtitle: "Conversations about identity, trust, and the humans behind the tech",
  author: "Certifyd",
  ownerName: "Andrew Speer",
  ownerEmail: "team@certifyd.io",
  description:
    "Gone Phishing is the podcast where we talk to the people behind cybersecurity, identity, and trust. Real stories from practitioners — not vendor pitches.",
  category: "Technology",
  language: "en-gb",
  imageUrl: `${BASE_URL}/podcast/cover-art.jpg`,
  feedUrl: `${BASE_URL}/podcast/feed.xml`,
  siteUrl: `${BASE_URL}/podcast/`,
  explicit: false,
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getAudioFileSize(filename: string): number {
  const filePath = path.join(AUDIO_DIR, filename);
  if (!fs.existsSync(filePath)) return 0;
  return fs.statSync(filePath).size;
}

interface Episode {
  slug: string;
  title: string;
  date: string;
  description: string;
  guest: { name: string; title: string; company: string };
  duration: string;
  durationSeconds: number;
  audioFile: string;
  explicit: boolean;
}

function loadEpisodes(): Episode[] {
  if (!fs.existsSync(PODCAST_DIR)) return [];

  const today = new Date().toISOString().split("T")[0];

  return fs
    .readdirSync(PODCAST_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(PODCAST_DIR, filename);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        guest: data.guest || { name: "", title: "", company: "" },
        duration: data.duration || "00:00",
        durationSeconds: data.durationSeconds || 0,
        audioFile: data.audioFile || "",
        explicit: data.explicit ?? false,
      };
    })
    .filter((e) => e.date && e.date <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function buildFeed(episodes: Episode[]): string {
  const pubDate = episodes.length > 0 ? new Date(episodes[0].date).toUTCString() : new Date().toUTCString();

  const items = episodes
    .map((ep, index) => {
      const episodeNumber = episodes.length - index;
      const audioSize = getAudioFileSize(ep.audioFile);
      const audioUrl = `${BASE_URL}/podcast/audio/${ep.audioFile}`;
      const episodeUrl = `${BASE_URL}/podcast/${ep.slug}/`;
      const pubDateStr = new Date(ep.date).toUTCString();

      return `    <item>
      <title>${escapeXml(ep.title)}</title>
      <link>${episodeUrl}</link>
      <guid isPermaLink="true">${episodeUrl}</guid>
      <pubDate>${pubDateStr}</pubDate>
      <description>${escapeXml(ep.description)}</description>
      <enclosure url="${audioUrl}" length="${audioSize}" type="audio/mpeg" />
      <itunes:title>${escapeXml(ep.title)}</itunes:title>
      <itunes:author>${escapeXml(SHOW.author)}</itunes:author>
      <itunes:summary>${escapeXml(ep.description)}</itunes:summary>
      <itunes:duration>${ep.durationSeconds}</itunes:duration>
      <itunes:explicit>${ep.explicit ? "true" : "false"}</itunes:explicit>
      <itunes:episode>${episodeNumber}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:podcast="https://podcastindex.org/namespace/1.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SHOW.title)}</title>
    <link>${SHOW.siteUrl}</link>
    <description>${escapeXml(SHOW.description)}</description>
    <language>${SHOW.language}</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${SHOW.feedUrl}" rel="self" type="application/rss+xml" />
    <itunes:title>${escapeXml(SHOW.title)}</itunes:title>
    <itunes:subtitle>${escapeXml(SHOW.subtitle)}</itunes:subtitle>
    <itunes:author>${escapeXml(SHOW.author)}</itunes:author>
    <itunes:summary>${escapeXml(SHOW.description)}</itunes:summary>
    <itunes:owner>
      <itunes:name>${escapeXml(SHOW.ownerName)}</itunes:name>
      <itunes:email>${SHOW.ownerEmail}</itunes:email>
    </itunes:owner>
    <itunes:image href="${SHOW.imageUrl}" />
    <itunes:category text="${SHOW.category}" />
    <itunes:explicit>${SHOW.explicit ? "true" : "false"}</itunes:explicit>
    <itunes:type>episodic</itunes:type>
    <podcast:locked>no</podcast:locked>
    <image>
      <url>${SHOW.imageUrl}</url>
      <title>${escapeXml(SHOW.title)}</title>
      <link>${SHOW.siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`;
}

// ── Main ──────────────────────────────────────────────────
const episodes = loadEpisodes();
const feed = buildFeed(episodes);

const outPath = path.join(OUT_DIR, "podcast", "feed.xml");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, feed, "utf-8");

console.log(`[podcast-rss] Wrote ${episodes.length} episode(s) to ${outPath}`);
