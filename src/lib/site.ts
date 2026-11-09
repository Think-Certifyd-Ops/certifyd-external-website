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

/**
 * Films in /public/videos (review cuts added 9 Nov 2026). Each has a poster frame (.jpg) and captions burned
 * into the picture, so there is no separate captions file. To swap in a final cut, replace the MP4 and keep
 * the name. Set available to false to hide a film: the homepage band disappears and other spots show a still.
 */
export const FILMS = {
  overview: { label: "The 30-second film", file: "/videos/certifyd-film-30s.mp4", poster: "/videos/certifyd-film-30s.jpg", length: "0:33", available: true },
  problem: { label: "The problem", file: "/videos/certifyd-clip-01-the-problem.mp4", poster: "/videos/certifyd-clip-01-the-problem.jpg", length: "0:27", available: true },
  askOnce: { label: "Ask once", file: "/videos/certifyd-clip-02-ask-once.mp4", poster: "/videos/certifyd-clip-02-ask-once.jpg", length: "0:26", available: true },
  workers: { label: "The worker's side", file: "/videos/certifyd-clip-03-the-workers-side.mp4", poster: "/videos/certifyd-clip-03-the-workers-side.jpg", length: "0:25", available: true },
  door: { label: "At the door", file: "/videos/certifyd-clip-04-at-the-door.mp4", poster: "/videos/certifyd-clip-04-at-the-door.jpg", length: "0:22", available: true },
  audit: { label: "Audit-ready", file: "/videos/certifyd-clip-05-audit-ready.mp4", poster: "/videos/certifyd-clip-05-audit-ready.jpg", length: "0:22", available: true },
} as const;
export type FilmKey = keyof typeof FILMS;
export const ANY_FILM = Object.values(FILMS).some((f) => f.available);
