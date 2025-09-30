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

// Pindahkan semua data dummy ke file ini
export const dummyPosts: Post[] = [
  {
    slug: "5-strategi-marketing-fnb",
    title: "5 Strategi Marketing F&B di Era Digital",
    description:
      "Tingkatkan visibilitas brand kuliner Anda dengan budget yang efisien.",
    author: "Rina A.",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    authorBio:
      "Rina adalah seorang digital marketer dengan spesialisasi di industri F&B. Ia telah membantu puluhan UMKM untuk go digital.",
    date: "28 Sep, 2025",
    category: "Tips Bisnis",
    imageUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>1. Manfaatkan Media Sosial Secara Maksimal</h2><p>Platform seperti Instagram dan TikTok adalah kunci untuk menjangkau audiens Gen Z. Buat konten video pendek yang menarik dan gunakan fitur seperti Reels dan Stories untuk promosi harian.</p><h2>2. Optimalkan SEO Lokal</h2><p>Pastikan bisnis Anda terdaftar di Google Maps dengan informasi yang lengkap. Gunakan kata kunci seperti 'kopi enak di [nama kota]' pada deskripsi bisnis Anda.</p><h2>3. Kolaborasi dengan Influencer</h2><p>Cari food blogger atau influencer lokal yang sesuai dengan brand Anda. Sebuah ulasan positif dari mereka dapat meningkatkan kepercayaan pelanggan secara signifikan.</p>",
  },
  {
    slug: "studi-kasus-sambal-juara",
    title: "Studi Kasus: Dari Dapur Rumahan ke Rak Supermarket",
    description:
      "Perjalanan inspiratif 'Sambal Juara' dalam menembus pasar ritel modern.",
    author: "Budi S.",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    authorBio:
      "Budi adalah seorang praktisi bisnis yang fokus pada pengembangan produk UMKM agar dapat bersaing di pasar yang lebih luas.",
    date: "25 Sep, 2025",
    category: "Studi Kasus",
    imageUrl:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Awal Mula Sambal Juara</h2><p>'Sambal Juara' dimulai dari resep keluarga yang diuji coba di dapur rumahan. Kunci keberhasilannya adalah konsistensi rasa dan kemasan yang menarik.</p><h2>Tantangan Menembus Ritel</h2><p>Salah satu tantangan terbesar adalah memenuhi standar produksi dan perizinan yang dibutuhkan oleh supermarket besar. Ini membutuhkan investasi awal yang tidak sedikit untuk sertifikasi dan peningkatan kapasitas produksi.</p>",
  },
  {
    slug: "pentingnya-food-costing",
    title: "Mengapa Food Costing Adalah Kunci Profitabilitas Restoran Anda",
    description:
      "Pahami cara menghitung biaya bahan baku untuk memaksimalkan keuntungan.",
    author: "Sarah L.",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    authorBio:
      "Sarah adalah seorang konsultan finansial yang telah membantu banyak restoran dalam merencanakan keuangan mereka.",
    date: "22 Sep, 2025",
    category: "Edukasi Finansial",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    content:
      "<h2>Apa itu Food Cost?</h2><p>Food cost adalah persentase dari total pendapatan yang Anda habiskan untuk membeli bahan baku makanan. Rumus dasarnya adalah: (Total Biaya Bahan Baku / Total Penjualan) x 100%.</p><h2>Mengapa Ini Penting?</h2><p>Dengan mengetahui food cost per menu, Anda dapat menetapkan harga jual yang tidak hanya menutupi biaya, tetapi juga memberikan margin keuntungan yang sehat. Tanpa perhitungan ini, bisnis Anda berisiko mengalami kerugian tanpa disadari.</p>",
  },
  {
    slug: "tren-kemasan-ramah-lingkungan",
    title: "Tren Kemasan Ramah Lingkungan untuk Bisnis Kopi",
    description:
      "Tarik pelanggan sadar lingkungan dengan pilihan kemasan yang berkelanjutan.",
    author: "Rina A.",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    authorBio:
      "Rina adalah seorang digital marketer dengan spesialisasi di industri F&B. Ia telah membantu puluhan UMKM untuk go digital.",
    date: "19 Sep, 2025",
    category: "Tips Bisnis",
    imageUrl:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Pentingnya Green Packaging</h2><p>Semakin banyak konsumen, terutama Gen Z, yang memilih brand berdasarkan nilai-nilai keberlanjutan. Menggunakan kemasan ramah lingkungan bukan lagi pilihan, melainkan sebuah keharusan untuk tetap relevan.</p><h2>Contoh Kemasan</h2><p>Beberapa opsi populer termasuk gelas kopi dari bahan daur ulang, sedotan kertas atau bambu, dan tas belanja dari bahan singkong yang dapat terurai.</p>",
  },
  {
    slug: "membangun-loyalitas-pelanggan",
    title: "Membangun Loyalitas Pelanggan Melalui Program Membership",
    description:
      "Ubah pembeli sesekali menjadi pelanggan setia dengan program loyalitas.",
    author: "Budi S.",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    authorBio:
      "Budi adalah seorang praktisi bisnis yang fokus pada pengembangan produk UMKM agar dapat bersaing di pasar yang lebih luas.",
    date: "15 Sep, 2025",
    category: "Studi Kasus",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667520101390-2e12bd9f84f6?q=80&w=1171&auto=format&fit=crop",
    content:
      "<h2>Studi Kasus: Kopi Senja</h2><p>'Kopi Senja' berhasil meningkatkan retensi pelanggan sebesar 40% setelah meluncurkan program membership digital. Pelanggan dapat mengumpulkan poin setiap pembelian yang bisa ditukar dengan produk gratis.</p><h2>Kunci Sukses</h2><p>Program ini berhasil karena mudah digunakan (melalui aplikasi sederhana) dan memberikan reward yang benar-benar diinginkan oleh pelanggan mereka.</p>",
  },
  {
    slug: "manajemen-inventaris-efektif",
    title: "Tips Manajemen Inventaris untuk Menghindari Pemborosan",
    description:
      "Hindari kerugian akibat bahan baku terbuang dengan sistem inventaris.",
    author: "Sarah L.",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    authorBio:
      "Sarah adalah seorang konsultan finansial yang telah membantu banyak restoran dalam merencanakan keuangan mereka.",
    date: "12 Sep, 2025",
    category: "Edukasi Finansial",
    imageUrl:
      "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Metode First-In, First-Out (FIFO)</h2><p>Prinsip dasar manajemen inventaris di F&B adalah FIFO. Bahan baku yang pertama kali masuk harus menjadi yang pertama kali keluar. Ini mencegah bahan makanan menjadi kadaluwarsa.</p><h2>Lakukan Stock Opname Rutin</h2><p>Jadwalkan pengecekan stok secara rutin, misalnya mingguan. Ini membantu Anda mengetahui bahan apa yang pergerakannya cepat dan mana yang lambat, sehingga Anda bisa menyesuaikan pembelian di masa depan.</p>",
  },
  {
    slug: "riset-pasar-untuk-menu-baru",
    title: "Cara Melakukan Riset Pasar Sebelum Meluncurkan Menu Baru",
    description:
      "Validasi ide menu baru Anda dengan data untuk memastikan kesuksesan.",
    author: "Rina A.",
    authorSlug: "rina-a",
    authorImage: "https://i.pravatar.cc/150?u=rina",
    authorBio:
      "Rina adalah seorang digital marketer dengan spesialisasi di industri F&B. Ia telah membantu puluhan UMKM untuk go digital.",
    date: "10 Sep, 2025",
    category: "Tips Bisnis",
    imageUrl:
      "https://images.unsplash.com/photo-1516653995843-05a751634710?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Survei Pelanggan</h2><p>Cara termudah adalah dengan bertanya langsung kepada pelanggan setia Anda. Buat survei singkat melalui Google Forms atau media sosial untuk menanyakan preferensi mereka.</p><h2>Uji Coba Terbatas</h2><p>Sebelum meluncurkan secara resmi, tawarkan menu baru sebagai 'menu spesial' selama seminggu. Lihat respons pelanggan dan minta masukan dari mereka.</p>",
  },
  {
    slug: "analisis-kompetitor-restoran",
    title: "Studi Kasus: Analisis Kompetitor untuk Menentukan Harga Jual",
    description:
      "Pelajari bagaimana restoran lokal bersaing dengan brand besar.",
    author: "Budi S.",
    authorSlug: "budi-s",
    authorImage: "https://i.pravatar.cc/150?u=budi",
    authorBio:
      "Budi adalah seorang praktisi bisnis yang fokus pada pengembangan produk UMKM agar dapat bersaing di pasar yang lebih luas.",
    date: "08 Sep, 2025",
    category: "Studi Kasus",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-6c8a8c3d0b2f?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Memetakan Kompetitor</h2><p>Restoran 'Nasi Juara' memetakan semua kompetitor di radius 1 km. Mereka menganalisis harga, menu andalan, dan promo yang ditawarkan.</p><h2>Menemukan Celah</h2><p>Mereka menemukan bahwa tidak ada kompetitor yang menawarkan paket makan siang hemat untuk karyawan kantor. 'Nasi Juara' kemudian meluncurkan paket seharga Rp 25.000 dan berhasil menguasai pasar tersebut.</p>",
  },
  {
    slug: "pajak-umkm-fnb",
    title: "Panduan Pajak untuk UMKM F&B yang Wajib Anda Tahu",
    description:
      "Pahami kewajiban perpajakan untuk bisnis kuliner Anda sejak dini.",
    author: "Sarah L.",
    authorSlug: "sarah-l",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    authorBio:
      "Sarah adalah seorang konsultan finansial yang telah membantu banyak restoran dalam merencanakan keuangan mereka.",
    date: "05 Sep, 2025",
    category: "Edukasi Finansial",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
    content:
      "<h2>Pajak Final 0.5%</h2><p>Untuk UMKM dengan omzet di bawah Rp 4.8 Miliar per tahun, pemerintah memberikan fasilitas PPh Final dengan tarif 0.5% dari total omzet bulanan. Ini jauh lebih sederhana daripada perhitungan pajak normal.</p><h2>Pentingnya Pencatatan</h2><p>Meskipun tarifnya sederhana, Anda tetap wajib melakukan pencatatan omzet harian dengan rapi. Ini akan menjadi dasar perhitungan pajak Anda dan sangat penting jika ada pemeriksaan di kemudian hari.</p>",
  },
];

export const founderData = {
  name: "Alex Chandra",
  title: "Founder & CEO Sunny Startup",
  imageUrl:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
  bio: "Alex adalah seorang foodpreneur serial yang memiliki hasrat besar untuk membantu UMKM kuliner bertumbuh. Dengan latar belakang di bidang teknologi dan keuangan, ia mendirikan Sunny Startup untuk mengatasi masalah utama yang sering dihadapi para pengusaha pemula: perencanaan bisnis yang matang.",
  experience: [
    "10+ Tahun di Industri F&B",
    "Pakar Perencanaan Keuangan",
    "Mantan Software Engineer",
  ],
};

export const timelineData = [
  {
    year: "2023",
    event:
      "Ide Sunny Startup tercetus dari sebuah diskusi di kedai kopi tentang sulitnya memulai bisnis kuliner.",
  },
  {
    year: "2024",
    event:
      "Tim inti terbentuk dan pengembangan versi beta dari 'Business Calculator' dimulai.",
  },
  {
    year: "2025",
    event:
      "Peluncuran resmi Sunny Startup ke publik dengan misi memberdayakan jutaan UMKM di Indonesia.",
  },
];
