"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Struktur data disederhanakan. Dropdown Layanan tidak lagi diperlukan.
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
    // Tentukan path aktif di sisi klien untuk memastikan akurasi
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  // Logika untuk mendeteksi link aktif
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return activePath === href;
    }
    // Menggunakan startsWith agar '/services' juga aktif saat URL-nya '/services?tab=calculator'
    return activePath.startsWith(href);
  };

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="border-b border-border/60">
          <nav className="container mx-auto px-6 flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                Sunny Startup
              </span>
            </a>

            <div className="hidden md:flex h-full items-center gap-1">
              {navLinks.map((link) => (
                <a
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
                  {/* Garis bawah untuk link aktif */}
                  {isLinkActive(link.href) && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-1 bg-primary"></span>
                  )}
                  {/* Garis bawah yang tumbuh saat hover (hanya jika tidak aktif) */}
                  {!isLinkActive(link.href) && (
                    <span className="absolute bottom-[-1px] left-1/2 w-0 h-1 bg-primary/80 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button className="hidden md:block bg-spotlight text-spotlight-foreground hover:bg-spotlight/90">
                Get Started
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

      {/* Overlay Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-medium text-muted-foreground hover:text-primary transition-colors",
                  isLinkActive(link.href) && "text-primary font-semibold"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-4 bg-spotlight text-spotlight-foreground hover:bg-spotlight/90"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
