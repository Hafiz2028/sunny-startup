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

const promoItems = [
  {
    title: "Diskon Spesial Peluncuran!",
    description:
      "Dapatkan diskon 20% untuk analisis rencana bisnismu yang pertama. Ayo masak kesuksesan bersama!",
    cta: "Klaim Penawaran",
    illustration: "🚀",
    illustrationText:
      "Banner carousel.",
  },
  // {
  //   title: "Diskon Spesial Peluncuran!",
  //   description:
  //     "Dapatkan diskon 20% untuk analisis rencana bisnismu yang pertama. Ayo masak kesuksesan bersama!",
  //   cta: "Klaim Penawaran",
  //   illustration: "🚀",
  //   illustrationText:
  //     "Ilustrasi 3D roket lepas landas dari tumpukan koin emas.",
  // },
  {
    title: "Fitur Baru: Prediksi BEP",
    description:
      "Kini lebih mudah mengetahui kapan bisnismu akan balik modal dengan fitur analisis terbaru kami.",
    cta: "Pelajari Fitur BEP",
    illustration: "📈",
    illustrationText:
      "Banner carrousel 2.",
  },
  {
    title: "Download Aplikasi Mobile!",
    description:
      "Kelola semua insight bisnismu di mana saja. Kini tersedia di iOS dan Android.",
    cta: "Download Sekarang",
    illustration: "📱",
    illustrationText:
      "Banner Carrousel 3.",
  },
  // {
  //   title: "Fitur Baru: Prediksi BEP",
  //   description:
  //     "Kini lebih mudah mengetahui kapan bisnismu akan balik modal dengan fitur analisis terbaru kami.",
  //   cta: "Pelajari Fitur BEP",
  //   illustration: "📈",
  //   illustrationText:
  //     "Ilustrasi 3D grafik BEP (Break-Even Point) yang menanjak.",
  // },
  // {
  //   title: "Download Aplikasi Mobile!",
  //   description:
  //     "Kelola semua insight bisnismu di mana saja. Kini tersedia di iOS dan Android.",
  //   cta: "Download Sekarang",
  //   illustration: "📱",
  //   illustrationText:
  //     "Ilustrasi 3D smartphone dengan antarmuka aplikasi Sunny Startup.",
  // },
];

export function PromoCarousel() {
  return (
    <section className="w-full py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {promoItems.map((promo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background shadow-lg border-none">
                    <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12">
                      <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-3">
                          {promo.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {promo.description}
                        </p>
                        <Button size="lg">{promo.cta}</Button>
                      </div>
                      <div className="lg:w-1/2 flex justify-center items-center h-64 lg:h-80 w-full bg-secondary rounded-lg">
                        <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center p-4">
                          <span className="text-6xl mb-4">
                            {promo.illustration}
                          </span>
                          <p className="font-medium text-primary/80">
                            {promo.illustrationText}
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
