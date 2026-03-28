import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative min-h-[130px] border-t border-gray-200/60 bg-white/80 py-8 pb-24 sm:pb-10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-nwi-navy font-medium sm:text-left sm:max-w-lg">
          <span className="mr-2 text-nwi-orange" aria-hidden="true">
            ✱
          </span>
          NWI Fun Ball, Where Everyone Wins
        </p>
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
