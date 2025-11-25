import { Metadata } from "next";
import CustomizationContent from "./CustomizationContent";

export const metadata: Metadata = {
  title: "Customization & Branding Services | Ebox Pro Logistics",
  description:
    "Transform every delivery into a brand experience with custom packaging, eco-friendly options, and luxury unboxing solutions in the GCC.",
};

export default function CustomizationPage() {
  return <CustomizationContent />;
}
