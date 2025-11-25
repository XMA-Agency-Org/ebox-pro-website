"use client";

import { motion } from "framer-motion";
import Threads from "@/components/Threads";
import { Handshake, Globe, Scale } from "lucide-react";

const highlights = [
  {
    eyebrow: "Strategic Partnership",
    title: "Your growth partner in the Gulf",
    body: "We work as an extension of your team so logistics never distracts you from scaling your brand or delighting customers.",
    glowColor: "oklch(0.72 0.13 50)",
    icon: Handshake,
  },
  {
    eyebrow: "Seamless GCC Entry",
    title: "Remove the barriers to expansion",
    body: "We eliminate the hurdles of GCC entry, giving every business instant access to world-class warehousing and last-mile support.",
    glowColor: "oklch(0.67 0.12 200)",
    icon: Globe,
  },
  {
    eyebrow: "Transparent Scaling",
    title: "Flexible, stress-free fulfillment",
    body: "Month-to-month agreements, no hidden fees, and a tech-enabled UAE hub keep fulfillment seamless and scalable.",
    glowColor: "oklch(0.68 0.14 310)",
    icon: Scale,
  },
];

export default function AboutHighlightCards() {
  return (
    <section
      id="story"
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 opacity-10">
        <Threads
          color={[0.15, 0.23, 0.54]}
          amplitude={2}
          distance={0.5}
          enableMouseInteraction={false}
          speed={0.3}
        />
      </div>
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.eyebrow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-border bg-surface-subtle p-8 lg:p-10 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${highlight.glowColor} / 0.15, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-start h-full">
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                        style={{
                          background: `${highlight.glowColor} / 0.3`,
                        }}
                      />
                      <div
                        className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-surface flex items-center justify-center border border-border group-hover:scale-110 transition-all duration-500"
                        style={{
                          boxShadow: `0 0 20px ${highlight.glowColor} / 0.2`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-500"
                          style={{ color: highlight.glowColor }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-grow">
                      <h3 className="text-heading-3 text-foreground transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-body-md text-muted-foreground leading-relaxed">
                        {highlight.body}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, ${highlight.glowColor} / 0.15, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
