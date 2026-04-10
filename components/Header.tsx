"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#video", label: "Video" },
  { href: "#team", label: "Team" },
  { href: "#tickets", label: "Tickets" },
  { href: "#schedule", label: "Schedule" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="flex items-center gap-2 sm:gap-3 text-nwi-navy focus:outline-none focus:ring-2 focus:ring-nwi-orange focus:ring-offset-2 rounded"
          aria-label="NWI Fun Ball - Home"
        >
          <Image
            src="/hot-dog-mascot.png"
            alt=""
            width={112}
            height={112}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain shrink-0"
            priority
            unoptimized
          />
          <span className="text-xl font-bold tracking-tight sm:text-2xl">
            NWI FUN BALL
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-nwi-navy hover:text-nwi-orange transition-colors focus:outline-none focus:ring-2 focus:ring-nwi-orange focus:ring-offset-2 rounded px-2 py-1"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-nwi-navy hover:text-nwi-orange focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" size="default">
            <Link href="#contact" aria-label="Contact us">
              Contact
            </Link>
          </Button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-200 ${mobileOpen ? "max-h-96" : "max-h-0"}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="border-t border-gray-200 bg-white px-4 py-4 space-y-2">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-medium text-nwi-navy hover:text-nwi-orange"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2 space-y-2">
            <Button asChild variant="outline" className="w-full" size="default">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
