/**
 * One-time setup: Create Google Ads conversion actions.
 * POST /api/google-ads/conversions (secured with x-function-secret header)
 *
 * Creates 3 conversion actions:
 * - "Website - Demo Request" (£50 value)
 * - "Website - Lead Magnet" (£10 value)
 * - "Website - Waitlist Signup" (£5 value)
 *
 * Returns the conversion labels needed for gtag send_to.
 */

import type { Context } from "@netlify/functions";
import { mutate, query, validateSecret, getCustomerResourceName } from "./google-ads-client.mts";

interface ConversionAction {
  name: string;
  category: string;
  type: string;
  defaultValue: number;
}

const CONVERSION_ACTIONS: ConversionAction[] = [
  {
    name: "Website - Demo Request",
    category: "SUBMIT_LEAD_FORM",
    type: "WEBPAGE",
    defaultValue: 50,
  },
  {
    name: "Website - Lead Magnet",
    category: "SUBMIT_LEAD_FORM",
    type: "WEBPAGE",
    defaultValue: 10,
  },
  {
    name: "Website - Waitlist Signup",
    category: "SIGNUP",
    type: "WEBPAGE",
    defaultValue: 5,
  },
];

export default async (req: Request, _context: Context) => {
  // GET: Query existing conversion actions to retrieve labels
  if (req.method === "GET") {
    if (!validateSecret(req)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const rows = await query(`
        SELECT
          conversion_action.name,
          conversion_action.id,
          conversion_action.resource_name,
          conversion_action.tag_snippets
        FROM conversion_action
        WHERE conversion_action.name IN (
          'Website - Demo Request',
          'Website - Lead Magnet',
          'Website - Waitlist Signup'
        )
      `);

      return new Response(JSON.stringify({ ok: true, conversionActions: rows }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || "Internal error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }

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
    const customerResource = getCustomerResourceName();
    const results: Array<{ name: string; resourceName: string; tagSnippet?: string }> = [];

    for (const action of CONVERSION_ACTIONS) {
      const operations = [
        {
          create: {
            name: action.name,
            category: action.category,
            type: action.type,
            status: "ENABLED",
            valueSettings: {
              defaultValue: action.defaultValue,
              defaultCurrencyCode: "GBP",
              alwaysUseDefaultValue: false,
            },
            countingType: "ONE_PER_CLICK",
            attributionModelSettings: {
              attributionModel: "GOOGLE_ADS_LAST_CLICK",
              dataDrivenModelStatus: "UNKNOWN",
            },
            clickThroughLookbackWindowDays: 30,
            viewThroughLookbackWindowDays: 1,
          },
        },
      ];

      const result = await mutate("conversionActions", operations);
      const resourceName = result?.results?.[0]?.resourceName || "unknown";
      results.push({ name: action.name, resourceName });
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message:
          "Conversion actions created. Copy the resource names below and use the Google Ads UI or API to get the conversion labels (gtag send_to values).",
        conversionActions: results,
        nextStep:
          "After deploying, query the conversion actions to get the tag_snippets/labels, then update GOOGLE_ADS_CONVERSIONS in src/lib/constants.ts",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("Conversion actions creation error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
