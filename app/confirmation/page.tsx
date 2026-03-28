import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div className="text-6xl mb-4">🎫</div>
        <h1 className="text-2xl font-bold text-nwi-navy mb-2">
          Thank you for your purchase!
        </h1>
        <p className="text-nwi-navy/80 mb-8">
          Your tickets have been sent to your email. Please check your inbox (and spam folder). Show your ticket on your phone at the door.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
