"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
];

export function CollapsingImageGrid() {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="absolute inset-0 bg-primary/10 blur-3xl" />

      <motion.div
        className="grid grid-cols-2 grid-rows-2 gap-0 h-full"
        style={{
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, filter: "blur(0px)" },
          animate: {
            opacity: 1,
            filter: "blur(4px)",
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="relative w-full h-full overflow-hidden"
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <Image
              src={src}
              alt={`Service collage image ${i + 1}`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-background" /> */}
    </div>
  );
}
