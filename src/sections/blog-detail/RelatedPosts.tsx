"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { Post } from "@/lib/data";
import { BlogPostCard } from "../blog/BlogPostCard";

export function RelatedPosts({
  post: currentPost,
  allPosts,
}: {
  post: Post;
  allPosts: Post[];
}) {
  const t = useTranslations("Blog");
  const relatedPosts = allPosts
    .filter(
      (p) => p.category === currentPost.category && p.slug !== currentPost.slug
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
      className="mt-16"
    >
      <h2 className="font-display text-3xl font-bold mb-8 text-center text-[#1A202C]">
        {t("related_articles_title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((related) => (
          <motion.div
            key={related.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BlogPostCard post={related} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
