import { Metadata } from "next";
import WarehousingContent from "./WarehousingContent";

export const metadata: Metadata = {
  title: "Warehousing & Storage Services | Ebox Pro Logistics",
  description:
    "Smart warehousing solutions in Dubai with flexible storage, temperature-controlled facilities, and 24/7 security. Perfect for e-commerce businesses in the GCC.",
};

export default function WarehousingPage() {
  return <WarehousingContent />;
}
