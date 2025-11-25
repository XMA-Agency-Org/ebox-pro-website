"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  IntegrationsMarquee,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";

const service = servicesData["marketplace-fulfillment"];

export default function MarketplaceFulfillmentContent() {
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
        title="Amazon & Noon Fulfillment"
        badge="Marketplace Services"
      />

      <IntegrationsMarquee />

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
