import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";

// Konfigurasi Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Sunny Startup | Rencanakan Bisnis Kulinermu",
  description:
    "Ubah ide bisnis makanan Anda menjadi rencana matang dengan kalkulator bisnis pintar kami. Dari modal hingga profit, semua terhitung presisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
          fredoka.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
