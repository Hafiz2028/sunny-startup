import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoBackButton } from "@/components/shared/GoBackButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-[#F7FAFC] text-center px-4">
      {/* Anda bisa menambahkan ilustrasi SVG/PNG yang lucu di sini */}
      {/* <img src="/images/not-found-illustration.svg" alt="Ilustrasi Halaman Tidak Ditemukan" className="w-64 h-64 mb-8" /> */}

      <h1 className="font-display text-7xl md:text-9xl font-bold text-primary">
        404
      </h1>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-[#1A202C]">
        Oops! Halaman Hilang.
      </h2>
      <p className="mt-2 text-base text-gray-500 max-w-md">
        Sepertinya halaman yang Anda cari sudah pindah, dihapus, atau mungkin
        tidak pernah ada.
      </p>
      <div className="mt-8 flex gap-4">
        <GoBackButton />
      </div>
    </div>
  );
}
