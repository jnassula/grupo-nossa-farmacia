"use client";

import { useRef } from "react";
import { ScrollVideo } from "@/components/shared/scroll-video";

export function VideoSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null!!);

  return (
    <div ref={containerRef} className="relative">
      <ScrollVideo containerRef={containerRef} />
      <div className="absolute inset-0 bg-black/30 z-[1]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
