import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const metadataBase = getMetadataBase();
const ogJpgUrl = metadataBase
  ? new URL("/og-social-1200x630.jpg", metadataBase).toString()
  : "/og-social-1200x630.jpg";
const ogPngUrl = metadataBase
  ? new URL("/og-social-1200x630.png", metadataBase).toString()
  : "/og-social-1200x630.png";

function getMetadataBase(): URL | undefined {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!url) return undefined;
  const withProtocol = url.startsWith("http") ? url : `https://${url}`;
  try {
    return new URL(withProtocol);
  } catch {
    return undefined;
  }
}

export const metadata: Metadata = {
  metadataBase,
  title: "NWI Fun Ball | Sportainment in Whiting, Indiana",
  description:
    "7 innings of non-stop fun! Baseball, softball, singing, dodgeball, dancing, soccer and FREE popcorn. Thursday nights at Oil City Stadium—June, July, August.",
  openGraph: {
    title: "NWI Fun Ball | Where Everyone Wins",
    description: "Sportainment at Oil City Stadium in Whiting, Indiana.",
    type: "website",
    url: metadataBase ? new URL("/", metadataBase).toString() : undefined,
    images: [
      {
        url: ogJpgUrl,
        secureUrl: ogJpgUrl,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "NWI Fun Ball - Region Razzles logo",
      },
      {
        url: ogPngUrl,
        secureUrl: ogPngUrl,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "NWI Fun Ball - Region Razzles logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogJpgUrl],
  },
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
    ? { appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID }
    : undefined,
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
