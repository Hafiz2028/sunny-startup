import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-secondary">
      <div className="flex flex-col items-center gap-6">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden bg-[#00B18A] flex items-center justify-center shadow-lg shadow-[#00B18A]/40 motion-safe:animate-bounce">
          <Image
            src="/logo.jpg"
            alt="Sunny Startup Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        <p className="text-foreground text-xl font-semibold">
          Memulai Hari dengan Ide Segar...
        </p>
      </div>
    </div>
  );
}
