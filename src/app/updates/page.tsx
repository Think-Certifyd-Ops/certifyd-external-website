import type { Metadata } from "next";
import { CHANGELOG } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Updates",
  description: "What changed on the Certifyd website, and why.",
};

const categoryLabels: Record<string, { label: string; color: string }> = {
  added: { label: "Added", color: "text-accent-success" },
  changed: { label: "Changed", color: "text-certifyd-blue" },
  fixed: { label: "Fixed", color: "text-text-on-light-muted" },
  removed: { label: "Removed", color: "text-accent-warning" },
};

export default function UpdatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy bg-grid-pattern pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />
        <div className="section-container relative z-10">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-on-dark">
            Updates
          </h1>
          <p className="text-lg text-text-on-dark-muted mt-4 max-w-2xl">
            What changed on this website, and why. Every update documented.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-light">
        <div className="section-container">
          <div className="max-w-3xl">
            {CHANGELOG.map((entry, entryIndex) => (
              <article
                key={entry.version}
                className={`relative ${
                  entryIndex < CHANGELOG.length - 1
                    ? "pb-16 border-l-2 border-warm-border ml-3 pl-8"
                    : "ml-3 pl-8 border-l-2 border-transparent"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-certifyd-blue border-4 border-warm-white" />

                {/* Date + version */}
                <div className="flex items-baseline gap-3 mb-2">
                  <time className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                    {new Date(entry.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="font-heading text-xs font-medium text-certifyd-blue bg-certifyd-blue/10 px-2 py-0.5 rounded-full">
                    v{entry.version}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-xl font-bold text-text-on-light mb-3">
                  {entry.title}
                </h2>

                {/* Summary */}
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-6">
                  {entry.summary}
                </p>

                {/* Change categories */}
                <div className="space-y-5">
                  {entry.changes.map((change) => {
                    const { label, color } =
                      categoryLabels[change.category] || categoryLabels.changed;
                    return (
                      <div key={change.category}>
                        <h3
                          className={`font-heading text-xs font-semibold uppercase tracking-wider ${color} mb-3`}
                        >
                          {label}
                        </h3>
                        <ul className="space-y-2">
                          {change.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-text-on-light leading-relaxed"
                            >
                              <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                                change.category === "added"
                                  ? "bg-accent-success"
                                  : change.category === "removed"
                                  ? "bg-accent-warning"
                                  : "bg-certifyd-blue"
                              }`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
