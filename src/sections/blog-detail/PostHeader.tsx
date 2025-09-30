import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/data";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header className="mb-10 text-center">
      <Badge className="mb-4 bg-primary/10 text-primary font-semibold">
        {post.category}
      </Badge>
      <h1 className="font-display text-3xl lg:text-5xl font-bold text-[#1A202C] mb-6">
        {post.title}
      </h1>
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
        <Link
          href={`/author/${post.authorSlug}`}
          className="flex items-center gap-3 group"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.authorImage} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {post.author}
          </span>
        </Link>
        <span>•</span>
        <span>{post.date}</span>
      </div>
    </header>
  );
}
