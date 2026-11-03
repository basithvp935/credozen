import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WorksSection from "@/components/sections/WorksSection";
import ClientsLogoSection from "@/components/sections/ClientsLogoSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ContactSection from "@/components/sections/ContactSection";
import OurProductsSection from "@/components/sections/OurProductsSection";
import ServicesTabSection from "@/components/sections/ServicesTabSection";
import ElevatesSection from "@/components/sections/ElevatesSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesTabSection />
      <OurProductsSection />
      {/* <TechSolutionSection /> */}
      {/* <ElevatesSection /> */}
      {/* <WorksSection /> */}
      <WhyChooseSection />
      <ClientsLogoSection />

      <TestimonialSection />

      <ContactSection />
    </>
  );
}

