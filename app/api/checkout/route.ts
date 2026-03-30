import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getTicketProduct } from "@/lib/tickets";

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { productId, quantity, customerEmail } = (await request.json()) as {
      productId: string;
      quantity: number;
      customerEmail: string;
    };

    if (!productId || !quantity || !customerEmail) {
      return NextResponse.json(
        { error: "Missing productId, quantity, or customerEmail" },
        { status: 400 }
      );
    }

    const product = getTicketProduct(productId);
    if (!product) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const totalCents = product.priceCents * quantity;
    const baseUrl =
      process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3001";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: `NWI Fun Ball - ${product.name}`,
            },
            unit_amount: product.priceCents,
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#tickets`,
      customer_email: customerEmail,
      metadata: {
        productId,
        quantity: String(quantity),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Checkout failed" },
      { status: 500 }
    );
  }
}
