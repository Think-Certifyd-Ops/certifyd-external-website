/**
 * Morning briefing — Google Analytics + Search Console + Ads summary → Slack.
 * Scheduled: 09:00 UTC (9AM UK winter / 10AM UK summer).
 *
 * Pulls yesterday's data from:
 * 1. GA4 Data API — visitors, page views, top pages, traffic sources
 * 2. Search Console API — clicks, impressions, top queries, CTR
 * 3. Google Ads — spend, clicks, conversions (summary only)
 *
 * Requires additional env vars:
 * - GOOGLE_ANALYTICS_PROPERTY_ID — GA4 numeric property ID (found in GA4 Admin → Property Settings)
 * - GOOGLE_SEARCH_CONSOLE_SITE — site URL, e.g. "https://www.certifyd.io" (or "sc-domain:certifyd.io")
 *
 * Reuses the existing Google OAuth credentials (GOOGLE_ADS_CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN).
 * The refresh token must have these scopes:
 * - https://www.googleapis.com/auth/analytics.readonly
 * - https://www.googleapis.com/auth/webmasters.readonly
 */

import type { Context } from "@netlify/functions";
import { query as adsQuery, postToSlack, getCustomerId } from "./google-ads-client.mts";

export const config = { schedule: "0 9 * * *" };

const TOKEN_URL = "https://oauth2.googleapis.com/token";

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const clientId = Netlify.env.get("GOOGLE_ADS_CLIENT_ID");
  const clientSecret = Netlify.env.get("GOOGLE_ADS_CLIENT_SECRET");
  const refreshToken = Netlify.env.get("GOOGLE_ADS_REFRESH_TOKEN");

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing OAuth env vars");
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OAuth token refresh failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cachedToken.token;
}

// ── GA4 Data API ────────────────────────────────────────────

interface GA4Summary {
  users: number;
  newUsers: number;
  sessions: number;
  pageViews: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  topSources: Array<{ source: string; users: number }>;
}

async function getGA4Data(): Promise<GA4Summary | null> {
  const propertyId = Netlify.env.get("GOOGLE_ANALYTICS_PROPERTY_ID");
  if (!propertyId) return null;

  const accessToken = await getAccessToken();
  const baseUrl = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;

  // Summary metrics for yesterday
  const summaryRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
      metrics: [
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "averageSessionDuration" },
      ],
    }),
  });

  if (!summaryRes.ok) {
    const text = await summaryRes.text();
    console.error(`GA4 summary failed (${summaryRes.status}): ${text}`);
    return null;
  }

  const summary = await summaryRes.json();
  const values = summary.rows?.[0]?.metricValues || [];

  // Top pages
  const pagesRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 5,
    }),
  });

  const pagesData = await pagesRes.json();
  const topPages = (pagesData.rows || []).map((r: any) => ({
    path: r.dimensionValues?.[0]?.value || "",
    views: Number(r.metricValues?.[0]?.value || 0),
  }));

  // Top sources
  const sourcesRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
      dimensions: [{ name: "sessionSource" }],
      metrics: [{ name: "activeUsers" }],
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 5,
    }),
  });

  const sourcesData = await sourcesRes.json();
  const topSources = (sourcesData.rows || []).map((r: any) => ({
    source: r.dimensionValues?.[0]?.value || "(direct)",
    users: Number(r.metricValues?.[0]?.value || 0),
  }));

  return {
    users: Number(values[0]?.value || 0),
    newUsers: Number(values[1]?.value || 0),
    sessions: Number(values[2]?.value || 0),
    pageViews: Number(values[3]?.value || 0),
    avgSessionDuration: Number(values[4]?.value || 0),
    topPages,
    topSources,
  };
}

// ── Search Console API ──────────────────────────────────────

interface GSCData {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  topQueries: Array<{ query: string; clicks: number; impressions: number; position: number }>;
  topPages: Array<{ page: string; clicks: number; impressions: number }>;
}

async function getSearchConsoleData(): Promise<GSCData | null> {
  const siteUrl = Netlify.env.get("GOOGLE_SEARCH_CONSOLE_SITE");
  if (!siteUrl) return null;

  const accessToken = await getAccessToken();
  const encodedSite = encodeURIComponent(siteUrl);
  const baseUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`;

  // Yesterday's date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = yesterday.toISOString().split("T")[0];

  // Note: Search Console data can be delayed 2-3 days.
  // We query last 3 days and label it accordingly.
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const startDate = threeDaysAgo.toISOString().split("T")[0];

  // Summary
  const summaryRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate: dateStr,
      dimensions: [],
    }),
  });

  if (!summaryRes.ok) {
    const text = await summaryRes.text();
    console.error(`GSC summary failed (${summaryRes.status}): ${text}`);
    return null;
  }

  const summary = await summaryRes.json();
  const totals = summary.rows?.[0] || {};

  // Top queries
  const queriesRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate: dateStr,
      dimensions: ["query"],
      rowLimit: 10,
    }),
  });

  const queriesData = await queriesRes.json();
  const topQueries = (queriesData.rows || []).map((r: any) => ({
    query: r.keys?.[0] || "",
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    position: Math.round(r.position || 0),
  }));

  // Top pages
  const pagesRes = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate: dateStr,
      dimensions: ["page"],
      rowLimit: 5,
    }),
  });

  const pagesData = await pagesRes.json();
  const topPages = (pagesData.rows || []).map((r: any) => ({
    page: (r.keys?.[0] || "").replace("https://www.certifyd.io", ""),
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
  }));

  return {
    clicks: totals.clicks || 0,
    impressions: totals.impressions || 0,
    ctr: totals.ctr || 0,
    position: totals.position || 0,
    topQueries,
    topPages,
  };
}

// ── Google Ads summary ──────────────────────────────────────

interface AdsSummary {
  spend: number;
  clicks: number;
  conversions: number;
}

async function getAdsSummary(): Promise<AdsSummary | null> {
  try {
    const rows = await adsQuery(`
      SELECT
        metrics.cost_micros,
        metrics.clicks,
        metrics.conversions
      FROM campaign
      WHERE segments.date = YESTERDAY
        AND campaign.status = 'ENABLED'
    `);

    let spend = 0, clicks = 0, conversions = 0;
    for (const row of rows) {
      spend += Number(row.metrics?.costMicros || 0);
      clicks += Number(row.metrics?.clicks || 0);
      conversions += Number(row.metrics?.conversions || 0);
    }
    return { spend, clicks, conversions };
  } catch {
    return null;
  }
}

// ── Build Slack message ─────────────────────────────────────

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function buildSlackBlocks(
  ga4: GA4Summary | null,
  gsc: GSCData | null,
  ads: AdsSummary | null
): any[] {
  const blocks: any[] = [
    {
      type: "header",
      text: { type: "plain_text", text: "Good Morning — Daily Briefing", emoji: true },
    },
  ];

  // ── GA4 Section ──
  if (ga4) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: [
          "*Website (yesterday):*",
          `${ga4.users} visitors (${ga4.newUsers} new) | ${ga4.sessions} sessions | ${ga4.pageViews} page views | ${formatDuration(ga4.avgSessionDuration)} avg session`,
        ].join("\n"),
      },
    });

    if (ga4.topPages.length > 0) {
      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Top pages:*\n${ga4.topPages.map((p) => `• \`${p.path}\` — ${p.views} views`).join("\n")}`,
        },
      });
    }

    if (ga4.topSources.length > 0) {
      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Traffic sources:*\n${ga4.topSources.map((s) => `• ${s.source} — ${s.users} users`).join("\n")}`,
        },
      });
    }
  } else {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: "_GA4 not connected — set `GOOGLE_ANALYTICS_PROPERTY_ID` in Netlify._" },
    });
  }

  blocks.push({ type: "divider" });

  // ── Search Console Section ──
  if (gsc) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: [
          "*Search Console (last 3 days):*",
          `${gsc.clicks} clicks | ${gsc.impressions} impressions | ${(gsc.ctr * 100).toFixed(1)}% CTR | avg position ${gsc.position.toFixed(1)}`,
        ].join("\n"),
      },
    });

    if (gsc.topQueries.length > 0) {
      const queryLines = gsc.topQueries
        .slice(0, 7)
        .map((q) => `• "${q.query}" — ${q.clicks} clicks, ${q.impressions} imp, pos ${q.position}`)
        .join("\n");
      blocks.push({
        type: "section",
        text: { type: "mrkdwn", text: `*Top search queries:*\n${queryLines}` },
      });
    }

    if (gsc.topPages.length > 0) {
      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Top organic pages:*\n${gsc.topPages.map((p) => `• \`${p.page}\` — ${p.clicks} clicks, ${p.impressions} imp`).join("\n")}`,
        },
      });
    }
  } else {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: "_Search Console not connected — set `GOOGLE_SEARCH_CONSOLE_SITE` in Netlify._" },
    });
  }

  blocks.push({ type: "divider" });

  // ── Ads Summary ──
  if (ads && ads.spend > 0) {
    const spend = `£${(ads.spend / 1_000_000).toFixed(2)}`;
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Google Ads (yesterday):*\n${spend} spent | ${ads.clicks} clicks | ${ads.conversions} conversions`,
      },
    });
  } else if (ads) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: "*Google Ads:* No spend yesterday (campaigns paused or no impressions)." },
    });
  }

  // ── Links ──
  blocks.push({
    type: "actions",
    elements: [
      {
        type: "button",
        text: { type: "plain_text", text: "Google Analytics" },
        url: `https://analytics.google.com/analytics/web/#/p${Netlify.env.get("GOOGLE_ANALYTICS_PROPERTY_ID") || ""}/reports/intelligenthome`,
      },
      {
        type: "button",
        text: { type: "plain_text", text: "Search Console" },
        url: "https://search.google.com/search-console?resource_id=https%3A%2F%2Fwww.certifyd.io%2F",
      },
      {
        type: "button",
        text: { type: "plain_text", text: "Google Ads" },
        url: `https://ads.google.com/aw/campaigns?ocid=${getCustomerId()}`,
      },
    ],
  });

  return blocks;
}

export default async (req: Request, _context: Context) => {
  try {
    // Fetch all three in parallel
    const [ga4, gsc, ads] = await Promise.all([
      getGA4Data(),
      getSearchConsoleData(),
      getAdsSummary(),
    ]);

    const blocks = buildSlackBlocks(ga4, gsc, ads);
    await postToSlack(blocks);

    return new Response(
      JSON.stringify({ ok: true, ga4: !!ga4, gsc: !!gsc, ads: !!ads }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Morning briefing error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
