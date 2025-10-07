"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useTransition } from "react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: string) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const currentFlag = locale === "en" ? "GB" : "ID";

  return (
    <TooltipProvider delayDuration={100}>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 px-3"
                disabled={isPending}
              >
                <ReactCountryFlag
                  countryCode={currentFlag}
                  svg
                  style={{
                    width: "1.25em",
                    height: "1.25em",
                    borderRadius: "2px",
                  }}
                />
                <span className="font-semibold uppercase">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
        </Tooltip>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => handleSwitch("id")}>
            <div className="flex items-center justify-between w-full">
              <span>Indonesia</span>
              {locale === "id" && <Check className="h-4 w-4 ml-2" />}
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSwitch("en")}>
            <div className="flex items-center justify-between w-full">
              <span>English</span>
              {locale === "en" && <Check className="h-4 w-4 ml-2" />}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}
