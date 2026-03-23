import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { TicketGrid } from "@/components/TicketGrid";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
        <Header />
        <Hero />
        <IntroSection />
        <TicketGrid />
        <section id="schedule" className="py-12 bg-nwi-pink" aria-labelledby="schedule-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="schedule-heading" className="text-2xl font-bold text-nwi-navy text-center">
              Schedule
            </h2>
            <p className="mt-4 text-center text-nwi-navy/80">
              Thursday nights, June–August. Full schedule coming soon.
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
            </p>
          </div>
        </section>
        <Footer />
    </main>
  );
}
