"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HometownTicketEmbed } from "@/components/HometownTicketEmbed";

export function TicketGrid() {
  return (
    <section
      id="tickets"
      className="py-16 sm:py-20 lg:py-24 bg-nwi-pink"
      aria-labelledby="tickets-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="tickets-heading"
          className="text-2xl sm:text-3xl font-bold text-nwi-navy text-center mb-12"
        >
          Tickets
        </h2>

        <Card className="mx-auto max-w-3xl flex flex-col bg-blue-50/80 border-blue-200">
          <CardHeader>
            <CardTitle>Press Conference &amp; Event Info</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-nwi-navy text-base sm:text-lg font-black leading-snug">
              Season Thursday-night game dates: see the{" "}
              <Link
                href="#schedule"
                className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
              >
                schedule calendar
              </Link>{" "}
              below.
            </p>
            <p className="text-nwi-navy/90 text-sm sm:text-base mt-3">
              <strong>Press conference:</strong> March 29, noon — Oil City Stadium, Whiting,
              Indiana. Full details for media and partners.
            </p>
            <p className="text-nwi-navy/90 text-sm sm:text-base mt-2 font-semibold">
              Tickets on sale April 1, &apos;26.
            </p>
          </CardContent>
        </Card>

        <Card className="mx-auto max-w-3xl mt-8 flex flex-col border-2 border-nwi-navy/20 bg-blue-50/80 shadow-[0_8px_0_rgba(26,27,46,0.08)] rounded-2xl overflow-hidden">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl font-black text-nwi-navy">
              Buy tickets
            </CardTitle>
            <p className="text-sm text-nwi-navy/80 font-medium pt-1">
              Official ticketing through Hometown Ticketing — select your event below.
            </p>
          </CardHeader>
          <CardContent className="pt-0 pb-6 sm:pb-8">
            <div className="rounded-xl border-2 border-nwi-navy/15 bg-white p-3 sm:p-4">
              <HometownTicketEmbed />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
