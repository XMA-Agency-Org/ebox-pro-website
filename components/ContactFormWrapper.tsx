"use client";

import ContactForm from "@/components/ContactForm";

const CHECKMARK_SVG = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="11" cy="11" r="11" fill="#F26422" />
    <path d="M7 11.5L10 14L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const bulletPoints = [
  "Free, no-obligation assessment of your fulfillment needs",
  "Custom pricing based on your actual order volume",
  "Expert consultation on UAE market entry strategies",
  "Same-day response from our fulfillment specialists",
  "ROI calculator showing your potential savings",
];

export default function ContactFormWrapper() {
  return (
    <section className="relative bg-secondary py-20 px-4 md:px-0 flex justify-center items-center overflow-hidden">
      <div className="relative max-w-6xl p-8 w-full flex flex-col items-center md:items-stretch md:flex-row gap-12 md:gap-8 lg:gap-28 mx-auto">
        {/* Left: Content */}
        <div className="max-w-xl flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Fulfill Your <br className="hidden sm:inline" /> E-commerce Potential?
          </h2>
          <p className="text-lg text-[#bcd0df] mb-8 font-normal">
            Stop letting logistics limit your growth. Request your free, no-obligation assessment and let our experts build a customized fulfillment plan for you.
          </p>
          <ul className="flex flex-col gap-6 mx-auto md:mx-0">
            {bulletPoints.map((point) => (
              <li key={point} className="flex justify-center md:justify-start items-start gap-3 text-white text-base md:text-lg">
                {CHECKMARK_SVG}
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-none md:max-w-md lg:max-w-lg bg-background/10 rounded-2xl shadow-2xl px-16 py-10 md:p-10">
            <ContactForm variant="assessment" />
          </div>
        </div>
      </div>
    </section>
  );
}
