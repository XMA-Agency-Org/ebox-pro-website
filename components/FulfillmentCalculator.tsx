"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import Pill from "./ui/Pill";
import { BackgroundBeams } from "./ui/background-beams";

interface CalculatorInputs {
  monthlyOrderVolume: number;
  avgOrderWeight: number;
  avgDistance: number;
}

export default function FulfillmentCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyOrderVolume: 500,
    avgOrderWeight: 2,
    avgDistance: 50,
  });

  const [results, setResults] = useState({
    eboxMonthlyCost: 0,
    inhouseMonthlyCost: 0,
    savings: 0,
  });

  // Calculate costs based on inputs
  useEffect(() => {
    const calculateCosts = () => {
      const { monthlyOrderVolume, avgOrderWeight, avgDistance } = inputs;

      // Simplified cost calculation inspired by the image
      const baseCostPerOrder = 8;
      const weightFactor = avgOrderWeight * 2;
      const distanceFactor = avgDistance * 0.15;

      // Ebox costs - optimized pricing
      const eboxCostPerOrder = baseCostPerOrder + weightFactor + distanceFactor;
      const eboxMonthlyCost = monthlyOrderVolume * eboxCostPerOrder;

      // In-house costs - typically 40% higher
      const inhouseCostPerOrder = eboxCostPerOrder * 1.6;
      const inhouseMonthlyCost = monthlyOrderVolume * inhouseCostPerOrder;

      const savings = inhouseMonthlyCost - eboxMonthlyCost;

      setResults({
        eboxMonthlyCost: Math.round(eboxMonthlyCost),
        inhouseMonthlyCost: Math.round(inhouseMonthlyCost),
        savings: Math.round(savings),
      });
    };

    calculateCosts();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <BackgroundBeams className="absolute top-1/4 left-0 w-full h-3/4" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Pill above card */}
        <div className="text-center mb-8">
          <ScrollReveal direction="up" delay={0.1}>
            <Pill color="orange">
              Savings Calculator
            </Pill>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                See Exactly How Much We&apos;ll Save You
              </h2>

              <p className="text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
                Stop guessing. Use the calculator below to compare your current
                fulfillment costs with our optimized, tech-driven solution. The
                results speak for themselves.
              </p>
            </div>

            {/* Input Sliders */}
            <div className="space-y-10 mb-12">
              {/* Monthly Orders */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-base lg:text-lg font-semibold text-[#1a1a2e]">
                    Monthly Orders
                  </label>
                  <span className="text-2xl lg:text-3xl font-bold text-[#ff5722]">
                    {inputs.monthlyOrderVolume.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={inputs.monthlyOrderVolume}
                    onChange={(e) =>
                      handleInputChange(
                        "monthlyOrderVolume",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-orange"
                    style={{
                      background: `linear-gradient(to right, #ff5722 0%, #ff5722 ${
                        ((inputs.monthlyOrderVolume - 100) / (5000 - 100)) * 100
                      }%, #e0e0e0 ${
                        ((inputs.monthlyOrderVolume - 100) / (5000 - 100)) * 100
                      }%, #e0e0e0 100%)`,
                    }}
                  />
                </div>
              </div>

              {/* Average Weight */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-base lg:text-lg font-semibold text-[#1a1a2e]">
                    Average Weight (kg)
                  </label>
                  <span className="text-2xl lg:text-3xl font-bold text-[#ff5722]">
                    {inputs.avgOrderWeight} kg
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="20"
                    step="0.5"
                    value={inputs.avgOrderWeight}
                    onChange={(e) =>
                      handleInputChange(
                        "avgOrderWeight",
                        parseFloat(e.target.value)
                      )
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-orange"
                    style={{
                      background: `linear-gradient(to right, #ff5722 0%, #ff5722 ${
                        ((inputs.avgOrderWeight - 0.5) / (20 - 0.5)) * 100
                      }%, #e0e0e0 ${
                        ((inputs.avgOrderWeight - 0.5) / (20 - 0.5)) * 100
                      }%, #e0e0e0 100%)`,
                    }}
                  />
                </div>
              </div>

              {/* Average Distance */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-base lg:text-lg font-semibold text-[#1a1a2e]">
                    Average Distance (km)
                  </label>
                  <span className="text-2xl lg:text-3xl font-bold text-[#ff5722]">
                    {inputs.avgDistance} km
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={inputs.avgDistance}
                    onChange={(e) =>
                      handleInputChange("avgDistance", parseInt(e.target.value))
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-orange"
                    style={{
                      background: `linear-gradient(to right, #ff5722 0%, #ff5722 ${
                        ((inputs.avgDistance - 5) / (200 - 5)) * 100
                      }%, #e0e0e0 ${
                        ((inputs.avgDistance - 5) / (200 - 5)) * 100
                      }%, #e0e0e0 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Results Cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {/* Doing it Yourself Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-100 rounded-2xl p-5 lg:p-6 text-center"
              >
                <div className="text-neutral-600 text-sm font-medium mb-1.5">
                  Doing it yourself
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-neutral-400 line-through mb-1">
                  AED {results.inhouseMonthlyCost.toLocaleString()}
                </div>
                <div className="text-neutral-500 text-xs">per month</div>
              </motion.div>

              {/* With Ebox Pro Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#ff5722] rounded-2xl p-5 lg:p-6 text-center"
              >
                <div className="text-white text-sm font-medium mb-1.5">
                  With Ebox Pro
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  AED {results.eboxMonthlyCost.toLocaleString()}
                </div>
                <div className="text-white/90 text-xs">per month</div>
              </motion.div>
            </div>

            {/* Savings Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">
                Save AED {results.savings.toLocaleString()}/month
              </div>
              <p className="text-neutral-600 text-base">
                Join hundreds of brands who are scaling smarter, not working
                harder.
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="cursor-pointer bg-[#ff5722] text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Start Saving Now - Get a Quote
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider-orange::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #ff5722;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .slider-orange::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #ff5722;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
