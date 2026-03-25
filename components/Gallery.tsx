"use client";

import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/gallery/gallery-01.jpg",
    alt: "NWI Fun Ball team members Silly Billy and a teammate in costume at an indoor venue",
  },
  {
    src: "/gallery/gallery-02.jpg",
    alt: "Softball player in team gear on the field at Oil City Stadium area",
  },
  {
    src: "/gallery/gallery-03.jpg",
    alt: "Fan in red, white, and blue at a sports watch party",
  },
  {
    src: "/gallery/gallery-04.jpg",
    alt: "NWI Fun Ball attendees in a lobby with decorative lighting",
  },
  {
    src: "/gallery/gallery-05.jpg",
    alt: "Funball Region Razzles at Oil City Stadium — dancers under pink and red lights",
  },
  {
    src: "/gallery/gallery-06.jpg",
    alt: "Fan in a pink cowboy hat enjoying a baseball game at Standard Park / Oil City Stadium",
  },
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="py-10" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="text-3xl font-black text-nwi-navy text-center">
          Gallery
        </h2>
        <p className="mt-4 text-center text-nwi-navy/80 max-w-2xl mx-auto">
          Scenes from callouts, games, and Fun Ball nights — community and sportainment in NWI.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
          {GALLERY_IMAGES.map(({ src, alt }) => (
            <li
              key={src}
              className="relative overflow-hidden rounded-xl border-2 border-nwi-navy/15 bg-nwi-navy/5 shadow-sm aspect-[4/5] sm:aspect-[3/4]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
