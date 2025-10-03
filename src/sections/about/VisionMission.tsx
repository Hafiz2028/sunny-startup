import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket, LucideIcon } from "lucide-react";

const contentData = [
  {
    icon: Lightbulb,
    titleKey: "vision_title",
    descriptionKey: "vision_desc",
  },
  {
    icon: Rocket,
    titleKey: "mission_title",
    descriptionKey: "mission_desc",
  },
];

export async function VisionMission({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return (
    <section className="w-full py-20 lg:py-28 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A202C] text-center mb-12">
          {t("vision_mission_title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contentData.map((item) => (
            <Card
              key={item.titleKey}
              className="bg-white border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center flex flex-col items-center"
            >
              <CardHeader className="flex flex-col items-center p-0 mb-4">
                <item.icon className="h-10 w-10 text-primary" />
                <CardTitle className="font-display text-2xl mt-4 text-[#1A202C] font-semibold">
                  {t(item.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-base">
                  {t(item.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
