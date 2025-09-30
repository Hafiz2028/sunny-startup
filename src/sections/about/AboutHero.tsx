export function AboutHero() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A202C] mb-6 leading-tight">
          Membantu Wujudkan{" "}
          <span className="text-primary">Mimpi Foodpreneur</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Kami percaya setiap ide bisnis kuliner yang hebat berhak mendapatkan
          awal yang cerah. Pelajari lebih lanjut tentang visi, misi, dan tim di
          balik Sunny Startup.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
