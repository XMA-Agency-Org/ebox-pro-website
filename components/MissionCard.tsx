"use client";

import { motion } from "framer-motion";

const missionHighlight =
  "Make e-commerce fulfillment seamless, scalable, and stress-free. Through advanced technology, a UAE hub, and a customer-first approach, we go beyond storage and shipping—acting as your team to strengthen your brand with every order.";

export default function MissionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-3xl border border-border bg-white p-8 shadow-md"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
        Our Mission
      </p>
      <p className="text-body-lg text-text-primary leading-relaxed">
        {missionHighlight}
      </p>
    </motion.div>
  );
}
