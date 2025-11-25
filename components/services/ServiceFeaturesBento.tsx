"use client";

import { motion } from "framer-motion";
import { ServiceFeature } from "@/lib/services-data";
import SectionBadge from "@/components/SectionBadge";
import { FeatureCard } from "@/components/feature-card";

interface ServiceFeaturesGridProps {
  features: ServiceFeature[];
  title?: string;
  badge?: string;
}

export default function ServiceFeaturesBento({
  features,
  title = "What We Offer",
  badge = "Features",
}: ServiceFeaturesGridProps) {
  // Ensure symmetrical layout: use 6 features for 3x2 grid, or 4 for 2x2
  const targetCount = features.length >= 6 ? 6 : 4;
  const displayFeatures = features.slice(0, targetCount);

  return (
    <section className="section-padding bg-background">
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
          <h2 className="text-display-lg text-foreground">{title}</h2>
        </motion.div>

        {/* Symmetrical Grid */}
        <div
          className={`grid grid-cols-1 gap-4 lg:gap-6 ${
            targetCount === 6
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2"
          }`}
        >
          {displayFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <FeatureCard
                feature={{
                  title: feature.title,
                  icon: feature.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                  description: feature.description,
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
