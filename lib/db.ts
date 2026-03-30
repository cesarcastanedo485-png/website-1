import { neon } from "@neondatabase/serverless";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(url);
}

export async function initOrdersTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      stripe_session_id TEXT UNIQUE NOT NULL,
      customer_email TEXT NOT NULL,
      product_id TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      total_cents INTEGER NOT NULL,
      ticket_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function insertOrder(order: {
  stripeSessionId: string;
  customerEmail: string;
  productId: string;
  quantity: number;
  totalCents: number;
  ticketId: string;
}) {
  const sql = getSql();
  await sql`
    INSERT INTO orders (stripe_session_id, customer_email, product_id, quantity, total_cents, ticket_id)
    VALUES (
      ${order.stripeSessionId},
      ${order.customerEmail},
      ${order.productId},
      ${order.quantity},
      ${order.totalCents},
      ${order.ticketId}
    )
  `;
}

export async function getOrderByTicketId(ticketId: string) {
  const sql = getSql();
  const rows = await sql`
    SELECT * FROM orders WHERE ticket_id = ${ticketId} LIMIT 1
  `;
  return rows[0] ?? null;
}
