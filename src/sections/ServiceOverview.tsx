import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Calculator, BarChart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    title: "Validasi Ide Bisnis",
    link: "/services?tab=consultation",
    description:
      "Kami menganalisis konsep Anda terhadap data pasar untuk melihat apakah ia memiliki bahan-bahan kesuksesan.",
  },
  {
    icon: Calculator,
    title: "Perencanaan Finansial",
    link: "/services?tab=calculator",
    description:
      "Dari biaya bahan baku hingga strategi harga, kami membantu Anda membangun fondasi finansial yang kokoh.",
  },
  {
    icon: BarChart,
    title: "Insight Pasar",
    link: "/services?tab=learn-space",
    description:
      "Dapatkan laporan terperinci tentang target audiens, pesaing, dan peluang pertumbuhan Anda.",
  },
];

export function ServiceOverview() {
  return (
    <section className="w-full py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
          Bagaimana Kami Membantumu
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-muted-foreground text-lg">
          Kami menyediakan dukungan lengkap untuk mengubah impian kulinermu
          menjadi kenyataan yang lezat.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader>
                <div className="mx-auto w-fit bg-secondary p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="font-semibold text-primary hover:underline"
                >
                  Pelajari Lebih Lanjut →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
