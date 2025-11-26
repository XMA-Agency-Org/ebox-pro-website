"use client";

import { motion } from "framer-motion";
import { ResponsiveLottie } from "@/components/ResponsiveLottie";
import SectionBadge from "@/components/SectionBadge";

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

export default function ProcessSteps() {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionBadge className="bg-white/10 text-white">
            How It Works
          </SectionBadge>
          <h2 className="text-display-xl text-white mb-4">
            Your Simple Path to Fulfillment Success
          </h2>
          <p className="text-body-xl text-white/70 max-w-3xl mx-auto">
            Four streamlined steps from warehouse to customer doorstep
          </p>
        </motion.div>

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
                  <div className="w-full aspect-square max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                    <ResponsiveLottie
                      src="https://lottie.host/5715c593-1b30-4c59-b040-d593bf2f8f99/aAxcNN2CbD.lottie"
                      loop
                      autoplay
                    />
                  </div>
                )}
                {step.id === 2 && (
                  <div className="w-full aspect-square max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                    <ResponsiveLottie
                      src="https://lottie.host/e3ffcd8a-43d3-4d19-86e5-0513e0119db0/U6oIBxxln0.lottie"
                      loop
                      autoplay
                    />
                  </div>
                )}
                {step.id === 3 && (
                  <div className="w-full aspect-square max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
                    <ResponsiveLottie
                      src="https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie"
                      loop
                      autoplay
                    />
                  </div>
                )}
                {step.id === 4 && (
                  <div className="w-full aspect-square max-h-32 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
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
      </div>
    </section>
  );
}
