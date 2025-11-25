"use client";

import type { ServiceCoverage } from "@/content/why-ebox-pro";
import { Check } from "lucide-react";

type ServiceCoverageSectionProps = {
  services: ServiceCoverage[];
};

export default function ServiceCoverageSection({
  services,
}: ServiceCoverageSectionProps) {
  return (
    <section className="section-padding mx-auto container-wide bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-display-xl text-foreground mb-6">
            Full-Spectrum Supply Chain Coverage
          </h2>
          <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto">
            We handle your entire GCC supply chain—from intake to delivery—for
            seamless, single-partner service.
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-3">
                <Check className="text-green-500 w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h4 className="text-heading-4 text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-body-base text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
