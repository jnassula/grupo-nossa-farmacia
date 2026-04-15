"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TextReveal } from "@/components/shared/text-reveal";
import { Counter } from "@/components/ui/counter";
import { content } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Coverage() {
  const totalCount = content.coverage.regions.reduce((sum, r) => sum + r.count, 0);

  return (
    <AnimatedSection id="coverage" className="bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Animated grid of dots */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-coverage" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-coverage)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
            <Sparkles className="w-4 h-4" />
            {content.coverage.title}
          </span>
          <div className="mt-4">
            <TextReveal text={content.coverage.heading} />
          </div>
          <p className="mt-6 text-lg text-muted-foreground">{content.coverage.subtitle}</p>
        </motion.div>

        {/* Regional grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16"
        >
          {content.coverage.regions.map((region, index) => (
            <motion.div
              key={region.name}
              variants={fadeInUp}
              custom={index * 0.08}
              className={cn(
                "relative group p-6 rounded-2xl bg-gradient-to-br border border-border/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                region.gradient
              )}
            >
              {/* Pulsing ring behind pin */}
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="relative">
                  <motion.span
                    className={cn("absolute inset-0 rounded-full", region.pinColor.replace("text-", "bg-"), "opacity-20")}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.25, ease: "easeOut" }}
                  />
                  <motion.div
                    className="relative w-10 h-10 rounded-full bg-background/80 border border-border/50 flex items-center justify-center shadow-sm"
                    whileHover={{ rotate: [-5, 5, 0], transition: { duration: 0.4 } }}
                  >
                    <MapPin className={cn("w-5 h-5", region.pinColor)} />
                  </motion.div>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                    <Counter from={0} to={region.count} duration={1500} />
                  </div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {region.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total summary card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 text-center overflow-hidden">
            {/* Radiating background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <Counter from={0} to={totalCount} duration={2500} suffix="+" />
              </div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">
                {content.coverage.totalLabel}
              </div>
              <p className="mt-6 text-sm text-muted-foreground/80 italic max-w-md mx-auto">
                {content.coverage.footnote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
