import { notFound } from "next/navigation";
import { getAllArticles, getArticleById } from "@/lib/api";
import { locales } from "@/navigation";
import { BlogDetailContent } from "@/sections/blog-detail/BlogDetailContent";
import type { Metadata } from "next";
import type { Post } from "@/lib/data";

export async function generateStaticParams() {
  const apiResponse = await getAllArticles("en");
  const articles = apiResponse ? apiResponse.articles : [];

  return locales.flatMap((locale) =>
    articles.map((article) => ({
      slug: article.id.toString(),
      locale,
    }))
  );
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const post = await getArticleById(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Sunny Startup`,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const post = await getArticleById(slug);
  const allPostsResponse = await getAllArticles(locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#F7FAFC] overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <BlogDetailContent
          post={post}
          allPosts={allPostsResponse?.articles || []}
        />
      </div>
    </main>
  );
}
