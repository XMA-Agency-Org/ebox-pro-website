"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import Link from "next/link";
import {
  PackageCheck,
  Zap,
  Target,
  RotateCcw,
  PackageSearch,
  Boxes,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import ProcessSteps from "../ProcessSteps";
import { ResponsiveLottie } from "@/components/ResponsiveLottie";

interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
  timeframe: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    number: "1",
    title: "Send Your Inventory",
    description:
      "Ship your products directly from the factory or your current warehouse to our Dubai facility. We receive, inspect, and catalog everything.",
    timeframe: "1-3 days setup",
  },
  {
    id: 2,
    number: "2",
    title: "Instant Integration",
    description:
      "Connect your stores (Amazon, Noon, Shopify) with our dashboard. All your sales channels sync to one inventory pool.",
    timeframe: "4 hours to go live",
  },
  {
    id: 3,
    number: "3",
    title: "We Fulfill Every Order",
    description:
      "Orders automatically flow in. We pick, pack, label, and ship with same-day dispatch for orders before 2 PM.",
    timeframe: "Same-day dispatch",
  },
  {
    id: 4,
    number: "4",
    title: "You Track, We Deliver",
    description:
      "Monitor every order in real-time. Our system updates you and your customers at every step until delivery.",
    timeframe: "Real-time visibility",
  },
];

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function ProcessStep({
  step,
  title,
  description,
  icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Circle */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-navy-950 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-carrot-500 text-white text-xs font-bold flex items-center justify-center">
          {step}
        </div>
      </div>

      {/* Title & Description */}
      <h4 className="font-semibold text-base-900 mt-4 mb-2">{title}</h4>
      <p className="text-sm text-base-600 max-w-[160px]">{description}</p>

      {/* Connector Arrow (desktop only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)]">
          <ArrowRight className="w-6 h-6 text-base-300 absolute right-0 -top-3" />
          <div className="h-0.5 bg-base-200 w-full" />
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-base-200 text-center">
      <div className="flex justify-center mb-3 text-carrot-500">{icon}</div>
      <p className="text-2xl lg:text-3xl font-bold text-base-900">{value}</p>
      <p className="text-sm text-base-600 mt-1">{label}</p>
    </div>
  );
}

interface CapabilityProps {
  title: string;
}

function Capability({ title }: CapabilityProps) {
  return (
    <div className="flex items-center gap-2 bg-base-50 rounded-lg px-4 py-2">
      <span className="w-2 h-2 rounded-full bg-carrot-500" />
      <span className="text-sm text-base-700">{title}</span>
    </div>
  );
}

export default function FulfillmentSection() {
  const processSteps = [
    {
      step: 1,
      title: "Receive",
      description: "Inventory arrives and is checked in",
      icon: <PackageSearch className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Store",
      description: "Organized storage with SKU tracking",
      icon: <Boxes className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Pick",
      description: "Accurate order picking from inventory",
      icon: <PackageCheck className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Pack",
      description: "Branded packaging & quality check",
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Ship",
      description: "Fast dispatch to carrier network",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      value: "99%+",
      label: "Pick & Pack Accuracy",
      icon: <Target className="w-6 h-6" />,
    },
    {
      value: "Same-Day",
      label: "Processing Speed",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: "B2C & B2B",
      label: "Order Types",
      icon: <ShoppingBag className="w-6 h-6" />,
    },
  ];

  const capabilities = [
    "Multi-channel order management",
    "Kitting & bundling",
    "Returns processing",
    "Quality inspections",
    "Custom packaging",
    "Batch tracking",
  ];

  return (
    <section id="fulfillment" className="section-padding bg-base-50">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>Order Fulfillment</SectionBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-display-md text-base-900 mt-4 max-w-3xl"
          >
            Pick, Pack & Fulfillment
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-base-600 mt-4 max-w-2xl"
          >
            When a customer places an order, our team quickly picks, packs, and
            prepares it within minutes for fast turnaround. Select from custom
            packaging, branded materials, kitting, gift wrapping, and inserts to
            create memorable unboxing experiences that strengthen your brand.
          </motion.p>

          {/* Stats Row */}
          {/* <motion.div */}
          {/*   variants={fadeInUp} */}
          {/*   className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full max-w-2xl" */}
          {/* > */}
          {/*   {stats.map((stat) => ( */}
          {/*     <StatCard */}
          {/*       key={stat.label} */}
          {/*       value={stat.value} */}
          {/*       label={stat.label} */}
          {/*       icon={stat.icon} */}
          {/*     /> */}
          {/*   ))} */}
          {/* </motion.div> */}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          {/* Unified Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-6 relative">
            {/* Connecting lines background - Desktop only */}
            <div className="hidden lg:flex absolute top-10 left-0 right-0 items-center px-[10%]">
              <div className="w-full h-0.5 border-t-4 border-dashed border-[#ea580c]/50" />
            </div>

            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col lg:flex-col items-center relative"
              >
                {/* Circle */}
                <motion.div
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative z-10 mb-4 lg:mb-8"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#ea580c] flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <div className="bg-background rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-full shadow-sm transition-all duration-300 hover:-translate-y-1 w-full">
                  {step.id === 1 && (
                    <div className="w-full aspect-square max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                      <ResponsiveLottie
                        src="https://lottie.host/5715c593-1b30-4c59-b040-d593bf2f8f99/aAxcNN2CbD.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 2 && (
                    <div className="w-full aspect-square max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                      <ResponsiveLottie
                        src="https://lottie.host/e3ffcd8a-43d3-4d19-86e5-0513e0119db0/U6oIBxxln0.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 3 && (
                    <div className="w-full aspect-square max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                      <ResponsiveLottie
                        src="https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 4 && (
                    <div className="w-full aspect-square max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                      <ResponsiveLottie
                        src="https://lottie.host/4e0e6604-62f6-4719-88a2-e74c51a1b5af/xwQpDKNYcg.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-[#1a3456] mb-3 lg:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">
                    {step.description}
                  </p>
                  <div className="text-[#ea580c] font-semibold text-base lg:text-lg">
                    {step.timeframe}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities */}
        {/* <motion.div */}
        {/*   variants={staggerContainer} */}
        {/*   initial="initial" */}
        {/*   whileInView="animate" */}
        {/*   viewport={{ once: true, margin: "-100px" }} */}
        {/*   className="mt-16 bg-white rounded-2xl p-8 lg:p-10 border border-base-200" */}
        {/* > */}
        {/*   <motion.div */}
        {/*     variants={fadeInUp} */}
        {/*     className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6" */}
        {/*   > */}
        {/*     <div> */}
        {/*       <h3 className="text-heading-3 text-base-900 mb-2"> */}
        {/*         Full-Service Capabilities */}
        {/*       </h3> */}
        {/*       <p className="text-base-600"> */}
        {/*         Everything you need for seamless order fulfillment. */}
        {/*       </p> */}
        {/*     </div> */}
        {/**/}
        {/*     <div className="flex flex-wrap gap-3"> */}
        {/*       {capabilities.map((capability) => ( */}
        {/*         <Capability key={capability} title={capability} /> */}
        {/*       ))} */}
        {/*     </div> */}
        {/*   </motion.div> */}
        {/**/}
        {/*   <motion.div */}
        {/*     variants={fadeInUp} */}
        {/*     className="mt-8 flex justify-center lg:justify-start" */}
        {/*   > */}
        {/*     <Link href="#contact" className="btn-primary"> */}
        {/*       Start Fulfilling Orders */}
        {/*     </Link> */}
        {/*   </motion.div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
