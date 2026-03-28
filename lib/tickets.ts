/**
 * NWI Fun Ball ticket products and pricing.
 * Update priceCents to change ticket prices.
 */
export const TICKET_PRODUCTS = [
  { id: "general", name: "General Admission", priceCents: 1500 },
  { id: "vip", name: "VIP Family Pack", priceCents: 5000 },
] as const;

export type TicketProductId = (typeof TICKET_PRODUCTS)[number]["id"];

export function getTicketProduct(id: string) {
  return TICKET_PRODUCTS.find((p) => p.id === id);
}
