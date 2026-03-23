"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Stadium background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/stadium-hero.jpg"
          alt="Baseball field at night lit by stadium lights - aerial view of diamond and outfield"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-nwi-orange uppercase tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] max-w-2xl">
          NWI FUN BALL
        </h1>
      </div>
    </section>
  );
}
