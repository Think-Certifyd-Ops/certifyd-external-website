import Link from "next/link";
import { CONTACT_HREF, DEMO_HREF, MESSAGE_CERTIFYD_ON, WHATSAPP_HREF } from "@/lib/site";
import { Arrow, ChatIcon } from "./Icons";

type Variant = "primary" | "secondary" | "ghost";

/** The main button on every page: book a 20-minute demo. */
export function DemoButton({ label = "Book a demo", variant = "primary" as Variant }: { label?: string; variant?: Variant }) {
  return <Link href={DEMO_HREF} className={`btn btn-${variant}`} data-demo-cta="true">{label}{variant === "primary" && <> <Arrow /></>}</Link>;
}

export function ContactButton({ label = "Contact us", variant = "secondary" as Variant, href = CONTACT_HREF }: { label?: string; variant?: Variant; href?: string }) {
  return <Link href={href} className={`btn btn-${variant}`}>{label}</Link>;
}

/**
 * Message Certifyd opens a WhatsApp chat with Certifyd's one number.
 * Kept ready but hidden until it has been tested (NEXT_PUBLIC_MESSAGE_CERTIFYD=on).
 */
export function MessageCertifydButton({ variant = "secondary" as Variant }: { variant?: Variant }) {
  if (!MESSAGE_CERTIFYD_ON) return null;
  return <a href={WHATSAPP_HREF} className={`btn btn-${variant}`} aria-label="Message Certifyd on WhatsApp"><ChatIcon />Message Certifyd</a>;
}

/** The standard pair: Book a demo, then Contact us. */
export function CtaPair({ demoLabel, contactLabel, extra }: { demoLabel?: string; contactLabel?: string; extra?: React.ReactNode }) {
  return <div className="btn-row"><DemoButton label={demoLabel} /><ContactButton label={contactLabel} /><MessageCertifydButton />{extra}</div>;
}
