"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const heroImages = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full"
      opts={{ loop: true, align: "center" }}
    >
      <CarouselContent>
        {heroImages.map((src, index) => {
          const isActive = index === activeIndex;
          return (
            <CarouselItem
              key={index}
              className="basis-full md:basis-4/5 lg:basis-3/4 pl-4"
            >
              <div
                className={cn(
                  "relative rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out",
                  isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
                )}
              >
                {/* PERBAIKAN KUNCI: Gunakan aspect-ratio untuk menjamin tinggi */}
                <div className="aspect-[9/16]">
                  <Image
                    src={src}
                    alt={`Hero image slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 40vw"
                  />
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
