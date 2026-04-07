"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { TextReveal } from "@/components/shared/text-reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { content } from "@/lib/content";

export function About() {
  return (
    <AnimatedSection id="about" className="bg-black/30 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              {content.about.title}
            </span>
            <TextReveal text={content.about.heading} className="text-white" />
            <p className="text-lg text-white/80">{content.about.body}</p>
            
            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {content.about.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  custom={index * 0.1}
                  className="p-4 rounded-xl bg-background/40 backdrop-blur-xl border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                  <p className="text-sm text-white/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div variants={slideInRight} className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border/30">
              {/* Abstract Pharmacy Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* Cross Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                      <rect x="40" y="10" width="20" height="80" rx="4" fill="currentColor" />
                      <rect x="10" y="40" width="80" height="20" rx="4" fill="currentColor" />
                    </svg>
                  </motion.div>
                  
                  {/* Decorative Circles */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/20 rounded-full"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-4 border border-primary/10 rounded-full"
                    animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/30"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: `${15 + i * 35}%`,
                  }}
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Shadow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/5 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}