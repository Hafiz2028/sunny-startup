import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation"; // -> 1. Ganti impor Link
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Post } from "@/lib/data";

// 2. Ubah menjadi async dan terima 'locale'
export async function AuthorProfile({
  post,
  locale,
}: {
  post: Post;
  locale: string;
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
      <Avatar className="h-24 w-24">
        <AvatarImage src={post.authorImage} alt={post.author} />
        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {t("written_by")}
        </p>
        <h3 className="font-display text-2xl font-bold mb-1 text-[#1A202C]">
          {post.author}
        </h3>
        <p className="text-gray-500">{post.authorBio}</p>
        <Link
          href={`/author/${post.authorSlug}`}
          className="text-sm font-semibold text-primary hover:underline mt-2 inline-block"
        >
          {t("view_all_articles_by", { authorName: post.author })}
        </Link>
      </div>
    </div>
  );
}
