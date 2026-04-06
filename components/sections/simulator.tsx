"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Megaphone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { DecorativeShapes } from "@/components/shared/decorative-shapes";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { content } from "@/lib/content";

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

export function Simulator() {
  const [revenue, setRevenue] = useState(100000);
  const [employees, setEmployees] = useState(8);
  const [marketing, setMarketing] = useState(1500);

  const savings = useMemo(() => {
    const purchases = revenue * 0.04;
    const mkt = marketing * 0.6;
    const training = employees * 150;
    const totalMonthly = purchases + mkt + training;
    return {
      purchases,
      marketing: mkt,
      training,
      total: totalMonthly * 12,
    };
  }, [revenue, employees, marketing]);

  const handleScroll = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <AnimatedSection id="simulator" className="bg-secondary/60 backdrop-blur-md relative">
      <DecorativeShapes variant="simple" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            {content.simulator.title}
          </span>
          <h2 className="mt-4 text-balance">{content.simulator.heading}</h2>
          <p className="mt-4">{content.simulator.subtitle}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-6">
            {/* Left: Sliders */}
            <Card className="p-6 md:p-8 border-border/50">
              <h3 className="text-lg font-semibold mb-6">Dados da sua farmácia</h3>
              <div className="space-y-6">
                <SliderField
                  label={content.simulator.fields.revenue}
                  value={revenue}
                  onChange={setRevenue}
                  min={30000}
                  max={300000}
                  step={5000}
                  format={formatCurrency}
                />
                <SliderField
                  label={content.simulator.fields.employees}
                  value={employees}
                  onChange={setEmployees}
                  min={2}
                  max={20}
                  step={1}
                  format={(v) => String(v)}
                />
                <SliderField
                  label={content.simulator.fields.marketing}
                  value={marketing}
                  onChange={setMarketing}
                  min={0}
                  max={5000}
                  step={100}
                  format={formatCurrency}
                />
              </div>
            </Card>

            {/* Right: Results */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                <ResultCard
                  icon={<TrendingUp className="w-5 h-5 text-primary" />}
                  label={content.simulator.results.purchases}
                  value={formatCurrency(savings.purchases)}
                  suffix="/mês"
                />
                <ResultCard
                  icon={<Megaphone className="w-5 h-5 text-primary" />}
                  label={content.simulator.results.marketing}
                  value={formatCurrency(savings.marketing)}
                  suffix="/mês"
                />
                <ResultCard
                  icon={<GraduationCap className="w-5 h-5 text-primary" />}
                  label={content.simulator.results.training}
                  value={formatCurrency(savings.training)}
                  suffix="/mês"
                />
              </div>

              {/* Total */}
              <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center flex-1 flex flex-col items-center justify-center">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {content.simulator.results.total}
                </p>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {formatCurrency(savings.total)}
                </p>
              </div>

              {/* CTA + Disclaimer */}
              <div className="text-center space-y-3">
                <Button size="lg" onClick={handleScroll} className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  {content.simulator.cta}
                </Button>
                <p className="text-xs text-muted-foreground">
                  {content.simulator.disclaimer}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  isCurrency?: boolean;
}) {
  const percentage = ((value - min) / (max - min)) * 100;
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditStart = () => {
    setEditValue(String(value));
    setEditing(true);
    setTimeout(() => inputRef.current?.select(), 0);
  };

  const handleEditConfirm = () => {
    const parsed = Number(editValue.replace(/[^\d]/g, ""));
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed));
      const stepped = Math.round(clamped / step) * step;
      onChange(stepped);
    }
    setEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-medium text-foreground">{label}</label>
        {editing ? (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEditConfirm}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleEditConfirm();
              if (e.key === "Escape") setEditing(false);
            }}
            className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-28 text-center outline-none shadow-[0_0_0_3px_rgba(52,168,83,0.25)]"
          />
        ) : (
          <button
            onClick={handleEditStart}
            className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors cursor-text"
          >
            {format(value)}
          </button>
        )}
      </div>
      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute left-0 right-0 h-2 rounded-full bg-border">
          {/* Filled portion */}
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-primary"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-primary
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-125
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-primary
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-track]:bg-transparent
            [&::-webkit-slider-runnable-track]:bg-transparent"
        />
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  label,
  value,
  suffix,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix: string;
}) {
  return (
    <div className="rounded-xl bg-card border border-border/50 p-4 text-center">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
        {icon}
      </div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg font-bold text-foreground">
        {value}
        <span className="text-xs font-normal text-muted-foreground">{suffix}</span>
      </p>
    </div>
  );
}
