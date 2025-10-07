"use client";

import { motion, Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostCard } from "@/sections/blog/BlogPostCard";
import type { Post } from "@/lib/data";

interface AuthorPageContentProps {
  author: {
    name: string;
    image: string;
    bio: string;
  };
  posts: Post[];
  title: string;
}

// Varian animasi
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const postGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const postCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AuthorPageContent({
  author,
  posts,
  title,
}: AuthorPageContentProps) {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <Avatar className="h-28 w-28 mx-auto mb-5">
          <AvatarImage src={author.image} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1A202C] mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{author.bio}</p>
      </motion.div>

      <motion.div
        variants={postGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={postCardVariants}>
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
