import { HeroSection } from "./components/HeroSection";
import { AboutPreview } from "./components/AboutPreview";
import { WhyJoinGynt } from "./components/WhyJoinGynt";
import { TimelineSection } from "./components/TimelineSection";
import { NewsPreview } from "./components/NewsPreview";
import { SponsorsSection } from "./components/SponsorsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <HowItWorksSection />
      <WhyJoinGynt />
      <TimelineSection />
      <NewsPreview />
      <SponsorsSection />
    </>
  );
}
