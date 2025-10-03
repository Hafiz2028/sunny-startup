"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function GoBackButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      {children}
    </Button>
  );
}
