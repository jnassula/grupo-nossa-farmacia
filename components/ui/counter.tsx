"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ from, to, duration = 2000, suffix = "", className }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 25, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCount(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count.toLocaleString("pt-PT")}{suffix}
    </span>
  );
}