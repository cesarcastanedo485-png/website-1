import Link from "next/link";
import { getOrderByTicketId } from "@/lib/db";

type Props = {
  params: Promise<{ ticketId: string }>;
};

export default async function VerifyPage({ params }: Props) {
  const { ticketId } = await params;
  const order = await getOrderByTicketId(ticketId);

  if (!order) {
    return (
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-md text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4"
            aria-hidden="true"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-nwi-navy mb-2">Invalid Ticket</h1>
          <p className="text-nwi-navy/80 mb-4">
            Ticket ID <strong className="font-mono">{ticketId}</strong> was not found.
          </p>
          <Link href="/" className="text-nwi-orange hover:underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const productName =
    order.product_id === "general" ? "General Admission" : "VIP Family Pack";

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-nwi-navy mb-2">Valid Ticket</h1>
        <p className="text-nwi-navy/80 mb-4">
          Ticket ID: <strong className="font-mono">{ticketId}</strong>
        </p>
        <div className="rounded-lg bg-nwi-pink p-4 text-left">
          <p>
            <strong>Product:</strong> {productName}
          </p>
          <p>
            <strong>Quantity:</strong> {order.quantity}
          </p>
        </div>
      </div>
    </main>
  );
}
