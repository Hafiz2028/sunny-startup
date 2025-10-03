"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "@/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function UserCollaboration() {
  const t = useTranslations("UserCollaboration");
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 w-full">
                <div className="bg-secondary aspect-video rounded-2xl flex items-center justify-center p-8 shadow-inner-lg">
                  <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center">
                    <Users className="h-16 w-16 text-primary/80 mb-4" />
                    <p className="font-medium text-primary/80">
                      {t("illustration_text")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom Teks */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
                  {t("section_title")}
                </h2>
                <p className="mb-8 text-muted-foreground text-lg">
                  {t("section_subtitle")}
                </p>
                <Button size="lg" asChild>
                  <Link href="/community">{t("button")}</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
