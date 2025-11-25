"use client";

import { motion } from "framer-motion";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import { enablementPillars } from "@/content/why-ebox-pro";

const testimonialImages = [
  "/illustrations/quick.png",
  "/illustrations/transparency.png",
  "/illustrations/scalable.png",
  "/illustrations/accuracy.png",
  "/illustrations/management.png",
  "/illustrations/visibility.png",
  "/illustrations/coverage.png",
  "/illustrations/agreement.png",
];

const enablementTestimonials = enablementPillars.map((pillar, index) => ({
  quote: pillar.description,
  name: pillar.title,
  designation: "Ebox Pro Advantage",
  src:
    testimonialImages[index] ??
    `${testimonialImages[index % testimonialImages.length]}&sig=${index}`,
}));

const enablementFeatureSteps = enablementTestimonials.map(
  (testimonial, index) => ({
    step: `Advantage ${index + 1}`,
    title: testimonial.name,
    content: testimonial.quote,
    image: testimonial.src,
  })
);

export default function WhyEboxPro() {
  return (
    <section className="relative bg-background section-padding">
      {/* Header */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-display-xl text-foreground mb-4">
            What Sets Us Apart
          </h2>
        </motion.div>
      </div>

      {/* Feature Steps Visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <FeatureSteps features={enablementFeatureSteps} showHeader={false} />
      </motion.div>
    </section>
  );
}
