import { Handshake, Globe, Scale } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export default function AboutFeatureCards() {
  const features = [
    {
      title: "Your growth partner in the Gulf",
      icon: Handshake,
      description:
        "We work as an extension of your team so logistics never distracts you from scaling your brand or delighting customers.",
    },
    {
      title: "Remove the barriers to expansion",
      icon: Globe,
      description:
        "We eliminate the hurdles of GCC entry, giving every business instant access to world-class warehousing and last-mile support.",
    },
    {
      title: "Flexible, stress-free fulfillment",
      icon: Scale,
      description:
        "Month-to-month agreements, no hidden fees, and a tech-enabled UAE hub keep fulfillment seamless and scalable.",
    },
  ];

  return (
    <div className="container-wide py-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}
