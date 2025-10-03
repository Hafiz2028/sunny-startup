import { getTranslations } from "next-intl/server";
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

export async function PromoCarousel({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "PromoCarousel" });
  return (
    <section className="w-full py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {promoData.map((promo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background shadow-lg border-none">
                    <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12">
                      <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-3">
                          {t(promo.titleKey)}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {t(promo.descriptionKey)}
                        </p>
                        <Button size="lg">{t(promo.ctaKey)}</Button>
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
                </div>
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
