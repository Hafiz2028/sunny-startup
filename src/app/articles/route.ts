// app/api/articles/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/lib/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    // Ambil semua parameter dari permintaan
    const locale = searchParams.get("locale") || "en";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const category = searchParams.get("category");
    const searchTerm = searchParams.get("search");
    const allCategoryText =
      searchParams.get("allCategoryText") || "All Categories";

    const response = await getAllArticles(
      locale,
      page,
      limit,
      category,
      searchTerm,
      allCategoryText
    );

    // Kembalikan hasilnya sebagai JSON
    return NextResponse.json(response);
  } catch (error) {
    console.error("[API_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
