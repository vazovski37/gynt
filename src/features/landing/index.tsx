import { HeroSection } from "./components/HeroSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { WhyJoinGynt } from "./components/WhyJoinGynt";
import { TimelineSection } from "./components/TimelineSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <WhyJoinGynt />
      <TimelineSection />
    </>
  );
}
