"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function AppCTA() {
  const t = useTranslations("AppCTA");
  return (
    <section className="w-full bg-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }}
        className="container mx-auto px-6 py-20 text-center flex flex-col items-center"
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
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="https://www.apple.com/id/app-store/"
              className="flex items-center gap-3"
            >
              <FaApple size={28} />
              <div className="text-left">
                <p className="text-xs -mb-1">{t("button_appstore")}</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="https://play.google.com/store/games?device=windows"
              className="flex items-center gap-3"
            >
              <FaGooglePlay size={28} />
              <div className="text-left">
                <p className="text-xs -mb-1">{t("button_googleplay")}</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
