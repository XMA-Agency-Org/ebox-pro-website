"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  website: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
  variant?: "assessment" | "default";
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-8 px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
        className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6"
      >
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-white mb-2"
      >
        Request Received!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white/70 mb-6 max-w-xs"
      >
        Thank you for reaching out. Our team will review your details and get back to you within 24 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-3 w-full"
      >
        <div className="flex items-center gap-3 text-sm text-white/60 bg-white/5 rounded-lg px-4 py-3">
          <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span>Check your inbox for a confirmation email</span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="text-sm text-white/50 hover:text-white/80 transition-colors mt-2"
        >
          Submit another request
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ContactForm({
  className,
  variant = "default",
}: ContactFormProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", industry: "", website: "", message: "" });
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setHasError(false);
  };

  if (variant === "assessment") {
    return (
      <div className="w-full">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <SuccessState key="success" onReset={handleReset} />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="form-label text-white">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label text-white">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="form-label text-white">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label text-white">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className="form-label text-white">
                    Industry <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled className="text-neutral-900">Select one...</option>
                    <option value="Fashion/Apparel" className="text-neutral-900">Fashion/Apparel</option>
                    <option value="Cosmetics/Beauty Products" className="text-neutral-900">Cosmetics/Beauty Products</option>
                    <option value="Perfumes/Fragrance" className="text-neutral-900">Perfumes/Fragrance</option>
                    <option value="Electronics" className="text-neutral-900">Electronics</option>
                    <option value="Health Supplements" className="text-neutral-900">Health Supplements</option>
                    <option value="Homeware/Furniture" className="text-neutral-900">Homeware/Furniture</option>
                    <option value="Fresh Food" className="text-neutral-900">Fresh Food</option>
                    <option value="Long Life Food" className="text-neutral-900">Long Life Food</option>
                    <option value="Other" className="text-neutral-900">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="website" className="form-label text-white">
                    Website <span className="text-white/50">(optional)</span>
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="form-label text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your fulfillment needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full bg-white/10 border border-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full btn-primary text-base lg:text-lg font-semibold py-4 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Request My Free Assessment"
                )}
              </button>
              {hasError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl py-3 px-4"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-sm">Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // fallback rendering (legacy default variant, can keep or further style if needed)
  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
      {isSubmitted && <div>Thank you!</div>}
      {hasError && <div>Error.</div>}
    </form>
  );
}
