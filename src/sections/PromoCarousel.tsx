"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { promoData } from "@/lib/promo-data";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export function PromoCarousel() {
  const t = useTranslations("PromoCarousel");
  return (
    <section className="w-full py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {promoData.map((promo, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="p-1 h-full"
                >
                  <Card className="bg-background shadow-lg border-none h-full">
                    <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12 h-full">
                      <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-3">
                          {t(promo.titleKey as any)}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {t(promo.descriptionKey as any)}
                        </p>
                        <Button size="lg" asChild>
                          <Link href="#">{t(promo.ctaKey as any)}</Link>
                        </Button>
                      </div>
                      <div className="lg:w-1/2 flex justify-center items-center h-64 lg:h-80 w-full bg-secondary rounded-lg">
                        <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center p-4">
                          <span className="text-6xl mb-4">
                            {promo.illustration}
                          </span>
                          <p className="font-medium text-primary/80">
                            {t(promo.illustrationTextKey)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
