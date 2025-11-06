"use client";

import { Link } from "@/navigation";
import Image from "next/image";
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
      <Card className="flex flex-col flex-grow overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-none transition-shadow duration-300 group-hover:shadow-lg">
        <CardHeader className="p-0">
          <Link
            href={`/blog/${post.slug}`}
            className="block relative h-48 overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <CardTitle className="font-display text-xl mb-2 leading-snug font-bold text-foreground">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            href={`/author/${post.authorId}`}
            className="flex items-center gap-3 group"
          >
            <Avatar className="h-9 w-9">
              {post.avatarSrc && (
                <AvatarImage src={post.avatarSrc} alt={post.author} />
              )}
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.author}
              </p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
