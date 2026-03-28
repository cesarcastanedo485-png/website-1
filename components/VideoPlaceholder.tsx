"use client";

import { useMemo } from "react";

function youtubeEmbedUrl(input: string): string | null {
  try {
    const u = new URL(input, "https://example.com");
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      const m = u.pathname.match(/\/embed\/([^/?]+)/);
      if (m) return `https://www.youtube.com/embed/${m[1]}`;
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoPlaceholder() {
  const url = process.env.NEXT_PUBLIC_PROMO_VIDEO_URL?.trim() ?? "";

  const embed = useMemo(() => {
    if (!url) return null;
    if (url.includes("facebook.com/plugins/video") || url.includes("facebook.com/plugins/post")) {
      return { type: "iframe" as const, src: url };
    }
    const yt = youtubeEmbedUrl(url);
    if (yt) return { type: "iframe" as const, src: yt };
    if (/\.(mp4|webm)(\?|$)/i.test(url)) {
      return { type: "video" as const, src: url };
    }
    if (url.includes("youtube.com/embed")) {
      return { type: "iframe" as const, src: url };
    }
    return { type: "iframe" as const, src: url };
  }, [url]);

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
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-nwi-orange/30 bg-nwi-navy/80">
          {embed?.type === "iframe" ? (
            <iframe
              title="NWI Fun Ball promotional video"
              src={embed.src}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : embed?.type === "video" ? (
            <video
              className="absolute inset-0 h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
              src={embed.src}
            >
              Your browser does not support embedded video.
            </video>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-nwi-orange/20"
                aria-hidden="true"
              >
                <svg
                  className="h-10 w-10 text-nwi-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-nwi-pink/90">Video URL not configured</p>
              <p className="max-w-md text-sm text-nwi-pink/60">
                In Vercel → Settings → Environment Variables, set{" "}
                <code className="rounded bg-nwi-navy px-1.5 py-0.5 text-nwi-pink/90">
                  NEXT_PUBLIC_PROMO_VIDEO_URL
                </code>{" "}
                to your Facebook video plugin URL, YouTube link, or direct .mp4/.webm URL.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
