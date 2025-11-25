"use client";

import { motion } from "framer-motion";

const visionStatement =
  "To be the most trusted fulfillment partner for e-commerce businesses expanding across the Middle East—enabling brands to compete globally while thinking locally.";

export default function VisionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-3xl border border-border bg-white p-8 shadow-md"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
        Our Vision
      </p>
      <p className="text-body-lg text-text-primary leading-relaxed">
        {visionStatement}
      </p>
    </motion.div>
  );
}
