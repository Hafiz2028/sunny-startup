export interface NavLink {
  href: string;
  labelKey: string; // Menghubungkan ke kunci di namespace Navbar
}

// Ini adalah satu-satunya sumber kebenaran untuk link navigasi utama Anda
export const navLinks: NavLink[] = [
  { href: "/", labelKey: "home" },
  { href: "/services", labelKey: "services" },
  { href: "/blog", labelKey: "blog" },
  { href: "/about", labelKey: "about" },
];
