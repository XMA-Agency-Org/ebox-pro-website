"use client";

import { motion } from "framer-motion";
import { TbRocket } from "react-icons/tb";
import Threads from "./Threads";
import { FeatureCard } from "@/components/feature-card";
import { CheckCircle, CheckIcon, ShieldCheck } from "lucide-react";

const usps = [
  {
    title: "Amazon SPN Partner",
    description: "Official Service Provider Network partner with exclusive rates and priority handling",
    icon: ShieldCheck
  },
  {
    title: "Same-Day Delivery",
    description: "Dubai & Sharjah same-day, all 7 Emirates next-day delivery guaranteed",
    icon: TbRocket,
  },
  {
    title: "99%+ Accuracy",
    description: "3-step quality control process ensures precision in every shipment",
    icon: CheckCircle
  }
];

export default function KeyUSPs() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Threads Background */}
      <div className="absolute inset-0 opacity-10">
        <Threads
          color={[0.15, 0.23, 0.54]}
          amplitude={2}
          distance={0.5}
          enableMouseInteraction={false}
          speed={0.3}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* USPs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                feature={{
                  title: usp.title,
                  icon: usp.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                  description: usp.description,
                }}
                className="rounded-2xl border border-border h-full bg-white shadow-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
