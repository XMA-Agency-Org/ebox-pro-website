"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function AboutHighlights() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.7 0.1 250) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-display-xl lg:text-display-2xl text-white mt-4 max-w-4xl"
          >
            Empowering E-commerce Success Across the{" "}
            <span className="text-carrot-400">UAE</span> &{" "}
            <span className="text-carrot-400">GCC</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-body-xl text-white/80 mt-6 max-w-3xl"
          >
            Ebox Pro isn't just another fulfillment center—we're your strategic
            growth partner in the Gulf region.{" "}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link href="#contact" className="btn-primary text-center px-8 py-4">
              Discover More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
