"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navLinks } from "@/lib/nav-data";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activePath = usePathname();
  const t = useTranslations("Navbar");
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return activePath === href;
    }

    if (href === "/blog") {
      return activePath.startsWith("/blog") || activePath.startsWith("/author");
    }
    return activePath.startsWith(href);
  };
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="border-b border-border/60">
          <nav className="container mx-auto px-6 flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  Sunny Startup
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
              className="hidden md:flex h-full items-center gap-1"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative h-full flex items-center px-4 text-sm font-semibold transition-colors group",
                      isLinkActive(link.href)
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {t(link.labelKey)}
                    {isLinkActive(link.href) && (
                      <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-primary rounded-full"></span>
                    )}
                    {!isLinkActive(link.href) && (
                      <span className="absolute bottom-[-8px] left-1/2 w-0 h-1 bg-primary/80 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 rounded-full"></span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <LanguageSwitcher />
              <Button
                variant="outline"
                className="hidden md:block rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <Link href="/services?tab=consultation">{t("getStarted")}</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </motion.div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-2xl font-medium text-muted-foreground hover:text-primary transition-colors",
                      isLinkActive(link.href) && "text-primary font-semibold"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Button
                  size="lg"
                  className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                  asChild
                >
                  <Link href="/services?tab=consultation">
                    {t("getStarted")}
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
