"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";

const service = servicesData.customization;

export default function CustomizationContent() {
  return (
    <>
      <ServiceHero
        icon={service.heroIcon}
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        stats={service.stats}
        accentColor={"navy"}
        heroImage={service.heroImage}
      />

      <ServiceFeaturesBento
        features={service.features}
        title="Branding Options"
        badge="Customization"
      />

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
