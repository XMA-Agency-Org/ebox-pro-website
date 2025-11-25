export type ProofPoint = {
  value: string;
  label: string;
};

export type EnablementPillar = {
  title: string;
  description: string;
};

export type ExperiencePromise = {
  title: string;
  body: string;
  icon: ExperiencePromiseIcon;
};

export type ExperiencePromiseIcon = "zap" | "plugZap" | "globe" | "lineChart";

export type ServiceCoverage = {
  title: string;
  description: string;
};

export const heroHighlights: string[] = [];

export const proofPoints: ProofPoint[] = [
  { value: "99.9%", label: "Order accuracy rate" },
  { value: "Transparent", label: "No hidden fees or setup costs" },
  { value: "Flexible", label: "Month-to-month agreements" },
  { value: "Complete", label: "End-to-end fulfillment solutions" },
];

export const enablementPillars: EnablementPillar[] = [
  {
    title: "Quick Market Entry",
    description:
      "Launch or expand your e-commerce business across the GCC without the substantial investment and time typically required for establishing local operations.",
  },
  {
    title: "Clear & Transparent Pricing",
    description:
      "Pay only for the services you use with straightforward pricing, no hidden fees, setup costs, or long-term commitments.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Whether you're processing 10 or 10,000 orders per month, our systems adapt to your volume with consistent service quality.",
  },
  {
    title: "High Accuracy Standards",
    description:
      "Our 99.9% accuracy rate is achieved through careful processes and quality control, ensuring your orders are fulfilled correctly.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "Work directly with experienced account managers who understand your business and are available to address your needs promptly.",
  },
  {
    title: "Complete Visibility & Control",
    description:
      "Access comprehensive dashboards and analytics that give you full visibility into your inventory, orders, and delivery performance.",
  },
  {
    title: "Strategic GCC Coverage",
    description:
      "Our centrally located fulfillment centers across the Gulf region provide efficient access to all major markets with extended cut-off times.",
  },
  {
    title: "Flexible Month-to-Month Agreements",
    description:
      "Adjust services as your business evolves without being locked into lengthy contracts or facing cancellation penalties.",
  },
];

export const experiencePromises: ExperiencePromise[] = [
  {
    title: "Speed & Reliability",
    body: "We prioritize fast order processing and reliable delivery performance, helping you meet and exceed customer expectations while building loyalty and repeat business.",
    icon: "zap",
  },
  {
    title: "Easy Implementation",
    body: "Our straightforward onboarding process means you can start fulfilling orders quickly. We handle the technical setup and provide ongoing support to ensure smooth operations from day one.",
    icon: "plugZap",
  },
  {
    title: "Regional Market Knowledge",
    body: "With deep understanding of GCC regulations, consumer preferences, and business practices, we help you navigate the regional market effectively and avoid common pitfalls.",
    icon: "globe",
  },
  {
    title: "Consistent Performance",
    body: "Our track record demonstrates reliable order accuracy, dependable delivery times, and responsive support that keeps your operations running smoothly day after day.",
    icon: "lineChart",
  },
];

export const serviceCoverage: ServiceCoverage[] = [
  {
    title: "Factory Pickup & Origin Logistics",
    description: "We have special service option to collect your products directly from manufacturing facilities or supplier locations anywhere in the world.",
  },
  {
    title: "International Transportation Coordination",
    description: "We manage all aspects of shipping your products to the UAE, handling logistics planning and documentation.",
  },
  {
    title: "Import Services & Regulatory Compliance",
    description: "Our team navigates customs clearance, import documentation, and regulatory requirements on your behalf.",
  },
  {
    title: "Secure UAE Warehousing",
    description: "Your inventory is professionally managed in our fulfillment facilities with continuous monitoring.",
  },
  {
    title: "Professional Order Processing",
    description: "Every order is carefully picked, packed, and quality-checked before dispatch.",
  },
  {
    title: "Customer Delivery Network",
    description: "We coordinate final delivery throughout the GCC and international destinations through our established courier partnerships.",
  },
];

