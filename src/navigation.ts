import { createNavigation } from "next-intl/navigation";

export const locales = ["id", "en"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales });