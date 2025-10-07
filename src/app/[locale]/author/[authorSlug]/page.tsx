import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { postsData } from "@/lib/data";
import type { Post } from "@/lib/data";
import { locales } from "@/navigation";
import { AuthorPageContent } from "@/sections/author/AuthorPageContent";

export async function generateStaticParams() {
  const authorSlugs = [...new Set(postsData.map((p) => p.authorSlug))];

  return locales.flatMap((locale) =>
    authorSlugs.map((authorSlug) => ({
      authorSlug,
      locale,
    }))
  );
}

export async function generateMetadata({
  params: { authorSlug, locale },
}: {
  params: { authorSlug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  const firstPost = postsData.find((p) => p.authorSlug === authorSlug);
  if (!firstPost) {
    return { title: "Author Not Found" };
  }
  const authorName = t(`posts.${firstPost.slug}.author`);

  return {
    title: `Articles by ${authorName} | Sunny Startup`,
  };
}

export default async function AuthorPage({
  params: { authorSlug, locale },
}: {
  params: { authorSlug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  const authorPostsStaticData = postsData.filter(
    (p) => p.authorSlug === authorSlug
  );

  if (authorPostsStaticData.length === 0) {
    notFound();
  }

  const author = {
    name: t(`posts.${authorPostsStaticData[0].slug}.author`),
    image: authorPostsStaticData[0].authorImage,
    bio: t(`posts.${authorPostsStaticData[0].slug}.authorBio`),
  };

  const posts: Post[] = authorPostsStaticData.map((post) => ({
    ...post,
    title: t(`posts.${post.slug}.title`),
    description: t(`posts.${post.slug}.description`),
    author: t(`posts.${post.slug}.author`),
    date: t(`posts.${post.slug}.date`),
    category: t(`posts.${post.slug}.category`),
    content: t(`posts.${post.slug}.content`),
    authorBio: t(`posts.${post.slug}.authorBio`),
  }));

  return (
    <main className="w-full py-20 lg:py-24 bg-[#F7FAFC]">
      <AuthorPageContent
        author={author}
        posts={posts}
        title={t("articles_by_author", { authorName: author.name })}
      />
    </main>
  );
}
