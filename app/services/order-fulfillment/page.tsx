import { Metadata } from "next";
import OrderFulfillmentContent from "./OrderFulfillmentContent";

export const metadata: Metadata = {
  title: "Order Fulfillment Services | Ebox Pro Logistics",
  description:
    "Lightning-fast pick, pack, and ship services with 99.9% accuracy. Handle 10 to 10,000+ orders daily with our scalable e-commerce fulfillment in Dubai.",
};

export default function OrderFulfillmentPage() {
  return <OrderFulfillmentContent />;
}
