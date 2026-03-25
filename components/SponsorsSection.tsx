"use client";

import Image from "next/image";

const SPONSORS_IMAGE = "/sponsors/nwi-funball-sponsorship-packages.png";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-10" aria-labelledby="sponsors-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="sponsors-heading" className="text-3xl font-black text-nwi-navy text-center">
          Sponsors
        </h2>
        <p className="mt-4 text-center text-nwi-navy/80 max-w-2xl mx-auto">
          NWI Fun Ball sponsorship packages through JEST (Joint Efforts for Sports & Tourism)—tiers,
          benefits, and contact for Becky Mateja Lombardini.
        </p>
        <div className="mt-8 flex justify-center">
          <figure className="relative w-full max-w-5xl rounded-xl border-2 border-nwi-navy/15 overflow-hidden shadow-md bg-white">
            <Image
              src={SPONSORS_IMAGE}
              alt="NWI Fun Ball sponsorship packages: benefit tiers from $250 to $50,000 with JEST contact 219-921-4584"
              width={771}
              height={1024}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 64rem"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
