/**
 * Stay-connected signup — currently **mailto only** (no API keys, no server route).
 *
 * ---------------------------------------------------------------------------
 * To switch to Resend, Mailchimp, a database, etc. later:
 * 1. Add an API route (e.g. `app/api/stay-connected/route.ts`).
 * 2. In `components/StayConnectedDialog.tsx`, replace the submit handler that
 *    calls `buildStayConnectedMailto` / `window.location.href` with `fetch(...)`.
 * 3. Remove or stop importing this file if nothing here is needed anymore.
 * ---------------------------------------------------------------------------
 */

export const STAY_CONNECTED_STRATEGY = "mailto" as const;

export function getStayConnectedRecipient(): string {
  const fromEnv = process.env.NEXT_PUBLIC_STAY_CONNECTED_EMAIL?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : "visionquest2@outlook.com";
}

export function buildStayConnectedMailto(opts: {
  recipient: string;
  subscriberEmail: string;
  subscriberName?: string;
}): string {
  const subject = encodeURIComponent("Stay connected — NWI Fun Ball");
  const lines = [
    "Please add me to NWI Fun Ball updates.",
    "",
    `My email: ${opts.subscriberEmail}`,
  ];
  if (opts.subscriberName?.trim()) {
    lines.push(`My name: ${opts.subscriberName.trim()}`);
  }
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${opts.recipient}?subject=${subject}&body=${body}`;
}
