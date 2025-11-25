"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface WhyItem {
  number: string;
  title: string;
  description: string;
  lottieSrc: string;
}

const reasons: WhyItem[] = [
  {
    number: "01",
    title: "E-commerce Should Be Focused on Growth, Not Logistics",
    description:
      "Managing warehousing, inventory, and last-mile delivery shouldn't distract you from what matters most: scaling your brand and delighting your customers. Ebox Pro was founded to eliminate this distraction—we're your strategic growth partner in the Gulf region that handles the complexity so you can focus on innovation and growth.",
    lottieSrc:
      "https://lottie.host/905eff22-2ae3-4011-9007-977ef42d8d29/0CdYNLz2rm.lottie",
  },
  {
    number: "02",
    title: "GCC Market Entry Should Be Accessible",
    description:
      "Entering the GCC market should be simple and affordable, not complex and expensive. Ebox Pro was founded to eliminate the traditional barriers, providing e-commerce businesses of all sizes with instant access to world-class fulfillment infrastructure. Whether you're a startup launching your first product or an established international brand expanding regionally, we handle the complexity of logistics so you can focus on innovation and growth.",
    lottieSrc:
      "https://lottie.host/219717d5-adfe-46f2-8935-41667f1fb0cb/ZJvxCDLe7p.lottie",
  },
  {
    number: "03",
    title: "E-commerce Fulfillment Should Be Seamless and Stress-Free",
    description:
      "E-commerce fulfillment should be seamless, scalable, and stress-free. Our mission is to make this a reality. With cutting-edge technology, strategic UAE location, and a customer-first approach, we don't just store and ship your products—we become an extension of your team, working tirelessly to ensure every order strengthens your brand reputation.",
    lottieSrc:
      "https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie",
  },
  {
    number: "04",
    title: "Logistics Should Be Transparent and Affordable",
    description:
      "Exceptional logistics shouldn't come with excessive costs or complexity. That's why we've eliminated long-term contracts, hidden fees, and complicated pricing structures. We offer transparent, month-to-month agreements that grow with your business, giving you the flexibility to scale up or down based on your needs.",
    lottieSrc:
      "https://lottie.host/4e0e6604-62f6-4719-88a2-e74c51a1b5af/xwQpDKNYcg.lottie",
  },
];

export default function StoryCards() {
  return (
    <section className="relative bg-background section-padding">
      {/* Header */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionBadge>About Ebox Pro</SectionBadge>
          <h2 className="text-display-xl text-foreground mb-4">
            How Ebox Pro Logistics Was Founded
          </h2>
          <p className="text-body-xl text-muted-foreground mx-auto">
            Four core advantages that set us apart in the GCC fulfillment
            landscape
          </p>
        </motion.div>
      </div>

      {/* Alternating cards */}
      <div className="container-wide mt-16 space-y-8">
        {reasons.map((reason, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-3xl px-6 sm:px-10 lg:px-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
                <div
                  className={`flex justify-center h-full w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-col items-center text-primary">
                    <DotLottieReact
                      src={reason.lottieSrc}
                      loop
                      autoplay
                      className="w-48 h-48 lg:h-full lg:w-full"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {reason.number}
                  </p>
                  <h3 className="text-heading-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-body-lg text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
