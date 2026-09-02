import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllEpisodes } from "@/lib/podcast";
import { getAllForPages } from "@/lib/for-pages";

export const dynamic = "force-static";

const BASE_URL = "https://certifyd.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/security`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/security/codewords`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/support/codewords`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/account-deletion`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contract-activation`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/careers`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Products
    {
      url: `${BASE_URL}/products`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/portal`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/verify`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/sentinel`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/codewords`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/codewords/family`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/codewords/business`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/id`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/shiftcheck`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/agent-watch`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/callcheck`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Industries
    {
      url: `${BASE_URL}/industries/recruitment`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/trades`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/care`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/nhs`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/workforce`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Partners
    {
      url: `${BASE_URL}/partners`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Resources (lead magnets)
    {
      url: `${BASE_URL}/resources/right-to-work-guide`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/fair-work-agency-checklist`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog index
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Tools hub
    {
      url: `${BASE_URL}/tools`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Individual tools
    {
      url: `${BASE_URL}/tools/penalty-calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/audit-probability`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/audit-readiness`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/cost-calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/deepfake-assessment`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/roi-calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const forPages: MetadataRoute.Sitemap = getAllForPages().map((page) => ({
    url: `${BASE_URL}/for/${page.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const podcastIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/podcast`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const podcastEpisodes: MetadataRoute.Sitemap = getAllEpisodes().map((ep) => ({
    url: `${BASE_URL}/podcast/${ep.slug}`,
    lastModified: new Date(ep.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...forPages, ...blogPosts, ...podcastIndex, ...podcastEpisodes];
}
