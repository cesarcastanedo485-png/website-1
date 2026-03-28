import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative min-h-[140px] border-t border-gray-200/60 bg-white/90 py-8 pb-28 sm:min-h-[120px] sm:pb-10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-2xl text-center text-nwi-navy font-medium sm:mx-0 sm:max-w-md sm:text-left">
          <span className="mr-2 text-nwi-orange" aria-hidden="true">
            ✱
          </span>
          NWI Fun Ball, Where Everyone Wins
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-5 sm:right-6 lg:bottom-6 lg:right-10">
        <Image
          src="/region-razzles-logo-transparent.png"
          alt="Region Razzles"
          width={300}
          height={150}
          className="pointer-events-auto h-20 w-auto max-w-[min(72vw,260px)] object-contain object-right-bottom sm:h-24 lg:h-28"
          unoptimized
        />
      </div>
    </footer>
  );
}
