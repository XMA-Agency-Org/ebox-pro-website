"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
 

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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From setup to delivery, we&apos;ve streamlined every step. Get started in under 2 weeks.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {/* Connecting lines background */}
            <div className="absolute top-10 left-0 right-0 flex items-center px-[10%]">
              <div className="w-full h-0.5 border-t-4 border-dashed border-[#ea580c]/50" />
            </div>

            {/* Steps with numbers and cards */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 mb-8"
                >
                  <div className="w-20 h-20 rounded-full bg-[#ea580c] flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 h-full shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
                  {step.id === 1 && (
                    <div className="w-full aspect-square max-h-32 mb-6 flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/8d4fbde2-17a3-437c-b356-adca166704d1/oWNaqQr1Sv.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 2 && (
                    <div className="w-full aspect-square max-h-32 mb-6 flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/e3ffcd8a-43d3-4d19-86e5-0513e0119db0/U6oIBxxln0.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 3 && (
                    <div className="w-full aspect-square max-h-32 mb-6 flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  {step.id === 4 && (
                    <div className="w-full aspect-square max-h-32 mb-6 flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/4e0e6604-62f6-4719-88a2-e74c51a1b5af/xwQpDKNYcg.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#1a3456] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="text-[#ea580c] font-semibold text-lg">
                    {step.timeframe}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Circle and line */}
              <div className="flex items-start mb-4">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-16 h-16 rounded-full bg-[#ea580c] flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-24 border-l-2 border-dashed border-[#ea580c]/50 my-2" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {step.id === 1 && (
                      <div className="w-full aspect-square max-h-24 mb-4 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/8d4fbde2-17a3-437c-b356-adca166704d1/oWNaqQr1Sv.lottie"
                          loop
                          autoplay
                        />
                      </div>
                    )}
                    {step.id === 2 && (
                      <div className="w-full aspect-square max-h-24 mb-4 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/e3ffcd8a-43d3-4d19-86e5-0513e0119db0/U6oIBxxln0.lottie"
                          loop
                          autoplay
                        />
                      </div>
                    )}
                    {step.id === 3 && (
                      <div className="w-full aspect-square max-h-24 mb-4 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie"
                          loop
                          autoplay
                        />
                      </div>
                    )}
                    {step.id === 4 && (
                      <div className="w-full aspect-square max-h-24 mb-4 flex items-center justify-center">
                        <DotLottieReact
                          src="https://lottie.host/c6ab9f50-81ef-45e4-bf2f-7b1619c2d85e/rPPpY922Sp.lottie"
                          loop
                          autoplay
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-[#1a3456] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="text-[#ea580c] font-semibold">
                      {step.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

