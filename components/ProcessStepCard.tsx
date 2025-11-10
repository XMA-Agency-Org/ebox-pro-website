"use client";

import { motion } from "framer-motion";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessStepCard({
  number,
  title,
  description,
}: ProcessStepCardProps) {
  return (
    <div className="w-[90vw] max-w-[600px] h-[400px] lg:h-[450px] glass-card !backdrop-blur-2xl rounded-3xl p-8 lg:p-12 flex flex-col justify-center border border-white/20">
      {/* Step Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span
          className="text-7xl lg:text-8xl font-bold leading-none text-transparent"
          style={{
            WebkitTextStroke: "2px var(--color-primary-400)",
            textStroke: "2px var(--color-primary-400)",
          }}
        >
          {number}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-2xl lg:text-3xl font-medium text-white">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-white/80 leading-relaxed">
          {description}
        </p>
      </motion.div>

    </div>
  );
}
