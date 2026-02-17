import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemTicker } from "@/components/home/ProblemTicker";
import { TrustMosaic } from "@/components/home/FourStories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { MetricsBar } from "@/components/home/MetricsBar";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogHighlights } from "@/components/home/BlogHighlights";
import { HomeCTA } from "@/components/home/HomeCTA";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title:
    "Certifyd — Identity Verification for Businesses | Right-to-Work & Compliance",
  description:
    "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready — in 30 seconds.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Certifyd — Identity Verification for Businesses",
    description:
      "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready — in 30 seconds.",
    url: "https://www.certifyd.io",
  },
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <ProblemTicker />
      <TrustMosaic />
      <HowItWorks />
      <WhatWeDo />
      <MetricsBar />
      <Testimonials />
      <BlogHighlights posts={posts} />
      <HomeCTA />
    </>
  );
}
