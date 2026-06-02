import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoAccordionSection from "@/components/sections/WhatWeDoAccordionSection";
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
      <TechSolutionSection />
      <WhatWeDoAccordionSection />
      <WorkShowcaseSection />
      <TestimonialSection />
      <CTASection />
      <WhyChooseSection />
    </>
  );
}
