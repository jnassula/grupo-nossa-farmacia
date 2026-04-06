"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { content } from "@/lib/content";
import { DecorativeShapes } from "@/components/shared/decorative-shapes";

const FRAME_COUNT = 40;
const FRAME_PREFIX = "/videos/ezgif-frame-";

function getFramePath(index: number): string {
  const num = String(index + 1).padStart(3, "0");
  return `${FRAME_PREFIX}${num}.jpg`;
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) {
          imagesRef.current = images;
          setImagesLoaded(true);
          // Draw first frame
          drawFrame(0);
        }
      };
      images.push(img);
    }
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    // Match canvas to viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cover fit
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  }, []);

  // Update frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    drawFrame(frameIndex);
  });

  // Resize handler
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

  const handleNavScroll = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Text fades out as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${FRAME_COUNT * 8}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Canvas background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/45" />

        <DecorativeShapes variant="hero" />

        {/* Content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  O maior grupo de farmácias comunitárias de Portugal
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance text-white"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p variants={fadeInUp} className="mb-10 max-w-2xl mx-auto text-white/80">
                {content.hero.subtitle}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => handleNavScroll("#about")}
                  className="min-w-[180px]"
                >
                  {content.hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavScroll("#contact")}
                  className="min-w-[180px] border-2 border-white bg-white text-primary hover:bg-white/90"
                >
                  {content.hero.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
