"use client";

import Link from "next/link";
import { HometownTicketEmbed } from "@/components/HometownTicketEmbed";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-nwi-pink py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#tickets"
          className="text-sm font-semibold text-nwi-orange hover:underline mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
        >
          ← Back to tickets
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-nwi-navy mb-2">
          Buy tickets
        </h1>
        <p className="text-nwi-navy/80 mb-6 text-sm sm:text-base">
          NWI Fun Ball — Thursday nights at Oil City Stadium. Purchase through our official
          ticket partner.
        </p>
        <div className="rounded-2xl border-2 border-nwi-navy/20 bg-blue-50/80 shadow-[0_8px_0_rgba(26,27,46,0.08)] overflow-hidden">
          <div className="border-b border-nwi-navy/10 bg-white/60 px-4 py-3 sm:px-6">
            <p className="text-sm font-bold text-nwi-navy">Hometown Ticketing</p>
          </div>
          <div className="p-3 sm:p-5">
            <div className="rounded-xl border-2 border-nwi-navy/15 bg-white p-3 sm:p-4">
              <HometownTicketEmbed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
