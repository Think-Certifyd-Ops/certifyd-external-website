import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Certifyd — Join the Identity Verification Team",
  description:
    "Join Certifyd and build identity verification infrastructure for UK businesses. London-based team with deep institutional experience.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers at Certifyd",
    description:
      "Join Certifyd and build identity verification infrastructure for UK businesses.",
    url: "https://www.certifyd.io/careers/",
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
            Join the Team
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mt-6">
            We&apos;re building the identity layer for businesses. If that
            sounds interesting, we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-light">
        <div className="section-container max-w-2xl">
          <form
            name="careers"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="careers" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label
                htmlFor="careers-name"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="careers-name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="careers-email"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="careers-email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="careers-linkedin"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                LinkedIn URL
              </label>
              <input
                type="url"
                id="careers-linkedin"
                name="linkedin"
                className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label
                htmlFor="careers-role"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                Role you&apos;re interested in
              </label>
              <input
                type="text"
                id="careers-role"
                name="role"
                className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
                placeholder="e.g. Full-Stack Developer, Product Designer"
              />
            </div>

            <div>
              <label
                htmlFor="careers-message"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                Tell us about yourself
              </label>
              <textarea
                id="careers-message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors resize-none"
                placeholder="What interests you about Certifyd? What would you bring to the team?"
              />
            </div>

            <div>
              <label
                htmlFor="careers-cv"
                className="block text-sm font-medium text-text-on-light mb-2"
              >
                CV (optional)
              </label>
              <input
                type="file"
                id="careers-cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-text-on-light-muted file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border file:border-warm-border file:text-sm file:font-medium file:bg-warm-white file:text-text-on-light hover:file:bg-warm-gray file:transition-colors file:cursor-pointer"
              />
              <p className="text-xs text-text-on-light-muted mt-1">
                PDF, DOC, or DOCX. Max 10MB.
              </p>
            </div>

            <button
              type="submit"
              className="bg-certifyd-blue text-white px-8 py-3 rounded-sm font-medium hover:bg-certifyd-blue-light transition-colors"
            >
              Apply
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
