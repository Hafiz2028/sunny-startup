"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Post } from "@/lib/data";
import { BlogList } from "./BlogList";

interface BlogFullProps {
  posts: Post[];
  pageSubtitle: string;
  searchPlaceholder: string;
  allCategoryText: string;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

export function BlogFull({
  posts,
  pageSubtitle,
  searchPlaceholder,
  allCategoryText,
}: BlogFullProps) {
  const t = useTranslations("Blog");
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#1A202C] mb-4">
          {t.rich("title", {
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </h1>
        <p className="text-lg text-gray-500">{pageSubtitle}</p>
      </motion.div>

      <BlogList
        posts={posts}
        searchPlaceholder={searchPlaceholder}
        allCategoryText={allCategoryText}
      />
    </div>
  );
}
