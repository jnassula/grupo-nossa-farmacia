"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "slide-left" | "slide-right" | "scale";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  ...props
}: AnimatedSectionProps) {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: -48 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: 48 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.98 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("section-padding", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}