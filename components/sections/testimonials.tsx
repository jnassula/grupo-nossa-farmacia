"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { fadeInUp } from "@/lib/animations";
import { content } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % content.testimonials.items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? content.testimonials.items.length - 1 : prev - 1
    );
  };

  return (
    <AnimatedSection id="testimonials" className="bg-background relative overflow-hidden">
      {/* Floating shape outlines — center area */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[30%] w-44 h-44 rounded-3xl border-2 border-primary/25"
          style={{ boxShadow: "0 0 50px rgba(52,168,83,0.25), inset 0 0 30px rgba(52,168,83,0.06)" }}
          animate={{ y: [0, -18, 0], rotate: [0, -10, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[40%] w-32 h-32 rounded-full border-2 border-primary/25"
          style={{ boxShadow: "0 0 44px rgba(52,168,83,0.25)" }}
          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute top-[40%] right-[25%] w-52 h-52 rounded-full border-2 border-primary/20"
          style={{ boxShadow: "0 0 56px rgba(52,168,83,0.2)" }}
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-[30%] left-[50%] w-16 h-16 rounded-full border-2 border-primary/40"
          style={{ boxShadow: "0 0 30px rgba(52,168,83,0.4)" }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            {content.testimonials.title}
          </span>
          <h2 className="mt-4 text-balance">{content.testimonials.heading}</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="border-border/30 overflow-hidden bg-background/40 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  {/* Quote Icon */}
                  <svg 
                    className="w-12 h-12 text-primary/20 mb-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                    "{content.testimonials.items[currentIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Image
                      src={content.testimonials.items[currentIndex].logo}
                      alt={content.testimonials.items[currentIndex].role}
                      width={120}
                      height={48}
                      className="object-contain h-12 w-auto"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {content.testimonials.items[currentIndex].author}
                      </p>
                      <p className="text-muted-foreground">
                        {content.testimonials.items[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {content.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border w-2.5 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para testemunho ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Próximo testemunho"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}