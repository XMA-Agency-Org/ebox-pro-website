"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Customer Success First",
    description:
      "Your growth is our success. We measure ourselves by the results we deliver for your business.",
  },
  {
    title: "Transparency & Trust",
    description:
      "No hidden fees, no surprises. Clear communication and honest partnerships.",
  },
  {
    title: "Innovation & Technology",
    description:
      "Leveraging cutting-edge solutions optimize every part of fulfillment.",
  },
  {
    title: "Operational Excellence",
    description: "Precision, speed, and accuracy in everything we do.",
  },
  {
    title: "Flexibility & Scalability",
    description:
      "Solutions that adapt to your business needs, not the other way around",
  },
  {
    title: "Regional Expertise",
    description:
      "Deep understanding of GCC markets, regulations, and consumer expectations.",
  },
];

export default function AboutUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="text-display-md text-text-primary">Our Values</h3>
            <p className="text-body-lg text-text-secondary mt-2">
              Principles that guide every partnership and every package.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4 rounded-2xl border border-border bg-white/90 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-heading-4 text-text-primary mb-1">
                    {value.title}
                  </h4>
                  <p className="text-body-md text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
