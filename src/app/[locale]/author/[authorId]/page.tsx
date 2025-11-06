import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/api";
import type { Post } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostCard } from "@/sections/blog/BlogPostCard";
import { motion } from "framer-motion";
import { locales } from "@/navigation";
import { AuthorPageContent } from "@/sections/author/AuthorPageContent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export async function generateStaticParams() {
  const apiResponse = await getAllArticles("en");
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
  const apiResponse = await getAllArticles(locale);
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
