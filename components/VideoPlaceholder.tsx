"use client";

import { useMemo } from "react";
import {
  DEFAULT_FACEBOOK_REEL_URL,
  facebookPluginEmbedUrl,
} from "@/lib/promo-video";

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

type Embed =
  | { kind: "iframe"; src: string; facebookPortrait: boolean }
  | { kind: "video"; src: string };

function resolveEmbed(configured: string): Embed {
  const raw = configured.trim();
  if (!raw) {
    return {
      kind: "iframe",
      src: facebookPluginEmbedUrl(DEFAULT_FACEBOOK_REEL_URL),
      facebookPortrait: true,
    };
  }
  if (raw.includes("facebook.com/plugins/video") || raw.includes("facebook.com/plugins/post")) {
    return { kind: "iframe", src: raw, facebookPortrait: true };
  }
  if (
    raw.includes("facebook.com/reel/") ||
    raw.includes("facebook.com/watch") ||
    (raw.includes("facebook.com/") && raw.includes("/videos/"))
  ) {
    return {
      kind: "iframe",
      src: facebookPluginEmbedUrl(raw),
      facebookPortrait: true,
    };
  }
  const yt = youtubeEmbedUrl(raw);
  if (yt) return { kind: "iframe", src: yt, facebookPortrait: false };
  if (/\.(mp4|webm)(\?|$)/i.test(raw)) {
    return { kind: "video", src: raw };
  }
  if (raw.includes("youtube.com/embed")) {
    return { kind: "iframe", src: raw, facebookPortrait: false };
  }
  return { kind: "iframe", src: raw, facebookPortrait: false };
}

export function VideoPlaceholder() {
  const configured = process.env.NEXT_PUBLIC_PROMO_VIDEO_URL?.trim() ?? "";
  const embed = useMemo(() => resolveEmbed(configured), [configured]);

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
        {embed.kind === "iframe" && embed.facebookPortrait ? (
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-xl border-2 border-nwi-orange/30 bg-nwi-navy/80 shadow-lg">
            <div className="relative w-full pt-[177.78%]">
              <iframe
                title="NWI Fun Ball Facebook video"
                src={embed.src}
                className="absolute inset-0 h-full w-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : embed.kind === "iframe" ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-nwi-orange/30 bg-nwi-navy/80">
            <iframe
              title="NWI Fun Ball promotional video"
              src={embed.src}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-nwi-orange/30 bg-nwi-navy/80">
            <video
              className="absolute inset-0 h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
              src={embed.src}
            >
              Your browser does not support embedded video.
            </video>
          </div>
        )}
      </div>
    </section>
  );
}
