/** Site-wide settings for the November 2026 rebuild. */

export const SITE_URL = "https://certifyd.io";

/** Main call to action everywhere: a 20-minute demo (Michael's review, 6 Nov 2026). */
export const DEMO_HREF = "/contact/#booking";
export const CONTACT_HREF = "/contact/#enquiry";
export const LOGIN_HREF = "https://certifyd-portal.netlify.app/login";

/**
 * Message Certifyd (the WhatsApp chat) is built but switched off until it has been tested.
 * Turn it on with NEXT_PUBLIC_MESSAGE_CERTIFYD=on and NEXT_PUBLIC_WHATSAPP_NUMBER=447… in Netlify.
 */
export const MESSAGE_CERTIFYD_ON = process.env.NEXT_PUBLIC_MESSAGE_CERTIFYD === "on";
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const WHATSAPP_HREF = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Certifyd")}` : CONTACT_HREF;

/**
 * Unreviewed regulations pages are built on deploy previews and local builds only.
 * Netlify sets CONTEXT=production for the live site; REGULATIONS_DRAFTS=on forces drafts on.
 */
export const SHOW_REGULATION_DRAFTS =
  process.env.REGULATIONS_DRAFTS === "on" || (process.env.REGULATIONS_DRAFTS !== "off" && (process.env.CONTEXT ?? "local") !== "production");

/** Active-worker limits per plan. Still to be set by the founders (COM-162); a null hides the line. */
export const PLAN_LIMITS: { starter: number | null; professional: number | null } = { starter: null, professional: null };

/** Film files. Drop the MP4, poster and captions into /public/videos/ and set available to true. */
export const FILMS = {
  care: { label: "Health and care", file: "/videos/certifyd-website-hero-v2.mp4", captions: "/videos/certifyd-website-hero-v2.vtt", length: "1:25", available: false },
  warehouse: { label: "Warehouse and logistics", file: "/videos/certifyd-website-hero-v1.mp4", captions: "/videos/certifyd-website-hero-v1.vtt", length: "1:20", available: false },
} as const;
export type FilmKey = keyof typeof FILMS;
