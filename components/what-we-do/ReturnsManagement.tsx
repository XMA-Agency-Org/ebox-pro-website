"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import { PackageCheck, Search, RotateCcw, MessageSquare } from "lucide-react";

const returnSteps = [
  {
    icon: PackageCheck,
    title: "Receive Returns",
    description:
      "We handle the entire returns workflow from the moment items arrive at our facility.",
  },
  {
    icon: Search,
    title: "Quality Inspection",
    description:
      "Thorough inspection of returned items to assess condition and determine next steps.",
  },
  {
    icon: RotateCcw,
    title: "Restocking",
    description:
      "Quickly process and restock items back into inventory when applicable.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Keep customers informed throughout the returns process with automated updates.",
  },
];

export default function ReturnsManagement() {
  return (
    <section id="returns" className="section-padding bg-base-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={slideInLeft}
              className="text-center lg:text-left"
            >
              <SectionBadge>Returns</SectionBadge>
            </motion.div>

            <motion.h2
              variants={slideInLeft}
              className="text-display-md text-base-900 mt-4"
            >
              Returns Management
            </motion.h2>

            <motion.p
              variants={slideInLeft}
              className="text-body-lg text-base-600 mt-4"
            >
              Delight your customers with hassle-free returns processing. We
              handle the entire returns workflow—from receiving returned items
              to quality inspection, restocking, and customer communication—so
              you can turn potential negatives into positive customer
              experiences.
            </motion.p>
          </motion.div>

          {/* Right Column - Return Steps */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-carrot-50 flex items-center justify-center text-carrot-500 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-base-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
