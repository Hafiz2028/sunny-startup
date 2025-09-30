import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface MinimalistCtaProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "spotlight" | "primary" | "default";
  showArrow?: boolean;
}

export const MinimalistCta = React.forwardRef<
  HTMLAnchorElement,
  MinimalistCtaProps
>(
  (
    { className, children, variant = "default", showArrow = false, ...props },
    ref
  ) => {
    const colorClasses = {
      spotlight: "text-spotlight after:bg-spotlight",
      primary: "text-primary after:bg-primary",
      default:
        "text-muted-foreground hover:text-foreground after:bg-foreground",
    };

    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center gap-2 text-lg font-semibold transition-colors duration-300",
          colorClasses[variant],
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
        {/* Garis bawah yang tumbuh saat hover */}
        <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  }
);

MinimalistCta.displayName = "MinimalistCta";
