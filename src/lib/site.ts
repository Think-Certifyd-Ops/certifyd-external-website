/** Site-wide settings for the November 2026 rebuild. */

export const SITE_URL = "https://certifyd.io";

/** Main call to action everywhere: a 20-minute demo (Michael's review, 6 Nov 2026). */
export const DEMO_HREF = "/contact/#booking";
export const CONTACT_HREF = "/contact/#enquiry";
export const LOGIN_HREF = "https://app.certifyd.io/";

/**
 * Message Certifyd (the WhatsApp chat) is built but switched off until it has been tested.
 * Turn it on with NEXT_PUBLIC_MESSAGE_CERTIFYD=on and NEXT_PUBLIC_WHATSAPP_NUMBER=447… in Netlify.
 */
export const MESSAGE_CERTIFYD_ON = process.env.NEXT_PUBLIC_MESSAGE_CERTIFYD === "on";
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const WHATSAPP_HREF = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Certifyd")}` : CONTACT_HREF;

/**
 * The regulations library went live on 9 November 2026 so it can start ranking (Andrew's call).
 * Every role and guide is built, listed and indexed. `status` in roles.json and guides.ts now records
 * whether a person has reviewed the page; unreviewed pages show "Updated" instead of "Reviewed by".
 * Set REGULATIONS_LIVE=off in Netlify to take unreviewed pages down again (they then build on previews only).
 */
export const REGULATIONS_LIVE = process.env.REGULATIONS_LIVE !== "off";
export const SHOW_REGULATION_DRAFTS =
  REGULATIONS_LIVE || process.env.REGULATIONS_DRAFTS === "on" || (process.env.REGULATIONS_DRAFTS !== "off" && (process.env.CONTEXT ?? "local") !== "production");

/** Film files. Drop the MP4 and captions into /public/videos/ and set available to true.
 * Until then the film band on the homepage is hidden and other film spots show an illustration. */
export const FILMS = {
  care: { label: "Health and care", file: "/videos/certifyd-website-hero-v2.mp4", captions: "/videos/certifyd-website-hero-v2.vtt", length: "1:25", available: false },
  warehouse: { label: "Warehouse and logistics", file: "/videos/certifyd-website-hero-v1.mp4", captions: "/videos/certifyd-website-hero-v1.vtt", length: "1:20", available: false },
} as const;
export type FilmKey = keyof typeof FILMS;
export const ANY_FILM = Object.values(FILMS).some((f) => f.available);
