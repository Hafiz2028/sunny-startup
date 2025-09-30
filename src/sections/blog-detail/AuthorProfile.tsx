import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/lib/data";

export function AuthorProfile({ post }: { post: Post }) {
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
      <Avatar className="h-24 w-24">
        <AvatarImage src={post.authorImage} alt={post.author} />
        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold text-gray-500">DITULIS OLEH</p>
        <h3 className="font-display text-2xl font-bold mb-1 text-[#1A202C]">
          {post.author}
        </h3>
        <p className="text-gray-500">{post.authorBio}</p>
        <Link
          href={`/author/${post.authorSlug}`}
          className="text-sm font-semibold text-primary hover:underline mt-2 inline-block"
        >
          Lihat semua artikel
        </Link>
      </div>
    </div>
  );
}
