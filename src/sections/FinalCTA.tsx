import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-4">
          Siap Wujudkan Usaha Impianmu?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-primary-foreground/80 text-lg">
          Perencanaan yang matang adalah kunci. Ayo mulai langkah pertamamu
          sekarang, gratis!
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/services?tab=calculator">Mulai Rencanakan Sekarang</Link>
        </Button>
      </div>
    </section>
  );
}
