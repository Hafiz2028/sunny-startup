import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  title: "Sunny Startup",
  description: "Rencanakan bisnis kulinermu dari ide hingga jadi cuan!",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          poppins.variable,
          fredoka.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
