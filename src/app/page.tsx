import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechSolutionSection from "@/components/sections/TechSolutionSection";
import ElevatesSection from "@/components/sections/ElevatesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WorkShowcaseSection from "@/components/sections/WorkShowcaseSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ContactSection from "@/components/sections/ContactSection";
import ServicesTabSection from "@/components/sections/ServicesTabSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesTabSection />
      <TechSolutionSection />
      <ElevatesSection />
      <WorkShowcaseSection />
      <TestimonialSection />
      <WhyChooseSection />
      <ContactSection />
    </>
  );
}
