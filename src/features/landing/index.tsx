import { HeroSection } from "./components/HeroSection";
import { AboutPreview } from "./components/AboutPreview";
import { WhyJoinGynt } from "./components/WhyJoinGynt";
import { TimelinePreview } from "./components/TimelinePreview";
import { NewsPreview } from "./components/NewsPreview";
import { SponsorsSection } from "./components/SponsorsSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhyJoinGynt />
      <TimelinePreview />
      <NewsPreview />
      <SponsorsSection />
    </>
  );
}
