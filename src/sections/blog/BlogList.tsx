"use client";

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { Post } from "@/lib/data";
import { BlogPostCard } from "./BlogPostCard";

const POSTS_PER_PAGE = 6;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const postCardVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
  },
};

interface BlogListProps {
  posts: Post[];
  pageTitle: string;
  pageSubtitle: string;
  searchPlaceholder: string;
  allCategoryText: string;
}

export function BlogList({
  posts,
  pageTitle,
  pageSubtitle,
  searchPlaceholder,
  allCategoryText,
}: BlogListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState(allCategoryText);
  const [currentPage, setCurrentPage] = React.useState(1);

  const categories = [
    allCategoryText,
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  const filteredPosts = posts
    .filter(
      (post) =>
        activeCategory === allCategoryText || post.category === activeCategory
    )
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="w-full py-20 lg:py-24 bg-[#F7FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Container untuk animasi masuk elemen UI atas */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-8"
        >
          {/* Judul & Subjudul Halaman */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#1A202C] mb-4">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-500">{pageSubtitle}</p>
          </motion.div>

          {/* Input Pencarian */}
          <motion.div
            variants={itemVariants}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder={searchPlaceholder}
              className="pl-12 h-12 rounded-full border-gray-200 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </motion.div>
        </motion.div>

        {/* Tombol Kategori */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center flex-wrap gap-3 my-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-5 py-2 transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Grid Kartu Blog dengan Animasi Filter */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]"
        >
          <AnimatePresence>
            {paginatedPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                variants={postCardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Paginasi */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20"
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((p) => Math.max(1, p - 1));
                    }}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((p) => Math.min(totalPages, p + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}
      </div>
    </section>
  );
}
