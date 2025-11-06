"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Post } from "@/lib/data";

export function AuthorProfile({ post }: { post: Post }) {
  const t = useTranslations("Blog");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
    >
      <Avatar className="h-24 w-24">
        <AvatarImage src={post.avatarSrc} alt={post.author} />
        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {t("written_by")}
        </p>
        <h3 className="font-display text-2xl font-bold mb-1 text-foreground">
          {post.author}
        </h3>
        <p className="text-gray-500">{post.authorBio}</p>
        <Link
          href={`/author/${(post.authorId)}`}
          className="text-sm font-semibold text-primary hover:underline mt-2 inline-block"
        >
          {t("view_all_articles_by", { authorName: post.author })}
        </Link>
      </div>
    </motion.div>
  );
}
