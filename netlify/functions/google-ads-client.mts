/**
 * Shared Google Ads API client helper.
 * Handles OAuth token refresh and provides reusable query/mutate wrappers.
 * Uses REST API v23 with direct fetch() — zero dependencies.
 */

const API_VERSION = "v23";
const BASE_URL = `https://googleads.googleapis.com/${API_VERSION}`;
const TOKEN_URL = "https://oauth2.googleapis.com/token";

interface GoogleAdsConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  developerToken: string;
  customerId: string;
}

function getConfig(): GoogleAdsConfig {
  const clientId = Netlify.env.get("GOOGLE_ADS_CLIENT_ID");
  const clientSecret = Netlify.env.get("GOOGLE_ADS_CLIENT_SECRET");
  const refreshToken = Netlify.env.get("GOOGLE_ADS_REFRESH_TOKEN");
  const developerToken = Netlify.env.get("GOOGLE_ADS_DEVELOPER_TOKEN");
  const customerId = Netlify.env.get("GOOGLE_ADS_CUSTOMER_ID");

  if (!clientId || !clientSecret || !refreshToken || !developerToken || !customerId) {
    throw new Error(
      "Missing Google Ads env vars. Required: GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN, GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID"
    );
  }

  return { clientId, clientSecret, refreshToken, developerToken, customerId };
}

/** Cached access token + expiry */
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(config: GoogleAdsConfig): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: config.refreshToken,
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

function formatCustomerId(id: string): string {
  return id.replace(/-/g, "");
}

/** Execute a GAQL query and return rows */
export async function query(gaql: string): Promise<any[]> {
  const config = getConfig();
  const accessToken = await getAccessToken(config);
  const customerId = formatCustomerId(config.customerId);

  const res = await fetch(
    `${BASE_URL}/customers/${customerId}/googleAds:searchStream`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": config.developerToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gaql }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google Ads query failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  // searchStream returns an array of batches, each with a results array
  const rows: any[] = [];
  for (const batch of data) {
    if (batch.results) {
      rows.push(...batch.results);
    }
  }
  return rows;
}

/** Execute a mutate request (create/update/remove resources) */
export async function mutate(
  resource: string,
  operations: any[]
): Promise<any> {
  const config = getConfig();
  const accessToken = await getAccessToken(config);
  const customerId = formatCustomerId(config.customerId);

  const res = await fetch(
    `${BASE_URL}/customers/${customerId}/${resource}:mutate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": config.developerToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ operations }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google Ads mutate failed (${res.status}): ${text}`);
  }

  return res.json();
}

/** Post a message to Slack via webhook */
export async function postToSlack(blocks: any[]): Promise<void> {
  const webhookUrl = Netlify.env.get("SLACK_WEBHOOK_URL");
  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL not configured — skipping Slack post");
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blocks }),
  }).catch((err) => console.error("Slack post failed:", err));
}

/** Validate the shared function secret for secured endpoints */
export function validateSecret(req: Request): boolean {
  const secret = Netlify.env.get("GOOGLE_ADS_FUNCTION_SECRET");
  if (!secret) return false;
  const provided = req.headers.get("x-function-secret");
  return provided === secret;
}

/** Get the customer ID (formatted without dashes) */
export function getCustomerId(): string {
  const config = getConfig();
  return formatCustomerId(config.customerId);
}

/** Get the customer resource name */
export function getCustomerResourceName(): string {
  return `customers/${getCustomerId()}`;
}
