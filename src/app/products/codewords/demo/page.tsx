"use client";

import { useState, useEffect, useCallback } from "react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

/* ── Code generation ── */

const WORDS = [
  "TIGER", "CASTLE", "NINE", "OCEAN", "RIVER", "FIVE", "DELTA", "STORM", "THREE",
  "FALCON", "BRIDGE", "SEVEN", "EMBER", "CLOUD", "FOUR", "ATLAS", "FROST", "EIGHT",
  "CEDAR", "SPARK", "TWO", "ONYX", "DAWN", "SIX", "IRON", "WAVE", "ONE",
];

function generateWordCode(): string {
  const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  return `${pick()} ${pick()} ${pick()}`;
}

function generateNumberCode(): string {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `${String(n).slice(0, 3)} ${String(n).slice(3)}`;
}

/* ── Audit log ── */

interface AuditEntry {
  id: number;
  time: string;
  name: string;
  method: "word" | "number" | "qr";
  success: boolean;
}

const initialAudit: AuditEntry[] = [
  { id: 1, time: "14:23", name: "James Henderson", method: "word", success: true },
  { id: 2, time: "14:01", name: "Unknown", method: "number", success: false },
  { id: 3, time: "13:45", name: "Sarah Chen", method: "qr", success: true },
  { id: 4, time: "13:12", name: "Priya Sharma", method: "word", success: true },
  { id: 5, time: "12:58", name: "Michael Torres", method: "number", success: true },
];

const REFRESH_SECONDS = 30;

type Tab = "word" | "number" | "qr";

export default function CodeWordsDemoPage() {
  const [tab, setTab] = useState<Tab>("word");
  const [wordCode, setWordCode] = useState(generateWordCode);
  const [numberCode, setNumberCode] = useState(generateNumberCode);
  const [secondsLeft, setSecondsLeft] = useState(REFRESH_SECONDS);
  const [verifyInput, setVerifyInput] = useState("");
  const [verifyResult, setVerifyResult] = useState<"idle" | "success" | "fail">("idle");
  const [audit, setAudit] = useState<AuditEntry[]>(initialAudit);

  // Code refresh timer
  const refreshCodes = useCallback(() => {
    setWordCode(generateWordCode());
    setNumberCode(generateNumberCode());
    setSecondsLeft(REFRESH_SECONDS);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          refreshCodes();
          return REFRESH_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [refreshCodes]);

  function handleVerify() {
    const input = verifyInput.trim().toUpperCase();
    const isMatch = input === wordCode || input === numberCode.replace(" ", "") || input === numberCode;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const entry: AuditEntry = {
      id: Date.now(),
      time: timeStr,
      name: isMatch ? "Demo User" : "Unknown",
      method: tab,
      success: isMatch,
    };

    setAudit((prev) => [entry, ...prev]);
    setVerifyResult(isMatch ? "success" : "fail");
    setTimeout(() => setVerifyResult("idle"), 3000);
    setVerifyInput("");
  }

  const progressPct = (secondsLeft / REFRESH_SECONDS) * 100;

  return (
    <BrowserFrame url="codewords.certifyd.io" backHref="/products/codewords/" backLabel="Back to Certifyd CodeWords">
      <div className="bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-sm font-bold text-gray-900">Certifyd CodeWords</span>
          </div>
          <span className="text-[11px] text-gray-400">Andrew Speer</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
        {/* Your current code */}
        <div className="mb-10">
          <p className="font-heading text-xs font-semibold text-certifyd-blue uppercase tracking-wider mb-6">Your Current Code</p>

          {/* Method tabs */}
          <div className="flex gap-2 mb-6">
            {([
              { key: "qr" as Tab, label: "QR Code" },
              { key: "word" as Tab, label: "Word Code" },
              { key: "number" as Tab, label: "Number Code" },
            ]).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-sm text-xs font-heading font-medium transition-colors ${
                  tab === t.key
                    ? "bg-certifyd-blue text-white"
                    : "bg-gray-50 border border-gray-200 text-gray-500 hover:border-certifyd-blue/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Code display — dark panel */}
          <div className="bg-navy rounded-lg p-8 lg:p-12 text-center mb-4">
            {tab === "qr" && (
              <div>
                {/* Realistic QR code */}
                <div className="w-52 h-52 mx-auto mb-4 bg-white rounded-lg p-2.5 flex items-center justify-center">
                  <svg viewBox="0 0 33 33" className="w-full h-full" shapeRendering="crispEdges">
                    {/* Position detection patterns — top-left */}
                    <rect x="0" y="0" width="7" height="7" fill="#0C1425" />
                    <rect x="1" y="1" width="5" height="5" fill="white" />
                    <rect x="2" y="2" width="3" height="3" fill="#0C1425" />
                    {/* Position detection patterns — top-right */}
                    <rect x="26" y="0" width="7" height="7" fill="#0C1425" />
                    <rect x="27" y="1" width="5" height="5" fill="white" />
                    <rect x="28" y="2" width="3" height="3" fill="#0C1425" />
                    {/* Position detection patterns — bottom-left */}
                    <rect x="0" y="26" width="7" height="7" fill="#0C1425" />
                    <rect x="1" y="27" width="5" height="5" fill="white" />
                    <rect x="2" y="28" width="3" height="3" fill="#0C1425" />
                    {/* Timing patterns */}
                    <rect x="8" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="20" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="22" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="24" y="6" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="20" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="22" width="1" height="1" fill="#0C1425" />
                    <rect x="6" y="24" width="1" height="1" fill="#0C1425" />
                    {/* Alignment pattern */}
                    <rect x="20" y="20" width="5" height="5" fill="#0C1425" />
                    <rect x="21" y="21" width="3" height="3" fill="white" />
                    <rect x="22" y="22" width="1" height="1" fill="#0C1425" />
                    {/* Data modules — scattered fill */}
                    <rect x="8" y="0" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="0" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="1" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="2" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="2" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="3" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="4" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="4" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="4" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="5" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="5" width="1" height="1" fill="#0C1425" />
                    {/* Row 8-12 data */}
                    <rect x="0" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="2" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="4" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="15" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="21" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="23" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="8" width="1" height="1" fill="#0C1425" />
                    <rect x="1" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="3" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="5" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="20" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="9" width="1" height="1" fill="#0C1425" />
                    <rect x="0" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="3" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="5" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="15" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="10" width="1" height="1" fill="#0C1425" />
                    <rect x="1" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="4" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="11" width="1" height="1" fill="#0C1425" />
                    <rect x="0" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="2" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="5" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="12" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="12" width="1" height="1" fill="#0C1425" />
                    {/* Rows 13-19 */}
                    <rect x="8" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="13" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="15" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="14" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="15" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="16" width="1" height="1" fill="#0C1425" />
                    <rect x="8" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="10" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="12" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="15" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="18" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="17" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="16" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="18" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="18" width="1" height="1" fill="#0C1425" />
                    {/* Rows 19-25 */}
                    <rect x="8" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="14" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="19" width="1" height="1" fill="#0C1425" />
                    <rect x="9" y="25" width="1" height="1" fill="#0C1425" />
                    <rect x="11" y="25" width="1" height="1" fill="#0C1425" />
                    <rect x="13" y="25" width="1" height="1" fill="#0C1425" />
                    <rect x="15" y="25" width="1" height="1" fill="#0C1425" />
                    <rect x="17" y="25" width="1" height="1" fill="#0C1425" />
                    <rect x="19" y="25" width="1" height="1" fill="#0C1425" />
                    {/* Bottom-right data */}
                    <rect x="26" y="26" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="26" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="26" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="26" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="27" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="27" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="27" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="28" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="28" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="28" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="29" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="29" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="29" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="30" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="30" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="30" width="1" height="1" fill="#0C1425" />
                    <rect x="27" y="31" width="1" height="1" fill="#0C1425" />
                    <rect x="28" y="31" width="1" height="1" fill="#0C1425" />
                    <rect x="30" y="31" width="1" height="1" fill="#0C1425" />
                    <rect x="32" y="31" width="1" height="1" fill="#0C1425" />
                    <rect x="26" y="32" width="1" height="1" fill="#0C1425" />
                    <rect x="29" y="32" width="1" height="1" fill="#0C1425" />
                    <rect x="31" y="32" width="1" height="1" fill="#0C1425" />
                    {/* Certifyd blue accent — small logo area in center */}
                    <rect x="14" y="14" width="5" height="5" fill="white" />
                    <rect x="15" y="15" width="3" height="3" fill="#0059FF" />
                    <rect x="16" y="16" width="1" height="1" fill="white" />
                  </svg>
                </div>
                <p className="text-text-on-dark-muted text-xs">Show this QR code on your video call</p>
              </div>
            )}

            {tab === "word" && (
              <div>
                <p className="font-heading text-3xl lg:text-5xl font-bold text-certifyd-blue tracking-wider leading-tight">
                  {wordCode}
                </p>
                <p className="text-text-on-dark-muted text-xs mt-3">Read this code aloud on a phone call or Slack</p>
              </div>
            )}

            {tab === "number" && (
              <div>
                <p className="font-heading text-5xl lg:text-7xl font-bold text-certifyd-blue tracking-[0.2em] leading-tight">
                  {numberCode}
                </p>
                <p className="text-text-on-dark-muted text-xs mt-3">6-digit code for quick verification</p>
              </div>
            )}
          </div>

          {/* Timer bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-certifyd-blue rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 font-heading shrink-0 w-20 text-right">
              Refreshes in {secondsLeft}s
            </span>
          </div>
        </div>

        {/* Verify someone */}
        <div className="mb-10">
          <p className="font-heading text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Verify Someone</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={verifyInput}
              onChange={(e) => setVerifyInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder={tab === "number" ? "Enter 6-digit code..." : "Enter their word code..."}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-certifyd-blue transition-colors text-sm font-heading"
            />
            <button
              onClick={handleVerify}
              disabled={!verifyInput.trim()}
              className="px-6 py-3 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-light transition-colors disabled:opacity-40"
            >
              Verify
            </button>
          </div>

          {/* Verify result */}
          {verifyResult === "success" && (
            <div className="flex items-center gap-2 mt-3 text-accent-success">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-sm font-heading font-medium">Identity verified — code matches.</span>
            </div>
          )}
          {verifyResult === "fail" && (
            <div className="flex items-center gap-2 mt-3 text-red-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              <span className="text-sm font-heading font-medium">Verification failed — code does not match. Do not proceed.</span>
            </div>
          )}

          <p className="text-[10px] text-gray-400 mt-3">
            Tip: try entering your current code above to see a successful verification.
          </p>
        </div>

        {/* Audit log */}
        <div>
          <p className="font-heading text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Recent Verifications</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {audit.slice(0, 8).map((entry) => (
                <div key={entry.id} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${entry.success ? "bg-accent-success" : "bg-red-500"}`} />
                    <span className="text-sm text-gray-700">
                      <span className="font-medium text-gray-900">{entry.name}</span>
                      {entry.success ? (
                        <span className="text-accent-success"> — verified</span>
                      ) : (
                        <span className="text-red-500"> — failed</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] text-gray-500 px-1.5 py-0.5 bg-gray-100 rounded">
                      {entry.method === "qr" ? "QR" : entry.method === "word" ? "Word" : "Number"}
                    </span>
                    <span className="text-xs text-gray-400 font-heading">{entry.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </BrowserFrame>
  );
}
