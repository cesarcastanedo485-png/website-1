import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative min-h-[130px] border-t border-gray-200/60 bg-white/80 py-8 pb-28 sm:pb-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-nwi-navy font-medium sm:text-left sm:max-w-lg">
          <span className="mr-2 text-nwi-orange" aria-hidden="true">
            ✱
          </span>
          NWI Fun Ball, Where Everyone Wins
        </p>

        <div
          id="contact"
          className="mt-10 border-t border-nwi-navy/10 pt-10"
          aria-labelledby="contact-footer-heading"
        >
          <div className="mx-auto max-w-2xl">
            <h2
              id="contact-footer-heading"
              className="text-center text-2xl font-black uppercase tracking-tight text-nwi-navy sm:text-3xl"
            >
              Contact
            </h2>
            <div className="mt-5 rounded-2xl border-2 border-nwi-orange/40 bg-nwi-pink px-6 py-6 text-center shadow-[0_8px_0_rgba(26,27,46,0.12)] sm:px-8 sm:py-8">
              <p className="text-nwi-navy/90 text-sm sm:text-base">
                Questions, tickets, or press — reach us here.
              </p>
              <p className="mt-4 text-lg font-bold text-nwi-navy sm:text-xl">
                <a
                  href="mailto:visionquest2@outlook.com"
                  className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded break-all"
                >
                  visionquest2@outlook.com
                </a>
              </p>
              <p className="mt-3 text-lg font-bold text-nwi-navy sm:text-xl">
                <a
                  href="tel:+12199214584"
                  className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
                >
                  219-921-4584
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-5 sm:right-6">
        <Image
          src="/region-razzles-logo-transparent.png"
          alt="Region Razzles"
          width={280}
          height={140}
          className="pointer-events-auto h-16 w-auto max-w-[min(70vw,220px)] object-contain sm:h-20"
          unoptimized
        />
      </div>
    </footer>
  );
}
