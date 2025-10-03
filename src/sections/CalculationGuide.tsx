import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { PlayCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function CalculationGuide({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "CalculationGuide" });
  return (
    <section className="w-full py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full lg:order-last">
            <div className="bg-secondary aspect-video rounded-2xl flex items-center justify-center p-8 shadow-inner-lg">
              <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-6xl mb-4">💻</span>
                <p className="font-medium text-primary/80">
                  {t("mockup_desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
              {t("section_title")}
            </h2>
            <p className="mb-8 text-muted-foreground text-lg">
              {t("section_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/services?tab=calculator">
                  {t("button_calculator")}
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <PlayCircle className="mr-2 h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  {t("button_tutorial")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
