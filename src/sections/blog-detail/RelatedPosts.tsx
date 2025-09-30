import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post, dummyPosts } from "@/lib/data";
import { BlogPostCard } from "../blog/BlogPostCard";

const getRelatedPosts = (currentPost: Post) =>
  dummyPosts
    .filter(
      (p) => p.category === currentPost.category && p.slug !== currentPost.slug
    )
    .slice(0, 3);

export function RelatedPosts({ post }: { post: Post }) {
  const relatedPosts = getRelatedPosts(post);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-display text-3xl font-bold mb-8 text-center text-[#1A202C]">
        Artikel Terkait
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((related) => (
          <BlogPostCard key={related.slug} post={related} />
        ))}
      </div>
    </div>
  );
}
