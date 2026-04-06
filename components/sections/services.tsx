"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { DecorativeShapes } from "@/components/shared/decorative-shapes";
import { TextReveal } from "@/components/shared/text-reveal";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = content.services.items[activeIndex];

  const getIcon = (name: string) => {
    return (Icons[name as keyof typeof Icons] as LucideIcon) || Icons.CircleDot;
  };

  return (
    <AnimatedSection id="services" className="bg-foreground/90 text-background relative backdrop-blur-md" style={{ background: "rgba(0,0,0,0.85)" }}>
      <DecorativeShapes variant="dark" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            {content.services.title}
          </span>
          <div className="mt-4">
            <TextReveal text={content.services.heading} className="text-background" />
          </div>
          <p className="mt-4 text-background/70">{content.services.subtitle}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Service Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
            {content.services.items.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeIndex === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background/10 text-background/70 hover:bg-background/20 hover:text-background"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
          </motion.div>

          {/* Active Service Detail */}
          <motion.div variants={fadeInUp}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                {/* Left: Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {(() => {
                        const Icon = getIcon(activeService.icon);
                        return (
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-background">
                          {activeService.name}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {activeService.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-background/70 text-base md:text-lg leading-relaxed">
                      {activeService.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeService.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 text-background/80 text-sm"
                      >
                        <Icons.Check className="w-3.5 h-3.5 text-primary" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative flex items-center justify-center">
                  <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden border border-background/10">
                    <Image
                      src={activeService.image}
                      alt={activeService.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
