import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Calculator, BarChart, LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import { serviceData } from "@/lib/service-overview-data";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  calculator: Calculator,
  barchart: BarChart,
};

export async function ServiceOverview({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "ServiceOverview" });
  return (
    <section className="w-full py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
          {t("section_title")}
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-muted-foreground text-lg">
          {t("section_subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => {
            const IconComponent = iconMap[service.iconKey];
            return (
              <Card
                key={index}
                className="bg-background shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-fit bg-secondary p-4 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t(service.descriptionKey)}
                  </p>
                  <Link
                    href={service.link}
                    className="font-semibold text-primary hover:underline"
                  >
                    {t("learn_more")}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
