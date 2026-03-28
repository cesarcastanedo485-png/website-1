import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { IntroSection } from "@/components/IntroSection";
import { TicketGrid } from "@/components/TicketGrid";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
        <Header />
        <Hero />
        <ScrollingTicker />
        <IntroSection />
        <VideoPlaceholder />
        <TicketGrid />
        <section id="schedule" className="py-12 bg-nwi-pink" aria-labelledby="schedule-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="schedule-heading" className="text-2xl font-bold text-nwi-navy text-center">
              Schedule
            </h2>
            <p className="mt-4 text-center text-nwi-navy/90 font-medium">
              June 6–11 & 29 • July 9 & 30 • August 13 & 29
            </p>
            <p className="mt-2 text-center text-nwi-navy/80">
              Thursday nights at Oil City Stadium, Whiting, Indiana
            </p>
          </div>
        </section>
        <section id="gallery" className="py-12" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="gallery-heading" className="text-2xl font-bold text-nwi-navy text-center">
              Gallery
            </h2>
            <p className="mt-4 text-center text-nwi-navy/80">
              Photos and highlights coming soon.
            </p>
          </div>
        </section>
        <section id="contact" className="py-12 bg-nwi-pink" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="text-2xl font-bold text-nwi-navy text-center">
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
