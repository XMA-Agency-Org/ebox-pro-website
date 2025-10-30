"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  volume: string;
}

interface ContactFormProps {
  className?: string;
  variant?: "assessment" | "default";
}

export default function ContactForm({ className, variant = "default" }: ContactFormProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    volume: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitted(true);
      setHasError(false);
    } catch {
      setHasError(true);
      setIsSubmitted(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (variant === "assessment") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <div>
          <label htmlFor="name" className="block text-[15px] font-semibold text-[#24364b] mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e3eaf2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26422] bg-[#F8FBFF] text-[#22334B] placeholder:text-[#bcd0df] text-base"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[15px] font-semibold text-[#24364b] mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e3eaf2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26422] bg-[#F8FBFF] text-[#22334B] placeholder:text-[#bcd0df] text-base"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-[15px] font-semibold text-[#24364b] mb-2">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your Company Ltd."
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e3eaf2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26422] bg-[#F8FBFF] text-[#22334B] placeholder:text-[#bcd0df] text-base"
          />
        </div>
        <div>
          <label htmlFor="volume" className="block text-[15px] font-semibold text-[#24364b] mb-2">
            Monthly Order Volume
          </label>
          <input
            id="volume"
            name="volume"
            type="text"
            required
            placeholder="e.g., 500"
            value={formData.volume}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e3eaf2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26422] bg-[#F8FBFF] text-[#22334B] placeholder:text-[#bcd0df] text-base"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-[#F26422] hover:bg-[#e85614] text-white text-lg font-bold rounded-md py-3 shadow-[0_2px_8px_0_rgba(242,100,34,0.15)] transition-colors"
        >
          Request My Free Assessment
        </button>
        {isSubmitted && (
          <div className="text-green-600 pt-2 font-semibold text-center">Thank you! We&apos;ll be in touch soon.</div>
        )}
        {hasError && (
          <div className="text-red-600 pt-2 font-semibold text-center">An error occurred. Please try again.</div>
        )}
      </form>
    );
  }

  // fallback rendering (legacy default variant, can keep or further style if needed)
  return (
    <form onSubmit={handleSubmit} className={className}>
      <input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Submit</button>
      {isSubmitted && <div>Thank you!</div>}
      {hasError && <div>Error.</div>}
    </form>
  );
}
