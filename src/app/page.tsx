import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProductSuite } from "@/components/home/ProductSuite";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title:
    "Certifyd — Identity Infrastructure for Business | Verification & Compliance",
  description:
    "Identity infrastructure to protect businesses against fraud. Right-to-work compliance, pre-meeting verification, and doorstep ID — all on one platform.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Certifyd — Identity Infrastructure for Business",
    description:
      "Identity infrastructure to protect businesses against fraud. Right-to-work compliance, pre-meeting verification, and doorstep ID — all on one platform.",
    url: "https://www.certifyd.io",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSuite />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
