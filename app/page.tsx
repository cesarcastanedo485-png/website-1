import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { ContactCallout } from "@/components/ContactCallout";
import { IntroSection } from "@/components/IntroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { TicketGrid } from "@/components/TicketGrid";
import { ScheduleCalendar } from "@/components/ScheduleCalendar";
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
      <ScheduleCalendar />
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
      <Footer />
    </main>
  );
}
