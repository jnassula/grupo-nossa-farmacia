"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { content } from "@/lib/content";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <AnimatedSection id="process" className="bg-background/85 backdrop-blur-md">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            {content.process.title}
          </span>
          <h2 className="mt-4 text-balance">{content.process.heading}</h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block"
            style={{ scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]), originY: 0 }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-20"
          >
            {content.process.steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number */}
                <div className="relative flex items-center gap-6 md:gap-0 md:w-1/2">
                  <motion.div
                    className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl md:text-2xl shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Mobile Line */}
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border md:hidden" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-20" : "md:pr-20 md:text-right"}`}>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}