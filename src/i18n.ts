import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["id", "en"];

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = locale || "id";

  if (!locales.includes(finalLocale as any)) {
    notFound();
  }

  try {
    const messages = (await import(`@/messages/${finalLocale}.json`)).default;
    return {
      locale: finalLocale!,
      messages,
    };
  } catch (error) {
    notFound();
  }
});
