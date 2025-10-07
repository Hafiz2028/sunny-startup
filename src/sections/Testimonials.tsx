"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HydratedTestimonial = {
  id: number;
  avatarSrc: string;
  initials: string;
  name: string;
  role: string;
  originalQuote: string;
  displayedQuote: string;
  showTranslation: boolean;
};

export function Testimonials({
  testimonials,
}: {
  testimonials: HydratedTestimonial[];
}) {
  const t = useTranslations("Testimonials");
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-semibold text-foreground mb-12"
        >
          {t("section_title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
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
                          &quot;{testimonial.originalQuote}&quot;
                        </p>
                        {testimonial.showTranslation && (
                          <p className="text-muted-foreground/80 italic text-sm mb-4 border-l-2 border-border pl-4 text-left">
                            (Translated): &quot;{testimonial.displayedQuote}
                            &quot;
                          </p>
                        )}
                        <div className="mt-auto">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
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
        </motion.div>
      </div>
    </section>
  );
}
