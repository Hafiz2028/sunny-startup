import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Kolom 1: Brand & Alamat */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Sunny Startup
            </h3>
            <p className="mb-4">
              Jl. Khatib Sulaiman, Alai Parak Kopi, Padang Utara, Kota Padang,
              Sumatera Barat
            </p>

            {/* === BAGIAN GOOGLE MAPS EMBED === */}
            <div className="aspect-video w-full bg-gray-700 rounded-md overflow-hidden">
              {/* Ganti nilai `src` di bawah ini dengan kode embed dari Google Maps untuk mengubah lokasi.
               */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2989046639614!2d100.35969082472393!3d-0.924534899066521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8d98d2319f3%3A0xebfa8823349070d3!2sMasjid%20Raya%20Syekh%20Ahmad%20Khatib%20Al-Minangkabawi!5e0!3m2!1sid!2sid!4v1759143161712!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              Jelajahi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/services?tab=calculator"
                  className="hover:text-primary transition-colors"
                >
                  Kalkulator Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/services?tab=consultation"
                  className="hover:text-primary transition-colors"
                >
                  Konsultasi Bisnis
                </Link>
              </li>
              <li>
                <Link
                  href="/services?tab=learn-space"
                  className="hover:text-primary transition-colors"
                >
                  Learn Space
                </Link>
              </li>
              <li>
                <Link
                  href="/services?tab=collaboration"
                  className="hover:text-primary transition-colors"
                >
                  Kolaborasi Antar Usaha
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />{" "}
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />{" "}
                <span>hello@sunnystartup.com</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              Ikuti Kami
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Sunny Startup. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
