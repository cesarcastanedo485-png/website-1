"use client";

const TICKER_ITEMS = [
  "WE WANT YOU",
  "TEAM CAST",
  "SPONSORS",
  "FANS",
  "219-921-4584",
];

function TickerStrip({ idPrefix, hideFromA11y }: { idPrefix: string; hideFromA11y?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hideFromA11y ? true : undefined}
    >
      {TICKER_ITEMS.map((item, i) => (
        <span
          key={`${idPrefix}-${item}-${i}`}
          className="inline-flex items-center shrink-0 mx-6 sm:mx-10 text-white font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wider whitespace-nowrap"
        >
          {item}
          <span className="mx-4 sm:mx-6 text-white/60" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export function ScrollingTicker() {
  return (
    <div
      className="relative overflow-hidden bg-nwi-orange py-3 sm:py-4 border-y-2 border-nwi-navy/20"
      aria-live="polite"
    >
      {/* Gradient masks for smooth fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nwi-orange to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nwi-orange to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Two identical strips: -50% translate = exactly one strip width (no loop jump) */}
      <div className="flex w-max will-change-transform animate-scroll">
        <TickerStrip idPrefix="a" />
        <TickerStrip idPrefix="b" hideFromA11y />
      </div>
    </div>
  );
}
