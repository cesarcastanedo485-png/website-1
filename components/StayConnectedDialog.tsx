"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  buildStayConnectedMailto,
  getStayConnectedRecipient,
} from "@/lib/stay-connected";

const STORAGE_DISMISSED = "nwi_stay_connected_popup_dismissed_v1";
const OPEN_DELAY_MS = 4500;

/**
 * Mailto-based “stay connected” modal. Entire behavior is isolated here + `lib/stay-connected.ts`
 * so swapping to an API later is a localized change.
 */
export function StayConnectedDialog() {
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descId = `${dialogId}-desc`;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const openedOnce = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_DISMISSED) === "1") return;
    } catch {
      /* private mode */
    }

    const t = window.setTimeout(() => {
      if (openedOnce.current) return;
      openedOnce.current = true;
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function dismiss(save: boolean) {
    if (save) {
      try {
        window.localStorage.setItem(STORAGE_DISMISSED, "1");
      } catch {
        /* ignore */
      }
    }
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const recipient = getStayConnectedRecipient();
    const href = buildStayConnectedMailto({
      recipient,
      subscriberEmail: trimmed,
      subscriberName: name.trim() || undefined,
    });
    dismiss(true);
    window.location.href = href;
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-nwi-navy/50 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) dismiss(false);
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full max-w-md rounded-2xl border-2 border-nwi-navy/20 bg-[#f6e4eb] shadow-[0_12px_0_rgba(26,27,46,0.12)] overflow-hidden"
      >
        <button
          type="button"
          onClick={() => dismiss(false)}
          className="absolute right-3 top-3 rounded-lg p-1 text-nwi-navy/70 hover:bg-nwi-navy/10 hover:text-nwi-navy focus:outline-none focus:ring-2 focus:ring-nwi-orange"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 pt-10 pb-6 sm:px-8">
          <h2 id={titleId} className="text-2xl font-black text-nwi-navy tracking-tight">
            Stay connected
          </h2>
          <p id={descId} className="mt-2 text-sm text-nwi-navy/85 leading-relaxed">
            Drop your email and we&apos;ll open a message to our team so you can stay in the loop
            about NWI Fun Ball.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="stay-email" className="block text-sm font-bold text-nwi-navy mb-1">
                Email
              </label>
              <input
                id="stay-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-nwi-navy/20 bg-white px-3 py-2.5 text-nwi-navy placeholder:text-nwi-navy/40 focus:border-nwi-orange focus:outline-none focus:ring-2 focus:ring-nwi-orange/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="stay-name" className="block text-sm font-bold text-nwi-navy mb-1">
                Name <span className="font-normal text-nwi-navy/60">(optional)</span>
              </label>
              <input
                id="stay-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-2 border-nwi-navy/20 bg-white px-3 py-2.5 text-nwi-navy placeholder:text-nwi-navy/40 focus:border-nwi-orange focus:outline-none focus:ring-2 focus:ring-nwi-orange/30"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="w-full border-nwi-navy/30"
                onClick={() => dismiss(true)}
              >
                No thanks
              </Button>
              <Button type="submit" className="w-full bg-nwi-orange hover:bg-nwi-orange/90 font-bold">
                Continue in email
              </Button>
            </div>
            <p className="text-xs text-nwi-navy/65 leading-snug">
              Opens your email app with a pre-filled message to our team. You can edit before
              sending.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
