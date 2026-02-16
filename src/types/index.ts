export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  photo?: string;
  linkedin?: string;
}

export interface StoryCard {
  title: string;
  story: string;
  stat: string;
  statHighlight?: string;
  statSubtitle?: string;
  href: string;
}

export interface SolutionPage {
  slug: string;
  title: string;
  subtitle: string;
  heroTitle: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  content: string;
}

export interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  summary: string;
  changes: {
    category: "added" | "changed" | "fixed" | "removed";
    items: string[];
  }[];
}
