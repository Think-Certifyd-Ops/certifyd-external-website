/**
 * Weekly Google Ads review — posted to Slack every Friday at 09:00 UTC.
 * Comprehensive report with:
 * - Budget pacing
 * - Week-over-week performance comparison
 * - Top converting search terms
 * - Negative keywords added this week
 * - Rule-based recommendations
 */

import type { Context } from "@netlify/functions";
import { query, postToSlack, getCustomerId } from "./google-ads-client.mts";

export const config = { schedule: "0 9 * * 5" };

/** Target CPA thresholds (£) for recommendations */
const TARGET_CPA = 50;
const WEEKLY_BUDGET_MICROS = 420_000_000; // £420/week

function formatCurrency(micros: number | string): string {
  const value = Number(micros) / 1_000_000;
  return `£${value.toFixed(2)}`;
}

function formatPercent(value: number | string): string {
  return `${(Number(value) * 100).toFixed(1)}%`;
}

function percentChange(current: number, previous: number): string {
  if (previous === 0) return current > 0 ? "+inf" : "0%";
  const change = ((current - previous) / previous) * 100;
  const arrow = change >= 0 ? "↑" : "↓";
  return `${arrow} ${Math.abs(change).toFixed(0)}%`;
}

interface CampaignStats {
  name: string;
  id: string;
  spend: number;
  clicks: number;
  impressions: number;
  conversions: number;
  ctr: number;
}

async function getCampaignStats(dateRange: string): Promise<CampaignStats[]> {
  const rows = await query(`
    SELECT
      campaign.name,
      campaign.id,
      metrics.cost_micros,
      metrics.clicks,
      metrics.impressions,
      metrics.conversions,
      metrics.ctr
    FROM campaign
    WHERE segments.date DURING ${dateRange}
      AND campaign.status IN ('ENABLED', 'PAUSED')
    ORDER BY metrics.cost_micros DESC
  `);

  const campaignMap = new Map<string, CampaignStats>();
  for (const row of rows) {
    const name = row.campaign?.name || "Unknown";
    const existing = campaignMap.get(name) || {
      name,
      id: row.campaign?.id || "",
      spend: 0,
      clicks: 0,
      impressions: 0,
      conversions: 0,
      ctr: 0,
    };
    existing.spend += Number(row.metrics?.costMicros || 0);
    existing.clicks += Number(row.metrics?.clicks || 0);
    existing.impressions += Number(row.metrics?.impressions || 0);
    existing.conversions += Number(row.metrics?.conversions || 0);
    campaignMap.set(name, existing);
  }

  return Array.from(campaignMap.values()).map((c) => ({
    ...c,
    ctr: c.impressions > 0 ? c.clicks / c.impressions : 0,
  }));
}

async function getTopSearchTerms(): Promise<
  Array<{ term: string; conversions: number; costMicros: number; clicks: number }>
> {
  const rows = await query(`
    SELECT
      search_term_view.search_term,
      metrics.conversions,
      metrics.cost_micros,
      metrics.clicks
    FROM search_term_view
    WHERE segments.date DURING LAST_7_DAYS
      AND metrics.conversions > 0
    ORDER BY metrics.conversions DESC
    LIMIT 10
  `);

  return rows.map((row) => ({
    term: row.searchTermView?.searchTerm || "",
    conversions: Number(row.metrics?.conversions || 0),
    costMicros: Number(row.metrics?.costMicros || 0),
    clicks: Number(row.metrics?.clicks || 0),
  }));
}

async function getAdGroupPerformance(): Promise<
  Array<{ adGroupName: string; campaignName: string; conversions: number; spend: number; days: number }>
> {
  const rows = await query(`
    SELECT
      ad_group.name,
      campaign.name,
      metrics.conversions,
      metrics.cost_micros
    FROM ad_group
    WHERE segments.date DURING LAST_14_DAYS
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
    ORDER BY metrics.conversions ASC
  `);

  return rows.map((row) => ({
    adGroupName: row.adGroup?.name || "",
    campaignName: row.campaign?.name || "",
    conversions: Number(row.metrics?.conversions || 0),
    spend: Number(row.metrics?.costMicros || 0),
    days: 14,
  }));
}

function generateRecommendations(
  thisWeek: CampaignStats[],
  lastWeek: CampaignStats[],
  adGroups: Array<{ adGroupName: string; campaignName: string; conversions: number; spend: number; days: number }>,
  topTerms: Array<{ term: string; conversions: number }>
): string[] {
  const recommendations: string[] = [];

  const totalSpend = thisWeek.reduce((sum, c) => sum + c.spend, 0);
  const totalConversions = thisWeek.reduce((sum, c) => sum + c.conversions, 0);
  const overallCPA = totalConversions > 0 ? totalSpend / totalConversions / 1_000_000 : 0;

  // Budget pacing
  if (totalSpend < WEEKLY_BUDGET_MICROS * 0.7) {
    recommendations.push("Underspending — consider broadening keywords or increasing bids");
  }

  // CPA-based recommendations per campaign
  for (const campaign of thisWeek) {
    const cpa = campaign.conversions > 0 ? campaign.spend / campaign.conversions / 1_000_000 : 0;

    if (campaign.conversions > 0 && cpa < TARGET_CPA * 0.7 && campaign.spend > 0) {
      recommendations.push(
        `Consider increasing *${campaign.name}* budget — CPA is ${formatCurrency(campaign.spend / campaign.conversions)} (below £${TARGET_CPA} target)`
      );
    }

    if (campaign.impressions > 0 && campaign.ctr < 0.02) {
      recommendations.push(
        `*${campaign.name}* CTR is ${formatPercent(campaign.ctr)} — test new ad copy`
      );
    }
  }

  // Ad groups with 0 conversions in 14 days
  for (const ag of adGroups) {
    if (ag.conversions === 0 && ag.spend > 10_000_000) {
      recommendations.push(
        `Pause *${ag.adGroupName}* in ${ag.campaignName} — 0 conversions in ${ag.days} days, ${formatCurrency(ag.spend)} spent`
      );
    }
  }

  // High-converting search terms to promote
  for (const term of topTerms) {
    if (term.conversions >= 3) {
      recommendations.push(
        `Promote "${term.term}" to exact match — ${term.conversions} conversions`
      );
    }
  }

  return recommendations.slice(0, 5);
}

export default async (req: Request, _context: Context) => {
  try {
    const thisWeek = await getCampaignStats("LAST_7_DAYS");
    const lastWeek = await getCampaignStats("LAST_14_DAYS");

    // Calculate aggregates
    const twTotals = thisWeek.reduce(
      (acc, c) => ({
        spend: acc.spend + c.spend,
        clicks: acc.clicks + c.clicks,
        impressions: acc.impressions + c.impressions,
        conversions: acc.conversions + c.conversions,
      }),
      { spend: 0, clicks: 0, impressions: 0, conversions: 0 }
    );
    const twCtr = twTotals.impressions > 0 ? twTotals.clicks / twTotals.impressions : 0;
    const twCpa = twTotals.conversions > 0 ? twTotals.spend / twTotals.conversions : 0;

    // Last week totals (subtract this week from 14-day)
    const lwTotals = lastWeek.reduce(
      (acc, c) => ({
        spend: acc.spend + c.spend,
        clicks: acc.clicks + c.clicks,
        impressions: acc.impressions + c.impressions,
        conversions: acc.conversions + c.conversions,
      }),
      { spend: 0, clicks: 0, impressions: 0, conversions: 0 }
    );
    const lwOnlySpend = lwTotals.spend - twTotals.spend;
    const lwOnlyConversions = lwTotals.conversions - twTotals.conversions;
    const lwOnlyClicks = lwTotals.clicks - twTotals.clicks;
    const lwOnlyImpressions = lwTotals.impressions - twTotals.impressions;
    const lwOnlyCtr = lwOnlyImpressions > 0 ? lwOnlyClicks / lwOnlyImpressions : 0;
    const lwOnlyCpa = lwOnlyConversions > 0 ? lwOnlySpend / lwOnlyConversions : 0;

    const topTerms = await getTopSearchTerms();
    const adGroups = await getAdGroupPerformance();
    const recommendations = generateRecommendations(thisWeek, lastWeek, adGroups, topTerms);

    // Budget pacing
    const pacingPercent = (twTotals.spend / WEEKLY_BUDGET_MICROS) * 100;
    const pacingLabel =
      pacingPercent > 110
        ? "Overspending"
        : pacingPercent < 70
          ? "Underspending"
          : "On track";

    // Best / worst campaign
    const sortedByCPA = thisWeek
      .filter((c) => c.conversions > 0)
      .sort((a, b) => a.spend / a.conversions - b.spend / b.conversions);
    const bestCampaign = sortedByCPA[0];
    const worstCampaign = sortedByCPA[sortedByCPA.length - 1];

    // Build Slack blocks
    const blocks: any[] = [
      {
        type: "header",
        text: { type: "plain_text", text: "Google Ads — Weekly Review (Mon–Fri)", emoji: true },
      },
      { type: "divider" },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: [
            "*Budget*",
            `Total spend: ${formatCurrency(twTotals.spend)} / ${formatCurrency(WEEKLY_BUDGET_MICROS)} weekly budget`,
            `Pacing: ${pacingLabel} (${pacingPercent.toFixed(0)}%)`,
          ].join("\n"),
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: [
            "*Performance*",
            `Conversions: ${twTotals.conversions} (${percentChange(twTotals.conversions, lwOnlyConversions)} vs last week)`,
            `CPA: ${twTotals.conversions > 0 ? formatCurrency(twCpa) : "N/A"} (${lwOnlyConversions > 0 ? percentChange(twCpa, lwOnlyCpa) : "N/A"} vs last week)`,
            `CTR: ${formatPercent(twCtr)} (${percentChange(twCtr, lwOnlyCtr)} vs last week)`,
            bestCampaign
              ? `Best campaign: *${bestCampaign.name}* — ${bestCampaign.conversions} conv at ${formatCurrency(bestCampaign.spend / bestCampaign.conversions)} CPA`
              : "",
            worstCampaign && worstCampaign !== bestCampaign
              ? `Worst campaign: *${worstCampaign.name}* — ${worstCampaign.conversions} conv at ${formatCurrency(worstCampaign.spend / worstCampaign.conversions)} CPA`
              : "",
          ]
            .filter(Boolean)
            .join("\n"),
        },
      },
    ];

    // Top search terms
    if (topTerms.length > 0) {
      const termLines = topTerms
        .slice(0, 5)
        .map(
          (t, i) =>
            `${i + 1}. "${t.term}" — ${t.conversions} conv, ${formatCurrency(t.costMicros / Math.max(t.conversions, 1))} CPA`
        )
        .join("\n");

      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Top Search Terms (by conversions)*\n${termLines}`,
        },
      });
    }

    // Recommendations
    if (recommendations.length > 0) {
      blocks.push(
        { type: "divider" },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Recommendations*\n${recommendations.map((r) => `• ${r}`).join("\n")}`,
          },
        }
      );
    }

    // Link
    blocks.push({
      type: "actions",
      elements: [
        {
          type: "button",
          text: { type: "plain_text", text: "Open Google Ads" },
          url: `https://ads.google.com/aw/campaigns?ocid=${getCustomerId()}`,
        },
      ],
    });

    await postToSlack(blocks);

    return new Response(
      JSON.stringify({ ok: true, conversions: twTotals.conversions, spend: formatCurrency(twTotals.spend) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Google Ads weekly review error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
