"use client";

export function VideoPlaceholder() {
  return (
    <section
      id="video"
      className="py-12 sm:py-16 bg-nwi-navy"
      aria-labelledby="video-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="video-heading" className="sr-only">
          Promotional Video
        </h2>
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-nwi-navy/80 border-2 border-nwi-orange/30 flex items-center justify-center">
          {/* Placeholder content - replace with <video> when ready */}
          <div className="flex flex-col items-center gap-4 text-center p-8">
            <div
              className="w-20 h-20 rounded-full bg-nwi-orange/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                className="w-10 h-10 text-nwi-orange"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-nwi-pink/90 text-lg font-medium">
              Video coming soon
            </p>
            <p className="text-nwi-pink/60 text-sm max-w-sm">
              Upload your video to replace this placeholder. Supported: MP4, WebM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
