import { neon } from "@neondatabase/serverless";

type NeonSql = ReturnType<typeof neon>;

let sql: NeonSql | null = null;

function getSql(): NeonSql {
  if (!sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    sql = neon(url);
  }
  return sql;
}

export async function initOrdersTable() {
  await getSql()`
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
  await getSql()`
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

export type OrderRow = {
  product_id: string;
  quantity: number;
};

export async function getOrderByTicketId(
  ticketId: string
): Promise<OrderRow | null> {
  const rows = (await getSql()`
    SELECT * FROM orders WHERE ticket_id = ${ticketId} LIMIT 1
  `) as OrderRow[];
  return rows[0] ?? null;
}
