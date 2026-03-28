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
        {/* Region Razzles — bottom right over the field */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-end pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-[85%] w-auto min-w-[140px] max-w-[min(320px,42vw)] flex items-end pb-2 sm:pb-4">
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

      {/* Hot dog + title together, higher on the hero (not tucked on the grass) */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center justify-start px-4 pt-10 pb-20 sm:flex-row sm:justify-center sm:gap-6 sm:pt-14 sm:pb-24 md:gap-10 md:pt-16 lg:pt-20 lg:pb-28">
        <Image
          src="/hot-dog-mascot.png"
          alt=""
          width={200}
          height={200}
          className="h-28 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] sm:h-36 md:h-44 lg:h-52"
          unoptimized
          priority
        />
        <h1 className="mt-2 text-center text-5xl font-black uppercase tracking-tighter text-nwi-orange drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] sm:mt-0 sm:text-left sm:text-6xl md:text-7xl lg:text-8xl">
          NWI FUN BALL
        </h1>
      </div>
    </section>
  );
}
