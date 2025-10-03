import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

export async function FinalCTA({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "FinalCTA" });
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-4">
          {t("section_title")}
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-primary-foreground/80 text-lg">
          {t("section_subtitle")}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/services?tab=calculator">{t("button_start")}</Link>
        </Button>
      </div>
    </section>
  );
}
