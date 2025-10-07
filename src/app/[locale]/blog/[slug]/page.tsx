import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { postsData } from "@/lib/data";
import type { Post } from "@/lib/data";
import { locales } from "@/navigation";
import { BlogDetailContent } from "@/sections/blog-detail/BlogDetailContent";

export async function generateStaticParams() {
  const slugs = postsData.map((post) => post.slug);
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      slug,
      locale,
    }))
  );
}
export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });
  const postTitle = t(`posts.${slug}.title`);
  const postDescription = t(`posts.${slug}.description`);

  return {
    title: `${postTitle} | Sunny Startup`,
    description: postDescription,
  };
}

export default async function BlogDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  const postStaticData = postsData.find((p) => p.slug === slug);
  if (!postStaticData) {
    notFound();
  }

  const post: Post = {
    ...postStaticData,
    title: t(`posts.${slug}.title`),
    description: t(`posts.${slug}.description`),
    author: t(`posts.${slug}.author`),
    date: t(`posts.${slug}.date`),
    category: t(`posts.${slug}.category`),
    content: t.raw(`posts.${slug}.content`),
    authorBio: t(`posts.${slug}.authorBio`),
  };

  const allTranslatedPosts: Post[] = postsData.map((p) => ({
    ...p,
    title: t(`posts.${p.slug}.title`),
    description: t(`posts.${p.slug}.description`),
    author: t(`posts.${p.slug}.author`),
    date: t(`posts.${p.slug}.date`),
    category: t(`posts.${p.slug}.category`),
    content: t.raw(`posts.${p.slug}.content`),
    authorBio: t(`posts.${p.slug}.authorBio`),
  }));

  return (
    <main className="bg-[#F7FAFC] overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <BlogDetailContent post={post} allPosts={allTranslatedPosts} />
      </div>
    </main>
  );
}
