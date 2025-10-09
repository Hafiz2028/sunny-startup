"use client";

import { PlayCircle } from "lucide-react";
import { MinimalistCta } from "@/components/ui/MinimalistCta";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  AnimatedDiv1,
  AnimatedDiv2,
  AnimatedH1,
  AnimatedP,
} from "./AnimatedHeroElements";

const UiMockup = ({ t }: { t: (key: string) => string }) => (
  <div className="w-full h-full bg-secondary/50 rounded-2xl p-4 md:p-6 border border-border/10 shadow-inner-lg flex flex-col gap-4">
    <div className="flex-shrink-0 flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-red-400/50"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-400/50"></span>
      <span className="w-3 h-3 rounded-full bg-green-400/50"></span>
    </div>
    <div className="flex-grow bg-background/70 rounded-lg p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <p className="text-sm font-semibold text-foreground">
          {t("mockup_details")}
        </p>
        <div className="space-y-2">
          <div className="w-full h-3 bg-primary/20 rounded-full">
            <div className="w-3/4 h-3 bg-primary rounded-full"></div>
          </div>
          <div className="w-full h-3 bg-primary/20 rounded-full">
            <div className="w-1/2 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
        <p className="text-sm font-semibold text-foreground mt-2">
          {t("mockup_materials")}
        </p>
        <div className="w-full h-8 bg-muted rounded"></div>
        <div className="w-full h-8 bg-muted rounded"></div>
      </div>
      {/* Kolom Kanan: Chart */}
      <div className="w-full md:w-1/2 flex flex-col">
        <p className="text-sm font-semibold text-foreground">
          {t("mockup_profit")}
        </p>
        <div className="flex-grow flex items-end justify-between gap-2 pt-2">
          <div className="w-1/4 h-1/3 bg-accent/50 rounded-t-sm"></div>
          <div className="w-1/4 h-2/3 bg-accent/50 rounded-t-sm"></div>
          <div className="w-1/4 h-full bg-primary/80 rounded-t-sm"></div>
          <div className="w-1/4 h-3/4 bg-accent/50 rounded-t-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

export function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section className="bg-background py-24 sm:py-32 lg:h-[85vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <AnimatedH1>{t("title")}</AnimatedH1>
            <AnimatedP>{t("subtitle")}</AnimatedP>
            <AnimatedDiv1>
              <MinimalistCta
                href="/services?tab=calculator"
                variant="spotlight"
                showArrow
              >
                {t("cta_main")}
              </MinimalistCta>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="group relative inline-flex items-center gap-2 text-lg font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <PlayCircle className="h-5 w-5" />
                <span>{t("cta_secondary")}</span>
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </AnimatedDiv1>
          </div>

          <AnimatedDiv2>
            <UiMockup t={t} />
          </AnimatedDiv2>
        </div>
      </div>
    </section>
  );
}
