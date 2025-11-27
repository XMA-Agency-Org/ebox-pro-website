"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Clock,
  Zap,
  Calendar,
  Crown,
  Truck,
  MapPin,
  Radio,
  Package,
} from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

type DeliveryOptionKey = "same-day" | "next-day" | "scheduled" | "white-glove";

export default function TransportationSection() {
  const [activeItem, setActiveItem] = useState<DeliveryOptionKey>("same-day");

  const deliveryOptions = {
    "same-day": {
      icon: Zap,
      title: "Same-Day Express Delivery",
      description:
        "Get your products to customers the same day they order. Perfect for urgent orders and time-sensitive deliveries.",
      features: ["Same-day dispatch", "Major UAE cities", "Real-time tracking"],
    },
    "next-day": {
      icon: Clock,
      title: "Next-Day Delivery Across the UAE",
      description:
        "Reliable next-day delivery service ensuring your customers receive their orders the following business day.",
      features: [
        "UAE-wide coverage",
        "Guaranteed delivery window",
        "Full tracking visibility",
      ],
    },
    scheduled: {
      icon: Calendar,
      title: "Standard Delivery (2-3 Business Days) Throughout the GCC",
      description:
        "Cost-effective standard delivery option for customers throughout the GCC region with reliable delivery times.",
      features: ["GCC-wide coverage", "2-3 business days", "Tracking included"],
    },
    "white-glove": {
      icon: Crown,
      title: "International Shipping to Over 90 Countries",
      description:
        "Expand your reach globally with our international shipping network covering over 90 countries worldwide.",
      features: ["90+ countries", "Multiple carriers", "Full customs support"],
    },
  };

  return (
    <section id="transportation" className="section-padding bg-base-50">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>Delivery</SectionBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-display-md text-base-900 mt-4 max-w-3xl"
          >
            Fast & Flexible Delivery
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-base-600 mt-4 max-w-2xl"
          >
            Offer your customers delivery options that match their expectations.
            Our network of trusted last-mile delivery partners ensures reliable
            service with full tracking and real-time updates.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Accordion */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as DeliveryOptionKey)}
            className="w-full"
          >
            {(Object.keys(deliveryOptions) as DeliveryOptionKey[]).map(
              (key) => {
                const option = deliveryOptions[key];
                const Icon = option.icon;
                return (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border-base-200"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 text-lg font-semibold">
                        <div className="w-8 h-8 rounded-lg bg-carrot-50 flex items-center justify-center text-carrot-500">
                          <Icon className="w-4 h-4" />
                        </div>
                        {option.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-base-600">
                      <p className="mb-4">{option.description}</p>
                      <ul className="space-y-2">
                        {option.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-base"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-carrot-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              }
            )}
          </Accordion>

          {/* Map Visual */}
          <div className="relative flex overflow-hidden rounded-3xl border border-base-200 bg-white p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l border-base-200 bg-[repeating-linear-gradient(-45deg,var(--color-base-100),var(--color-base-100)_1px,transparent_1px,transparent_8px)]" />
            <div className="relative w-full aspect-[4/3] bg-navy-950 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-image`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full relative"
                >
                  <Image
                    src="/logistics.jpg"
                    alt="Logistics and transportation"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Stats Overlay */}
              <div className="md:absolute hidden md:block bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-base-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-navy-900">UAE-Wide</p>
                    <p className="text-xs text-base-500">Coverage</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy-900">GCC</p>
                    <p className="text-xs text-base-500">Major Cities</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy-900">50+</p>
                    <p className="text-xs text-base-500">Carriers</p>
                  </div>
                </div>
              </div>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-carrot-500 to-transparent"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="#contact" className="btn-primary">
            Explore Shipping Options
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
