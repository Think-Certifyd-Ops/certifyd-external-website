import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Certifyd — Book a Demo",
  description:
    "Get in touch with the Certifyd team. Book a demo to see how identity verification can protect your recruitment, workforce, and compliance processes.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Certifyd — Book a Demo",
    description:
      "Book a demo to see how Certifyd's identity verification protects your recruitment, workforce, and compliance processes.",
    url: "https://certifyd.io/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
            Get in Touch
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mt-6">
            Whether you&apos;re protecting your recruitment process, securing
            your workforce, or verifying who&apos;s at the door — we&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
