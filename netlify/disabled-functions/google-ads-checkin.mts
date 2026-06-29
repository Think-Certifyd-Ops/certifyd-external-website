/**
 * Intraday Google Ads check-in — posts performance + recommendations to Slack.
 * Scheduled: 10:00 and 14:00 UTC (11AM and 3PM UK time).
 *
 * Lighter than the daily report — no negative keyword management, just
 * "here's how today is going and what I'd tweak".
 */

import type { Context } from "@netlify/functions";
import { query, postToSlack, getCustomerId } from "./google-ads-client.mts";

export const config = { schedule: "0 10,14 * * *" };

function todayDate(): string {
  return new Date().toISOString().split("T")[0];
}

function yesterdayDate(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

function formatCurrency(micros: number | string): string {
  const value = Number(micros) / 1_000_000;
  return `£${value.toFixed(2)}`;
}

function formatPercent(value: number | string): string {
  return `${(Number(value) * 100).toFixed(1)}%`;
}

interface CampaignStats {
  name: string;
  id: string;
  spend: number;
  clicks: number;
  impressions: number;
  conversions: number;
  budgetMicros: number;
}

async function getTodayPerformance(): Promise<CampaignStats[]> {
  const rows = await query(`
    SELECT
      campaign.name,
      campaign.id,
      campaign_budget.amount_micros,
      metrics.cost_micros,
      metrics.clicks,
      metrics.impressions,
      metrics.conversions,
      metrics.ctr
    FROM campaign
    WHERE segments.date = '${todayDate()}'
      AND campaign.status = 'ENABLED'
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
      budgetMicros: Number(row.campaignBudget?.amountMicros || 0),
    };
    existing.spend += Number(row.metrics?.costMicros || 0);
    existing.clicks += Number(row.metrics?.clicks || 0);
    existing.impressions += Number(row.metrics?.impressions || 0);
    existing.conversions += Number(row.metrics?.conversions || 0);
    campaignMap.set(name, existing);
  }

  return Array.from(campaignMap.values());
}

async function getYesterdayTotals(): Promise<{
  spend: number;
  clicks: number;
  conversions: number;
}> {
  const rows = await query(`
    SELECT
      metrics.cost_micros,
      metrics.clicks,
      metrics.conversions
    FROM campaign
    WHERE segments.date = '${yesterdayDate()}'
      AND campaign.status = 'ENABLED'
  `);

  let spend = 0, clicks = 0, conversions = 0;
  for (const row of rows) {
    spend += Number(row.metrics?.costMicros || 0);
    clicks += Number(row.metrics?.clicks || 0);
    conversions += Number(row.metrics?.conversions || 0);
  }
  return { spend, clicks, conversions };
}

async function getTopSearchTerms(): Promise<
  Array<{ term: string; clicks: number; conversions: number; costMicros: number }>
> {
  const rows = await query(`
    SELECT
      search_term_view.search_term,
      metrics.clicks,
      metrics.conversions,
      metrics.cost_micros
    FROM search_term_view
    WHERE segments.date = '${todayDate()}'
    ORDER BY metrics.clicks DESC
    LIMIT 5
  `);

  return rows.map((r: any) => ({
    term: r.searchTermView?.searchTerm || "",
    clicks: Number(r.metrics?.clicks || 0),
    conversions: Number(r.metrics?.conversions || 0),
    costMicros: Number(r.metrics?.costMicros || 0),
  }));
}

function generateRecommendations(
  campaigns: CampaignStats[],
  yesterday: { spend: number; clicks: number; conversions: number }
): string[] {
  const recs: string[] = [];
  const now = new Date();
  const hour = now.getUTCHours();
  // Rough fraction of day elapsed (UK time = UTC+0 in winter, UTC+1 in summer)
  const dayFraction = Math.min((hour + 1) / 24, 1);

  const totalSpend = campaigns.reduce((s, c) => s + c.spend, 0);
  const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
  const totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);
  const totalConversions = campaigns.reduce((s, c) => s + c.conversions, 0);
  const totalBudget = campaigns.reduce((s, c) => s + c.budgetMicros, 0);

  // Pacing check
  const expectedSpend = totalBudget * dayFraction;
  if (totalSpend > 0 && expectedSpend > 0) {
    const pacing = totalSpend / expectedSpend;
    if (pacing < 0.5) {
      recs.push("Underspending — pacing below 50% of daily budget. Keywords may be too narrow or bids too low.");
    } else if (pacing > 1.3) {
      recs.push("Overspending — on track to exceed daily budget. Check if broad match is eating spend.");
    }
  }

  // CTR check
  if (totalImpressions > 100) {
    const ctr = totalClicks / totalImpressions;
    if (ctr < 0.02) {
      recs.push(`CTR is ${formatPercent(ctr)} (below 2% target). Consider tightening keywords or testing new ad copy.`);
    } else if (ctr > 0.05) {
      recs.push(`CTR is strong at ${formatPercent(ctr)}. Ads are resonating — consider increasing budget on top performers.`);
    }
  }

  // Per-campaign recommendations
  for (const c of campaigns) {
    if (c.impressions > 50 && c.clicks === 0) {
      recs.push(`"${c.name}" has ${c.impressions} impressions but 0 clicks. Ad copy may need work.`);
    }
    if (c.clicks > 10 && c.conversions === 0 && c.spend > 10_000_000) {
      recs.push(`"${c.name}" has spent ${formatCurrency(c.spend)} with 0 conversions. Review landing page or pause if this continues.`);
    }
    if (c.conversions > 0 && c.spend / c.conversions < 20_000_000) {
      recs.push(`"${c.name}" is converting at ${formatCurrency(c.spend / c.conversions)} CPA — consider increasing its budget.`);
    }
  }

  // Compare to yesterday
  if (yesterday.spend > 0 && totalSpend > 0) {
    const spendRatio = totalSpend / (yesterday.spend * dayFraction);
    if (spendRatio > 1.5) {
      recs.push("Spending significantly more than yesterday at this point. Worth a manual check.");
    }
  }

  // No conversions yet
  if (totalClicks > 20 && totalConversions === 0) {
    recs.push("20+ clicks but no conversions yet today. Check landing pages are loading and forms are working.");
  }

  if (recs.length === 0) {
    recs.push("Everything looks on track. No immediate tweaks needed.");
  }

  return recs.slice(0, 4);
}

export default async (req: Request, _context: Context) => {
  try {
    // Check for active campaigns
    const activeCampaigns = await query(`
      SELECT campaign.name FROM campaign WHERE campaign.status = 'ENABLED' LIMIT 1
    `);

    if (activeCampaigns.length === 0) {
      return new Response(JSON.stringify({ ok: true, message: "No active campaigns — skipping check-in" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const campaigns = await getTodayPerformance();
    const yesterday = await getYesterdayTotals();
    const searchTerms = await getTopSearchTerms();
    const recs = generateRecommendations(campaigns, yesterday);

    const totalSpend = campaigns.reduce((s, c) => s + c.spend, 0);
    const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
    const totalConversions = campaigns.reduce((s, c) => s + c.conversions, 0);
    const totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);

    const now = new Date();
    const timeLabel = `${now.getUTCHours().toString().padStart(2, "0")}:${now.getUTCMinutes().toString().padStart(2, "0")} UTC`;

    const blocks: any[] = [
      {
        type: "header",
        text: { type: "plain_text", text: `Google Ads — Check-in (${timeLabel})`, emoji: true },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: [
            `*Today so far:* ${formatCurrency(totalSpend)} spent | ${totalClicks} clicks | ${totalImpressions} impressions | ${totalConversions} conversions`,
            totalClicks > 0
              ? `*CTR:* ${formatPercent(totalClicks / totalImpressions)} | *CPC:* ${formatCurrency(totalSpend / totalClicks)}`
              : "",
          ]
            .filter(Boolean)
            .join("\n"),
        },
      },
    ];

    // Per-campaign breakdown
    if (campaigns.length > 0) {
      const lines = campaigns
        .map((c) => {
          const pct = c.budgetMicros > 0 ? ` (${Math.round((c.spend / c.budgetMicros) * 100)}% of budget)` : "";
          return `• *${c.name}:* ${formatCurrency(c.spend)}${pct} | ${c.clicks} clicks | ${c.conversions} conv`;
        })
        .join("\n");

      blocks.push({
        type: "section",
        text: { type: "mrkdwn", text: `*Per campaign:*\n${lines}` },
      });
    }

    // Top search terms
    if (searchTerms.length > 0 && searchTerms.some((t) => t.clicks > 0)) {
      const termLines = searchTerms
        .filter((t) => t.clicks > 0)
        .map((t) => `• "${t.term}" — ${t.clicks} clicks, ${t.conversions} conv`)
        .join("\n");

      blocks.push({
        type: "section",
        text: { type: "mrkdwn", text: `*Top search terms today:*\n${termLines}` },
      });
    }

    // Recommendations
    blocks.push(
      { type: "divider" },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*What I'd tweak:*\n${recs.map((r) => `• ${r}`).join("\n")}`,
        },
      }
    );

    // CTA
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
      JSON.stringify({
        ok: true,
        today: {
          spend: formatCurrency(totalSpend),
          clicks: totalClicks,
          conversions: totalConversions,
        },
        recommendations: recs,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Google Ads check-in error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
