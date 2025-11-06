// src/sections/blog-detail/AuthorPageContent.tsx

"use client"; // <-- Tandai sebagai Client Component

import type { Post } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostCard } from "@/sections/blog/BlogPostCard";
import { motion, Variants } from "framer-motion";

// Varian animasi
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface AuthorPageContentProps {
  authorPosts: Post[];
  authorDetails: {
    name: string;
    bio: string | null;
    avatar: string | null;
  };
}

export function AuthorPageContent({
  authorPosts,
  authorDetails,
}: AuthorPageContentProps) {
  return (
    <main className="w-full py-20 lg:py-24 bg-[#F7FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Profil Author */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Avatar className="h-32 w-32 mx-auto mb-6">
            {authorDetails.avatar && (
              <AvatarImage
                src={authorDetails.avatar}
                alt={authorDetails.name}
              />
            )}
            <AvatarFallback className="text-4xl">
              {authorDetails.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            {authorDetails.name}
          </h1>
          {authorDetails.bio && (
            <p className="text-lg text-muted-foreground">{authorDetails.bio}</p>
          )}
        </div>

        {/* Garis Pemisah */}
        <div className="max-w-5xl mx-auto border-b border-border mb-16" />

        {/* Daftar Artikel oleh Author */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {authorPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
