"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";

const service = servicesData.distribution;

export default function DistributionContent() {
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
        title="Distribution Services"
        badge="Market Entry"
      />

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
