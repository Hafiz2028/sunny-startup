"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { timelineData } from "@/lib/data";
import { Check } from "lucide-react";

export function HistoryTimeline() {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-full py-20 lg:py-28 bg-[#F7FAFC] overflow-hiddenmotion.">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A202C]">
            {t("timeline_section_title")}
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            {t("timeline_section_subtitle")}
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-1 h-[calc(100%-2rem)] w-0.5 bg-gray-200 md:-translate-x-1/2" />
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-16"
              >
                <div className="absolute left-4 md:left-1/2 top-1 w-5 h-5 rounded-full bg-primary border-4 border-[#F7FAFC] -translate-x-1/2 z-10 flex items-center justify-center">
                  <Check className="h-2 w-2 text-white" />
                </div>
                <div
                  className={`pl-10 md:pl-0 ${
                    index % 2 === 0
                      ? "md:col-start-2"
                      : "md:col-start-1 md:row-start-1 md:text-right"
                  }`}
                >
                  <p className="font-display font-bold text-2xl text-primary">
                    {item.year}
                  </p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {t(item.event)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
