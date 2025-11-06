"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Post } from "@/lib/data";
import { PostHeader } from "./PostHeader";
import { AuthorProfile } from "./AuthorProfile";
import { RelatedPosts } from "./RelatedPosts";
import { Card, CardContent } from "@/components/ui/card";

interface BlogDetailContentProps {
  post: Post;
  allPosts: Post[];
}

export function BlogDetailContent({ post, allPosts }: BlogDetailContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white border-gray-200 rounded-2xl shadow-none overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10 pb-0">
          <PostHeader post={post} />
        </div>

        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-6 sm:px-8 md:px-10"
          >
            <div className="relative w-full rounded-2xl aspect-video object-cover overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CardContent className="p-6 sm:p-8 md:p-10">
            <article
              className="prose prose-lg prose-headings:font-display prose-headings:text-[#1A202C] prose-p:text-gray-600 prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </motion.div>
      </Card>

      <div className="mt-12 space-y-12">
        <AuthorProfile post={post} />
        <RelatedPosts post={post} allPosts={allPosts} />
      </div>
    </div>
  );
}
