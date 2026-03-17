import { GRAPHIC_TILT } from "@/lib/constants";

export function GraphLayersGraphic() {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-25 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.4), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative w-full max-w-sm mx-auto ${GRAPHIC_TILT.left}`}>
        {/* Layer 3 — 3I API (top, narrowest) */}
        <div className="relative z-30 mx-8 bg-navy-light border border-navy-border rounded-lg overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-navy-border">
            <span className="font-heading text-[10px] font-semibold text-certifyd-blue uppercase tracking-wider">
              Layer 3 — 3I API
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-accent-success font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
              Live
            </span>
          </div>
          <div className="px-4 py-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10px] text-certifyd-blue">{"{"}</span>
              <span className="font-heading text-[10px] text-text-on-dark-muted">trust_score:</span>
              <span className="font-heading text-[10px] text-accent-success font-bold">94</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10px] text-text-on-dark-muted ml-3">risk_flags:</span>
              <span className="font-heading text-[10px] text-accent-success">none</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10px] text-text-on-dark-muted ml-3">continuity:</span>
              <span className="font-heading text-[10px] text-accent-success">consistent</span>
              <span className="font-heading text-[10px] text-certifyd-blue">{"}"}</span>
            </div>
          </div>
        </div>

        {/* Connector line */}
        <div className="flex justify-center -my-px">
          <div className="w-px h-5 bg-gradient-to-b from-certifyd-blue/60 to-certifyd-blue/30" />
        </div>

        {/* Layer 2 — AI Analytics (middle) */}
        <div className="relative z-20 mx-4 bg-navy-light border border-navy-border rounded-lg overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-navy-border">
            <span className="font-heading text-[10px] font-semibold text-certifyd-blue uppercase tracking-wider">
              Layer 2 — AI Analytics
            </span>
            <span className="text-[10px] text-text-on-dark-muted font-heading">GPU-Accelerated</span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            <div className="bg-navy-lighter rounded-md p-2 text-center">
              <div className="font-heading text-lg font-bold text-certifyd-blue">94</div>
              <div className="text-[8px] text-text-on-dark-muted uppercase tracking-wider">Trust</div>
            </div>
            <div className="bg-navy-lighter rounded-md p-2 text-center">
              <div className="font-heading text-lg font-bold text-accent-success">0</div>
              <div className="text-[8px] text-text-on-dark-muted uppercase tracking-wider">Anomalies</div>
            </div>
            <div className="bg-navy-lighter rounded-md p-2 text-center">
              <div className="font-heading text-lg font-bold text-text-on-dark">87%</div>
              <div className="text-[8px] text-text-on-dark-muted uppercase tracking-wider">Density</div>
            </div>
          </div>
        </div>

        {/* Connector line */}
        <div className="flex justify-center -my-px">
          <div className="w-px h-5 bg-gradient-to-b from-certifyd-blue/30 to-certifyd-blue/20" />
        </div>

        {/* Layer 1 — Graph Foundation (bottom, widest) */}
        <div className="relative z-10 bg-navy-light border border-navy-border rounded-lg overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-navy-border">
            <span className="font-heading text-[10px] font-semibold text-certifyd-blue uppercase tracking-wider">
              Layer 1 — Graph Foundation
            </span>
            <span className="text-[10px] text-text-on-dark-muted font-heading">12.4K nodes</span>
          </div>
          {/* Mini graph visualization */}
          <div className="relative h-20 p-3">
            {/* Nodes */}
            <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-certifyd-blue/40 border border-certifyd-blue" />
            <div className="absolute top-3 left-[45%] w-5 h-5 rounded-full bg-certifyd-blue/30 border border-certifyd-blue/60" />
            <div className="absolute top-6 right-8 w-3.5 h-3.5 rounded-full bg-certifyd-blue/40 border border-certifyd-blue" />
            <div className="absolute bottom-4 left-[20%] w-3 h-3 rounded-full bg-certifyd-blue/20 border border-certifyd-blue/40" />
            <div className="absolute bottom-3 left-[55%] w-4 h-4 rounded-full bg-accent-success/30 border border-accent-success/60" />
            <div className="absolute bottom-5 right-[15%] w-3 h-3 rounded-full bg-certifyd-blue/20 border border-certifyd-blue/40" />
            {/* Edges (lines between nodes) */}
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
              <line x1="28" y1="20" x2="45%" y2="18" stroke="rgba(0,89,255,0.25)" strokeWidth="1" />
              <line x1="45%" y1="18" x2="78%" y2="26" stroke="rgba(0,89,255,0.25)" strokeWidth="1" />
              <line x1="28" y1="20" x2="22%" y2="56" stroke="rgba(0,89,255,0.15)" strokeWidth="1" />
              <line x1="45%" y1="18" x2="57%" y2="54" stroke="rgba(0,89,255,0.2)" strokeWidth="1" />
              <line x1="78%" y1="26" x2="82%" y2="48" stroke="rgba(0,89,255,0.15)" strokeWidth="1" />
              <line x1="22%" y1="56" x2="57%" y2="54" stroke="rgba(0,89,255,0.2)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
