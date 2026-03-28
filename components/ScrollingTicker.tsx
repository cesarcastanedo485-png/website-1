"use client";

const TICKER_ITEMS = ["WE WANT YOU", "219-921-4584"];

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

      <div className="flex animate-scroll">
        {/* Duplicate content for seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center shrink-0 mx-6 sm:mx-10 text-white font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-wider whitespace-nowrap"
          >
            {item}
            <span
              className="mx-4 sm:mx-6 text-white/60"
              aria-hidden="true"
            >
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
