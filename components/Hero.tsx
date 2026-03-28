"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-visible"
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
        {/* Hot dog mascot — bottom left, lines up with orange ticker */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-start pointer-events-none translate-y-8 sm:translate-y-10"
          aria-hidden="true"
        >
          <div className="h-[85%] w-auto min-w-[200px] max-w-[min(380px,50vw)] flex items-end">
            <Image
              src="/hot-dog-mascot.png"
              alt=""
              width={380}
              height={380}
              className="object-contain object-left object-bottom drop-shadow-2xl w-full h-full"
              unoptimized
            />
          </div>
        </div>
        {/* Region Razzles — bottom right (transparent PNG) */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-end pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-[85%] w-auto min-w-[140px] max-w-[min(320px,42vw)] flex items-end">
            <Image
              src="/region-razzles-logo-transparent.png"
              alt="Region Razzles"
              width={320}
              height={320}
              className="object-contain object-right object-bottom drop-shadow-2xl w-full h-full"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-nwi-orange uppercase tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] max-w-2xl">
          NWI FUN BALL
        </h1>
      </div>
    </section>
  );
}
