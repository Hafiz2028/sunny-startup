"use client";

import { motion } from "framer-motion";

export function AnimatedH1({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4"
    >
      {children}
    </motion.h1>
  );
}
export function AnimatedP({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-muted-foreground"
    >
      {children}
    </motion.p>
  );
}
export function AnimatedDiv1({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8"
    >
      {children}
    </motion.div>
  );
}
export function AnimatedDiv2({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="hidden lg:block w-full h-[500px]"
    >
      {children}
    </motion.div>
  );
}
