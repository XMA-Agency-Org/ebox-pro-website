"use client";

import Link from "next/link";
import LogoSection from "@/components/LogoSection";
import { UAENetworkMap } from "@/components/UAENetworkMap";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  const words = ["Warehousing", "Fulfillment", "Integration", "Delivery", "Logistics"];
  return (
    <>
      <section className="relative pt-40 overflow-hidden min-h-screen">
        <div className="container-wide relative flex items-center z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center w-full">
            {/* Left Column - Copy */}
            <div className="flex flex-col gap-8 col-span-2">
              <div className="flex flex-col gap-6">
                <p className="text-white/70 mb-0 text-body-md uppercase tracking-wider">
                  Tech-Driven 3PL Warehousing
                </p>
                <div className="">
                  <h1 className="text-white text-balance text-display-xl">
                    Scale Your E-Commerce with Smart
                    <FlipWords words={words} className="text-carrot-400" />
                  </h1>
                  <p className="text-white/80 text-body-xl mt-6 max-w-2xl">
                    Strategic Dubai warehouse location with real-time inventory
                    management. Seamless multi-channel integration for Amazon,
                    Noon, and your store.
                  </p>
                </div>
              </div>

              {/* Header Details */}
              <div className="flex flex-wrap gap-5 text-white mt-8">
                <Link
                  href="/contact"
                  className="btn-secondary text-center leading-6 no-underline flex items-center justify-center"
                >
                  Get Free UAE Fulfillment Assessment
                </Link>
              </div>
            </div>

            {/* Right Column - Animated Network Map */}
            <div className="relative w-full h-[450px] lg:h-[600px] col-span-3">
              <UAENetworkMap
                abuDhabi={{ x: 445, y: 325 }}
                dubai={{ x: 589, y: 161 }}
                sharjah={{ x: 616, y: 128 }}
                alAin={{ x: 660, y: 321 }}
              />
              <div
                className="absolute top-[10%] left-[10%] w-[200px] backdrop-blur-lg bg-white/[0.06] border border-white/[0.12] rounded-2xl p-4 animate-float-gentle pointer-events-none shadow-lg shadow-black/20"
              >
                <div
                  className="border-t border-transparent mb-2"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, oklch(0.7 0.2 195) 0%, transparent 100%) 1",
                  }}
                />
                <div className="text-[10px] uppercase tracking-wider text-white/70 mb-1 font-medium">
                  Active Deliveries
                </div>
                <div
                  className="text-[32px] font-bold text-white"
                  style={{
                    textShadow: "0 0 12px oklch(0.7 0.2 195 / 0.5)",
                  }}
                >
                  2,847
                </div>
                <div className="mt-3 flex gap-1 items-end">
                  <div
                    className="w-1.5 h-8 rounded-full"
                    style={{
                      background: "oklch(0.7 0.2 195)",
                      boxShadow: "0 0 8px oklch(0.7 0.2 195 / 0.6)",
                    }}
                  />
                  <div
                    className="w-1.5 h-6 rounded-full"
                    style={{
                      background: "oklch(0.75 0.2 45)",
                      boxShadow: "0 0 8px oklch(0.75 0.2 45 / 0.6)",
                    }}
                  />
                  <div
                    className="w-1.5 h-10 rounded-full"
                    style={{
                      background: "oklch(0.7 0.2 195)",
                      boxShadow: "0 0 8px oklch(0.7 0.2 195 / 0.6)",
                    }}
                  />
                  <div
                    className="w-1.5 h-7 rounded-full"
                    style={{
                      background: "oklch(0.75 0.2 45)",
                      boxShadow: "0 0 8px oklch(0.75 0.2 45 / 0.6)",
                    }}
                  />
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[5%] w-[200px] z-30 !backdrop-blur-lg bg-white/[0.1] border border-white/[0.12] rounded-2xl p-4 shadow-lg animate-float-gentle">
                <div
                  className="border-t border-transparent mb-2"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, oklch(0.75 0.2 45) 0%, transparent 100%) 1",
                  }}
                />
                <div className="text-[10px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  On-Time Rate
                </div>
                <div
                  style={{
                    textShadow: "0 0 12px oklch(0.7 0.2 30 / 0.5)",
                  }}
                  className="text-[40px] font-bold text-carrot-400"
                >
                  99.2%
                </div>
              </div>
            </div>
          </div>
        </div>
        <LogoSection />
      </section>
    </>
  );
}
