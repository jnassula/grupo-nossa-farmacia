"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 192;

function getBasePath(): string {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname;
  if (path.startsWith("/grupo-nossa-farmacia")) return "/grupo-nossa-farmacia";
  return "";
}

function getFramePath(basePath: string, index: number): string {
  const num = String(index + 1).padStart(3, "0");
  return `${basePath}/videos/ezgif-frame-${num}.jpg`;
}

export function ScrollVideo({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameRef = useRef(0);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  }, []);

  // Load images
  useEffect(() => {
    const basePath = getBasePath();
    let completed = 0;
    const images: HTMLImageElement[] = [];

    const onComplete = () => {
      completed++;
      if (completed === FRAME_COUNT) {
        imagesRef.current = images;
        setImagesLoaded(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(basePath, i);
      img.onload = onComplete;
      img.onerror = onComplete;
      images.push(img);
    }
  }, []);

  // Scroll-driven frame update using native scroll events
  useEffect(() => {
    if (!imagesLoaded) return;

    // Draw first frame immediately
    drawFrame(0);

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Progress: 0 when container top is at viewport top,
      // 1 when container bottom is at viewport bottom
      const scrollableDistance = containerHeight - viewportHeight;
      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -containerTop / scrollableDistance));
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));

      if (frameIndex !== frameRef.current) {
        frameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [imagesLoaded, containerRef, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="sticky top-0 w-full h-screen -z-10"
      style={{ marginBottom: "-100vh" }}
      aria-hidden="true"
    />
  );
}
