import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket } from "lucide-react";

const content = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Visi Kami",
    description:
      "Menjadi platform perencanaan bisnis #1 bagi para foodpreneur di Asia Tenggara, memberdayakan mereka untuk membangun usaha yang berkelanjutan dan profitabel.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Misi Kami",
    description:
      "Menyediakan alat bantu yang mudah diakses, data yang akurat, dan wawasan bisnis yang praktis untuk mengurangi risiko kegagalan bagi para pengusaha kuliner pemula.",
  },
];

export function VisionMission() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A202C] text-center mb-12">
          Membangun Masa Depan Kuliner Indonesia
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.map((item) => (
            <Card
              key={item.title}
              className="bg-white border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center flex flex-col items-center"
            >
              <CardHeader className="flex flex-col items-center p-0 mb-4">
                {item.icon}
                <CardTitle className="font-display text-2xl mt-4 text-[#1A202C] font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
