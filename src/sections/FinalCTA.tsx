"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");
  return (
    <section className="w-full bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-display text-4xl font-semibold text-primary-foreground mb-4"
        >
          {t("section_title")}
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="max-w-xl mx-auto mb-8 text-primary-foreground/80 text-lg"
        >
          {t("section_subtitle")}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button size="lg" variant="secondary" asChild>
            <Link href="/services?tab=calculator">{t("button_start")}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
