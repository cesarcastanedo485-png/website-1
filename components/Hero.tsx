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
      </div>

      {/* Mascot + title + Region Razzles — logos flanking the headline */}
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 px-4 pt-10 pb-20 sm:gap-x-4 sm:pt-14 sm:pb-24 md:gap-x-8 md:pt-16 lg:pt-20 lg:pb-28">
        <Image
          src="/hot-dog-mascot.png"
          alt=""
          width={200}
          height={200}
          className="h-24 w-auto justify-self-end scale-x-[-1] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] sm:h-36 md:h-44 lg:h-52"
          unoptimized
          priority
        />
        <h1 className="text-center text-4xl font-black uppercase leading-tight tracking-tighter text-nwi-orange drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] sm:text-6xl md:text-7xl lg:text-8xl">
          NWI FUN BALL
        </h1>
        <Image
          src="/region-razzles-logo-transparent.png"
          alt="Region Razzles"
          width={280}
          height={280}
          className="h-16 w-auto justify-self-start object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] sm:h-24 md:h-28 lg:h-32"
          unoptimized
        />
      </div>
    </section>
  );
}
