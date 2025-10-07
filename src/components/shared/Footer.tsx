"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { footerLinks } from "@/lib/footer-links";

export function Footer() {
  const tFooter = useTranslations("Footer");
  const tNavbar = useTranslations("Navbar");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-foreground text-background/80"
    >
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Sunny Startup
            </h3>
            <p className="mb-4">{tFooter("address")}</p>
            <div className="aspect-video w-full bg-gray-700 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.283991211428!2d100.35415307586529!3d-0.925580035352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8d757d5a0f7%3A0x2d177395e5b3b7c!2sJl.%20Khatib%20Sulaiman%2C%20Kota%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1727961204217!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              {tFooter("explore")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.labelKey.startsWith("service_")
                      ? tFooter(link.labelKey as any)
                      : tNavbar(link.labelKey as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              {tFooter("contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hello@sunnystartup.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-background mb-4">
              {tFooter("follow")}
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
            © {new Date().getFullYear()} {tFooter("copyright")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
