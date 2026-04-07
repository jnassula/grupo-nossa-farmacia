"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 40;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function getFramePath(index: number): string {
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  }, []);

  useEffect(() => {
    let completed = 0;
    const images: HTMLImageElement[] = [];

    const onComplete = () => {
      completed++;
      if (completed === FRAME_COUNT) {
        imagesRef.current = images;
        setImagesLoaded(true);
        drawFrame(0);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = onComplete;
      img.onerror = onComplete;
      images.push(img);
    }
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    drawFrame(frameIndex);
  });

  useEffect(() => {
    const handleResize = () => {
      if (!imagesLoaded) return;
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );
      drawFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, scrollYProgress, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="sticky top-0 w-full h-screen -z-10"
      style={{ marginBottom: "-100vh" }}
      aria-hidden="true"
    />
  );
}
