import { getTranslations } from "next-intl/server";
import type { Post } from "@/lib/data";
import { postsData } from "@/lib/data";
import { BlogPostCard } from "../blog/BlogPostCard";

export async function RelatedPosts({
  post: currentPost,
  locale,
}: {
  post: Post;
  locale: string;
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  const relatedPosts: Post[] = postsData
    .filter(
      (p) =>
        t(`posts.${p.slug}.category`) === currentPost.category &&
        p.slug !== currentPost.slug
    )
    .slice(0, 3)
    .map((p) => ({
      ...p,
      title: t(`posts.${p.slug}.title`),
      description: t(`posts.${p.slug}.description`),
      author: t(`posts.${p.slug}.author`),
      date: t(`posts.${p.slug}.date`),
      category: t(`posts.${p.slug}.category`),
      content: t(`posts.${p.slug}.content`),
      authorBio: t(`posts.${p.slug}.authorBio`),
    }));

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="font-display text-3xl font-bold mb-8 text-center text-[#1A202C]">
        {t("related_articles_title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((related) => (
          <BlogPostCard key={related.slug} post={related} />
        ))}
      </div>
    </div>
  );
}
