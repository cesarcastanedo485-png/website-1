import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { nanoid } from "nanoid";
import { getTicketProduct } from "@/lib/tickets";
import { initOrdersTable, insertOrder } from "@/lib/db";
import { sendTicketEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature");
    if (!sig) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Webhook error";
    console.error("Webhook signature verification failed:", msg);
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const productId = session.metadata?.productId;
  const quantity = parseInt(session.metadata?.quantity || "1", 10);
  const customerEmail = session.customer_email || session.customer_details?.email;

  if (!productId || !customerEmail) {
    console.error("Missing productId or customerEmail in session metadata");
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  const product = getTicketProduct(productId);
  if (!product) {
    console.error("Invalid productId:", productId);
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const totalCents = product.priceCents * quantity;
  const ticketId = `NWI-${nanoid(8).toUpperCase()}`;

  try {
    await initOrdersTable();
    await insertOrder({
      stripeSessionId: session.id,
      customerEmail,
      productId,
      quantity,
      totalCents,
      ticketId,
    });

    await sendTicketEmail({
      to: customerEmail,
      ticketId,
      productName: product.name,
      quantity,
      totalCents,
    });

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return NextResponse.json(
      { error: "Processing failed" },
      { status: 500 }
    );
  }
}
