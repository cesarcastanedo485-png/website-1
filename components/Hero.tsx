"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[600px] overflow-visible border-y-2 border-nwi-navy/20 bg-[#88b6e6]"
      aria-label="Hero section"
    >
      {/* Stadium background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/stadium-hero.png"
          alt="Oil City Stadium baseball field - aerial view of diamond and outfield on a sunny day"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
        />
        {/* Mascot overlay - bottom left, foot touches orange ticker below */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-start pointer-events-none translate-y-8 sm:translate-y-10"
          aria-hidden="true"
        >
          <div className="h-[85%] w-auto min-w-[200px] max-w-[min(380px,50vw)] flex items-end">
            <Image
              src="/mascot.png"
              alt=""
              width={380}
              height={475}
              className="scale-x-[-1] object-contain object-left-bottom drop-shadow-2xl w-full h-full"
            />
          </div>
        </div>
        {/* Region Razzles logo - bottom right, balances the mascot */}
        <div
          className="absolute inset-0 z-10 flex items-end justify-end pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-[85%] w-auto min-w-[140px] max-w-[min(320px,42vw)] flex items-end">
            <Image
              src="/region-razzles-logo.png"
              alt="Region Razzles"
              width={320}
              height={320}
              className="object-contain object-right-bottom drop-shadow-2xl w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-10 lg:pb-24 flex flex-col items-start text-left">
        <h1 className="text-6xl sm:text-7xl lg:text-[7.2rem] xl:text-[8rem] font-black text-nwi-orange uppercase tracking-tighter drop-shadow-[0_6px_0_rgba(26,27,46,0.45)] [text-shadow:_2px_2px_0_#1a1b2e,_-2px_-2px_0_#1a1b2e,_2px_-2px_0_#1a1b2e,_-2px_2px_0_#1a1b2e] max-w-[900px] leading-[0.9]">
          NWI FUN BALL
        </h1>
      </div>
    </section>
  );
}
