import type { Post } from "./data";
import { postsData } from "./data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.API_TOKEN;

interface ApiArticle {
  id: number;
  title: string;
  desc: string;
  content: string;
  date_created: string;
  author: { id: number; name: string };
  category: { id: number; name: string };
  image: string;
  slug?: string;
}

export interface ApiCategory {
  id: number;
  name: string;
}

function mapApiArticleToPost(article: ApiArticle): Post {
  return {
    id: article.id,
    slug: article.slug || article.id.toString(),
    title: article.title,
    description: article.desc,
    content: article.content,
    author: article.author.name,
    authorId: article.author.id,
    authorBio: null,
    avatarSrc: null,
    date: new Date(article.date_created).toLocaleDateString("en-CA"),
    category: article.category.name,
    image: article.image,
  };
}

// autentikasi semua panggilan API
async function fetchApi(endpoint: string, options: RequestInit = {}) {
  if (!API_BASE_URL || !API_TOKEN) {
    throw new Error(
      "API URL or Token is not configured. Check your .env.local file."
    );
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
    ...options.headers,
  };
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(`API call failed: ${endpoint}`, await res.text());
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(`Network error on API call: ${endpoint}`, error);
    return null;
  }
}

// --- Fungsi untuk Memanggil API ---

export interface ArticlesResponse {
  categories: ApiCategory[];
  articles: Post[];
  meta: any;
}

export async function getAllArticles(
  locale: string,
  page: number = 1,
  limit: number = 6,
  category?: string | null,
  searchTerm?: string | null,
  allCategoryText?: string
): Promise<ArticlesResponse | null> {
  const params = new URLSearchParams({
    offset: ((page - 1) * limit).toString(),
    limit: limit.toString(),
  });

  if (category && category !== allCategoryText) {
    params.append("category", category);
  }

  if (searchTerm) {
    params.append("search", searchTerm);
  }

  const response = await fetchApi(`/api/articles?${params.toString()}`);

  if (!response || response.status !== 1) {
    console.error("Failed to get valid response from /api/articles");
    return {
      categories: [],
      articles: [],
      meta: { limit: 6, offset: 0, hasNext: false, hasPrev: false },
    };
  }

  const mappedArticles = response.data.articles.map(mapApiArticleToPost);

  return {
    categories: response.data.categories,
    articles: mappedArticles,
    meta: response.meta,
  };
}

export async function getArticleById(id: string): Promise<Post | null> {
  console.warn(
    "PERINGATAN: Menggunakan fungsi getArticleById yang tidak efisien."
  );

  const allData = await getAllArticles("en", 1, 100);

  if (!allData) return null;

  return allData.articles.find((p) => p.id.toString() === id) || null;
}

//dummy

// export interface PaginatedPostsResponse {
//   meta: {
//     total: number;
//     limit: number;
//     offset: number;
//     hasNext: boolean;
//     hasPrev: boolean;
//   };
//   data: Post[];
// }

// import { getTranslations } from "next-intl/server";

// export async function getTranslatedArticles(locale: string): Promise<Post[]> {
//   const t = await getTranslations({ locale, namespace: "Blog" });

//   const translatedPosts: Post[] = postsData.map((postStub) => ({
//     id: postStub.id,
//     slug: postStub.slug,
//     image: postStub.image,
//     avatarSrc: postStub.avatarSrc,
//     title: t(`posts.${postStub.slug}.title`),
//     description: t(`posts.${postStub.slug}.description`),
//     author: t(`posts.${postStub.slug}.author`),
//     date: t(`posts.${postStub.slug}.date`),
//     category: t(`posts.${postStub.slug}.category`),
//     content: t.raw(`posts.${postStub.slug}.content`),
//     authorBio: t(`posts.${postStub.slug}.authorBio`),
//   }));

//   return translatedPosts;
// }

// export async function getTranslatedArticleBySlug(
//   slug: string,
//   locale: string
// ): Promise<Post | null> {
//   const t = await getTranslations({ locale, namespace: "Blog" });

//   const postStub = postsData.find((p) => p.slug === slug);
//   if (!postStub) return null;

//   const translatedPost: Post = {
//     id: postStub.id,
//     slug: postStub.slug,
//     image: postStub.image,
//     avatarSrc: postStub.avatarSrc,
//     title: t(`posts.${postStub.slug}.title`),
//     description: t(`posts.${postStub.slug}.description`),
//     author: t(`posts.${postStub.slug}.author`),
//     date: t(`posts.${postStub.slug}.date`),
//     category: t(`posts.${postStub.slug}.category`),
//     content: t.raw(`posts.${postStub.slug}.content`),
//     authorBio: t(`posts.${postStub.slug}.authorBio`),
//   };

//   return translatedPost;
// }
