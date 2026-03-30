"use client";

import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/gallery/gallery-01.jpg",
    alt: "NWI Fun Ball — crowd and action at Oil City Stadium",
    width: 472,
    height: 826,
  },
  {
    src: "/gallery/gallery-02.jpg",
    alt: "NWI Fun Ball — players and entertainment on the field",
    width: 424,
    height: 834,
  },
  {
    src: "/gallery/gallery-03.jpg",
    alt: "NWI Fun Ball — game night at the stadium",
    width: 472,
    height: 637,
  },
  {
    src: "/gallery/gallery-04.jpg",
    alt: "NWI Fun Ball — fans enjoying the show",
    width: 472,
    height: 637,
  },
  {
    src: "/gallery/gallery-05.jpg",
    alt: "NWI Fun Ball — sportainment on the diamond",
    width: 472,
    height: 605,
  },
  {
    src: "/gallery/gallery-06.jpg",
    alt: "NWI Fun Ball — Oil City Stadium atmosphere",
    width: 472,
    height: 359,
  },
] as const;

export function GallerySection() {
  return (
    <section id="gallery" className="py-12 sm:py-16" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-heading"
          className="text-2xl sm:text-3xl font-bold text-nwi-navy text-center"
        >
          Gallery
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-center text-nwi-navy/80 text-sm sm:text-base">
          Photos from NWI Fun Ball at Oil City Stadium, Whiting, Indiana.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0">
          {GALLERY_IMAGES.map((img) => (
            <li
              key={img.src}
              className="overflow-hidden rounded-xl border-2 border-nwi-navy/10 bg-nwi-navy/5 shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
