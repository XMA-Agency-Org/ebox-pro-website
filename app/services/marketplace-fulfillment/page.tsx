import { Metadata } from "next";
import MarketplaceFulfillmentContent from "./MarketplaceFulfillmentContent";

export const metadata: Metadata = {
  title: "Marketplace Fulfillment Services | Ebox Pro Logistics",
  description:
    "Seamless Amazon, Noon, Shopify, and WooCommerce fulfillment in the GCC. FBA/FBN replenishment and FBM services with real-time inventory sync.",
};

export default function MarketplaceFulfillmentPage() {
  return <MarketplaceFulfillmentContent />;
}
