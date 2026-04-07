"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { content } from "@/lib/content";

export function Hero() {
  const handleNavScroll = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100dvh] flex items-center justify-center">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => handleNavScroll("#about")}
              className="w-full sm:w-auto sm:min-w-[180px]"
            >
              {content.hero.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavScroll("#contact")}
              className="w-full sm:w-auto sm:min-w-[180px] border-2 border-white bg-white text-primary hover:bg-white/90"
            >
              {content.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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
