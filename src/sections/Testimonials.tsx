import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    photoUrl: "https://i.pravatar.cc/150?u=sarah",
    initials: "SL",
    name: "Sarah L.",
    company: "Founder Kue Kita",
    quote:
      "Sunny Startup memberi kami kepercayaan diri untuk launching. Insight mereka sangat tak ternilai!",
  },
  {
    photoUrl: "https://i.pravatar.cc/150?u=budi",
    initials: "BS",
    name: "Budi S.",
    company: "Owner Sambal Juara",
    quote:
      "Rincian finansialnya benar-benar game-changer. Kami menemukan penghematan biaya yang tidak pernah kami lihat sebelumnya.",
  },
  {
    photoUrl: "https://i.pravatar.cc/150?u=rina",
    initials: "RA",
    name: "Rina A.",
    company: "Co-founder Boba Fest",
    quote:
      "Menyenangkan, penuh energi, dan super profesional. Mereka benar-benar mengerti pasar Gen Z.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-semibold text-foreground mb-12">
          Dicintai oleh Para Foodpreneur
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                        <AvatarImage
                          src={testimonial.photoUrl}
                          alt={`Foto ${testimonial.name}`}
                        />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <p className="text-muted-foreground italic mb-4">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="mt-auto">
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
