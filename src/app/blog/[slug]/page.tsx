import { notFound } from "next/navigation";
import { dummyPosts } from "@/lib/data";
import { PostHeader } from "@/sections/blog-detail/PostHeader";
import { AuthorProfile } from "@/sections/blog-detail/AuthorProfile";
import { RelatedPosts } from "@/sections/blog-detail/RelatedPosts";
import { Card, CardContent } from "@/components/ui/card";

const getPostBySlug = (slug: string) => dummyPosts.find((p) => p.slug === slug);

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#F7FAFC]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 rounded-2xl shadow-none overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 pb-0">
              <PostHeader post={post} />
            </div>

            {/* --- PERBAIKAN: Tampilkan gambar hanya jika post.imageUrl ada --- */}
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
            <AuthorProfile post={post} />
            <RelatedPosts post={post} />
          </div>
        </div>
      </div>
    </main>
  );
}
