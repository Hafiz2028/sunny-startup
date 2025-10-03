import { getTranslations } from "next-intl/server";
import { GoBackButton } from "@/components/shared/GoBackButton";
import { cookies } from "next/headers";

export default async function NotFoundPage() {
  const locale = cookies().get("NEXT_LOCALE")?.value || "id";
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/30 text-center px-4">
      <h1 className="font-display text-7xl md:text-9xl font-bold text-primary">
        404
      </h1>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-foreground">
        {t("title")}
      </h2>
      <p className="mt-2 text-base text-muted-foreground max-w-md">
        {t("description")}
      </p>
      <div className="mt-8 flex gap-4">
        <GoBackButton>{t("back_button")}</GoBackButton>
      </div>
    </div>
  );
}
