import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Post } from "@/lib/data"; // Import tipe data Post

// Komponen ini hanya menerima satu 'post' sebagai prop dan menampilkannya
export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card
      key={post.slug}
      className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-none transition-all duration-300 hover:-translate-y-2"
    >
      <CardHeader className="p-0">
        <Link
          href={`/blog/${post.slug}`}
          className="block aspect-[16/10] overflow-hidden"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>
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
  );
}
