import { ArrowRight, PlayCircle } from "lucide-react";
import { MinimalistCta } from "@/components/ui/MinimalistCta";

// Komponen kecil untuk membuat mockup UI yang stylised
const UiMockup = () => (
  <div className="w-full h-full bg-secondary/50 rounded-2xl p-4 md:p-6 border border-border/10 shadow-inner-lg flex flex-col gap-4">
    {/* Mockup Header */}
    <div className="flex-shrink-0 flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-red-400/50"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-400/50"></span>
      <span className="w-3 h-3 rounded-full bg-green-400/50"></span>
    </div>
    {/* Mockup Content */}
    <div className="flex-grow bg-background/70 rounded-lg p-4 flex flex-col md:flex-row gap-4">
      {/* Kolom Kiri: Input */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <p className="text-sm font-semibold text-foreground">Rincian Modal</p>
        <div className="space-y-2">
          <div className="w-full h-3 bg-primary/20 rounded-full">
            <div className="w-3/4 h-3 bg-primary rounded-full"></div>
          </div>
          <div className="w-full h-3 bg-primary/20 rounded-full">
            <div className="w-1/2 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
        <p className="text-sm font-semibold text-foreground mt-2">Bahan Baku</p>
        <div className="w-full h-8 bg-muted rounded"></div>
        <div className="w-full h-8 bg-muted rounded"></div>
      </div>
      {/* Kolom Kanan: Chart */}
      <div className="w-full md:w-1/2 flex flex-col">
        <p className="text-sm font-semibold text-foreground">Prediksi Profit</p>
        <div className="flex-grow flex items-end justify-between gap-2 pt-2">
          <div className="w-1/4 h-1/3 bg-accent/50 rounded-t-sm"></div>
          <div className="w-1/4 h-2/3 bg-accent/50 rounded-t-sm"></div>
          <div className="w-1/4 h-full bg-primary/80 rounded-t-sm"></div>
          <div className="w-1/4 h-3/4 bg-accent/50 rounded-t-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

export const HeroSection = () => {
  return (
    // PERBAIKAN: Menggunakan min-h-[85vh] untuk tinggi yang ideal dan flex untuk menengahkan konten.
    <section className="relative bg-background overflow-hidden min-h-[85vh] flex items-center">
      {/* Latar Belakang Mockup UI */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 opacity-20 md:opacity-30 lg:opacity-100 p-8 lg:p-0 lg:pl-20">
        <div className="relative w-full h-full lg:-right-20 lg:top-16 transform lg:rotate-6 lg:scale-110">
          <UiMockup />
        </div>
      </div>

      {/* Konten Teks di Atas */}
      <div className="container relative z-10 mx-auto px-6 flex items-center">
        {/* Kolom Teks */}
        <div className="lg:w-3/5 xl:w-1/2 text-center lg:text-left">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            Mimpi Bisnis Kulinermu Dimulai Dari Sini.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-muted-foreground">
            Ubah ide random jadi rencana cuan yang matang. Kalkulator bisnis
            pintar kami bantu hitung semuanya, sat-set anti boncos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8">
            <MinimalistCta
              href="/services?tab=calculator"
              variant="spotlight"
              showArrow
            >
              Ayo Hitung Bisnismu
            </MinimalistCta>

            <a
              href="https://youtube.com"
              target="_blank"
              className="group relative inline-flex items-center gap-2 text-lg font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <PlayCircle className="h-5 w-5" />
              <span>Pelajari Caranya</span>
              <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
