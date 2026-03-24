"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TICKET_CARDS = [
  {
    id: "press",
    title: "Press Conference & Event Info",
    content: (
      <>
        <p className="text-nwi-navy/90 text-sm sm:text-base">
          <strong>Press conference details:</strong> March 29th, noon, Oil City Stadium.
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-2 font-medium">
          Event dates: June 6–11 & 29 • July 9 & 30 • August 13 & 29
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-2">
          Tickets go on sale April 1, &apos;26.
        </p>
        <div
          className="mt-4 rounded-lg bg-nwi-navy p-4 grid grid-cols-5 gap-2"
          role="img"
          aria-label="Decorative floral icons"
        >
          {["🌻", "🌺", "🌸", "🌼", "🌷", "⭐", "✨", "🌟", "💫", "🎉"].map(
            (emoji, i) => (
              <span key={i} className="text-2xl text-center" aria-hidden="true">
                {emoji}
              </span>
            )
          )}
        </div>
      </>
    ),
  },
  {
    id: "general",
    title: "General Admission",
    content: (
      <>
        <p className="text-nwi-navy/90 text-sm sm:text-base">
          <strong>Contact:</strong> Becky Mateja
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-2">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+12199214584"
            className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
          >
            219-921-4584
          </a>
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-1">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:visionquest2@outlook.com"
            className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded break-all"
          >
            visionquest2@outlook.com
          </a>
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-2">
          <strong>Address:</strong> 1700 119th St Stadium, Whiting, Indiana 46394
        </p>
      </>
    ),
  },
  {
    id: "vip",
    title: "VIP Family Pack",
    content: (
      <>
        <p className="text-nwi-navy/90 text-sm sm:text-base">
          Premium seating for the whole family. Enjoy exclusive access, reserved
          seats, and special perks throughout the season. Perfect for groups
          looking to make the most of their NWI Fun Ball experience.
        </p>
        <p className="text-nwi-navy/80 text-sm mt-2">
          Contact us for pricing and availability.
        </p>
      </>
    ),
  },
];

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
          Dedicated Tickets
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TICKET_CARDS.map((card) => (
            <Card
              key={card.id}
              className={`flex flex-col ${card.id === "press" ? "bg-blue-50/80 border-blue-200 sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">{card.content}</CardContent>
              {(card.id === "general" || card.id === "vip") && (
                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link
                      href={`/checkout?product=${card.id}`}
                      aria-label={`Buy ${card.title} tickets`}
                    >
                      Buy Tickets
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
