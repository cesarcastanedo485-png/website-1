"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GOOD_DAY_URL = process.env.NEXT_PUBLIC_GOOD_DAY_NWI_URL?.trim() ?? "";

export function TeamAndMediaSection() {
  return (
    <section
      id="team"
      className="py-12 sm:py-16 bg-nwi-pink border-y border-nwi-navy/10"
      aria-labelledby="team-media-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="team-media-heading" className="sr-only">
          Team rehearsals and media
        </h2>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 max-w-5xl mx-auto">
          <Card className="flex flex-col border-2 border-nwi-navy/20 bg-blue-50/80 shadow-[0_8px_0_rgba(26,27,46,0.08)] rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl sm:text-2xl font-black text-nwi-navy">
                Join the team
              </CardTitle>
              <p className="text-sm text-nwi-navy/80 font-medium pt-1">
                Interested in joining the team? Come to a rehearsal.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-nwi-navy/90 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-nwi-navy">Tuesdays, 6:30 PM</strong> — Sparta Dome,{" "}
                <strong>1355 E North Street</strong>, Crown Point, Indiana.
              </p>
              <p>
                <strong className="text-nwi-navy">Thursdays, 6:30 PM</strong> — South Lake Mall,
                main center by the elevator, <strong>2109 South Lake Mall</strong>, Merrillville.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-2 border-nwi-navy/20 bg-blue-50/80 shadow-[0_8px_0_rgba(26,27,46,0.08)] rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl sm:text-2xl font-black text-nwi-navy">
                Watch us on TV
              </CardTitle>
              <p className="text-sm text-nwi-navy/80 font-medium pt-1">
                Catch NWI Fun Ball on <strong>Good Day Northwest Indiana (NWI)</strong>.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <p className="text-nwi-navy/90 text-sm sm:text-base leading-relaxed">
                Follow live streams and segments so you don&apos;t miss a moment.
              </p>
              {GOOD_DAY_URL ? (
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-nwi-orange hover:bg-nwi-orange/90 text-white font-bold"
                >
                  <Link
                    href={GOOD_DAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Good Day NWI live streams (opens in new tab)"
                  >
                    Watch Good Day NWI
                  </Link>
                </Button>
              ) : (
                <p className="text-sm text-nwi-navy/70 italic">
                  Stream link coming soon — ask us at the contact box below for where to watch live.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
