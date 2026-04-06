"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactBoxSection() {
  return (
    <section
      id="contact"
      className="py-8 sm:py-10 bg-nwi-pink"
      aria-labelledby="contact-box-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="flex flex-col border-2 border-nwi-navy/20 bg-[#d6e4fa] w-full">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle
              id="contact-box-heading"
              className="text-2xl sm:text-3xl font-black text-nwi-navy"
            >
              Contact Box
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
              <div className="flex-1 flex flex-col gap-3 text-nwi-navy/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2 lg:gap-x-10">
                <p className="text-sm sm:text-base">
                  <strong>Contact:</strong> Becky Mateja
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+12199214584"
                    className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
                  >
                    219-921-4584
                  </a>
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:visionquest2@outlook.com"
                    className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded break-all"
                  >
                    visionquest2@outlook.com
                  </a>
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Address:</strong> 1700 119th St Stadium, Whiting, Indiana 46394
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-center lg:justify-end lg:border-l-2 lg:border-nwi-navy/15 lg:pl-8">
                <Button asChild className="w-full min-w-[200px] lg:w-auto lg:min-w-[220px]" size="lg">
                  <Link href="mailto:visionquest2@outlook.com" aria-label="Email Becky Mateja">
                    Contact Now
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
