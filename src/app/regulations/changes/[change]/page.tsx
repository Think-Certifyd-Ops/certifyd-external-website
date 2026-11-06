import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/story/metadata";
import { GUIDES } from "@/data/regulations/guides";
import { SHOW_REGULATION_DRAFTS } from "@/lib/site";
import { GuidePage } from "@/components/site/GuidePage";

type Props = { params: Promise<{ change: string }> };
const LIST = GUIDES.filter((g) => g.kind === "change" && (g.status === "reviewed" || SHOW_REGULATION_DRAFTS));
export const dynamicParams = false;
export function generateStaticParams() { return LIST.length ? LIST.map((g) => ({ change: g.slug })) : [{ change: "right-to-work-october-2026" }]; }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).change;
  const g = LIST.find((x) => x.slug === slug);
  if (!g) return { robots: { index: false } };
  const m = pageMetadata(g.metaTitle, g.metaDescription, `/regulations/changes/${g.slug}/`);
  return g.status === "reviewed" ? m : { ...m, robots: { index: false, follow: true } };
}
export default async function Page({ params }: Props) {
  const slug = (await params).change;
  const g = LIST.find((x) => x.slug === slug);
  if (!g) notFound();
  return <GuidePage g={g} />;
}
