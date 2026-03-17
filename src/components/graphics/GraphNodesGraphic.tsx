import { GRAPHIC_TILT } from "@/lib/constants";

export function GraphNodesGraphic() {
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
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Identity Graph
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-accent-success font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            Live
          </span>
        </div>

        {/* Graph canvas */}
        <div className="relative h-64 p-4">
          {/* Legitimate cluster (blue) */}
          <div className="absolute top-6 left-8">
            <div className="w-10 h-10 rounded-full bg-certifyd-blue/20 border-2 border-certifyd-blue flex items-center justify-center">
              <svg className="w-4 h-4 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
              </svg>
            </div>
            <span className="text-[8px] text-certifyd-blue font-heading mt-1 block text-center">Person A</span>
          </div>

          <div className="absolute top-4 left-[42%]">
            <div className="w-8 h-8 rounded-full bg-navy-lighter border border-navy-border flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-text-on-dark-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5" />
              </svg>
            </div>
            <span className="text-[8px] text-text-on-dark-muted font-heading mt-1 block text-center">Device</span>
          </div>

          <div className="absolute top-6 right-8">
            <div className="w-8 h-8 rounded-full bg-navy-lighter border border-navy-border flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-text-on-dark-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-[8px] text-text-on-dark-muted font-heading mt-1 block text-center">Email</span>
          </div>

          <div className="absolute bottom-16 left-[15%]">
            <div className="w-8 h-8 rounded-full bg-navy-lighter border border-navy-border flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-text-on-dark-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <span className="text-[8px] text-text-on-dark-muted font-heading mt-1 block text-center">Document</span>
          </div>

          {/* Anomaly cluster (orange) */}
          <div className="absolute bottom-12 right-[10%]">
            <div className="w-10 h-10 rounded-full bg-accent-warning/15 border-2 border-accent-warning flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-warning" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
              </svg>
            </div>
            <span className="text-[8px] text-accent-warning font-heading mt-1 block text-center">Person B</span>
          </div>

          <div className="absolute bottom-14 right-[35%]">
            <div className="w-8 h-8 rounded-full bg-accent-warning/10 border border-accent-warning/40 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-accent-warning/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5" />
              </svg>
            </div>
            <span className="text-[8px] text-accent-warning/70 font-heading mt-1 block text-center">Shared</span>
          </div>

          {/* Edge lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            {/* Blue cluster edges */}
            <line x1="18%" y1="22%" x2="44%" y2="18%" stroke="rgba(0,89,255,0.35)" strokeWidth="1.5" />
            <line x1="44%" y1="18%" x2="80%" y2="22%" stroke="rgba(0,89,255,0.2)" strokeWidth="1" />
            <line x1="18%" y1="22%" x2="20%" y2="62%" stroke="rgba(0,89,255,0.2)" strokeWidth="1" />
            <line x1="44%" y1="18%" x2="20%" y2="62%" stroke="rgba(0,89,255,0.15)" strokeWidth="1" />
            {/* Cross-cluster edge (the anomaly connection) */}
            <line x1="44%" y1="22%" x2="62%" y2="60%" stroke="rgba(232,93,44,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Orange cluster edges */}
            <line x1="62%" y1="60%" x2="82%" y2="58%" stroke="rgba(232,93,44,0.35)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Anomaly alert footer */}
        <div className="px-5 py-2.5 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-warning animate-pulse" />
            <span className="text-[10px] text-accent-warning font-heading font-medium">
              Shared device detected across identities
            </span>
          </div>
          <span className="text-[10px] text-text-on-dark-muted">2 entities linked</span>
        </div>
      </div>
    </div>
  );
}
