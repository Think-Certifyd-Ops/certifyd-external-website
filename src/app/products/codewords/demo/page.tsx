"use client";

import { useState } from "react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

type Decision = "pending" | "confirmed" | "denied" | "pressure";

const statusCopy: Record<Exclude<Decision, "pending">, { title: string; body: string; colour: string }> = {
  confirmed: {
    title: "Confirmed on Sarah's enrolled phone",
    body: "Sarah opened CodeWords and approved this exact request in the demo.",
    colour: "border-emerald-300 bg-emerald-50 text-emerald-900",
  },
  denied: {
    title: "Denied on Sarah's enrolled phone",
    body: "Do not act on the request. Contact Sarah another way if you still need to speak.",
    colour: "border-red-300 bg-red-50 text-red-900",
  },
  pressure: {
    title: "Sarah reported pressure",
    body: "Stop the action and follow your agreed safety plan. Do not confront the caller.",
    colour: "border-amber-300 bg-amber-50 text-amber-950",
  },
};

export default function CodeWordsDemoPage() {
  const [request, setRequest] = useState(
    "Are you asking me to send £420 for the venue deposit?",
  );
  const [decision, setDecision] = useState<Decision>("pending");

  function resetDemo() {
    setRequest("Are you asking me to send £420 for the venue deposit?");
    setDecision("pending");
  }

  return (
    <BrowserFrame
      url="demo.certifyd.io/codewords"
      backHref="/products/codewords/"
      backLabel="Back to Certifyd CodeWords"
    >
      <div className="min-h-screen bg-[#f7f5f1] text-navy">
        <div className="border-b border-warm-border bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 lg:px-8">
            <p className="font-heading text-sm font-bold">Certifyd CodeWords</p>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-900">
              DEMO ONLY
            </span>
          </div>
        </div>

        <main className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
              A safe challenge walkthrough
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight lg:text-5xl">
              Check the request on a phone you already trust.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-on-light-muted lg:text-lg">
              This browser demo shows the decision flow. The real app uses two enrolled phones,
              signed messages and local approval.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <section className="rounded-xl border border-warm-border bg-white p-6 shadow-sm lg:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-certifyd-blue font-heading text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h2 className="font-heading text-lg font-bold">Trusted connection already added</h2>
                  <p className="mt-1 text-sm leading-relaxed text-text-on-light-muted">
                    You and Sarah previously completed direct device setup while side by side.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-certifyd-blue/20 bg-certifyd-blue/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-certifyd-blue">Trusted person</p>
                <p className="mt-2 font-heading text-xl font-bold">Sarah</p>
                <p className="mt-1 text-sm text-text-on-light-muted">Direct device setup, beta</p>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-certifyd-blue font-heading text-sm font-bold text-white">
                  2
                </span>
                <div className="w-full">
                  <h2 className="font-heading text-lg font-bold">Challenge the exact request</h2>
                  <label htmlFor="request" className="mt-4 block text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                    What are you being asked to do?
                  </label>
                  <textarea
                    id="request"
                    rows={4}
                    value={request}
                    onChange={(event) => {
                      setRequest(event.target.value);
                      setDecision("pending");
                    }}
                    className="mt-2 w-full resize-none rounded-lg border border-warm-border bg-[#fbfaf8] p-4 text-sm leading-relaxed outline-none transition focus:border-certifyd-blue focus:ring-2 focus:ring-certifyd-blue/15"
                  />
                  <p className="mt-2 text-xs leading-relaxed text-text-on-light-muted">
                    Include the amount, recipient or account so Sarah approves the same action you see.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-warm-border bg-white p-6 shadow-sm lg:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-certifyd-blue font-heading text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h2 className="font-heading text-lg font-bold">Sarah reviews it on her phone</h2>
                  <p className="mt-1 text-sm leading-relaxed text-text-on-light-muted">
                    She checks the full request before choosing an answer.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-navy p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">Incoming challenge</p>
                <p className="mt-3 font-heading text-lg font-bold leading-relaxed">
                  {request.trim() || "Add the exact request first."}
                </p>
                <p className="mt-3 text-xs text-white/60">From Richard • Expires in 4 minutes</p>
              </div>

              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  onClick={() => setDecision("confirmed")}
                  disabled={!request.trim()}
                  className="rounded-lg bg-certifyd-blue px-4 py-3 font-heading text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Confirm this request
                </button>
                <button
                  type="button"
                  onClick={() => setDecision("denied")}
                  disabled={!request.trim()}
                  className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 font-heading text-sm font-semibold text-red-800 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Deny this request
                </button>
                <button
                  type="button"
                  onClick={() => setDecision("pressure")}
                  disabled={!request.trim()}
                  className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 font-heading text-sm font-semibold text-amber-900 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  I am under pressure
                </button>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-certifyd-blue font-heading text-sm font-bold text-white">
                  4
                </span>
                <div className="w-full">
                  <h2 className="font-heading text-lg font-bold">Read the result before acting</h2>
                  {decision === "pending" ? (
                    <div className="mt-4 rounded-lg border border-dashed border-warm-border bg-[#fbfaf8] p-5 text-sm leading-relaxed text-text-on-light-muted">
                      Choose Sarah&apos;s answer above to see the result.
                    </div>
                  ) : (
                    <div className={`mt-4 rounded-lg border p-5 ${statusCopy[decision].colour}`}>
                      <p className="font-heading font-bold">{statusCopy[decision].title}</p>
                      <p className="mt-2 text-sm leading-relaxed">{statusCopy[decision].body}</p>
                      {decision === "confirmed" && (
                        <div className="mt-4 rounded-md bg-white/75 p-3 text-center font-heading font-bold tracking-wide">
                          harbour • violet • cedar • 424 609
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-amber-300 bg-amber-50 p-5 sm:flex-row sm:items-center">
            <p className="max-w-3xl text-sm leading-relaxed text-amber-950">
              Demo only. It does not create a trusted connection or prove identity. A real confirmation means the previously enrolled phone approved the displayed request.
            </p>
            <button
              type="button"
              onClick={resetDemo}
              className="shrink-0 rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-950 hover:bg-amber-100"
            >
              Reset demo
            </button>
          </div>
        </main>
      </div>
    </BrowserFrame>
  );
}
