"use client";

import { motion } from "framer-motion";
import { ServiceFeature } from "@/lib/services-data";
import SectionBadge from "@/components/SectionBadge";

interface ServiceFeaturesGridProps {
  features: ServiceFeature[];
  title?: string;
  badge?: string;
  columns?: 2 | 3 | 4;
}

export default function ServiceFeaturesGrid({
  features,
  title = "Additional Capabilities",
  badge = "More Features",
  columns = 3,
}: ServiceFeaturesGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="text-display-md text-foreground">{title}</h2>
        </motion.div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border h-full bg-white shadow-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
