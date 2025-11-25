"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GridBackground } from "@/components/MovingGrid";

export default function GetStartedCTA() {
  const [isRowLayout, setIsRowLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsRowLayout(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center py-16 lg:py-24 overflow-hidden bg-secondary">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <GridBackground />
      </div>

      {/* Content */}
      <div className="container-wide relative z-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-display-xl text-white text-shadow-md mb-4">
            Get Started Today
          </h2>
          <p className="text-body-xl text-white/80 text-shadow-sm max-w-2xl mx-auto">
            Ready to eliminate logistics headaches and scale your e-commerce
            business?
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex gap-4 w-full justify-center ${
            isRowLayout
              ? "flex-row"
              : "flex-col items-center max-w-lg mx-auto"
          }`}
        >
          <Link
            href="#contact"
            className="btn-primary text-center leading-6 no-underline flex items-center justify-center whitespace-nowrap"
            style={{
              minWidth: "fit-content",
              width: isRowLayout ? "auto" : "100%",
            }}
          >
            Get Free UAE Fulfillment Assessment
          </Link>
          <Link
            href="#contact"
            className="btn-white text-center leading-6 no-underline flex items-center justify-center whitespace-nowrap"
            style={{
              minWidth: "fit-content",
              width: isRowLayout ? "auto" : "100%",
            }}
          >
            Calculate Your Savings
          </Link>
        </div>
      </div>
    </section>
  );
}
