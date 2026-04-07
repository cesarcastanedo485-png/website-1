import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { SponsorsSection } from "@/components/SponsorsSection";
import { IntroSection } from "@/components/IntroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { TicketGrid } from "@/components/TicketGrid";
import { ScheduleCalendar } from "@/components/ScheduleCalendar";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <ScrollingTicker />
      <SponsorsSection />
      <IntroSection />
      <VideoPlaceholder />
      <TicketGrid />
      <ScheduleCalendar />
      <Gallery />
      <Footer />
    </main>
  );
}
