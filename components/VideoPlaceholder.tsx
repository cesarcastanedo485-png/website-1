"use client";

export function VideoPlaceholder() {
  return (
    <section
      id="video"
      className="py-10 sm:py-12 bg-nwi-pink"
      aria-labelledby="video-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="video-heading" className="sr-only">
          Promotional Video
        </h2>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#7fa2d7] border-2 border-nwi-navy/25 flex items-center justify-center shadow-[0_10px_0_rgba(26,27,46,0.16)]">
          {/* Placeholder content - replace with <video> when ready */}
          <div className="flex flex-col items-center gap-4 text-center p-8">
            <div
              className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white text-lg font-semibold">
              Video coming soon
            </p>
            <p className="text-white/85 text-sm max-w-sm">
              Upload your video to replace this placeholder. Supported: MP4, WebM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
