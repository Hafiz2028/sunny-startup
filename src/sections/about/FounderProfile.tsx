"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { founderData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function FounderProfile() {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={founderData.imageUrl}
              alt={founderData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent opacity-50"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A202C]">
              {founderData.name}
            </h2>
            <p className="text-primary font-semibold text-lg mt-1 mb-4">
              {t(founderData.title)}
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {t(founderData.bio)}
            </p>
            <div className="flex flex-wrap gap-3">
              {founderData.experience.map((expKey) => (
                <Badge
                  key={expKey}
                  variant="secondary"
                  className="bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full"
                >
                  {t(expKey)}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
