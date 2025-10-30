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
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div>
          <label htmlFor="name" className="form-label text-white">
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
            className="form-input bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label text-white">
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
            className="form-input bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="company" className="form-label text-white">
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
            className="form-input bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="volume" className="form-label text-white">
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
            className="form-input bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full btn-primary text-base lg:text-lg font-semibold py-4 shadow-lg"
        >
          Request My Free Assessment
        </button>
        {isSubmitted && (
          <div className="text-success font-semibold text-center bg-success-subtle border border-success/20 rounded-xl py-3 px-4">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}
        {hasError && (
          <div className="text-danger font-semibold text-center bg-danger-subtle border border-danger/20 rounded-xl py-3 px-4">
            An error occurred. Please try again.
          </div>
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
