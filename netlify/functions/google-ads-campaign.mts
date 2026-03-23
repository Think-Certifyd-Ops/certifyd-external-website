/**
 * Campaign CRUD — create, pause, resume, update Google Ads campaigns.
 * POST /api/google-ads/campaign (secured with x-function-secret header)
 *
 * Actions:
 * - create: Atomic creation of budget + campaign + ad groups + keywords + negatives + ads
 * - pause: Pause a campaign by resource name
 * - resume: Enable a campaign by resource name
 * - update: Update campaign settings
 *
 * All campaigns start PAUSED.
 */

import type { Context } from "@netlify/functions";
import { mutate, postToSlack, validateSecret, getCustomerId, getCustomerResourceName } from "./google-ads-client.mts";

interface AdGroupConfig {
  name: string;
  keywords: Array<{ text: string; matchType: "EXACT" | "PHRASE" | "BROAD" }>;
  negativeKeywords?: string[];
  ad: {
    headlines: string[];
    descriptions: string[];
    path1?: string;
    path2?: string;
  };
  finalUrl: string;
}

interface CreateCampaignRequest {
  action: "create";
  name: string;
  dailyBudgetMicros: number;
  adGroups: AdGroupConfig[];
  negativeKeywords?: string[];
}

interface PauseResumeRequest {
  action: "pause" | "resume";
  campaignResourceName: string;
}

interface UpdateRequest {
  action: "update";
  campaignResourceName: string;
  updates: Record<string, any>;
}

type ActionRequest = CreateCampaignRequest | PauseResumeRequest | UpdateRequest;

async function createCampaign(config: CreateCampaignRequest) {
  const customerId = getCustomerId();
  const customerResource = getCustomerResourceName();

  // Step 1: Create campaign budget
  const budgetResult = await mutate("campaignBudgets", [
    {
      create: {
        name: `${config.name} — Daily Budget`,
        amountMicros: String(config.dailyBudgetMicros),
        deliveryMethod: "STANDARD",
        explicitlyShared: false,
      },
    },
  ]);
  const budgetResourceName = budgetResult?.results?.[0]?.resourceName;
  if (!budgetResourceName) throw new Error("Failed to create budget");

  // Step 2: Create campaign (PAUSED, Search only, UK + English)
  const campaignResult = await mutate("campaigns", [
    {
      create: {
        name: config.name,
        status: "PAUSED",
        advertisingChannelType: "SEARCH",
        campaignBudget: budgetResourceName,
        networkSettings: {
          targetGoogleSearch: true,
          targetSearchNetwork: false,
          targetContentNetwork: false,
          targetPartnerSearchNetwork: false,
        },
        geoTargetTypeSetting: {
          positiveGeoTargetType: "PRESENCE",
          negativeGeoTargetType: "PRESENCE_OR_INTEREST",
        },
        biddingStrategyType: "MAXIMIZE_CONVERSIONS",
      },
    },
  ]);
  const campaignResourceName = campaignResult?.results?.[0]?.resourceName;
  if (!campaignResourceName) throw new Error("Failed to create campaign");

  // Step 3: Set geo target (UK = 2826) and language (English = 1000)
  await mutate("campaignCriteria", [
    {
      create: {
        campaign: campaignResourceName,
        location: {
          geoTargetConstant: "geoTargetConstants/2826",
        },
      },
    },
    {
      create: {
        campaign: campaignResourceName,
        language: {
          languageConstant: "languageConstants/1000",
        },
      },
    },
  ]);

  // Step 4: Campaign-level negative keywords
  if (config.negativeKeywords && config.negativeKeywords.length > 0) {
    const negOps = config.negativeKeywords.map((kw) => ({
      create: {
        campaign: campaignResourceName,
        negative: true,
        keyword: {
          text: kw,
          matchType: "PHRASE",
        },
      },
    }));
    await mutate("campaignCriteria", negOps);
  }

  // Step 5: Create ad groups + keywords + ads
  const adGroupResults: string[] = [];

  for (const ag of config.adGroups) {
    // Create ad group
    const agResult = await mutate("adGroups", [
      {
        create: {
          name: ag.name,
          campaign: campaignResourceName,
          status: "ENABLED",
          type: "SEARCH_STANDARD",
        },
      },
    ]);
    const agResourceName = agResult?.results?.[0]?.resourceName;
    if (!agResourceName) throw new Error(`Failed to create ad group: ${ag.name}`);
    adGroupResults.push(agResourceName);

    // Add keywords
    const kwOps = ag.keywords.map((kw) => ({
      create: {
        adGroup: agResourceName,
        keyword: {
          text: kw.text,
          matchType: kw.matchType,
        },
        status: "ENABLED",
      },
    }));
    await mutate("adGroupCriteria", kwOps);

    // Add ad group-level negative keywords
    if (ag.negativeKeywords && ag.negativeKeywords.length > 0) {
      const negOps = ag.negativeKeywords.map((kw) => ({
        create: {
          adGroup: agResourceName,
          negative: true,
          keyword: {
            text: kw,
            matchType: "PHRASE",
          },
        },
      }));
      await mutate("adGroupCriteria", negOps);
    }

    // Create responsive search ad
    const adOps = [
      {
        create: {
          adGroup: agResourceName,
          ad: {
            responsiveSearchAd: {
              headlines: ag.ad.headlines.map((h, i) => ({
                text: h,
                pinnedField: i === 0 ? "HEADLINE_1" : undefined,
              })),
              descriptions: ag.ad.descriptions.map((d) => ({
                text: d,
              })),
              path1: ag.ad.path1 || undefined,
              path2: ag.ad.path2 || undefined,
            },
            finalUrls: [ag.finalUrl],
          },
          status: "ENABLED",
        },
      },
    ];
    await mutate("adGroupAds", adOps);
  }

  return {
    campaignResourceName,
    budgetResourceName,
    adGroups: adGroupResults,
  };
}

async function pauseOrResumeCampaign(
  campaignResourceName: string,
  status: "PAUSED" | "ENABLED"
) {
  await mutate("campaigns", [
    {
      update: {
        resourceName: campaignResourceName,
        status,
      },
      updateMask: "status",
    },
  ]);
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!validateSecret(req)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as ActionRequest;

    if (body.action === "create") {
      const result = await createCampaign(body);

      // Slack notification
      await postToSlack([
        {
          type: "header",
          text: { type: "plain_text", text: "Google Ads — Campaign Created", emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Campaign:*\n${body.name}` },
            { type: "mrkdwn", text: `*Status:*\nPAUSED (review before enabling)` },
            { type: "mrkdwn", text: `*Daily Budget:*\n£${(body.dailyBudgetMicros / 1_000_000).toFixed(0)}` },
            { type: "mrkdwn", text: `*Ad Groups:*\n${body.adGroups.length}` },
          ],
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: { type: "plain_text", text: "Open Google Ads" },
              url: `https://ads.google.com/aw/campaigns?ocid=${getCustomerId()}`,
            },
          ],
        },
      ]);

      return new Response(JSON.stringify({ ok: true, ...result }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (body.action === "pause") {
      await pauseOrResumeCampaign(body.campaignResourceName, "PAUSED");
      return new Response(JSON.stringify({ ok: true, status: "PAUSED" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (body.action === "resume") {
      await pauseOrResumeCampaign(body.campaignResourceName, "ENABLED");
      return new Response(JSON.stringify({ ok: true, status: "ENABLED" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use: create, pause, resume" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Google Ads campaign error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
