"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
  glowColor: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    number: "01",
    title: "Connect",
    description: "Integration with your e-commerce platforms in 1-3 days",
    glowColor: "oklch(0.7 0.2 195)",
  },
  {
    id: 2,
    number: "02",
    title: "Stock",
    description: "Ship inventory to our Dubai warehouse - live in 4 hours",
    glowColor: "oklch(0.75 0.2 45)",
  },
  {
    id: 3,
    number: "03",
    title: "Fulfill",
    description: "Orders auto-sync for same-day pick, pack, and ship",
    glowColor: "oklch(0.7 0.2 195)",
  },
  {
    id: 4,
    number: "04",
    title: "Track",
    description: "Real-time visibility through your dedicated dashboard",
    glowColor: "oklch(0.75 0.2 45)",
  },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg text-white mb-4">
            How It Works
          </h2>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Get started in 4 simple steps - from integration to fulfillment in under 2 weeks
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute bg-gradient-to-b from-transparent via-zinc-700/80 to-transparent left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block"
          />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-1/2 px-8">
                  <motion.div
                    className="cursor-pointer relative p-8 rounded-3xl transition-all duration-500 border border-white/[0.08] bg-white/[0.05] backdrop-blur-xl shadow-lg shadow-black/20 hover:-translate-y-2 group overflow-hidden"
                    style={{
                      ...(activeStep === step.id && {
                        borderColor: `${step.glowColor} / 0.3`,
                        boxShadow: `0 0 40px ${step.glowColor} / 0.2`,
                      }),
                    }}
                  >
                    {/* Glow overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${step.glowColor} / 0.15, transparent 70%)`,
                        filter: "blur(20px)",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span
                            className="text-5xl font-bold leading-none font-space-grotesk block mb-4"
                            style={{
                              color: "transparent",
                              WebkitTextStroke: `2px ${step.glowColor}`,
                              textStroke: `2px ${step.glowColor}`,
                              filter: `drop-shadow(0 0 8px ${step.glowColor} / 0.4)`,
                            }}
                          >
                            {step.number}
                          </span>
                          <h3 className="text-heading-2 text-white mb-2">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-body-lg text-white/80 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Line */}
                      <div
                        className="mt-6 w-16 h-1 rounded-full transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to right, ${step.glowColor}, transparent)`,
                          boxShadow: `0 0 8px ${step.glowColor} / 0.5`,
                          opacity: activeStep === step.id ? 1 : 0.5,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{
                      backgroundColor: activeStep === step.id ? step.glowColor : "oklch(0.2 0.05 264)",
                      borderColor: step.glowColor,
                      boxShadow: activeStep === step.id ? `0 0 20px ${step.glowColor} / 0.6` : "none",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

