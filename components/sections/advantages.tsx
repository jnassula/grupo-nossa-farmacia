"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { content } from "@/lib/content";
import { TextReveal } from "@/components/shared/text-reveal";
import { DecorativeShapes } from "@/components/shared/decorative-shapes";
import * as Icons from "lucide-react";

export function Advantages() {
  const getIcon = (name: string) => {
    const IconComponent = Icons[name as keyof typeof Icons] as Icons.LucideIcon | undefined;
    return IconComponent ? <IconComponent className="w-8 h-8 text-primary" /> : null;
  };

  return (
    <AnimatedSection id="advantages" className="text-white relative">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            {content.advantages.title}
          </span>
          <div className="mt-4"><TextReveal text={content.advantages.heading} className="text-white" /></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.advantages.items.map((item, index) => (
            <motion.div key={item.title} variants={fadeInUp} custom={index * 0.1}>
              <Card className="h-full group hover:-translate-y-1 transition-transform duration-300 bg-background/40 backdrop-blur-xl border-border/30 hover:border-primary/30">
                <CardHeader>
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getIcon(item.icon)}
                  </motion.div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}