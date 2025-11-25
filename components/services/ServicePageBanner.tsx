"use client";

import { motion } from "framer-motion";

export default function ServicePageBanner() {
  return (
    <div className="bg-secondary py-4 lg:py-5">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/90 text-sm lg:text-base font-medium">
            Complete E-Commerce Fulfillment Solutions for the GCC Market
          </p>
        </motion.div>
      </div>
    </div>
  );
}
