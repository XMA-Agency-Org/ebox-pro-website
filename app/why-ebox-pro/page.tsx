import Header from "@/components/Header";
import WhyEboxPro from "@/components/WhyEboxPro";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Footer from "@/components/Footer";
import HeroSection from "@/components/why-ebox-pro/HeroSection";
import ExperiencePromisesSection from "@/components/why-ebox-pro/ExperiencePromisesSection";
import ServiceCoverageSection from "@/components/why-ebox-pro/ServiceCoverageSection";
import SecondaryCallToAction from "@/components/SecondaryCallToAction";
import { experiencePromises, serviceCoverage } from "@/content/why-ebox-pro";

export const metadata = {
  title:
    "Why Choose Ebox Pro Logistics | Seamless E-Commerce Fulfillment in the GCC",
  description:
    "Discover how Ebox Pro Logistics provides reliable, scalable fulfillment solutions with 99.9% accuracy, transparent pricing, and complete end-to-end services across the GCC region.",
};

export default function WhyChooseEboxProPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyEboxPro />
        <ExperiencePromisesSection promises={experiencePromises} />
        <ServiceCoverageSection services={serviceCoverage} />
        <ContactFormWrapper />
        <Footer />
      </main>
    </div>
  );
}
