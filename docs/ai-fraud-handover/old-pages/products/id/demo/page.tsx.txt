"use client";

import { useState } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

interface ScanResult {
  verified: boolean;
  name: string;
  company: string;
  certifiedSince: string;
  role?: string;
}

const scenarios: ScanResult[] = [
  { verified: true, name: "John Smith", company: "Smith Electrical Ltd", certifiedSince: "March 2026", role: "Electrician" },
  { verified: true, name: "Sarah Williams", company: "ClearView Plumbing", certifiedSince: "January 2026", role: "Plumber" },
  { verified: true, name: "David Okonkwo", company: "British Gas", certifiedSince: "November 2025", role: "Meter Reader" },
  { verified: false, name: "", company: "", certifiedSince: "", role: "" },
  { verified: true, name: "Maria Gonzalez", company: "Bright Care Services", certifiedSince: "February 2026", role: "Care Worker" },
];

type Phase = "idle" | "scanning" | "result";

export default function IDDemoPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanCount, setScanCount] = useState(0);

  function startScan() {
    setPhase("scanning");
    setResult(null);

    // Simulate scanning delay
    setTimeout(() => {
      const scenario = scenarios[scanCount % scenarios.length];
      setResult(scenario);
      setPhase("result");
      setScanCount((c) => c + 1);
    }, 1500);
  }

  function reset() {
    setPhase("idle");
    setResult(null);
  }

  return (
    <PhoneFrame backHref="/products/id/" backLabel="Back to Certifyd ID">
      <div className="flex flex-col items-center justify-center px-4 py-6 min-h-[500px]">
        <div className="w-full">

          {/* ── Idle: Ready to scan ── */}
          {phase === "idle" && (
            <div className="text-center">
              <p className="font-heading text-xs font-semibold text-certifyd-blue uppercase tracking-wider mb-6">
                Scan QR Code
              </p>

              {/* Camera viewfinder */}
              <div className="relative aspect-square max-w-xs mx-auto bg-navy-lighter rounded-lg border border-navy-border mb-6 flex items-center justify-center overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(0,89,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,89,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-certifyd-blue rounded-tl-sm" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-certifyd-blue rounded-tr-sm" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-certifyd-blue rounded-bl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-certifyd-blue rounded-br-sm" />

                {/* Center icon */}
                <div className="text-center z-10">
                  <svg className="w-12 h-12 text-certifyd-blue/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" />
                  </svg>
                  <p className="text-text-on-dark-muted text-xs">Point camera at<br />their QR code</p>
                </div>
              </div>

              <button
                onClick={startScan}
                className="w-full py-3.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-light transition-colors"
              >
                Tap to Scan
              </button>

              <p className="text-[10px] text-text-on-dark-muted/50 mt-4">
                Demo: each scan shows a different scenario
              </p>
            </div>
          )}

          {/* ── Scanning animation ── */}
          {phase === "scanning" && (
            <div className="text-center">
              <div className="relative aspect-square max-w-xs mx-auto bg-navy-lighter rounded-lg border border-navy-border mb-6 flex items-center justify-center overflow-hidden">
                {/* Scanning line animation */}
                <div className="absolute inset-x-0 h-0.5 bg-certifyd-blue animate-pulse" style={{ top: "50%", boxShadow: "0 0 20px rgba(0,89,255,0.5), 0 0 60px rgba(0,89,255,0.2)" }} />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-certifyd-blue rounded-tl-sm" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-certifyd-blue rounded-tr-sm" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-certifyd-blue rounded-bl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-certifyd-blue rounded-br-sm" />

                <div className="z-10">
                  <div className="w-6 h-6 border-2 border-certifyd-blue border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-certifyd-blue text-xs font-heading font-medium">Scanning...</p>
                </div>
              </div>
            </div>
          )}

          {/* ── Result ── */}
          {phase === "result" && result && (
            <div className="text-center">
              {result.verified ? (
                <>
                  {/* Success */}
                  <div className="w-16 h-16 rounded-full bg-accent-success/15 border border-accent-success/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent-success" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>

                  <p className="font-heading text-lg font-bold text-accent-success uppercase tracking-wider mb-6">
                    Identity Verified
                  </p>

                  <div className="bg-navy-light border border-navy-border rounded-lg p-5 text-left mb-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">Name</p>
                        <p className="text-base text-text-on-dark font-medium">{result.name}</p>
                      </div>
                      <div className="border-t border-navy-border/50 pt-3">
                        <p className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">Company</p>
                        <p className="text-base text-text-on-dark font-medium">{result.company}</p>
                      </div>
                      {result.role && (
                        <div className="border-t border-navy-border/50 pt-3">
                          <p className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">Role</p>
                          <p className="text-sm text-text-on-dark">{result.role}</p>
                        </div>
                      )}
                      <div className="border-t border-navy-border/50 pt-3">
                        <p className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">Certified Since</p>
                        <p className="text-sm text-text-on-dark">{result.certifiedSince}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-accent-success mb-6">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span className="font-heading font-medium">Record created &middot; {new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Warning */}
                  <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
                    </svg>
                  </div>

                  <p className="font-heading text-lg font-bold text-red-500 uppercase tracking-wider mb-3">
                    Verification Failed
                  </p>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 text-left mb-6">
                    <p className="text-sm text-red-400 font-medium mb-2">This QR code could not be verified.</p>
                    <p className="text-xs text-red-400/80">
                      The code is invalid, expired, or not registered with Certifyd. Do not grant access. Ask the visitor to contact their employer.
                    </p>
                  </div>
                </>
              )}

              <button
                onClick={reset}
                className="w-full py-3.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-light transition-colors"
              >
                Scan Another
              </button>
            </div>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}
