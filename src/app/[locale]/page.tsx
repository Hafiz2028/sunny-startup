import { getTranslations } from "next-intl/server";
import { testimonialData } from "@/lib/testimonial-data";
import { HeroSection } from "@/sections/Hero";
import { PromoCarousel } from "@/sections/PromoCarousel";
import dynamic from "next/dynamic";

const ServiceOverview = dynamic(() =>
  import("@/sections/ServiceOverview").then((mod) => mod.ServiceOverview)
);
const CalculationGuide = dynamic(() =>
  import("@/sections/CalculationGuide").then((mod) => mod.CalculationGuide)
);
const Testimonials = dynamic(() =>
  import("@/sections/Testimonials").then((mod) => mod.Testimonials)
);
const FinalCTA = dynamic(() =>
  import("@/sections/FinalCTA").then((mod) => mod.FinalCTA)
);

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Testimonials" });
  const originalLocales = [...new Set(testimonialData.map((t) => t.lang))];
  const originalTranslations: Record<string, any> = {};
  await Promise.all(
    originalLocales.map(async (lang) => {
      const tOriginal = await getTranslations({
        locale: lang,
        namespace: "Testimonials",
      });
      originalTranslations[lang] = tOriginal;
    })
  );
  const hydratedTestimonials = testimonialData.map((testimonial) => {
    const tOriginal = originalTranslations[testimonial.lang];
    return {
      ...testimonial,
      role: t(testimonial.roleKey),
      originalQuote: tOriginal(testimonial.quoteKey),
      displayedQuote: t(testimonial.quoteKey),
      showTranslation: locale !== testimonial.lang,
    };
  });

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
