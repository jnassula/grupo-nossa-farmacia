"use client";

import { useRef } from "react";
import { ScrollVideo } from "@/components/shared/scroll-video";

export function VideoSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null!!);

  return (
    <div ref={containerRef} className="relative">
      <ScrollVideo containerRef={containerRef} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
