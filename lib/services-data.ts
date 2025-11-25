import { IconType } from "react-icons";
import { ReactNode } from "react";
import {
  TbBuildingWarehouse,
  TbTemperature,
  TbShieldCheck,
  TbMapPin,
  TbClock,
  TbChartBar,
  TbPackage,
  TbTruckDelivery,
  TbClockHour4,
  TbChecks,
  TbScale,
  TbUsers,
  TbDevices,
  TbGift,
  TbTag,
  TbCamera,
  TbTool,
  TbWorld,
  TbFileCheck,
  TbLicense,
  TbReceipt,
  TbPlane,
  TbCoin,
  TbPalette,
  TbBox,
  TbSticker,
  TbAd,
  TbQrcode,
  TbRecycle,
  TbDiamond,
  TbCalendarEvent,
  TbRefresh,
  TbAlertCircle,
  TbCalendar,
  TbHistory,
  TbBuildingStore,
} from "react-icons/tb";
import {
  SiAmazon,
  SiShopify,
  SiWoo,
  SiMagento,
} from "react-icons/si";

export interface ServiceFeature {
  icon: IconType;
  title: string;
  description: string;
  featured?: boolean;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export type IllustrationType = "warehouse" | "integration" | "compliance" | "fulfillment" | "customization";

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroIcon: IconType;
  heroImage: string;
  illustration: IllustrationType;
  accentColor: string;
  features: ServiceFeature[];
  advancedFeatures: ServiceFeature[];
  meta: {
    title: string;
    description: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  warehousing: {
    slug: "warehousing",
    title: "Warehousing & Storage",
    tagline: "Smart Warehousing Solutions",
    description:
      "Keep your inventory organized and accessible with our state-of-the-art fulfillment center in Dubai, UAE. Strategically positioned for optimal reach and efficiency across the GCC.",
    heroIcon: TbBuildingWarehouse,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    illustration: "warehouse",
    accentColor: "navy",
    features: [
      {
        icon: TbScale,
        title: "Flexible Storage Options",
        description:
          "Pay only for the cubic meter space you use with month-to-month flexibility.",
        featured: true,
      },
      {
        icon: TbTemperature,
        title: "Temperature-Controlled Facilities",
        description:
          "Ambient, chilled, and frozen storage for products requiring specific conditions.",
        featured: true,
      },
      {
        icon: TbShieldCheck,
        title: "Secure Infrastructure",
        description:
          "24/7 surveillance, access control, and comprehensive insurance coverage.",
      },
      {
        icon: TbMapPin,
        title: "Strategic Locations",
        description:
          "Centrally located facilities with easy access to major airports, seaports, and highway networks.",
      },
      {
        icon: TbClock,
        title: "Extended Cut-Off Times",
        description:
          "Late cut-off options to accommodate your business hours and maximize same-day fulfillment.",
      },
    ],
    advancedFeatures: [
      {
        icon: TbChartBar,
        title: "Real-time Inventory Tracking",
        description: "Complete visibility into your inventory at all times.",
      },
      {
        icon: TbPackage,
        title: "SKU-Level Monitoring",
        description: "Detailed monitoring and reporting at the SKU level.",
      },
      {
        icon: TbAlertCircle,
        title: "Automated Stock Alerts",
        description: "Automated alerts and reorder notifications.",
      },
      {
        icon: TbCalendar,
        title: "Expiry Date Management",
        description: "Comprehensive management for perishable products.",
      },
      {
        icon: TbHistory,
        title: "Lot & Batch Tracking",
        description: "Full traceability with lot and batch tracking.",
      },
      {
        icon: TbBuildingStore,
        title: "Multi-Warehouse Distribution",
        description: "Inventory distribution across GCC locations.",
      },
    ],
    meta: {
      title: "Warehousing & Storage Services | Ebox Pro Logistics",
      description:
        "Smart warehousing solutions in Dubai with flexible storage, temperature-controlled facilities, and 24/7 security. Perfect for e-commerce businesses in the GCC.",
    },
  },

  "order-fulfillment": {
    slug: "order-fulfillment",
    title: "Order Fulfillment",
    tagline: "Lightning-Fast Pick, Pack & Ship",
    description:
      "Our trained fulfillment team processes orders with industry-leading speed and 99.9% accuracy. From receiving to delivery, we handle it all.",
    heroIcon: TbPackage,
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80",
    illustration: "fulfillment",
    accentColor: "primary",
    features: [
      {
        icon: TbClockHour4,
        title: "Rapid Order Processing",
        description:
          "Orders picked, packed, and ready for dispatch within 15 minutes of receipt.",
        featured: true,
      },
      {
        icon: TbChecks,
        title: "Quality Control Checks",
        description:
          "Multi-point verification to ensure 100% order accuracy.",
        featured: true,
      },
      {
        icon: TbScale,
        title: "Scalable Operations",
        description:
          "Handle anywhere from 10 to 10,000+ orders per day seamlessly.",
      },
      {
        icon: TbUsers,
        title: "B2C Fulfillment",
        description:
          "Direct-to-consumer order fulfillment with personalized packaging.",
      },
      {
        icon: TbBuildingStore,
        title: "B2B Fulfillment",
        description:
          "Bulk order preparation with labeling, packing, and invoicing for retail partners.",
      },
      {
        icon: TbDevices,
        title: "Omnichannel Fulfillment",
        description:
          "Centralized inventory management across all your sales channels.",
      },
    ],
    advancedFeatures: [
      {
        icon: TbBox,
        title: "Custom Branded Packaging",
        description: "Create memorable unboxing experiences for your customers.",
      },
      {
        icon: TbGift,
        title: "Kitting & Bundling",
        description: "Services for product combinations and special sets.",
      },
      {
        icon: TbGift,
        title: "Gift Wrapping",
        description: "Personalized messages and gift wrapping options.",
      },
      {
        icon: TbAd,
        title: "Promotional Inserts",
        description: "Coupons and marketing materials in every package.",
      },
      {
        icon: TbTag,
        title: "Product Labeling",
        description: "Barcodes, RFID, and price tags application.",
      },
      {
        icon: TbCamera,
        title: "Quality Inspection",
        description: "Product inspection and photography services.",
      },
      {
        icon: TbTool,
        title: "Assembly Services",
        description: "Light manufacturing and assembly operations.",
      },
    ],
    meta: {
      title: "Order Fulfillment Services | Ebox Pro Logistics",
      description:
        "Lightning-fast pick, pack, and ship services with 99.9% accuracy. Handle 10 to 10,000+ orders daily with our scalable e-commerce fulfillment in Dubai.",
    },
  },

  "marketplace-fulfillment": {
    slug: "marketplace-fulfillment",
    title: "Marketplace Fulfillment",
    tagline: "Seamless Integration with Major E-Commerce Platforms",
    description:
      "Scale your presence on regional marketplaces with our specialized fulfillment services. Connect once, sell everywhere.",
    heroIcon: TbDevices,
    heroImage: "/shipping-containers-port-terminal.jpg",
    illustration: "integration",
    accentColor: "primary",
    features: [
      {
        icon: TbTruckDelivery,
        title: "FBA/FBN Replenishment",
        description:
          "Prepare and deliver bulk inventory to Amazon and Noon fulfillment centers according to their standards.",
        featured: true,
      },
      {
        icon: TbPackage,
        title: "FBM (Fulfilled by Merchant)",
        description:
          "Direct fulfillment to customers from our warehouse for Amazon and Noon orders.",
        featured: true,
      },
      {
        icon: TbRefresh,
        title: "Marketplace Integration",
        description:
          "Automatic order synchronization and inventory updates across all platforms.",
      },
      {
        icon: TbBuildingStore,
        title: "Centralized Inventory",
        description:
          "Manage stock for multiple marketplaces from one location.",
      },
      {
        icon: TbDevices,
        title: "Cross-Listing Support",
        description:
          "Sell the same inventory across multiple platforms without overselling.",
      },
    ],
    advancedFeatures: [
      {
        icon: SiAmazon,
        title: "Amazon UAE & KSA",
        description: "Full integration with Amazon's UAE and Saudi marketplaces.",
      },
      {
        icon: TbBuildingStore,
        title: "Noon",
        description: "Official Noon logistics partner integration.",
      },
      {
        icon: SiShopify,
        title: "Shopify",
        description: "Seamless Shopify store connection.",
      },
      {
        icon: SiWoo,
        title: "WooCommerce",
        description: "WordPress WooCommerce plugin integration.",
      },
      {
        icon: SiMagento,
        title: "Magento",
        description: "Enterprise Magento platform support.",
      },
      {
        icon: TbBuildingStore,
        title: "Zid & Salla",
        description: "Regional e-commerce platform integrations.",
      },
      {
        icon: TbDevices,
        title: "Custom API",
        description: "Custom API integrations and direct marketplace feeds.",
      },
    ],
    meta: {
      title: "Marketplace Fulfillment Services | Ebox Pro Logistics",
      description:
        "Seamless Amazon, Noon, Shopify, and WooCommerce fulfillment in the GCC. FBA/FBN replenishment and FBM services with real-time inventory sync.",
    },
  },

  distribution: {
    slug: "distribution",
    title: "Distribution & Market Entry",
    tagline: "Your Gateway to the GCC Market",
    description:
      "International brands can leverage our local expertise to enter the GCC market quickly and compliantly. We handle the complexity so you can focus on growth.",
    heroIcon: TbWorld,
    heroImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80",
    illustration: "compliance",
    accentColor: "navy",
    features: [
      {
        icon: TbFileCheck,
        title: "Importer of Record (IOR)",
        description:
          "We act as your legal importer in the UAE and GCC, eliminating the need for local licensing.",
        featured: true,
      },
      {
        icon: TbPlane,
        title: "Exporter of Record (EOR)",
        description:
          "Facilitate outbound international shipments with full compliance.",
        featured: true,
      },
      {
        icon: TbReceipt,
        title: "Customs Clearance",
        description:
          "Expert handling of import/export documentation and customs procedures.",
      },
      {
        icon: TbLicense,
        title: "Product Registration",
        description:
          "Navigate local approvals for regulated products (food, cosmetics, pharmaceuticals, electronics).",
      },
      {
        icon: TbFileCheck,
        title: "Trade License Support",
        description:
          "Guidance on local business setup and regulatory requirements.",
      },
      {
        icon: TbTruckDelivery,
        title: "First-Mile Logistics",
        description:
          "Factory-to-fulfillment-center transportation and clearance.",
      },
      {
        icon: TbCoin,
        title: "Tax & Compliance",
        description:
          "VAT registration, customs duty management, and regulatory compliance.",
      },
    ],
    advancedFeatures: [],
    meta: {
      title: "Distribution & Market Entry Services | Ebox Pro Logistics",
      description:
        "Enter the GCC market quickly with our IOR/EOR services, customs clearance, and product registration. Save $10,000+ and 6+ months on market entry.",
    },
  },

  customization: {
    slug: "customization",
    title: "Customization & Branding",
    tagline: "Make Every Delivery a Brand Experience",
    description:
      "Stand out from the competition with customized packaging and presentation that reinforces your brand identity at every touchpoint.",
    heroIcon: TbPalette,
    heroImage: "/brand-box.png",
    illustration: "customization",
    accentColor: "primary",
    features: [
      {
        icon: TbBox,
        title: "Custom Branded Boxes",
        description:
          "Custom branded boxes and mailers that showcase your brand identity.",
        featured: true,
      },
      {
        icon: TbSticker,
        title: "Branded Materials",
        description:
          "Branded packing tape, tissue paper, logo stickers, and thank-you cards.",
        featured: true,
      },
      {
        icon: TbAd,
        title: "Promotional Flyers",
        description:
          "Product catalogs and promotional materials included with orders.",
      },
      {
        icon: TbQrcode,
        title: "QR Code Integration",
        description:
          "QR codes for customer engagement, reviews, and repeat purchases.",
      },
      {
        icon: TbRecycle,
        title: "Eco-Friendly Options",
        description:
          "Sustainable and eco-friendly packaging options for conscious brands.",
      },
      {
        icon: TbDiamond,
        title: "Luxury Packaging",
        description:
          "Premium packaging solutions for luxury and high-end products.",
      },
      {
        icon: TbCalendarEvent,
        title: "Seasonal Packaging",
        description:
          "Campaign-specific and seasonal packaging for special occasions.",
      },
      {
        icon: TbGift,
        title: "Gift Wrapping",
        description:
          "Professional gift wrapping with personalized messages.",
      },
    ],
    advancedFeatures: [],
    meta: {
      title: "Customization & Branding Services | Ebox Pro Logistics",
      description:
        "Transform every delivery into a brand experience with custom packaging, eco-friendly options, and luxury unboxing solutions in the GCC.",
    },
  },
};

export const allServices = Object.values(servicesData);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData[slug];
}

export function getRelatedServices(currentSlug: string): ServiceData[] {
  return allServices.filter((service) => service.slug !== currentSlug);
}
