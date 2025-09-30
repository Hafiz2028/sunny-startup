import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostCard } from "@/sections/blog/BlogPostCard";
import { dummyPosts } from "@/lib/data";

const getAuthorAndPosts = (slug: string) => {
  const posts = dummyPosts.filter((p) => p.authorSlug === slug);
  if (posts.length === 0) return null;

  const author = {
    name: posts[0].author,
    image: posts[0].authorImage,
    bio: posts[0].authorBio,
  };

  return { author, posts };
};

export default function AuthorPage({
  params,
}: {
  params: { authorSlug: string };
}) {
  const data = getAuthorAndPosts(params.authorSlug);

  if (!data) {
    notFound();
  }

  const { author, posts } = data;

  return (
    <main className="w-full py-20 lg:py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Avatar className="h-28 w-28 mx-auto mb-5">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1A202C] mb-4">
            Artikel oleh {author.name}
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
