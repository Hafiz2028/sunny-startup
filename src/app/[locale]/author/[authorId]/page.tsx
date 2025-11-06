// app/[locale]/author/[authorId]/page.tsx

import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/api";
import { locales } from "@/navigation";
// 1. Impor komponen klien baru
import { AuthorPageContent } from "@/sections/author/AuthorPageContent";

export async function generateStaticParams() {
  const apiResponse = await getAllArticles();
  const articles = apiResponse ? apiResponse.articles : [];

  const authorIds = [
    ...new Set(articles.map((post) => post.authorId.toString())),
  ];

  return locales.flatMap((locale) =>
    authorIds.map((authorId) => ({
      authorId,
      locale,
    }))
  );
}

export default async function AuthorDetailPage({
  params: { authorId, locale },
}: {
  params: { authorId: string; locale: string };
}) {
  // 2. Logika pengambilan data tetap di sini (Server Component)
  const apiResponse = await getAllArticles();
  const allPosts = apiResponse ? apiResponse.articles : [];

  const authorPosts = allPosts.filter(
    (post) => post.authorId.toString() === authorId
  );

  if (authorPosts.length === 0) {
    notFound();
  }

  const authorDetails = {
    name: authorPosts[0].author,
    bio: authorPosts[0].authorBio,
    avatar: authorPosts[0].avatarSrc,
  };

  // 3. Render komponen klien dan kirim data sebagai props
  return (
    <AuthorPageContent
      authorPosts={authorPosts}
      authorDetails={authorDetails}
    />
  );
}
