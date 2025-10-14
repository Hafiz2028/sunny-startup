"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceVisualProps {
  type: "video" | "mockup";
  src: string;
}

export function ServiceVisual({ type, src }: ServiceVisualProps) {
  if (type === "video") {
    return (
      <div className="relative w-full max-w-lg mx-auto aspect-video rounded-2xl shadow-lg shadow-primary overflow-hidden border">
        <iframe
          src={`https://www.youtube.com/embed/${src}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[18rem] mx-auto aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-lg shadow-primary">
      <div className="relative h-full w-full border-gray-800 bg-gray-800 border-[8px]">
        <div className="h-[1.5rem] w-[7rem] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[3rem] w-[0.2rem] bg-gray-800 absolute -left-[10px] top-[7rem] rounded-l-lg"></div>
        <div className="h-[3rem] w-[0.2rem] bg-gray-800 absolute -left-[10px] top-[10rem] rounded-l-lg"></div>
        <div className="h-[4rem] w-[0.2rem] bg-gray-800 absolute -right-[10px] top-[8rem] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
          <Image
            src={src}
            className="w-full h-full object-cover"
            alt="Service Mockup"
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
}
