"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const TICKET_CARDS = [
  {
    id: "press",
    title: "Press Conference",
    content: (
      <>
        <p className="text-nwi-navy/90 text-sm sm:text-base">
          <strong>Press conference details:</strong> March 29th, noon, Oil City Stadium.
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
    id: "contact",
    title: "Contact Box",
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
    action: {
      href: "mailto:visionquest2@outlook.com",
      label: "Contact Now",
      ariaLabel: "Email Becky Mateja",
    },
    layout: "landscape" as const,
  },
];

export function TicketGrid() {
  return (
    <section
      id="tickets"
      className="py-10 sm:py-12 lg:py-14 bg-nwi-pink"
      aria-labelledby="tickets-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="tickets-heading"
          className="text-3xl sm:text-4xl font-black text-nwi-navy text-center mb-8"
        >
          Dedicated Tickets
        </h2>

        <div className="grid gap-6">
          {TICKET_CARDS.map((card) => (
            <Card
              key={card.id}
              className={`flex flex-col border-2 border-nwi-navy/20 bg-[#d6e4fa] w-full`}
            >
              {"layout" in card && card.layout === "landscape" ? (
                <>
                  <CardHeader className="pb-2 sm:pb-4">
                    <CardTitle className="text-2xl font-black">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
                      <div className="flex-1 flex flex-col gap-3 text-nwi-navy/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2 lg:gap-x-10">
                        {card.content}
                      </div>
                      {"action" in card && (
                        <div className="flex shrink-0 items-center justify-center lg:justify-end lg:border-l-2 lg:border-nwi-navy/15 lg:pl-8">
                          <Button asChild className="w-full min-w-[200px] lg:w-auto lg:min-w-[220px]" size="lg">
                            <Link
                              href={card.action.href}
                              aria-label={card.action.ariaLabel}
                            >
                              {card.action.label}
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                    <CardTitle className="text-2xl font-black">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">{card.content}</CardContent>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
