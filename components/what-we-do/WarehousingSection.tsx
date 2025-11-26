"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInRight } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import Link from "next/link";
import {
  Thermometer,
  Shield,
  BarChart3,
  Users,
  Eye,
  Layers,
} from "lucide-react";
import { WarehouseLottie } from "../WarehouseLottie";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-base-900 mb-1">{title}</h4>
        <p className="text-sm text-base-600">{description}</p>
      </div>
    </div>
  );
}

export default function WarehousingSection() {
  const features = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Climate-Controlled Storage",
      description:
        "Temperature and humidity controlled facilities for sensitive products.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance and access control systems.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Advanced WMS",
      description:
        "Real-time inventory visibility with batch and expiry tracking.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-Client Operations",
      description: "Dedicated and shared warehouse options to fit your needs.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Real-Time SKU-Level Visibility",
      description:
        "Complete real-time visibility with automated alerts at the SKU level.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Smart Lot Tracking",
      description:
        "Complete traceability with smart lot tracking capabilities.",
    },
  ];

  return (
    <section id="warehousing" className="section-padding bg-white">
      <div className="container-wide">
        {/* Badge - Centered across full width */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <SectionBadge>Warehousing</SectionBadge>
        </motion.div>

        {/* Heading - Centered below badge */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display-md text-base-900 text-center mb-12"
        >
          Warehousing & Inventory Management
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          {/* Left Column - Features */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-base-600 mb-8"
            >
              Keep your inventory organized and accessible with our
              state-of-the-art fulfillment center based in the UAE.
              Strategically positioned at the heart of the GCC, our facility
              serves as the ideal hub to efficiently distribute your products
              across the entire region.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-center lg:col-span-1"
          >
            {/* Capacity Stats */}
            <div className="w-full max-w-lg scale-90 sm:scale-100 md:scale-110 lg:scale-125">
              <WarehouseLottie />
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-carrot-100" />
          </motion.div>
        </div>

        {/* Button - Centered across full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link href="#contact" className="btn-primary">
            Get Free Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
