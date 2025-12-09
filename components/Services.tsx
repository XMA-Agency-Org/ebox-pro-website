"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IntegrationIllustration } from "@/components/IntegrationIllustration";
import { WarehouseLottie } from "@/components/WarehouseLottie";
import { ComplianceLottie } from "@/components/ComplianceLottie";
import { OrderFulfillmentLottie } from "@/components/OrderFulfillmentLottie";
import { BrandLottie } from "@/components/BrandLottie";
import { CardStack } from "@/components/CardStack";
import SectionBadge from "@/components/SectionBadge";
import {
  allServices,
  IllustrationType,
  ServiceData,
} from "@/lib/services-data";
import { TbArrowRight } from "react-icons/tb";
import IntegrationIllustrationV2 from "./IntegrationIllustrationV2";

interface ServicesProps {
  className?: string;
}

function getIllustration(type: IllustrationType) {
  switch (type) {
    case "warehouse":
      return <WarehouseLottie />;
    case "integration":
      return <IntegrationIllustrationV2 />;
    case "compliance":
      return <ComplianceLottie />;
    case "fulfillment":
      return <OrderFulfillmentLottie />;
    case "customization":
      return <BrandLottie />;
    default:
      return <WarehouseLottie />;
  }
}

function ServiceCardItem({ service }: { service: ServiceData }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block w-full h-[600px] sm:h-[550px] lg:h-[450px] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border bg-surface shadow-lg shadow-black/10 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center h-full">
        {/* Illustration */}
        <div className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-full rounded-2xl flex items-center justify-center overflow-hidden">
          <div className="h-full w-full max-h-full">
            {getIllustration(service.illustration)}
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div>
            <h3 className="text-heading-2 text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-body-lg text-primary font-medium mb-3">
              {service.tagline}
            </p>

            <p className="text-body-md text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center text-primary text-base font-medium mt-2">
            <span>Learn more about this service</span>
            <TbArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export default function Services({ className }: ServicesProps = {}) {
  const cards = allServices.map((service) => ({
    id: `service-${service.slug}`,
    content: <ServiceCardItem service={service} />,
  }));

  return (
    <section
      id="services"
      className={cn("relative bg-background md:section-padding pb-32", className)}
    >
      {/* Header */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="text-display-xl text-foreground mb-4">
            One Platform, Total E-commerce Command
          </h2>
          <p className="text-body-xl text-muted-foreground mx-auto">
            Five core services to scale your e-commerce business in UAE
          </p>
        </motion.div>
      </div>

      {/* Card Stack */}
      <div className="container-narrow mx-auto">
        <CardStack cards={cards} />
      </div>
    </section>
  );
}
