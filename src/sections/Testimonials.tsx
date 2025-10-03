import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { testimonialData } from "@/lib/testimonial-data";

export async function Testimonials({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Testimonials" });
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-semibold text-foreground mb-12">
          {t("section_title")}
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {await Promise.all(
              testimonialData.map(async (testimonial) => {
                const tOriginal = await getTranslations({
                  locale: testimonial.lang,
                  namespace: "Testimonials",
                });
                const originalQuote = tOriginal(testimonial.quoteKey);
                const displayedQuote = t(testimonial.quoteKey);
                const showTranslation = locale !== testimonial.lang;
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                          <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                            <AvatarImage
                              src={testimonial.avatarSrc}
                              alt={`Foto ${testimonial.name}`}
                            />
                            <AvatarFallback>
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-muted-foreground italic mb-4 flex-grow">
                            &quot;{originalQuote}&quot;
                          </p>
                          {showTranslation && (
                            <p className="text-muted-foreground/80 italic text-sm mb-4 border-l-2 border-border pl-4 text-left">
                              (Translated): "{displayedQuote}"
                            </p>
                          )}
                          <div className="mt-auto">
                            <h4 className="font-semibold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {t(testimonial.roleKey)}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
