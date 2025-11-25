"use client";

import type { ExperiencePromise } from "@/content/why-ebox-pro";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";
import { Globe, LineChart, PlugZap, Zap } from "lucide-react";

const iconComponents: Record<ExperiencePromise["icon"], LucideIcon> = {
  zap: Zap,
  plugZap: PlugZap,
  globe: Globe,
  lineChart: LineChart,
};

type ExperiencePromisesSectionProps = {
  promises: ExperiencePromise[];
};

export default function ExperiencePromisesSection({
  promises,
}: ExperiencePromisesSectionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-display-xl text-foreground mb-6">
            Our Commitment to Your Success
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {promises.map((promise) => {
            const Icon = iconComponents[promise.icon];
            return (
              <motion.div
                key={promise.title}
                variants={fadeInUp}
                className="rounded-2xl bg-white shadow-md  px-6 py-5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-400">
                    {Icon ? (
                      <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                    ) : null}
                  </div>
                  <h3 className="text-heading-4 text-foreground">
                    {promise.title}
                  </h3>
                </div>
                <p className="text-body-lg text-muted-foreground">
                  {promise.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
