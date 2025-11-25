"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  ServiceFeaturesGrid,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";

const service = servicesData.warehousing;

export default function WarehousingContent() {
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
        title="What We Offer"
        badge="Storage Solutions"
      />

      {service.advancedFeatures.length > 0 && (
        <ServiceFeaturesGrid
          features={service.advancedFeatures}
          title="Advanced Inventory Management"
          badge="Capabilities"
          columns={3}
        />
      )}

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
