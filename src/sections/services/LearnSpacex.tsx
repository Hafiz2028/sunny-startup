"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, LucideIcon } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { learningModulesData } from "@/lib/learn-space-data";

const iconMap: Record<string, LucideIcon> = {
  article: FileText,
  workshop: Video,
  guide: BookOpen,
};
export function LearnSpace() {
  const t = useTranslations("LearnSpace");
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t("section_title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("section_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningModulesData.map((module, index) => {
            const IconComponent = iconMap[module.iconKey];
            return (
              <Card key={index} className="flex flex-col bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {t(module.typeKey)}
                      </p>
                      <CardTitle className="text-xl">
                        {t(module.titleKey)}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {t(module.descriptionKey)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={module.link}>{t("cta_button")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
