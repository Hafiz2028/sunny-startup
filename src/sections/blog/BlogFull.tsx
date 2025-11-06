"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { BlogList } from "./BlogList";
import type { Post } from "@/lib/data";

const POSTS_PER_PAGE = 6;

interface BlogFullProps {
  posts: Post[];
  categories: string[];
  pageSubtitle: string;
  searchPlaceholder: string;
  allCategoryText: string;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

export function BlogFull({
  posts,
  categories,
  pageSubtitle,
  searchPlaceholder,
  allCategoryText,
}: BlogFullProps) {
  const t = useTranslations("Blog");
  const locale = useLocale();

  const [activeCategory, setActiveCategory] = React.useState(allCategoryText);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");

  const allCategories = React.useMemo(
    () => [allCategoryText, ...categories],
    [allCategoryText, categories]
  );

  const filteredPosts = React.useMemo(
    () =>
      posts
        .filter(
          (post) =>
            activeCategory === allCategoryText ||
            post.category === activeCategory
        )
        .filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    [posts, activeCategory, searchTerm, allCategoryText]
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#1A202C] mb-4">
          {t.rich("title", {
            primary: (chunks) => <span className="text-primary">{chunks}</span>,
          })}
        </h1>
        <p className="text-lg text-gray-500">{t("subtitle")}</p>
      </motion.div>

      <div className="opacity-100 transition-opacity duration-300">
        <BlogList
          posts={paginatedPosts}
          meta={{
            total: filteredPosts.length,
            limit: POSTS_PER_PAGE,
            offset: (currentPage - 1) * POSTS_PER_PAGE,
            hasNext: currentPage < totalPages,
            hasPrev: currentPage > 1,
          }}
          categories={allCategories}
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1);
          }}
          onSearchChange={(term) => {
            setSearchTerm(term);
            setCurrentPage(1);
          }}
          onPageChange={setCurrentPage}
          searchPlaceholder={searchPlaceholder}
          allCategoryText={allCategoryText}
        />
      </div>
    </div>
  );
}
