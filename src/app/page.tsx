import { HeroSection } from "@/sections/Hero";
import { PromoCarousel } from "@/sections/PromoCarousel";
import { ServiceOverview } from "@/sections/ServiceOverview";
import { CalculationGuide } from "@/sections/CalculationGuide";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromoCarousel />
      <ServiceOverview />
      <CalculationGuide />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
