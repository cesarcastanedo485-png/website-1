export function ContactCallout() {
  return (
    <section
      id="contact"
      className="border-y-2 border-nwi-navy/15 bg-white py-8 sm:py-10"
      aria-labelledby="contact-callout-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2
          id="contact-callout-heading"
          className="text-center text-2xl font-black uppercase tracking-tight text-nwi-navy sm:text-3xl"
        >
          Contact
        </h2>
        <div className="mt-5 rounded-2xl border-2 border-nwi-orange/40 bg-nwi-pink px-6 py-6 text-center shadow-[0_8px_0_rgba(26,27,46,0.12)] sm:px-8 sm:py-8">
          <p className="text-nwi-navy/90 text-sm sm:text-base">
            Questions, tickets, or press — reach us here.
          </p>
          <p className="mt-4 text-lg font-bold text-nwi-navy sm:text-xl">
            <a
              href="mailto:visionquest2@outlook.com"
              className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded break-all"
            >
              visionquest2@outlook.com
            </a>
          </p>
          <p className="mt-3 text-lg font-bold text-nwi-navy sm:text-xl">
            <a
              href="tel:+12199214584"
              className="text-nwi-orange hover:underline focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
            >
              219-921-4584
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
