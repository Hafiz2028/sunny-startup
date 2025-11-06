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
import type { PaginatedPostsResponse } from "@/lib/api";

const POSTS_PER_PAGE = 6;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const uiElementVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categoryContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
interface BlogListProps {
  posts: Post[];
  meta: PaginatedPostsResponse["meta"];
  categories: string[];
  activeCategory: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
  onPageChange: (page: number) => void;
  searchPlaceholder: string;
  allCategoryText: string;
}

export function BlogList({
  posts,
  meta,
  categories,
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  onPageChange,
  searchPlaceholder,
}: BlogListProps) {
  const totalPages = Math.ceil(meta.total / meta.limit);
  const currentPage = meta.offset / meta.limit + 1;

  return (
    <>
      <motion.div
        className="max-w-xl mx-auto mb-8 relative"
        initial="hidden"
        animate="visible"
        variants={uiElementVariants}
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="search"
          placeholder={searchPlaceholder}
          className="pl-12 h-12 rounded-full border-gray-200 focus:ring-primary focus:border-primary"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap gap-3 mb-16"
        variants={categoryContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.div key={category} variants={uiElementVariants}>
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + activeCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]"
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

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
                    onPageChange(Math.max(1, currentPage - 1));
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
                      onPageChange(i + 1);
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
                    onPageChange(Math.min(totalPages, currentPage + 1));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>
      )}
    </>
  );
}
