"use client";

import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/data";

export function PostHeader({ post }: { post: Post }) {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="mb-10 text-center"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Badge className="mb-4 bg-primary/10 text-primary font-semibold">
          {post.category}
        </Badge>
      </motion.div>
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="font-display text-3xl lg:text-5xl font-bold text-[#1A202C] mb-6"
      >
        {post.title}
      </motion.h1>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex items-center justify-center gap-4 text-sm text-gray-500"
      >
        <Link
          href={`/blog?author=${encodeURIComponent(post.author)}`}
          className="flex items-center gap-3 group"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.avatarSrc} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {post.author}
          </span>
        </Link>
        <span>•</span>
        <span>{post.date}</span>
      </motion.div>
    </motion.header>
  );
}
