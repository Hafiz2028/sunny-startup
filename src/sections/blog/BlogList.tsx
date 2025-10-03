"use client";

import * as React from "react";
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
    <section className="w-full py-20 lg:py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#1A202C] mb-4">
            {pageTitle}
          </h1>
          <p className="text-lg text-gray-500">{pageSubtitle}</p>
        </div>

        <div className="max-w-xl mx-auto mb-8 relative">
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
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-20">
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
          </div>
        )}
      </div>
    </section>
  );
}
