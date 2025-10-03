export type Post = {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorSlug: string;
  authorImage: string;
  authorBio: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
};

export const postsData = [
  {
    slug: "5-strategi-marketing-fnb",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    imageUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "studi-kasus-sambal-juara",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    imageUrl:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "pentingnya-food-costing",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    slug: "tren-kemasan-ramah-lingkungan",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    imageUrl:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "membangun-loyalitas-pelanggan",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667520101390-2e12bd9f84f6?q=80&w=1171&auto=format&fit=crop",
  },
  {
    slug: "manajemen-inventaris-efektif",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    imageUrl:
      "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "riset-pasar-untuk-menu-baru",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    imageUrl:
      "https://images.unsplash.com/photo-1516653995843-05a751634710?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "analisis-kompetitor-restoran",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-6c8a8c3d0b2f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "pajak-umkm-fnb",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
  },
];

export const founderData = {
  name: "Alex Chandra",
  imageUrl:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",

  title: "founder_title",
  bio: "founder_bio",
  experience: ["founder_exp1", "founder_exp2", "founder_exp3"],
};

export const timelineData = [
  {
    year: "2023",
    event: "timeline_2023",
  },
  {
    year: "2024",
    event: "timeline_2024",
  },
  {
    year: "2025",
    event: "timeline_2025",
  },
];
