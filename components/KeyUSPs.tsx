"use client";

import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";
import { TbRocket } from "react-icons/tb";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { Badge } from "./ui/Badge";

const usps = [
  {
    title: "Amazon SPN Partner",
    description: "Official Service Provider Network partner with exclusive rates and priority handling",
    icon: HiShieldCheck,
    glowColor: "oklch(0.7 0.2 195)"
  },
  {
    title: "Same-Day Delivery",
    description: "Dubai & Sharjah same-day, all 7 Emirates next-day delivery guaranteed",
    icon: TbRocket,
    glowColor: "oklch(0.75 0.2 45)"
  },
  {
    title: "99%+ Accuracy",
    description: "3-step quality control process ensures precision in every shipment",
    icon: RiCheckboxMultipleLine,
    glowColor: "oklch(0.7 0.2 195)"
  }
];

export default function KeyUSPs() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-wide relative z-10">
        <div className="mx-auto mb-8 w-fit px-6 py-2.5 rounded-full border border-[#2563eb]/10 bg-[#2563eb]/5 flex items-center gap-3 text-[#2563eb] text-base font-semibold shadow-none">
          <span className="w-3 h-3 rounded-full bg-[#2563eb]"></span>
          Why Ebox?
        </div>
        {/* USPs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-border bg-surface-subtle p-8 lg:p-10 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Glow overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${usp.glowColor} / 0.15, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start h-full">
                    {/* Icon with modern design */}
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                        style={{
                          background: `${usp.glowColor} / 0.3`,
                        }}
                      ></div>
                      <div
                        className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-surface flex items-center justify-center border border-border group-hover:scale-110 transition-all duration-500"
                        style={{
                          boxShadow: `0 0 20px ${usp.glowColor} / 0.2`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-500"
                          style={{ color: usp.glowColor }}
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col gap-3 flex-grow">
                      <h3 className="text-heading-3 text-foreground transition-colors duration-300">
                        {usp.title}
                      </h3>
                      <p className="text-body-md text-muted-foreground leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, ${usp.glowColor} / 0.15, transparent)`,
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
