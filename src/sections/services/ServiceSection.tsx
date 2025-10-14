"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ServiceVisual } from "./ServiceVisual";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ServiceSectionProps {
  number: string;
  title: string;
  subtitle: string;
  visualType: "video" | "mockup";
  visualSrc: string;
  ctaText: string;
  ctaLink: string;
  icon: LucideIcon;
  imageAlt: string;
  orientation?: "left" | "right";
}

export function ServiceSection({
  number,
  title,
  subtitle,
  visualType,
  visualSrc,
  ctaText,
  ctaLink,
  orientation = "left",
}: ServiceSectionProps) {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: orientation === "left" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };
  const dotVariants: Variants = {
    hidden: {
      backgroundColor: "hsl(var(--background))",
      borderColor: "hsl(var(--border))",
    },
    visible: {
      backgroundColor: "hsl(var(--primary))",
      borderColor: "hsl(var(--primary))",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const dotTextVariants: Variants = {
    hidden: { color: "hsl(var(--primary))" },
    visible: {
      color: "hsl(var(--primary-foreground))",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full flex items-center justify-center snap-start overflow-hidden pt-20 pb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="container mx-auto px-6 pt-10">
        <div
          className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-12 
                     before:hidden md:before:block before:absolute before:left-1/2 before:-translate-x-1/2 
                     before:top-0 before:h-full before:w-0.5 before:bg-border"
        >
          <motion.div
            className={cn("w-full mx-auto", {
              "md:order-1": orientation === "left",
              "md:order-2": orientation === "right",
            })}
            variants={imageVariants}
          >
            <div
              className={cn(
                "transform-gpu transition-transform duration-500 hover:scale-105",
                orientation === "left"
                  ? "[transform:perspective(1000px)_rotateY(15deg)_rotateZ(-3deg)]"
                  : "[transform:perspective(1000px)_rotateY(-15deg)_rotateZ(3deg)]"
              )}
            >
              <ServiceVisual type={visualType} src={visualSrc} />
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center 
                         w-24 h-24 rounded-full border-2 shadow-lg z-10"
            variants={dotVariants}
          >
            <motion.span
              className="font-display text-4xl font-bold"
              variants={dotTextVariants}
            >
              {number}
            </motion.span>
          </motion.div>

          <motion.div
            className={cn("relative flex flex-col", "text-center", {
              "md:order-2 md:items-start md:text-left md:pl-20":
                orientation === "left",
              "md:order-1 md:items-end md:text-right md:pr-20":
                orientation === "right",
            })}
            variants={textVariants}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md md:mx-0 mb-8">
              {subtitle}
            </p>
            <Button asChild size="lg" className="font-bold">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
