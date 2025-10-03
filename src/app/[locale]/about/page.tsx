// src/app/[locale]/about/page.tsx (Versi Final)

import { AboutHero } from "@/sections/about/AboutHero";
import { VisionMission } from "@/sections/about/VisionMission";
import { FounderProfile } from "@/sections/about/FounderProfile";
import { HistoryTimeline } from "@/sections/about/HistoryTimeline";
import { FeedbackForm } from "@/sections/about/FeedbackForm";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main>
      <AboutHero locale={locale} />
      <VisionMission locale={locale} />
      <FounderProfile locale={locale} />
      <HistoryTimeline locale={locale} />
      <FeedbackForm />
    </main>
  );
}
