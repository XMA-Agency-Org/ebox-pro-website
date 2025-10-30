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
    <section className="section-padding relative bg-white">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-display-lg text-center text-[#142337] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-center text-gray-500 max-w-xl">
            Everything you need to know about partnering with Ebox Pro
          </p>
        </div>
        <div className="mt-12 w-full max-w-2xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-2"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white border border-gray-200 rounded-xl mb-2"
              >
                <AccordionTrigger
                  className="text-[#142337] text-body-lg font-semibold hover:no-underline px-6 py-5 data-[state=open]:pb-2 transition-all flex items-center justify-between"
                  style={{ color: '#142337' }}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="ml-4 w-6 h-6 text-gray-400 transform transition-transform duration-200 data-[state=open]:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-slot="custom-chevron"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-body-md leading-relaxed px-6 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <span className="text-gray-700 text-body-lg">Still have questions?{' '}
            <Link href="/contact" className="text-[#0e68de] font-medium hover:underline transition-colors">
              Contact us →
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
