"use client";

import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import { Link } from "@/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function Collaboration() {
  const t = useTranslations("Collaboration");
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 w-full lg:order-last">
                <div className="bg-secondary aspect-video rounded-2xl flex items-center justify-center p-8 shadow-inner-lg">
                  <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center">
                    <Handshake className="h-16 w-16 text-primary/80 mb-4" />
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
                <p className="mb-6 text-muted-foreground text-lg">
                  {t("section_subtitle")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 text-left ml-4 space-y-2">
                  <li>{t("list1")}</li>
                  <li>{t("list2")}</li>
                  <li>{t("list3")}</li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="/about">{t("button")}</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
