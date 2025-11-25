"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  ServiceFeaturesGrid,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";

const service = servicesData["order-fulfillment"];

export default function OrderFulfillmentContent() {
  return (
    <>
      <ServiceHero
        icon={service.heroIcon}
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        stats={service.stats}
        accentColor={service.accentColor as "primary" | "navy"}
        heroImage={service.heroImage}
      />

      <ServiceFeaturesBento
        features={service.features}
        title="Fulfillment Capabilities"
        badge="Core Services"
      />

      {service.advancedFeatures.length > 0 && (
        <ServiceFeaturesGrid
          features={service.advancedFeatures}
          title="Value-Added Services"
          badge="Extra Features"
          columns={3}
        />
      )}

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
