"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[420px] overflow-hidden pb-8 sm:min-h-[500px] sm:pb-10 lg:min-h-[560px] lg:pb-12"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        <Image
          src="/stadium-hero.png"
          alt="Oil City Stadium baseball field — aerial view of diamond and outfield"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Region Razzles logo + title (logo was previously bottom-right; now primary mark beside headline) */}
      <div className="relative z-20 flex items-start justify-start px-3 pt-8 pb-16 sm:px-5 sm:pt-12 sm:pb-20 md:px-6 md:pt-14 lg:px-8 lg:pt-16">
        <div className="flex max-w-[min(96vw,48rem)] flex-row items-center gap-2 sm:max-w-[min(90vw,52rem)] sm:gap-3 md:gap-4 lg:max-w-[min(85%,42rem)] xl:max-w-[min(82%,44rem)]">
          <div
            className="shrink-0 self-center w-[min(38vw,11.5rem)] sm:w-[min(36vw,13rem)] md:w-[min(34vw,15rem)] lg:w-[min(32vw,17rem)]"
          >
            <Image
              src="/region-razzles-logo-transparent.png"
              alt="Region Razzles"
              width={400}
              height={400}
              className="h-auto w-full object-contain object-left object-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              unoptimized
              priority
            />
          </div>
          <h1 className="min-w-0 text-left text-3xl font-black uppercase leading-[0.95] tracking-tighter text-nwi-orange drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            NWI FUN BALL
          </h1>
        </div>
      </div>
    </section>
  );
}
