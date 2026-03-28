import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative border-t border-gray-200/60 bg-white/80 py-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center sm:text-left text-nwi-navy font-medium">
          <span className="mr-2 text-nwi-orange" aria-hidden="true">
            ✱
          </span>
          NWI Fun Ball, Where Everyone Wins
        </p>
        <div className="flex justify-center sm:justify-end shrink-0">
          <Image
            src="/region-razzles-logo-transparent.png"
            alt="Region Razzles"
            width={280}
            height={140}
            className="h-16 sm:h-20 w-auto max-w-[min(100%,240px)] object-contain object-bottom"
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
}
