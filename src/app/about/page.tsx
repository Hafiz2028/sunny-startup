import { AboutHero } from "@/sections/about/AboutHero";
import { VisionMission } from "@/sections/about/VisionMission";
import { FounderProfile } from "@/sections/about/FounderProfile";
import { HistoryTimeline } from "@/sections/about/HistoryTimeline";
import { FeedbackForm } from "@/sections/about/FeedbackForm";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <FounderProfile />
      <HistoryTimeline />
      <FeedbackForm />
    </main>
  );
}
