/**
 * Daily Google Ads performance report + automatic negative keyword refresh.
 * Scheduled: 08:00 UTC daily (also manually triggerable via POST).
 *
 * 1. Pulls yesterday's + 7-day rolling campaign performance via GAQL
 * 2. Audits search terms → auto-adds negatives for wasteful queries
 * 3. Posts summary + any new negatives to Slack
 */

import type { Context } from "@netlify/functions";
import { query, mutate, postToSlack, getCustomerId } from "./google-ads-client.mts";

export const config = { schedule: "0 8 * * *" };

/** Known junk patterns to auto-negative */
const JUNK_PATTERNS = [
  "free", "template", "download", "gov.uk", "jobs", "salary", "training",
  "login", "sign in", "share code", "home office login", "check online free",
  "australia", "fair work commission", "fair work ombudsman",
];

function formatCurrency(micros: number | string): string {
  const value = Number(micros) / 1_000_000;
  return `£${value.toFixed(2)}`;
}

function formatPercent(value: number | string): string {
  return `${(Number(value) * 100).toFixed(1)}%`;
}

async function getPerformanceData() {
  const customerId = getCustomerId();

  // Yesterday's performance
  const yesterdayRows = await query(`
    SELECT
      campaign.name,
      campaign.id,
      metrics.cost_micros,
      metrics.clicks,
      metrics.impressions,
      metrics.conversions,
      metrics.cost_per_conversion,
      metrics.ctr
    FROM campaign
    WHERE segments.date = YESTERDAY
      AND campaign.status = 'ENABLED'
    ORDER BY metrics.cost_micros DESC
  `);

  // 7-day rolling performance
  const weekRows = await query(`
    SELECT
      campaign.name,
      campaign.id,
      metrics.cost_micros,
      metrics.clicks,
      metrics.impressions,
      metrics.conversions,
      metrics.cost_per_conversion,
      metrics.ctr
    FROM campaign
    WHERE segments.date DURING LAST_7_DAYS
      AND campaign.status = 'ENABLED'
    ORDER BY metrics.cost_micros DESC
  `);

  return { yesterdayRows, weekRows };
}

function aggregateRows(rows: any[]): {
  spend: number;
  clicks: number;
  impressions: number;
  conversions: number;
  ctr: number;
  cpa: number;
} {
  let spend = 0, clicks = 0, impressions = 0, conversions = 0;
  for (const row of rows) {
    const m = row.metrics;
    spend += Number(m.costMicros || 0);
    clicks += Number(m.clicks || 0);
    impressions += Number(m.impressions || 0);
    conversions += Number(m.conversions || 0);
  }
  return {
    spend,
    clicks,
    impressions,
    conversions,
    ctr: impressions > 0 ? clicks / impressions : 0,
    cpa: conversions > 0 ? spend / conversions : 0,
  };
}

async function auditSearchTerms(): Promise<Array<{
  term: string;
  campaignName: string;
  campaignId: string;
  clicks: number;
  impressions: number;
  conversions: number;
  costMicros: number;
  reason: string;
}>> {
  const rows = await query(`
    SELECT
      search_term_view.search_term,
      campaign.name,
      campaign.id,
      metrics.clicks,
      metrics.impressions,
      metrics.conversions,
      metrics.cost_micros
    FROM search_term_view
    WHERE segments.date DURING LAST_7_DAYS
    ORDER BY metrics.cost_micros DESC
    LIMIT 500
  `);

  const negatives: Array<{
    term: string;
    campaignName: string;
    campaignId: string;
    clicks: number;
    impressions: number;
    conversions: number;
    costMicros: number;
    reason: string;
  }> = [];

  for (const row of rows) {
    const term = (row.searchTermView?.searchTerm || "").toLowerCase();
    const clicks = Number(row.metrics?.clicks || 0);
    const impressions = Number(row.metrics?.impressions || 0);
    const conversions = Number(row.metrics?.conversions || 0);
    const costMicros = Number(row.metrics?.costMicros || 0);
    const campaignName = row.campaign?.name || "Unknown";
    const campaignId = row.campaign?.id || "";

    // Skip terms that already convert
    if (conversions > 0) continue;

    let reason = "";

    // Check junk patterns
    if (JUNK_PATTERNS.some((p) => term.includes(p))) {
      reason = "junk pattern match";
    }
    // Impressions but 0 clicks over many impressions (irrelevant)
    else if (impressions >= 50 && clicks === 0) {
      reason = `${impressions} impressions, 0 clicks`;
    }
    // Clicks but 0 conversions and high spend (£5+ CPC)
    else if (clicks > 0 && costMicros / clicks > 5_000_000) {
      reason = `${clicks} clicks, 0 conv, ${formatCurrency(costMicros)} wasted`;
    }

    if (reason) {
      negatives.push({
        term,
        campaignName,
        campaignId,
        clicks,
        impressions,
        conversions,
        costMicros,
        reason,
      });
    }
  }

  return negatives;
}

async function addNegativeKeywords(
  negatives: Array<{ term: string; campaignId: string }>
): Promise<number> {
  if (negatives.length === 0) return 0;

  const customerId = getCustomerId();

  // Group by campaign
  const byCampaign = new Map<string, string[]>();
  for (const neg of negatives) {
    const existing = byCampaign.get(neg.campaignId) || [];
    existing.push(neg.term);
    byCampaign.set(neg.campaignId, existing);
  }

  let added = 0;
  for (const [campaignId, terms] of byCampaign) {
    const operations = terms.map((term) => ({
      create: {
        campaignNegativeKeyword: {
          campaign: `customers/${customerId}/campaigns/${campaignId}`,
          keyword: {
            text: term,
            matchType: "PHRASE",
          },
        },
      },
    }));

    try {
      await mutate("campaignCriteria", operations);
      added += terms.length;
    } catch (err) {
      console.error(`Failed to add negatives to campaign ${campaignId}:`, err);
    }
  }

  return added;
}

async function buildSlackReport(
  yesterday: ReturnType<typeof aggregateRows>,
  week: ReturnType<typeof aggregateRows>,
  weekRows: any[],
  negatives: Array<{ term: string; campaignName: string; reason: string }>,
  negativesAdded: number
) {
  const blocks: any[] = [
    {
      type: "header",
      text: { type: "plain_text", text: "Google Ads — Daily Performance", emoji: true },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: [
          `*Yesterday:* ${formatCurrency(yesterday.spend)} spent | ${yesterday.clicks} clicks | ${yesterday.conversions} conversions${yesterday.conversions > 0 ? ` | ${formatCurrency(yesterday.cpa)} CPA` : ""}`,
          `*7-day:* ${formatCurrency(week.spend)} spent | ${week.clicks} clicks | ${week.conversions} conversions${week.conversions > 0 ? ` | ${formatCurrency(week.cpa)} CPA` : ""} | ${formatPercent(week.ctr)} CTR`,
        ].join("\n"),
      },
    },
  ];

  // Per-campaign breakdown (from 7-day data)
  const campaignMap = new Map<string, ReturnType<typeof aggregateRows>>();
  for (const row of weekRows) {
    const name = row.campaign?.name || "Unknown";
    const existing = campaignMap.get(name) || {
      spend: 0, clicks: 0, impressions: 0, conversions: 0, ctr: 0, cpa: 0,
    };
    existing.spend += Number(row.metrics?.costMicros || 0);
    existing.clicks += Number(row.metrics?.clicks || 0);
    existing.impressions += Number(row.metrics?.impressions || 0);
    existing.conversions += Number(row.metrics?.conversions || 0);
    campaignMap.set(name, existing);
  }

  if (campaignMap.size > 0) {
    const campaignLines = Array.from(campaignMap.entries())
      .sort((a, b) => b[1].spend - a[1].spend)
      .map(([name, stats]) => {
        const cpa = stats.conversions > 0 ? ` | ${formatCurrency(stats.spend / stats.conversions)} CPA` : "";
        return `• *${name}:* ${formatCurrency(stats.spend)} | ${stats.clicks} clicks | ${stats.conversions} conv${cpa}`;
      })
      .join("\n");

    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*Per-campaign (7-day):*\n${campaignLines}` },
    });
  }

  // Negative keywords section
  if (negatives.length > 0) {
    const negLines = negatives
      .slice(0, 10)
      .map((n) => `• "${n.term}" (PHRASE) — ${n.reason}`)
      .join("\n");

    blocks.push(
      { type: "divider" },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Negative Keywords Added (auto): ${negativesAdded}*\n${negLines}${negatives.length > 10 ? `\n_...and ${negatives.length - 10} more_` : ""}`,
        },
      }
    );
  }

  // Link to Google Ads
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

  return blocks;
}

export default async (req: Request, _context: Context) => {
  try {
    // Check if there are any active campaigns first
    const activeCampaigns = await query(`
      SELECT campaign.name
      FROM campaign
      WHERE campaign.status = 'ENABLED'
      LIMIT 1
    `);

    if (activeCampaigns.length === 0) {
      const blocks = [
        {
          type: "header",
          text: { type: "plain_text", text: "Google Ads — Daily Performance", emoji: true },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "No active campaigns. Enable a campaign to start seeing performance data.",
          },
        },
      ];
      await postToSlack(blocks);
      return new Response(JSON.stringify({ ok: true, message: "No active campaigns" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get performance data
    const { yesterdayRows, weekRows } = await getPerformanceData();
    const yesterday = aggregateRows(yesterdayRows);
    const week = aggregateRows(weekRows);

    // Audit search terms and auto-add negatives
    const negatives = await auditSearchTerms();
    const negativesAdded = await addNegativeKeywords(
      negatives.map((n) => ({ term: n.term, campaignId: n.campaignId }))
    );

    // Post to Slack
    const blocks = await buildSlackReport(yesterday, week, weekRows, negatives, negativesAdded);
    await postToSlack(blocks);

    return new Response(
      JSON.stringify({
        ok: true,
        yesterday: {
          spend: formatCurrency(yesterday.spend),
          clicks: yesterday.clicks,
          conversions: yesterday.conversions,
        },
        week: {
          spend: formatCurrency(week.spend),
          clicks: week.clicks,
          conversions: week.conversions,
          ctr: formatPercent(week.ctr),
        },
        negativesAdded,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Google Ads report error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
