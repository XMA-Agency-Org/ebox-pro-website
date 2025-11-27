"use client";

import {
  Tag,
  Package,
  DollarSign,
  Languages,
  Globe,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/SectionBadge";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};

const leftFeatures: FeatureItem[] = [
  {
    icon: Tag,
    title: "Labeling and Tagging",
    description:
      "Professional labeling and tagging services for compliance and branding requirements.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Package,
    title: "B2B and Retail Fulfillment",
    description:
      "Comprehensive fulfillment solutions for both B2B wholesale and retail distribution channels.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: DollarSign,
    title: "Cash on Delivery Options",
    description:
      "Flexible payment solutions including cash on delivery to maximize conversion rates.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: Languages,
    title: "Multilingual Customer Support",
    description:
      "Dedicated customer support in multiple languages to serve your diverse customer base.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Globe,
    title: "Importer of Record Services",
    description:
      "Complete importer of record services for international brands entering the GCC market.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reporting",
    description:
      "Comprehensive analytics and reporting tools to track performance and optimize operations.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-xs",
          "bg-base-50 ring-base-200 ring",
          feature.cornerStyle
        )}
      >
        <div className="text-carrot-500 mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-base-900 mb-2.5 text-xl">{feature.title}</h2>
        <p className="text-base-600 text-sm text-pretty">
          {feature.description}
        </p>
        <span className="from-carrot-500/0 via-carrot-500 to-carrot-500/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,oklch(0.75_0.18_45/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function ValueAddedServices() {
  return (
    <section className="section-padding" id="value-added">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="flex justify-center mb-4.5">
              <SectionBadge>Value-Added Services</SectionBadge>
            </div>
            <h2 className="text-base-900 mb-2 font-bold text-center sm:mb-2.5 text-4xl">
              Value-Added Services
            </h2>
            <p className="text-base-600 mx-auto max-w-[18rem] text-center text-pretty">
              Go beyond basic fulfillment with services designed to enhance your
              operations.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
