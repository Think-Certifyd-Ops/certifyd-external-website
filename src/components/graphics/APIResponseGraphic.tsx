import { GRAPHIC_TILT } from "@/lib/constants";

export function APIResponseGraphic() {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative bg-navy-light border border-navy-border rounded-lg overflow-hidden ${GRAPHIC_TILT.right} shadow-2xl`}>
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-navy-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-warning/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-certifyd-blue/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-success/60" />
          </div>
          <span className="font-heading text-[10px] text-text-on-dark-muted ml-2">
            GET /api/v1/identity/score
          </span>
        </div>

        {/* JSON response */}
        <div className="p-5 font-heading text-[11px] leading-relaxed">
          <div className="text-text-on-dark-muted">{"// 200 OK — 23ms"}</div>
          <div className="mt-2">
            <span className="text-text-on-dark-muted">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;identity_id&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-text-on-dark">&quot;id_9f8a2b...&quot;</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;trust_score&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-accent-success font-bold">94</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;confidence&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-accent-success">&quot;high&quot;</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;continuity&quot;</span>
            <span className="text-text-on-dark-muted">: {"{"}</span>
          </div>
          <div className="ml-8">
            <span className="text-certifyd-blue-light">&quot;sessions&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-text-on-dark">47</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-8">
            <span className="text-certifyd-blue-light">&quot;devices&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-text-on-dark">2</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-8">
            <span className="text-certifyd-blue-light">&quot;status&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-accent-success">&quot;consistent&quot;</span>
          </div>
          <div className="ml-4">
            <span className="text-text-on-dark-muted">{"}"}</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;risk_flags&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-text-on-dark">[]</span>
            <span className="text-text-on-dark-muted">,</span>
          </div>
          <div className="ml-4">
            <span className="text-certifyd-blue">&quot;graph_density&quot;</span>
            <span className="text-text-on-dark-muted">: </span>
            <span className="text-text-on-dark">0.87</span>
          </div>
          <div>
            <span className="text-text-on-dark-muted">{"}"}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <span className="text-[10px] text-text-on-dark-muted">
            REST + GraphQL + Webhooks
          </span>
          <span className="text-[10px] text-accent-success font-medium">
            p99 latency: 48ms
          </span>
        </div>
      </div>
    </div>
  );
}
