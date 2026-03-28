"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HOMETOWN_TICKETING_URL } from "@/lib/ticketing";

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

const TICKET_CARDS = [
  {
    id: "press",
    title: "Press Conference & Event Info",
    content: (
      <>
        <p className="text-nwi-navy/90 text-sm sm:text-base">
          <strong>Press conference full details.</strong> Tickets go on sale April
          1, &apos;26.
        </p>
        <p className="text-nwi-navy/90 text-sm sm:text-base mt-2 font-medium">
          Venue: NWI Fun Ball, Where Everyone Wins
        </p>
        <div
          className="mt-4 rounded-lg bg-nwi-navy p-4 grid grid-cols-5 gap-2"
          role="img"
          aria-label="Decorative pattern"
        >
          {[
            "bg-amber-400",
            "bg-rose-400",
            "bg-pink-300",
            "bg-yellow-300",
            "bg-fuchsia-400",
            "bg-orange-300",
            "bg-sky-400",
            "bg-lime-300",
            "bg-violet-400",
            "bg-nwi-orange",
          ].map((dotClass, i) => (
            <span
              key={i}
              className={`mx-auto block h-8 w-8 shrink-0 rounded-full opacity-90 ${dotClass}`}
              aria-hidden="true"
            />
          ))}
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
            href="tel:+1234567890"
            className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
          >
            (123) 456-7890
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
                    <a
                      href={HOMETOWN_TICKETING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buy ${card.title} tickets (opens in new tab)`}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Buy Tickets
                      <ExternalLinkIcon />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-nwi-navy/70">
          Securely powered by{" "}
          <a
            href="https://www.hometownticketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nwi-orange hover:underline font-medium"
          >
            HomeTown Ticketing
          </a>
        </p>
      </div>
    </section>
  );
}
