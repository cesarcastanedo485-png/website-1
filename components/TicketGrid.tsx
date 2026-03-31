"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout" aria-label="Buy tickets">
                Buy Tickets
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
