import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PODCAST_DIR = path.join(process.cwd(), "content", "podcast");

export const SHOW_CONFIG = {
  title: "Gone Phishing with Certifyd",
  subtitle: "Conversations about identity, trust, and the humans behind the tech",
  author: "Certifyd",
  ownerName: "Andrew Speer",
  ownerEmail: "team@certifyd.io",
  description:
    "Gone Phishing is the podcast where we talk to the people behind cybersecurity, identity, and trust. Real stories from practitioners — not vendor pitches.",
  category: "Technology",
  language: "en-gb",
  imageUrl: "https://www.certifyd.io/podcast/cover-art.jpg",
  feedUrl: "https://www.certifyd.io/podcast/feed.xml",
  siteUrl: "https://www.certifyd.io/podcast/",
  explicit: false,
} as const;

export interface EpisodeGuest {
  name: string;
  title: string;
  company: string;
  bio: string;
}

export interface EpisodeChapter {
  time: string;
  title: string;
}

export interface EpisodeMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  guest: EpisodeGuest;
  host: string;
  duration: string;
  durationSeconds: number;
  audioFile: string;
  tags: string[];
  chapters: EpisodeChapter[];
  explicit: boolean;
}

function getTodayIsoDate(): string {
  return new Date().toISOString().split("T")[0];
}

function isPublished(date: string): boolean {
  if (!date) return false;
  return date <= getTodayIsoDate();
}

export function getAllEpisodes(): EpisodeMeta[] {
  if (!fs.existsSync(PODCAST_DIR)) return [];

  const files = fs.readdirSync(PODCAST_DIR).filter((f) => f.endsWith(".mdx"));

  const episodes = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(PODCAST_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      guest: data.guest || { name: "", title: "", company: "", bio: "" },
      host: data.host || "Andrew Speer",
      duration: data.duration || "00:00",
      durationSeconds: data.durationSeconds || 0,
      audioFile: data.audioFile || "",
      tags: data.tags || [],
      chapters: data.chapters || [],
      explicit: data.explicit ?? false,
    };
  });

  return episodes
    .filter((e) => isPublished(e.date))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getEpisodeBySlug(slug: string) {
  const filePath = path.join(PODCAST_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      guest: data.guest || { name: "", title: "", company: "", bio: "" },
      host: data.host || "Andrew Speer",
      duration: data.duration || "00:00",
      durationSeconds: data.durationSeconds || 0,
      audioFile: data.audioFile || "",
      tags: data.tags || [],
      chapters: data.chapters || [],
      explicit: data.explicit ?? false,
    } as EpisodeMeta,
    content,
  };
}

export function getAllEpisodeSlugs(): string[] {
  if (!fs.existsSync(PODCAST_DIR)) return [];
  return fs
    .readdirSync(PODCAST_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .filter((filename) => {
      const filePath = path.join(PODCAST_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);
      return isPublished(data.date || "");
    })
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAudioFileSize(audioFile: string): number {
  const filePath = path.join(process.cwd(), "public", "podcast", "audio", audioFile);
  if (!fs.existsSync(filePath)) return 0;
  return fs.statSync(filePath).size;
}
