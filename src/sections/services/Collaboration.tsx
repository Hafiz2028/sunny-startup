import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Collaboration() {
  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 w-full lg:order-last">
                <div className="bg-secondary aspect-video rounded-2xl flex items-center justify-center p-8 shadow-inner-lg">
                  <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center text-center">
                    <Handshake className="h-16 w-16 text-primary/80 mb-4" />
                    <p className="font-medium text-primary/80">
                      Ilustrasi 3D yang menunjukkan kemitraan dan kolaborasi
                      antar UMKM.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom Teks */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
                  Bangun Jaringan & Berkolaborasi
                </h2>
                <p className="mb-6 text-muted-foreground text-lg">
                  Kami percaya pertumbuhan terbaik datang dari kerjasama.
                  Temukan peluang untuk berkolaborasi dengan sesama foodpreneur
                  atau menjadi partner resmi Sunny Startup.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-8 text-left ml-4 space-y-2">
                  <li>Kemitraan Supplier</li>
                  <li>Acara & Workshop Bersama</li>
                  <li>Program Co-Branding</li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="/contact">Jadi Partner Kami</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
