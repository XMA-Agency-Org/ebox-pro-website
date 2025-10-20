"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

interface CalculatorInputs {
  monthlyOrderVolume: number;
  avgOrderWeight: number;
  storageSpace: number;
  packagingType: "standard" | "branded";
  returnRate: number;
}

export default function FulfillmentCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyOrderVolume: 500,
    avgOrderWeight: 2,
    storageSpace: 5,
    packagingType: "standard",
    returnRate: 5,
  });

  const [results, setResults] = useState({
    eboxMonthlyCost: 0,
    eboxCostPerOrder: 0,
    inhouseMonthlyCost: 0,
    inhouseCostPerOrder: 0,
    savings: 0,
    savingsPercentage: 0,
  });

  // Calculate costs based on inputs
  useEffect(() => {
    const calculateCosts = () => {
      const { monthlyOrderVolume, storageSpace, packagingType, returnRate } =
        inputs;

      // Base costs (simplified calculation for wow factor)
      const baseFulfillmentCost = 8; // AED per order
      const storageCostPerPallet = 150; // AED per pallet per month
      const packagingCostStandard = 3; // AED per order
      const packagingCostBranded = 7; // AED per order
      const returnProcessingCost = 5; // AED per return

      // Ebox costs
      const packagingCost =
        packagingType === "branded"
          ? packagingCostBranded
          : packagingCostStandard;
      const returnOrders = Math.round(monthlyOrderVolume * (returnRate / 100));
      const eboxMonthlyCost =
        monthlyOrderVolume * (baseFulfillmentCost + packagingCost) +
        storageSpace * storageCostPerPallet +
        returnOrders * returnProcessingCost;

      // In-house costs (higher due to inefficiencies)
      const inhouseLaborCost = 12; // AED per order
      const inhousePackagingCost = packagingCost + 2; // More expensive
      const inhouseDeliveryCost = 15; // AED per order
      const inhouseStorageCost = storageCostPerPallet * 1.5; // More expensive
      const inhouseReturnCost = returnProcessingCost * 1.8; // More expensive

      const inhouseMonthlyCost =
        monthlyOrderVolume *
          (inhouseLaborCost + inhousePackagingCost + inhouseDeliveryCost) +
        storageSpace * inhouseStorageCost +
        returnOrders * inhouseReturnCost;

      const eboxCostPerOrder = eboxMonthlyCost / monthlyOrderVolume;
      const inhouseCostPerOrder = inhouseMonthlyCost / monthlyOrderVolume;
      const savings = inhouseMonthlyCost - eboxMonthlyCost;
      const savingsPercentage = (savings / inhouseMonthlyCost) * 100;

      setResults({
        eboxMonthlyCost: Math.round(eboxMonthlyCost),
        eboxCostPerOrder: Math.round(eboxCostPerOrder * 100) / 100,
        inhouseMonthlyCost: Math.round(inhouseMonthlyCost),
        inhouseCostPerOrder: Math.round(inhouseCostPerOrder * 100) / 100,
        savings: Math.round(savings),
        savingsPercentage: Math.round(savingsPercentage * 10) / 10,
      });
    };

    calculateCosts();
  }, [inputs]);

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: number | string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium font-space-grotesk leading-tight tracking-tighter text-white mb-6">
              How much can you
              <span className="block text-primary">actually save?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Tweak the numbers below and see the difference
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Input Section */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-8">
                Your numbers
              </h3>

              <div className="space-y-8">
                {/* Monthly Order Volume */}
                <div>
                  <label className="block text-base lg:text-lg font-medium text-white mb-3">
                    Orders per month
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="50"
                      value={inputs.monthlyOrderVolume}
                      onChange={(e) =>
                        handleInputChange(
                          "monthlyOrderVolume",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm text-neutral-400 mt-2">
                      <span>100</span>
                      <span>10,000</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-3xl font-bold text-primary">
                      {inputs.monthlyOrderVolume.toLocaleString()}
                    </span>
                    <span className="text-lg text-neutral-300 ml-2">
                      orders/month
                    </span>
                  </div>
                </div>

                {/* Average Order Weight */}
                <div>
                  <label className="block text-base lg:text-lg font-medium text-white mb-3">
                    Average order weight
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={inputs.avgOrderWeight}
                      onChange={(e) =>
                        handleInputChange(
                          "avgOrderWeight",
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm text-neutral-400 mt-2">
                      <span>0.5 kg</span>
                      <span>10 kg</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-3xl font-bold text-primary">
                      {inputs.avgOrderWeight}
                    </span>
                    <span className="text-lg text-neutral-300 ml-2">kg</span>
                  </div>
                </div>

                {/* Storage Space */}
                <div>
                  <label className="block text-base lg:text-lg font-medium text-white mb-3">
                    Storage needed
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="1"
                      value={inputs.storageSpace}
                      onChange={(e) =>
                        handleInputChange(
                          "storageSpace",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm text-neutral-400 mt-2">
                      <span>1</span>
                      <span>50</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-3xl font-bold text-primary">
                      {inputs.storageSpace}
                    </span>
                    <span className="text-lg text-neutral-300 ml-2">
                      pallets
                    </span>
                  </div>
                </div>

                {/* Packaging Type */}
                <div>
                  <label className="block text-base lg:text-lg font-medium text-white mb-3">
                    Packaging
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() =>
                        handleInputChange("packagingType", "standard")
                      }
                      className={`py-4 px-6 rounded-xl border-2 transition-all cursor-pointer ${
                        inputs.packagingType === "standard"
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold">Standard</div>
                      <div className="text-sm opacity-75">AED 3/order</div>
                    </button>
                    <button
                      onClick={() =>
                        handleInputChange("packagingType", "branded")
                      }
                      className={`py-4 px-6 rounded-xl border-2 transition-all cursor-pointer ${
                        inputs.packagingType === "branded"
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold">Branded</div>
                      <div className="text-sm opacity-75">AED 7/order</div>
                    </button>
                  </div>
                </div>

                {/* Return Rate */}
                <div>
                  <label className="block text-base lg:text-lg font-medium text-white mb-3">
                    Return rate
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="1"
                      value={inputs.returnRate}
                      onChange={(e) =>
                        handleInputChange(
                          "returnRate",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm text-neutral-400 mt-2">
                      <span>0%</span>
                      <span>20%</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-3xl font-bold text-primary">
                      {inputs.returnRate}
                    </span>
                    <span className="text-lg text-neutral-300 ml-2">%</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results Section */}
          <ScrollReveal direction="right" delay={0.5}>
            <div className="space-y-6">
              {/* Savings Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-8 lg:p-10"
              >
                <div className="text-5xl lg:text-6xl font-bold text-green-500 mb-2">
                  AED {results.savings.toLocaleString()}
                </div>
                <div className="text-xl text-neutral-300">
                  saved per month ({results.savingsPercentage}% less)
                </div>
              </motion.div>

              {/* Cost Comparison */}
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 lg:p-10">
                <div className="space-y-6">
                  {/* Ebox Cost */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-300">With Ebox</span>
                      <span className="text-2xl font-bold text-primary">
                        AED {results.eboxMonthlyCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${
                            (results.eboxMonthlyCost /
                              results.inhouseMonthlyCost) *
                            100
                          }%`,
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      />
                    </div>
                    <div className="text-sm text-neutral-400 mt-2">
                      {results.eboxCostPerOrder} AED per order
                    </div>
                  </div>

                  {/* In-House Cost */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-300">
                        Doing it yourself
                      </span>
                      <span className="text-2xl font-bold text-white">
                        AED {results.inhouseMonthlyCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full"
                      />
                    </div>
                    <div className="text-sm text-neutral-400 mt-2">
                      {results.inhouseCostPerOrder} AED per order
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full cursor-pointer bg-secondary hover:scale-105 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Let&apos;s talk
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
