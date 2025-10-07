"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Calculator, BarChart, LucideIcon } from "lucide-react";
import { Link } from "@/navigation";
import { serviceData } from "@/lib/service-overview-data";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  calculator: Calculator,
  barchart: BarChart,
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServiceOverview() {
  const t = useTranslations("ServiceOverview");
  return (
    <section className="w-full py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl font-semibold text-foreground mb-4"
          >
            {t("section_title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-12 text-muted-foreground text-lg"
          >
            {t("section_subtitle")}
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.map((service, index) => {
              const IconComponent = iconMap[service.iconKey];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-background shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="mx-auto w-fit bg-secondary p-4 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="font-display text-2xl">
                        {t(service.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {t(service.descriptionKey)}
                      </p>
                      <Link
                        href={service.link}
                        className="font-semibold text-primary hover:underline"
                      >
                        {t("learn_more")}
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
