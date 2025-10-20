"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "What's the cost per order?",
    answer:
      "Our pricing is flexible and volume-based. We offer a transparent pay-as-you-go model with no hidden fees. Costs include receiving, storage, and per-order fulfillment. Contact us for a custom quote based on your specific order volume and requirements.",
  },
  {
    id: "2",
    question: "Do you handle COD (Cash on Delivery) orders?",
    answer:
      "Yes, we specialize in COD order management, which is highly popular in the UAE market. We handle collection, reconciliation, and remit funds to your account weekly with detailed reporting.",
  },
  {
    id: "3",
    question: "How long does onboarding take?",
    answer:
      "Our streamlined onboarding process takes just 5-10 business days from signup to shipping your first order. This includes platform integration (1-3 days), inventory receiving, and testing.",
  },
  {
    id: "4",
    question: "What are your delivery times?",
    answer:
      "Dubai & Sharjah: Same-day delivery for orders before cutoff. Abu Dhabi and other Emirates: Next-day delivery. GCC countries: 2-3 days. All orders processed before our 8 PM cutoff are guaranteed next-day delivery across UAE.",
  },
  {
    id: "5",
    question: "Do you have minimum order requirements?",
    answer:
      "No strict minimum order quantities! We work with businesses of all sizes. Our pricing model becomes most cost-effective for brands with 100+ orders per month, but we welcome startups and growing businesses.",
  },
  {
    id: "6",
    question: "Which platforms do you integrate with?",
    answer:
      "We integrate with all major e-commerce platforms including Amazon (SPN Partner), Noon, Shopify, WooCommerce, Magento, and custom solutions. Integration typically takes 1-3 business days.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 lg:sticky lg:top-24"
          >
            <h2 className="text-display-lg text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-body-xl text-white/70 leading-relaxed">
              Everything you need to know about our 3PL fulfillment services
            </p>

            {/* Contact CTA */}
            <div className="text-body-lg text-white/80 mt-4">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="font-medium transition-colors duration-300"
                style={{ color: "oklch(0.7 0.2 195)" }}
              >
                Contact Us →
              </Link>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              {faqs.map((faq, index) => {
                const glowColor =
                  index % 2 === 0 ? "oklch(0.7 0.2 195)" : "oklch(0.75 0.2 45)";

                return (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-none rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-lg shadow-black/20 overflow-hidden data-[state=open]:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                    style={{
                      // @ts-ignore
                      "--glow-color": glowColor,
                    }}
                  >
                    <AccordionTrigger
                      className="text-white cursor-pointer text-body-lg font-medium hover:no-underline p-6 [&[data-state=open]]:pb-4 transition-all"
                      style={{
                        // Apply glow color to chevron when open
                        color: "white",
                      }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="!text-white/70 text-body-md leading-relaxed px-6 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
