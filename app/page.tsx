import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { IntroSection } from "@/components/IntroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { TeamAndMediaSection } from "@/components/TeamAndMediaSection";
import { TicketGrid } from "@/components/TicketGrid";
import { ScheduleCalendar } from "@/components/ScheduleCalendar";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { StayConnectedDialog } from "@/components/StayConnectedDialog";
import { STAY_CONNECTED_POPUP_ENABLED } from "@/lib/stay-connected";

export default function HomePage() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <ScrollingTicker />
      <IntroSection />
      <VideoPlaceholder />
      <TeamAndMediaSection />
      <TicketGrid />
      <ScheduleCalendar />
      <SponsorsSection />
      <Gallery />
      <Footer />
      {STAY_CONNECTED_POPUP_ENABLED ? <StayConnectedDialog /> : null}
    </main>
  );
}
