"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const FACEBOOK_VIDEO_URL = "https://www.facebook.com/reel/1630445864933957";
const FACEBOOK_EMBED_URL = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
  FACEBOOK_VIDEO_URL
)}&show_text=false&width=500&height=888`;

export function IntroSection() {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 lg:py-16"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:gap-8 items-stretch">
          {/* Left: Content */}
          <div className="vintage-card bg-[#f6e4eb] p-6 sm:p-8 space-y-6">
            <h2 id="intro-heading" className="sr-only">
              About NWI Fun Ball
            </h2>
            <p className="text-lg sm:text-xl text-nwi-navy leading-relaxed">
              There&apos;s a new adventure in the Region.{" "}
              <strong className="font-bold">Sportainment! Playform! Teamcast!</strong>{" "}
              Yes, a &quot;Savanna Bananas&quot;-like experience just raring to go.
            </p>
            <p className="text-base sm:text-lg text-nwi-navy/90 leading-relaxed">
              7 &quot;Innings&quot; of non-stop fun! Girls and guys compete, perform, and
              include you in the antics. Baseball/Softball, Singing, Dodgeball,
              Dancing, Soccer and <strong>FREE popcorn!</strong>
            </p>
            <p className="text-base sm:text-lg text-nwi-navy font-medium">
              Thursday nights at Oil City Stadium in Whiting, Indiana right on
              Lake Michigan—June, July, August!
            </p>
            <div className="mt-2 mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-nwi-navy/20 bg-white shadow-[0_8px_0_rgba(26,27,46,0.12)]">
              <div className="relative w-full pt-[177.78%]">
                <iframe
                  title="NWI Fun Ball Facebook video"
                  src={FACEBOOK_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right: Primary CTA Card */}
          <div className="flex flex-col">
            <div className="vintage-card bg-nwi-orange p-8 sm:p-10 text-center shadow-lg min-h-[460px] flex flex-col justify-center">
              <p className="text-6xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] mb-5">
                Buy Tickets Now
              </p>
              <p className="text-white/95 text-2xl sm:text-3xl font-extrabold mb-8">
                Tickets On Sale April 1, 2026
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#ffbe3d] text-white hover:bg-[#f6ad1f] hover:text-white w-full max-w-[300px] mx-auto border-2 border-white/30 h-14 text-xl"
              >
                <Link
                  href="https://www.hometownticketing.com/"
                  aria-label="Purchase tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Tickets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
