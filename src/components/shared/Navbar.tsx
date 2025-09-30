"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link dari Next.js

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Tentang Kami" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return activePath === href;
    }
    return activePath.startsWith(href);
  };

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="border-b border-border/60">
          <nav className="container mx-auto px-6 flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                Sunny Startup
              </span>
            </Link>

            <div className="hidden md:flex h-full items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative h-full flex items-center px-4 text-sm font-semibold transition-colors group",
                    isLinkActive(link.href)
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isLinkActive(link.href) && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-1 bg-primary"></span>
                  )}
                  {!isLinkActive(link.href) && (
                    <span className="absolute bottom-[-1px] left-1/2 w-0 h-1 bg-primary/80 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* --- PERBAIKAN: Tombol Desktop diubah menjadi gaya Outline --- */}
              <Button
                variant="outline"
                className="hidden md:block rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <Link href="/services?tab=consultation">Get Started</Link>
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
            </div>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-medium text-muted-foreground hover:text-primary transition-colors",
                  isLinkActive(link.href) && "text-primary font-semibold"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* --- PERBAIKAN: Tombol Mobile diubah menjadi gaya Solid Primer --- */}
            <Button
              size="lg"
              className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <Link href="/services?tab=consultation">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
