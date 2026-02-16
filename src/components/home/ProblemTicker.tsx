const TICKER_ITEMS = [
  "Unverified tradesperson enters home",
  "Agency worker uses false identity",
  "\u00a360,000 fine for illegal worker",
  "Care home fails to check staff identity",
  "Deepfake passes video interview",
  "No one checks who turns up on site",
  "Temp uses someone else\u2019s documents",
  "Builder sends unknown substitute",
  "Right-to-work status expires unnoticed",
  "1.1 million temps \u2014 most unverified",
];

export function ProblemTicker() {
  const items = TICKER_ITEMS.map((text, i) => (
    <span key={i} className="flex items-center gap-3 whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-warning shrink-0" />
      <span className="text-sm font-heading text-text-on-dark-muted tracking-wide">
        {text}
      </span>
    </span>
  ));

  return (
    <div
      className="bg-navy border-t border-navy-border overflow-hidden group"
      role="marquee"
      aria-label="Scrolling list of identity verification risks"
    >
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center gap-10 py-3 px-6">
          {items}
        </div>
        <div
          className="flex shrink-0 items-center gap-10 py-3 px-6"
          aria-hidden="true"
        >
          {items}
        </div>
      </div>
    </div>
  );
}
