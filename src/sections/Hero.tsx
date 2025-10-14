"use client";

import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MinimalistCta } from "@/components/ui/MinimalistCta";
import { HeroCarousel } from "@/components/HeroCarousel";
import { motion } from "framer-motion";
import { AnimatedDiv1, AnimatedH1, AnimatedP } from "./AnimatedHeroElements";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full overflow-hidden bg-background flex flex-col justify-center py-24 sm:py-32 md:flex-row md:items-center md:py-0 min-h-screen md:min-h-[85vh]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 block md:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0 to-background to-45%" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2 md:gap-8">
          <div className="text-center text-primary-foreground md:text-left md:text-inherit">
            <AnimatedH1>
              {t.rich("title", {
                primary: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </AnimatedH1>
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
                className="group relative inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors duration-300 hover:text-foreground/80 md:text-muted-foreground md:hover:text-foreground"
              >
                <PlayCircle className="h-5 w-5" />
                <span>{t("cta_secondary")}</span>
                <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            </AnimatedDiv1>
          </div>

          <motion.div
            className="hidden md:block w-full max-w-lg mx-auto relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform -translate-x-4 translate-y-4" />
            <div className="relative transform md:rotate-3 h-[500px]">
              <HeroCarousel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
