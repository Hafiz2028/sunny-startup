"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calculator, Users, BookOpen, Handshake } from "lucide-react";

// Mengimpor semua komponen yang dibutuhkan dari path yang benar
import { ServiceCalculator } from "@/sections/services/ServiceCalculator";
import { AppCTA } from "@/sections/services/AppCTA";
import { ConsultationForm } from "@/sections/services/ConsultationForm";
import { LearnSpace } from "@/sections/services/LearnSpace";
import { Collaboration } from "@/sections/services/Collaboration";
import { UserCollaboration } from "@/sections/services/UserCollaboration";
import { Footer } from "@/components/shared/Footer";

// Struktur data untuk tab, kini menggunakan komponen yang diimpor.
const serviceTabs = [
  {
    id: "calculator",
    label: "Kalkulator Bisnis",
    icon: Calculator,
    component: <ServiceCalculator />,
  },
  {
    id: "consultation",
    label: "Konsultasi",
    icon: Users,
    component: <ConsultationForm />,
  },
  {
    id: "learn-space",
    label: "Learn Space",
    icon: BookOpen,
    component: <LearnSpace />,
  },
  {
    id: "collaboration",
    label: "Kolaborasi",
    icon: Handshake,
    component: (
      <div className="space-y-16 md:space-y-24">
        <Collaboration />
        <UserCollaboration />
      </div>
    ),
  },
];

export default function ServicesPage() {
  // State untuk mengelola tab yang aktif
  const [currentTab, setCurrentTab] = useState("calculator");

  // Efek untuk membaca parameter URL saat komponen pertama kali dimuat
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabFromUrl = params.get("tab");
    // Pastikan tab dari URL valid sebelum mengubah state
    if (tabFromUrl && serviceTabs.some((tab) => tab.id === tabFromUrl)) {
      setCurrentTab(tabFromUrl);
    }
  }, []);

  // Fungsi untuk mengubah tab dan memperbarui URL
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tabId);
    // Menggunakan window.history untuk mengubah URL tanpa me-reload halaman
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  // Cari data layanan yang aktif untuk ditampilkan
  const activeService = serviceTabs.find((tab) => tab.id === currentTab);

  return (
    <>
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Layanan Kami
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua alat yang Anda butuhkan untuk merencanakan, menjalankan, dan
            mengembangkan bisnis kuliner Anda.
          </p>
        </div>

        {/* Komponen Navigasi Tab */}
        <div className="flex justify-center border-b border-border mb-12">
          <div className="flex flex-wrap -mb-px space-x-4 md:space-x-8">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-1 py-4 border-b-2 text-base font-semibold transition-colors",
                  currentTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30"
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          {activeService ? (
            <div>{activeService.component}</div>
          ) : (
            // Fallback jika tab tidak ditemukan
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">
                Layanan tidak ditemukan
              </h2>
              <p className="text-muted-foreground mt-2">
                Silakan pilih salah satu layanan di atas.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <AppCTA />
      </div>
      <Footer />
    </>
  );
}
