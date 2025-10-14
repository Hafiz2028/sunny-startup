"use client";

import { useTranslations } from "next-intl";
import { ServiceSection } from "@/sections/services/ServiceSection";
import { AppCTA } from "@/sections/services/AppCTA";
import { CollapsingImageGrid } from "@/components/shared/CollapsingImageGrid";
import {
  Calculator,
  Users,
  BookOpen,
  Handshake,
  MessageSquare,
} from "lucide-react";

const servicesData = [
  {
    id: "calculator",
    number: "01",
    visualType: "mockup",
    visualSrc: "/service/mockup-dummy.png",
    ctaLink: "/services?tab=calculator",
    icon: Calculator,
  },
  {
    id: "consultation",
    number: "02",
    visualType: "mockup",
    visualSrc: "/service/mockup-dummy.png",
    ctaLink: "/services?tab=consultation",
    icon: Users,
  },
  {
    id: "learn-space",
    number: "03",
    visualType: "video",
    visualSrc: "dQw4w9WgXcQ",
    ctaLink: "/services?tab=learn-space",
    icon: BookOpen,
  },
  {
    id: "collaboration",
    number: "04",
    visualType: "mockup",
    visualSrc: "/service/mockup-dummy.png",
    ctaLink: "/services?tab=collaboration",
    icon: Handshake,
  },
  {
    id: "user-collaboration",
    number: "05",
    visualType: "mockup",
    visualSrc: "/service/mockup-dummy.png",
    ctaLink: "/services?tab=collaboration",
    icon: MessageSquare,
  },
];

export default function ServicesPage() {
  const t = useTranslations("ServicesPage.sections");
  const tPage = useTranslations("ServicesPage");

  return (
    <main>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center snap-start px-6">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <CollapsingImageGrid />
        </div>
        <div className="relative z-10 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            {tPage.rich("title", {
              primary: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {tPage("subtitle")}
          </p>
        </div>
      </section>

      {servicesData.map((service, index) => (
        <ServiceSection
          key={service.id}
          number={service.number}
          title={t(`${service.id}.title`)}
          subtitle={t(`${service.id}.subtitle`)}
          visualType={service.visualType as "video" | "mockup"}
          visualSrc={service.visualSrc}
          ctaText={t(`${service.id}.cta_text`)}
          ctaLink={service.ctaLink}
          icon={service.icon}
          imageAlt={t(`${service.id}.title`)}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}

      <section className="py-3 bg-primary mt-6">
        <AppCTA />
      </section>
    </main>
  );
}
