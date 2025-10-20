"use client";

import { motion } from "framer-motion";
import { IntegrationIllustration } from "@/components/IntegrationIllustration";
import { WarehouseLottie } from "@/components/WarehouseLottie";
import { ComplianceLottie } from "@/components/ComplianceLottie";
import { CardStack } from "@/components/CardStack";
import ServiceCard from "@/components/ServiceCard";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  illustrationPlaceholder: string;
  illustration?: any; // Can be StaticImageData or string path
  customIllustration?: React.ReactNode; // For custom React components
}

interface ServicesProps {
  className?: string;
}

const services: ServiceItem[] = [
  {
    title: "Warehousing & Fulfillment",
    subtitle: "Strategic Dubai Location with Real-Time Operations",
    description:
      "Store your inventory in our state-of-the-art Dubai warehouse facility. We handle everything from receiving and shelving to picking, packing, and shipping. Our strategic location in Dubai Industrial Park ensures quick access to all UAE markets with optimized delivery routes.",
    features: [
      "Climate-controlled storage for sensitive products",
      "Real-time inventory tracking via WMS platform",
      "99%+ picking accuracy with 3-step quality control",
      "Same-day dispatch for orders before 8 PM cutoff",
    ],
    illustrationPlaceholder: "[WAREHOUSE_ILLUSTRATION]",
    customIllustration: <WarehouseLottie />,
  },
  {
    title: "Multi-Platform Integration",
    subtitle: "One Inventory Pool Across All Sales Channels",
    description:
      "Seamlessly connect all your e-commerce platforms to our centralized system. Whether you sell on Amazon, Noon, Shopify, or your own website, manage everything from one unified inventory pool. No more manual updates or stock discrepancies across channels.",
    features: [
      "Official Amazon SPN Partner with priority handling",
      "Approved Noon logistics partner integration",
      "Shopify, WooCommerce, and Magento ready",
      "Real-time sync prevents overselling",
    ],
    illustrationPlaceholder: "[INTEGRATION_ILLUSTRATION]",
    customIllustration: <IntegrationIllustration />,
  },
  {
    title: "UAE Market Entry Support",
    subtitle: "Complete Regulatory Compliance & Product Registration",
    description:
      "Navigate UAE market requirements effortlessly with our comprehensive registration and compliance services. We handle all the paperwork, certifications, and approvals needed to legally sell your products in the UAE market, from customs clearance to ministry-level certifications.",
    features: [
      "Product registration with UAE authorities",
      "Customs documentation and clearance",
      "Ministry certifications and approvals",
      "Ongoing compliance monitoring and updates",
    ],
    illustrationPlaceholder: "[COMPLIANCE_ILLUSTRATION]",
    customIllustration: <ComplianceLottie />,
  },
];

export default function Services({ className }: ServicesProps = {}) {
  const cards = services.map((service) => ({
    id: `service-${service.title.toLowerCase().replace(/\s+/g, "-")}`,
    content: (
      <ServiceCard
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        features={service.features}
        illustration={service.illustration}
        customIllustration={service.customIllustration}
      />
    ),
  }));

  return (
    <section className="relative">
      {/* Header */}
      <div className="container-wide pt-16 lg:pt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-0"
        >
          <h2 className="text-display-lg text-white mb-4">What We Do</h2>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Three core services to scale your e-commerce business in UAE
          </p>
        </motion.div>
      </div>

      {/* Card Stack */}
      <CardStack cards={cards} />
    </section>
  );
}
