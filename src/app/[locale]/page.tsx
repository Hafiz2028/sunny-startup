import { HeroSection } from "@/sections/Hero";
import { PromoCarousel } from "@/sections/PromoCarousel";
import { ServiceOverview } from "@/sections/ServiceOverview";
import { CalculationGuide } from "@/sections/CalculationGuide";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <HeroSection locale={locale} />
      <PromoCarousel locale={locale} />
      <ServiceOverview locale={locale} />
      <CalculationGuide locale={locale} />
      <Testimonials locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
