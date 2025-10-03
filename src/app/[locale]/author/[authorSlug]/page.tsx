// src/app/[locale]/author/[authorSlug]/page.tsx (Versi Final)

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostCard } from "@/sections/blog/BlogPostCard";
import { postsData } from "@/lib/data";
import type { Post } from "@/lib/data";
import { locales } from "@/navigation";

export async function generateStaticParams() {
  const authorSlugs = [...new Set(postsData.map((p) => p.authorSlug))];

  return locales.flatMap((locale) =>
    authorSlugs.map((authorSlug) => ({
      authorSlug,
      locale,
    }))
  );
}

// (OPTIMASI SEO) Buat metadata dinamis untuk setiap halaman author
export async function generateMetadata({
  params: { authorSlug, locale },
}: {
  params: { authorSlug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  // Ambil salah satu post dari author ini untuk mendapatkan namanya
  const firstPost = postsData.find((p) => p.authorSlug === authorSlug);
  if (!firstPost) {
    return { title: "Author Not Found" };
  }
  const authorName = t(`posts.${firstPost.slug}.author`);

  return {
    title: `Articles by ${authorName} | Sunny Startup`,
  };
}

// Komponen Halaman Utama
export default async function AuthorPage({
  params: { authorSlug, locale },
}: {
  params: { authorSlug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });

  // 1. Filter semua post statis dari author ini
  const authorPostsStaticData = postsData.filter(
    (p) => p.authorSlug === authorSlug
  );

  if (authorPostsStaticData.length === 0) {
    notFound();
  }

  // 2. Ambil detail author dari post pertama (nama dan bio sudah diterjemahkan)
  const author = {
    name: t(`posts.${authorPostsStaticData[0].slug}.author`),
    image: authorPostsStaticData[0].authorImage,
    bio: t(`posts.${authorPostsStaticData[0].slug}.authorBio`),
  };

  // 3. "Hidrasi" daftar post dengan konten terjemahan
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
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Avatar className="h-28 w-28 mx-auto mb-5">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1A202C] mb-4">
            {t("articles_by_author", { authorName: author.name })}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {author.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
