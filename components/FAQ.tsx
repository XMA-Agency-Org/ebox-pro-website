"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";

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
    <section className="section-padding relative bg-background">
      <div className="container-wide">
        <div className="">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="text-display-lg font-bold mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-body-lg text-gray-500 leading-relaxed">
            Common questions about our 3PL fulfillment services
          </p>
        </div>

        <div className="mt-8 w-full">
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-background border border-gray-200 rounded-xl transition-colors hover:border-gray-300"
              >
                <AccordionTrigger
                  className="text-[#142337] text-body-lg font-semibold hover:no-underline px-6 py-5 data-[state=open]:pb-2 transition-all flex items-center justify-between cursor-pointer rounded-xl hover:bg-gray-50 group"
                  style={{ color: '#142337' }}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors group-hover:bg-gray-100">
                    <svg
                      className="w-5 h-5 text-gray-400 transform transition-transform duration-200 data-[state=open]:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-slot="custom-chevron"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-body-md leading-relaxed px-6 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
