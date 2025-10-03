// src/app/[locale]/blog/[slug]/page.tsx (Versi Final)

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { postsData } from "@/lib/data"; // Impor data statis
import type { Post } from "@/lib/data"; // Impor tipe Post
import { PostHeader } from "@/sections/blog-detail/PostHeader";
import { AuthorProfile } from "@/sections/blog-detail/AuthorProfile";
import { RelatedPosts } from "@/sections/blog-detail/RelatedPosts";
import { Card, CardContent } from "@/components/ui/card";
import { locales } from "@/navigation"; // Impor locales dari navigation.ts

// 1. (OPTIMASI PERFORMA) Pre-build semua halaman blog saat build time
export async function generateStaticParams() {
  const slugs = postsData.map((post) => post.slug);

  // Hasilkan kombinasi slug dan locale
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      slug,
      locale,
    }))
  );
}

// 2. (OPTIMASI SEO) Buat metadata dinamis untuk setiap post
export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });
  const postTitle = t(`posts.${slug}.title`);
  const postDescription = t(`posts.${slug}.description`);

  return {
    title: postTitle,
    description: postDescription,
  };
}

// 3. Komponen Halaman Utama
export default async function BlogDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const postStaticData = postsData.find((p) => p.slug === slug);

  if (!postStaticData) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Blog" });

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

  return (
    <main className="bg-[#F7FAFC]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 rounded-2xl shadow-none overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 pb-0">
              <PostHeader post={post} />
            </div>

            {post.imageUrl && (
              <div className="px-6 sm:px-8 md:px-10">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full rounded-2xl aspect-video object-cover"
                />
              </div>
            )}

            <CardContent className="p-6 sm:p-8 md:p-10">
              <article
                className="prose prose-lg prose-headings:font-display prose-headings:text-[#1A202C] prose-p:text-gray-600 prose-a:text-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          <div className="mt-12 space-y-12">
            <AuthorProfile post={post} locale={locale} />
            <RelatedPosts post={post} locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
