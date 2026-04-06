"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { AnimatedSection } from "@/components/shared/animated-section";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { content } from "@/lib/content";
import { DecorativeShapes } from "@/components/shared/decorative-shapes";
import { TextReveal } from "@/components/shared/text-reveal";

export function Numbers() {
  return (
    <AnimatedSection
      id="numbers"
      className="bg-foreground text-background relative"
      style={{ background: "var(--foreground)" }}
    >
      <DecorativeShapes variant="dark" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-foreground/80 font-semibold tracking-wide uppercase text-sm">
            {content.numbers.title}
          </span>
          <div className="mt-4"><TextReveal text="Resultados que falam por si." className="text-background" /></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {content.numbers.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              custom={index * 0.15}
              className="text-center"
            >
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Counter
                  from={0}
                  to={stat.value}
                  suffix={stat.suffix}
                  className="text-background"
                />
              </motion.div>
              <p className="text-background/80 text-base md:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="max-w-2xl mx-auto mt-16 pt-8 border-t border-background/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ originX: 0.5 }}
        >
          <p className="text-center text-background/70 italic">
            "Unir forças para transformar o setor farmacêutico em Portugal."
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}