import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { IntroSection } from "@/components/IntroSection";
import { TicketGrid } from "@/components/TicketGrid";
import { ScheduleCalendar } from "@/components/ScheduleCalendar";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1120px] my-6 panel-shell bg-nwi-pink overflow-hidden">
        <Header />
        <Hero />
        <ScrollingTicker />
        <IntroSection />
        <TicketGrid />
        <ScheduleCalendar />
        <section id="gallery" className="py-10" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="gallery-heading" className="text-3xl font-black text-nwi-navy text-center">
              Gallery
            </h2>
            <p className="mt-4 text-center text-nwi-navy/80">
              Photos and highlights coming soon.
            </p>
          </div>
        </section>
        <section id="contact" className="py-10 bg-nwi-pink" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="text-3xl font-black text-nwi-navy text-center">
              Contact
            </h2>
            <p className="mt-4 text-center text-nwi-navy/80">
              Email:{" "}
              <a href="mailto:visionquest2@outlook.com" className="text-nwi-orange hover:underline font-medium">
                visionquest2@outlook.com
              </a>
              {" • "}
              Phone:{" "}
              <a href="tel:+12199214584" className="text-nwi-orange hover:underline font-medium">
                219-921-4584
              </a>
            </p>
          </div>
        </section>
        <Footer />
    </main>
  );
}
