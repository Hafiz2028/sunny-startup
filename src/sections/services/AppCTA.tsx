import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function AppCTA() {
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h2 className="font-display text-4xl font-semibold text-primary-foreground mb-4">
          Bawa Rencana Bisnismu Kemanapun
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-primary-foreground/80 text-lg">
          Unduh aplikasi mobile Sunny Startup untuk mengakses semua fitur dan
          data Anda di mana saja, kapan saja.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="https://www.apple.com/id/app-store/"
              className="flex items-center gap-3"
            >
              <FaApple size={28} />
              <div className="text-left">
                <p className="text-xs -mb-1">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="https://play.google.com/store/games?device=windows"
              className="flex items-center gap-3"
            >
              <FaGooglePlay size={28} />
              <div className="text-left">
                <p className="text-xs -mb-1">GET IT ON</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
