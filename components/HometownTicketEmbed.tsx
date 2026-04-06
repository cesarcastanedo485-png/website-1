"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const REMOTE_JS = "https://nwifunball.hometownticketing.com/embed/remote.js";

export function HometownTicketEmbed() {
  const configured = useRef(false);

  useEffect(() => {
    if (configured.current) return;
    configured.current = true;
    window.tixEmbed = window.tixEmbed || { inst: [] };
    window.tixEmbed.inst.push({
      countdown: false,
      events: true,
      eventId: "all",
      filters: "",
    });
  }, []);

  return (
    <>
      <div
        className="tix-embed min-h-[240px] w-full rounded-lg bg-white/80"
        aria-busy="true"
        aria-label="Ticket purchase widget"
      />
      <Script src={REMOTE_JS} strategy="afterInteractive" />
    </>
  );
}
