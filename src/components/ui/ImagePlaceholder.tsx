import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  icon: LucideIcon;
  className?: string;
}

export function ImagePlaceholder({
  icon: Icon,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden",
        "flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20",
        "border border-dashed border-primary/20",
        className
      )}
    >
      <Icon className="h-16 w-16 text-primary/40" strokeWidth={1.5} />
    </div>
  );
}
