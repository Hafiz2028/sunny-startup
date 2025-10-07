import { getTranslations } from "next-intl/server";
import { testimonialData } from "@/lib/testimonial-data";
import { HeroSection } from "@/sections/Hero";
import { PromoCarousel } from "@/sections/PromoCarousel";
import { ServiceOverview } from "@/sections/ServiceOverview";
import { CalculationGuide } from "@/sections/CalculationGuide";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Testimonials" });

  const hydratedTestimonials = await Promise.all(
    testimonialData.map(async (testimonial) => {
      const tOriginal = await getTranslations({
        locale: testimonial.lang,
        namespace: "Testimonials",
      });
      return {
        ...testimonial,
        role: t(testimonial.roleKey),
        originalQuote: tOriginal(testimonial.quoteKey),
        displayedQuote: t(testimonial.quoteKey),
        showTranslation: locale !== testimonial.lang,
      };
    })
  );

  return (
    <>
      <HeroSection />
      <PromoCarousel />
      <ServiceOverview />
      <CalculationGuide />
      <Testimonials testimonials={hydratedTestimonials} />
      <FinalCTA />
    </>
  );
}
