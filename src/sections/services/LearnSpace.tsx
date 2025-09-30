import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video } from "lucide-react";
import Link from "next/link";

// Data dummy untuk modul pembelajaran
const learningModules = [
  {
    type: "Artikel",
    title: "5 Strategi Marketing F&B di Era Digital",
    description:
      "Pelajari cara meningkatkan visibilitas brand kuliner Anda dengan budget yang efisien.",
    icon: FileText,
    link: "/blog/strategi-marketing-fnb",
  },
  {
    type: "Workshop",
    title: "Workshop: Perencanaan Finansial untuk Startup",
    description:
      "Sesi interaktif untuk membantu Anda menyusun proyeksi keuangan yang solid dan realistis.",
    icon: Video,
    link: "/services/learn/workshop-finansial",
  },
  {
    type: "Modul PDF",
    title: "Panduan Lengkap Analisis Kompetitor",
    description:
      "Unduh panduan praktis kami untuk memahami lanskap persaingan di industri Anda.",
    icon: BookOpen,
    link: "/path/to/your/pdf.pdf", // Nanti diganti dengan link PDF sebenarnya
  },
];

export function LearnSpace() {
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Learn Space
          </h2>
          <p className="text-lg text-muted-foreground">
            Perkaya pengetahuan bisnismu dengan modul, artikel, dan jadwal
            workshop dari para ahli kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningModules.map((module, index) => (
            <Card key={index} className="flex flex-col bg-background">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {module.type}
                    </p>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{module.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={module.link}>Mulai Belajar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
