import { getTranslations } from "next-intl/server";
import { getAllArticles } from "@/lib/api";
import { BlogFull } from "@/sections/blog/BlogFull";

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Blog" });
  const apiResponse = await getAllArticles();

  const allPosts = apiResponse ? apiResponse.articles : [];
  const allCategories = apiResponse
    ? apiResponse.categories.map((c) => c.name)
    : [];

  return (
    <main className="w-full py-20 lg:py-24 bg-[#F7FAFC] overflow-hidden">
      <BlogFull
        posts={allPosts}
        categories={allCategories}
        pageSubtitle={t("subtitle")}
        searchPlaceholder={t("search_placeholder")}
        allCategoryText={t("all_category")}
      />
    </main>
  );
}
