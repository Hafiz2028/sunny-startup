"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full border border-border/70"
          variant="ghost"
          size="icon"
          disabled={isPending}
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => handleSwitch("id")}>
          <div className="flex items-center justify-between w-full">
            <span>Indonesia</span>
            {locale === "id" && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSwitch("en")}>
          <div className="flex items-center justify-between w-full">
            <span>English</span>
            {locale === "en" && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
