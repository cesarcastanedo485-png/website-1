"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TICKET_PRODUCTS } from "@/lib/tickets";

const DEFAULT_PRODUCT = TICKET_PRODUCTS[0]!;

function CheckoutForm() {
  const product = DEFAULT_PRODUCT;
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalCents = product.priceCents * quantity;
  const totalDollars = (totalCents / 100).toFixed(2);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          quantity,
          customerEmail: email,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <Link
          href="/#tickets"
          className="text-sm text-nwi-orange hover:underline mb-6 inline-block"
        >
          ← Back to tickets
        </Link>
        <h1 className="text-2xl font-bold text-nwi-navy mb-2">
          Purchase Tickets
        </h1>
        <p className="text-nwi-navy/80 mb-8">
          NWI Fun Ball — Thursday nights at Oil City Stadium
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-lg bg-nwi-navy/5 p-4">
            <p className="text-sm font-medium text-nwi-navy mb-1">Ticket</p>
            <p className="text-nwi-navy">
              {product.name} — ${(product.priceCents / 100).toFixed(2)} each
            </p>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-nwi-navy mb-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              min={1}
              max={20}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-nwi-navy focus:border-nwi-orange focus:ring-nwi-orange"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-nwi-navy mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-nwi-navy focus:border-nwi-orange focus:ring-nwi-orange"
            />
            <p className="text-sm text-nwi-navy/70 mt-1">
              Your tickets will be sent to this email.
            </p>
          </div>

          <div className="rounded-lg bg-nwi-navy/5 p-4">
            <p className="text-lg font-semibold text-nwi-navy">
              Total: ${totalDollars}
            </p>
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? "Processing…" : `Pay $${totalDollars}`}
          </Button>
        </form>

        <p className="text-sm text-nwi-navy/70 mt-6 text-center">
          Secure payment powered by Stripe
        </p>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
