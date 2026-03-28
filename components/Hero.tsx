export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        {/* Use stadium-hero.png — updated asset; replace public/stadium-hero.png when you change the photo */}
        <img
          src="/stadium-hero.png"
          alt="Oil City Stadium and baseball field — NWI Fun Ball"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"
          aria-hidden="true"
        />
      </div>

      {/* Mascot + title together over the field image */}
      <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:min-h-[500px] sm:px-6 lg:min-h-[560px] lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6 md:gap-8 lg:gap-10">
          <img
            src="/hot-dog-mascot.png"
            alt=""
            width={220}
            height={220}
            className="h-36 w-auto max-h-[40vh] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] sm:h-44 md:h-52 lg:h-60"
            decoding="async"
          />
          <h1 className="text-center text-5xl font-black uppercase tracking-tighter text-nwi-orange drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_#1a1b2e,_-1px_-1px_0_#1a1b2e] sm:text-6xl sm:text-left md:text-7xl lg:text-8xl">
            NWI FUN BALL
          </h1>
        </div>
      </div>
    </section>
  );
}
