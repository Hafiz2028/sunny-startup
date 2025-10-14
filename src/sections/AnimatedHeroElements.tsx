"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "right";
  motionProps?: MotionProps;
}

const FadeInAnimation = ({
  children,
  className,
  delay = 0,
  direction = "up",
  motionProps,
}: FadeInProps) => {
  const variants = {
    up: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    right: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      transition={{
        duration: direction === "right" ? 0.8 : 0.5,
        delay,
        ease: direction === "right" ? [0.25, 1, 0.5, 1] : "easeOut",
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
export function AnimatedH1({ children }: { children: React.ReactNode }) {
  return (
    <FadeInAnimation
      delay={0.1}
      className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4"
    >
      <motion.h1>{children}</motion.h1>
    </FadeInAnimation>
  );
}

export function AnimatedP({ children }: { children: React.ReactNode }) {
  return (
    <FadeInAnimation
      delay={0.2}
      className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-muted-foreground"
    >
      <motion.p>{children}</motion.p>
    </FadeInAnimation>
  );
}

export function AnimatedDiv1({ children }: { children: React.ReactNode }) {
  return (
    <FadeInAnimation
      delay={0.3}
      className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8"
    >
      {children}
    </FadeInAnimation>
  );
}

export function AnimatedDiv2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInAnimation
      delay={0.4}
      direction="right"
      className={cn("w-full h-full", className)}
    >
      {children}
    </FadeInAnimation>
  );
}
