import { GRAPHIC_TILT } from "@/lib/constants";

export function AnalyticsEngineGraphic() {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative bg-navy-light border border-navy-border rounded-lg overflow-hidden ${GRAPHIC_TILT.left} shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            AI Analytics Engine
          </span>
          <span className="text-[10px] text-certifyd-blue font-heading font-medium">
            GPU-Accelerated
          </span>
        </div>

        {/* Trust score gauge */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-end gap-4">
            <div>
              <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-1">
                Identity Confidence
              </div>
              <div className="font-heading text-4xl font-bold text-accent-success">94</div>
            </div>
            <div className="flex-1">
              <div className="w-full h-3 bg-navy-lighter rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-warning via-certifyd-blue to-accent-success"
                  style={{ width: "94%" }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[8px] text-accent-warning">High Risk</span>
                <span className="text-[8px] text-accent-success">Trusted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Signal breakdown */}
        <div className="px-5 pb-3">
          <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-2">
            Signal Analysis
          </div>
          <div className="space-y-2">
            {[
              { label: "Biometric Match", value: 98, color: "bg-accent-success" },
              { label: "Behavioural Consistency", value: 91, color: "bg-certifyd-blue" },
              { label: "Device Continuity", value: 95, color: "bg-certifyd-blue-light" },
              { label: "Network Trust", value: 88, color: "bg-certifyd-blue" },
            ].map((signal) => (
              <div key={signal.label} className="flex items-center gap-3">
                <span className="text-[9px] text-text-on-dark-muted w-28 shrink-0">{signal.label}</span>
                <div className="flex-1 h-1.5 bg-navy-lighter rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${signal.color}`}
                    style={{ width: `${signal.value}%` }}
                  />
                </div>
                <span className="text-[9px] text-text-on-dark font-heading w-6 text-right">{signal.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anomaly alerts */}
        <div className="px-5 pb-4">
          <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-2">
            Active Alerts
          </div>
          <div className="space-y-1.5">
            <div className="bg-navy-lighter rounded-md px-3 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
              <span className="text-[10px] text-text-on-dark">No anomalies detected</span>
            </div>
            <div className="bg-navy-lighter rounded-md px-3 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-certifyd-blue" />
              <span className="text-[10px] text-text-on-dark">Behavioural baseline stable (14 sessions)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <span className="text-[10px] text-text-on-dark-muted">
            Model: <span className="text-text-on-dark">v2.4 — Graph Neural Network</span>
          </span>
          <span className="text-[10px] text-accent-success font-medium">
            Inference: 23ms
          </span>
        </div>
      </div>
    </div>
  );
}
