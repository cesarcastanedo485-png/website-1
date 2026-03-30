"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function IntroSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
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
          </div>

          {/* Right: Primary CTA Card */}
          <div className="flex flex-col">
            <div className="rounded-xl bg-nwi-orange p-8 sm:p-10 text-center shadow-lg">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
                2026 season
              </p>
              <p className="text-white/95 text-sm sm:text-base mb-6">
                Tickets On Sale April 1, 2026
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-nwi-orange hover:bg-gray-100 hover:text-nwi-orange-dark w-full max-w-xs mx-auto"
              >
                <Link href="/checkout" aria-label="Buy tickets now">
                  Buy Tickets Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
