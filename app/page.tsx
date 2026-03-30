import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { ContactCallout } from "@/components/ContactCallout";
import { IntroSection } from "@/components/IntroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { TicketGrid } from "@/components/TicketGrid";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <ScrollingTicker />
      <ContactCallout />
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
      <GallerySection />
      <Footer />
    </main>
  );
}
