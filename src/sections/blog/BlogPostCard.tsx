"use client";

import { Link } from "@/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Post } from "@/lib/data";

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col h-full group"
    >
      <Card className="flex flex-col flex-grow overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-none">
        <CardHeader className="p-0">
          <Link
            href={`/blog/${post.slug}`}
            className="block aspect-[16/10] overflow-hidden"
          >
            <motion.img
              src={post.imageUrl}
              alt={post.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </Link>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <Badge
            variant="secondary"
            className="mb-3 bg-primary/10 text-primary font-semibold"
          >
            {post.category}
          </Badge>
          <CardTitle className="font-display text-xl mb-2 leading-snug font-bold text-[#1A202C]">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
          </CardTitle>
          <p className="text-gray-500 text-sm line-clamp-2">
            {post.description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            href={`/author/${post.authorSlug}`}
            className="flex items-center gap-3 group"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                {post.author}
              </p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
