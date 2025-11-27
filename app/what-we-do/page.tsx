import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  WhatWeDoHero,
  WarehousingSection,
  FulfillmentSection,
  PowerfulToolsSection,
  ValueAddedServices,
  ImageSection,
  ReturnsManagement,
  TransportationSection,
} from "@/components/what-we-do";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import IntegrationsSection from "@/components/what-we-do/TechnologySection";

export const metadata: Metadata = {
  title: "What We Do | Ebox Pro Logistics",
  description:
    "Comprehensive 3PL services including warehousing, fulfillment, transportation, and value-added logistics solutions across UAE & Saudi Arabia. 99%+ accuracy, same-day processing.",
  keywords: [
    "3PL services UAE",
    "logistics solutions Saudi Arabia",
    "warehousing Dubai",
    "order fulfillment GCC",
    "last-mile delivery UAE",
    "e-commerce fulfillment",
    "supply chain management",
  ],
};

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WhatWeDoHero />
        {/* <ServicesOverview /> */}
        <WarehousingSection />
        <IntegrationsSection />
        <FulfillmentSection />
        <TransportationSection />
        <ReturnsManagement />
        <ValueAddedServices />
        <ImageSection
          src="/futuristic-dubai-landscape.jpg"
          alt="Modern warehouse with inventory tracking and digital interface"
          width={1920}
          height={1080}
          heading="Distribution & Market Entry Support"
          description="Expanding to the GCC? We act as your local distribution partner, helping
international brands navigate import processes, product registration requirements,
and regulatory compliance. Save months of setup time & fixed cost by leveraging our
established infrastructure and local expertise."
        />
        <PowerfulToolsSection />
        <ContactFormWrapper />
      </main>
      <Footer />
    </div>
  );
}
