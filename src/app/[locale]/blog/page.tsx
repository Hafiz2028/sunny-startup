import { getTranslations } from "next-intl/server";
import { postsData } from "@/lib/data";
import type { Post } from "@/lib/data";
import { BlogFull } from "@/sections/blog/BlogFull";

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  const translatedPosts: Post[] = postsData.map((post) => ({
    ...post,
    title: t(`posts.${post.slug}.title`),
    description: t(`posts.${post.slug}.description`),
    author: t(`posts.${post.slug}.author`),
    date: t(`posts.${post.slug}.date`),
    category: t(`posts.${post.slug}.category`),
    content: t.raw(`posts.${post.slug}.content`),
    authorBio: t(`posts.${post.slug}.authorBio`),
  }));

  return (
    <main className="w-full py-20 lg:py-24 bg-[#F7FAFC] overflow-hidden">
      <BlogFull
        posts={translatedPosts}
        pageTitle={t("title")}
        pageSubtitle={t("subtitle")}
        searchPlaceholder={t("search_placeholder")}
        allCategoryText={t("all_category")}
      />
    </main>
  );
}
