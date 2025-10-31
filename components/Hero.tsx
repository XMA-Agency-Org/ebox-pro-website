"use client";

import Link from "next/link";
import LogoSection from "@/components/LogoSection";
import { UAENetworkMap } from "@/components/UAENetworkMap";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Warehousing", "Fulfillment", "Integration", "Delivery", "Logistics"];
  const [isRowLayout, setIsRowLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsRowLayout(window.innerWidth >= 1275);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-secondary flex items-center pt-40 md:pt-32">
        <div className="container-wide relative z-20 w-full pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Column - Copy */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex flex-col gap-6">
                <div className="text-center lg:text-left">
                  <h1 className="text-white text-balance text-display-xl">
                    Scale Your E-Commerce with Smart
                    <FlipWords words={words} className="text-carrot-400" />
                  </h1>
                  <p className="text-white/80 text-body-xl mt-6 max-w-2xl mx-auto lg:mx-0">
                    Strategic Dubai warehouse location with real-time inventory
                    management. Seamless multi-channel integration for Amazon,
                    Noon, and your store.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex gap-4 text-white w-full ${
                  isRowLayout
                    ? 'flex-row items-start justify-start max-w-none'
                    : 'flex-col items-center justify-center max-w-lg mx-auto lg:mx-0 lg:items-start lg:justify-start'
                }`}
              >
                <Link
                  href="/contact"
                  className="btn-primary text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap"
                  style={{ minWidth: 'fit-content', width: isRowLayout ? 'auto' : '100%' }}
                >
                  Get Free UAE Fulfillment Assessment
                </Link>
                <Link
                  href="/contact"
                  className="btn-white text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap"
                  style={{ minWidth: 'fit-content', width: isRowLayout ? 'auto' : '100%' }}
                >
                  Calculate Your Savings
                </Link>
              </div>
            </div>
            {/* Right Column - Animated Network Map */}
            <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
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
      </section>
      <LogoSection />
    </>
  );
}
