"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PARTICLE_POSITIONS = [
  { top: "12%", left: "8%" },
  { top: "35%", left: "72%" },
  { top: "68%", left: "25%" },
  { top: "82%", left: "88%" },
  { top: "50%", left: "45%" },
];

const PARTICLE_DELAYS = [0, 0.8, 1.6, 0.4, 1.2];
const PARTICLE_DURATIONS = [3.5, 4, 3, 4.5, 3.8];

interface DecorativeShapesProps {
  className?: string;
  variant?: "hero" | "simple" | "dark";
}

export function DecorativeShapes({ className, variant = "hero" }: DecorativeShapesProps) {
  if (variant === "dark") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <motion.div
          className="absolute -top-24 -right-24 w-80 h-80 md:w-[400px] md:h-[400px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-72 h-72 md:w-[350px] md:h-[350px] bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    );
  }

  if (variant === "simple") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Shape 1: Top Right - Primary Green */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shape 2: Bottom Left - Accent Light Green */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 md:w-[400px] md:h-[400px] bg-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Shape 3: Center/Subtle - Muted */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-muted/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small Floating Particles */}
      {PARTICLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/20"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: PARTICLE_DURATIONS[i],
            repeat: Infinity,
            delay: PARTICLE_DELAYS[i],
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
