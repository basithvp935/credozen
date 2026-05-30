import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkingRoadmapSection from "@/components/sections/WorkingRoadmapSection";
import TechSolutionSection from "@/components/sections/TechSolutionSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WorkShowcaseSection from "@/components/sections/WorkShowcaseSection";
import CTASection from "@/components/sections/CTASection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkingRoadmapSection />
      <TechSolutionSection />
      <TestimonialSection />
      <WorkShowcaseSection />
      <CTASection />
      <WhyChooseSection />
    </>
  );
}
