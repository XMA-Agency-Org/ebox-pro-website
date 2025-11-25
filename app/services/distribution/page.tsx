import { Metadata } from "next";
import DistributionContent from "./DistributionContent";

export const metadata: Metadata = {
  title: "Distribution & Market Entry Services | Ebox Pro Logistics",
  description:
    "Enter the GCC market quickly with our IOR/EOR services, customs clearance, and product registration. Save $10,000+ and 6+ months on market entry.",
};

export default function DistributionPage() {
  return <DistributionContent />;
}
