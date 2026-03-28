import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NWI Fun Ball | Sportainment in Whiting, Indiana",
  description:
    "7 innings of non-stop fun! Baseball, softball, singing, dodgeball, dancing, soccer and FREE popcorn. Thursday nights at Oil City Stadium—June, July, August.",
  openGraph: {
    title: "NWI Fun Ball | Where Everyone Wins",
    description: "Sportainment at Oil City Stadium in Whiting, Indiana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
