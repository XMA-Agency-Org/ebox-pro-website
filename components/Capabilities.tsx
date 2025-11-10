"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";

export default function Capabilities() {
  const capabilities = [
    {
      title: "100%",
      subtitle: "On-Time Deliveries",
      features: [
        "Innovative transport solutions",
        "Product protection and insurance",
        "Optimization of logistics",
      ],
    },
    {
      title: "87%",
      subtitle: "Optimization of Logistic Efficiency",
      features: [
        "Optimization of logistics",
        "Product protection and insurance",
        "Innovative transport solutions",
      ],
    },
    {
      title: "91%",
      subtitle: "Exceptional Customer Ratings",
      features: [
        "Product protection and insurance",
        "Innovative transport solutions",
        "Optimization of logistics",
      ],
    },
  ];

  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#b)" clipPath="url(#a)">
        <path
          d="m9 14.243 6.667-6.667-1.334-1.333L9 11.576 6.333 8.909 5 10.243l4 4Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="20" height="20" rx="10" fill="currentColor" />
        </clipPath>
        <filter
          id="b"
          x="-8.199"
          y="-6.957"
          width="37.065"
          height="34.399"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1.886"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4015_131"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5.657" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.968627 0 0 0 0 0.294118 0 0 0 0 0.270588 0 0 0 0.12 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4015_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4015_131"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <section className="section-padding relative">
      <div className="w-full max-w-6xl mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <SectionBadge>Our Capabilities</SectionBadge>
          <h2 className="text-4xl lg:text-6xl font-medium leading-tight tracking-tighter text-text mb-4">
            Delivering Possibilities, Globally
          </h2>
          <p className="text-lg leading-6 text-text-secondary mb-0">
            Proven performance metrics that drive success
          </p>
        </motion.div>

        <div className="w-full h-px bg-border rounded-md my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center-safe gap-8 md:gap-y-16 lg:gap-y-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col gap-8 lg:gap-12"
            >
              <div className="flex flex-col gap-4">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="rounded-full bg-primary flex-none w-5 h-5 flex items-center justify-center text-primary">
                      <CheckIcon />
                    </div>
                    <span className="text-base leading-6 text-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="text-6xl lg:text-8xl font-bold leading-none text-transparent"
                  style={{
                    WebkitTextStroke: '2px var(--color-primary)',
                    textStroke: '2px var(--color-primary)'
                  }}
                >
                  {capability.title}
                </div>
                <div className="text-base font-medium leading-6 text-text">
                  {capability.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
