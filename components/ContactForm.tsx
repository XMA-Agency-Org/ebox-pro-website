"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { World } from "./ui/globe";
import ScrollReveal from "./ui/ScrollReveal";

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const SAMPLEARCS = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interested: string;
}

interface ContactFormProps {
  className?: string;
}

interface StatItem {
  value: string;
  label: string;
}

export default function ContactForm({ className }: ContactFormProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interested: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stats: StatItem[] = [
    { value: "32K+", label: "Satisfied Customers" },
    { value: "18+", label: "Years Experience" },
    { value: "24", label: "Trusted Partners" },
    { value: "98%", label: "Satisfaction Rating" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Shipping Block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 rounded-3xl text-white flex flex-col justify-center w-full max-w-[1600px] mx-auto px-0 md:py-12 md:px-12 relative overflow-hidden"
      >
        <div className="container-small w-fit z-10 py-12 rounded-lg backdrop-blur-[3px] px-8 md:px-0 md:backdrop-blur-none flex justify-center items-center md:justify-start md:items-start">
          {/* Shipping Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-16 max-w-[600px] justify-center items-center md:items-start md:justify-start w-full"
          >
            <div className="flex flex-col gap-8 text-center md:text-left">
              <ScrollReveal direction="up" delay={0.2}>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-medium font-space-grotesk leading-tight tracking-tighter text-white">
                  Get A Shipping{" "}
                  <span className="whitespace-nowrap">Quote To</span> Get
                  Started!
                </h3>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col gap-16">
                  <p className="text-xl lg:text-2xl leading-relaxed text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent porttitor sapien vel facilisis lobortis.
                  </p>

                  {/* Shipping Form */}
                  <div className="max-w-[550px] w-full">
                    <div className="mb-0">
                      {!isSubmitted && !hasError && (
                        <form onSubmit={handleSubmit} className="flex flex-col">
                          {/* Form Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                            <div className="mb-8">
                              <label
                                htmlFor="firstName"
                                className="block text-base lg:text-lg font-medium text-white mb-2 text-center md:text-left md:pl-5"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-3 px-4 pl-5 text-base lg:text-lg leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                                required
                              />
                            </div>
                            <div className="mb-8">
                              <label
                                htmlFor="lastName"
                                className="block text-base lg:text-lg font-medium text-white mb-2 text-center md:text-left md:pl-5"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Smith"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-3 px-4 pl-5 text-base lg:text-lg leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                                required
                              />
                            </div>
                            <div className="mb-8">
                              <label
                                htmlFor="email"
                                className="block text-base lg:text-lg font-medium text-white mb-2 text-center md:text-left md:pl-5"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-3 px-4 pl-5 text-base lg:text-lg leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                                required
                              />
                            </div>
                            <div className="mb-8">
                              <label
                                htmlFor="phone"
                                className="block text-base lg:text-lg font-medium text-white mb-2 text-center md:text-left md:pl-5"
                              >
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+24 31 674 558"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-3 px-4 pl-5 text-base lg:text-lg leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                                required
                              />
                            </div>
                          </div>

                          {/* Select Dropdown */}
                          <div className="mb-8">
                            <label
                              htmlFor="interested"
                              className="block text-base lg:text-lg font-medium text-white mb-2 text-center md:text-left md:pl-5"
                            >
                              Interested in:
                            </label>
                            <div className="border border-white/[0.08] bg-white/[0.04] rounded-lg pr-4 text-base lg:text-lg leading-6">
                              <select
                                id="interested"
                                name="interested"
                                value={formData.interested}
                                onChange={handleChange}
                                className="w-full bg-transparent text-neutral-400 mb-0 py-3 px-4 pl-5 focus:outline-none"
                                required
                              >
                                <option value="" className="bg-neutral-900">
                                  Select one...
                                </option>
                                <option
                                  value="First"
                                  className="bg-neutral-900"
                                >
                                  First choice
                                </option>
                                <option
                                  value="Second"
                                  className="bg-neutral-900"
                                >
                                  Second choice
                                </option>
                                <option
                                  value="Third"
                                  className="bg-neutral-900"
                                >
                                  Third choice
                                </option>
                              </select>
                            </div>
                          </div>

                          <input
                            type="submit"
                            value="Submit"
                            className="btn-secondary text-white px-8 py-4 rounded-full text-base lg:text-lg font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                          />
                        </form>
                      )}

                      {/* Success Message */}
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-transparent pt-4 relative"
                        >
                          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-ebox-card flex flex-col justify-start items-start py-6 px-7 relative">
                            <div className="flex items-center gap-4 mb-0">
                              <div className="w-5 h-5 flex items-center justify-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.1331 15.3332L17.022 6.44428L15.2443 4.6665L8.1331 11.7777L4.57759 8.222L2.7998 9.99989L8.1331 15.3332Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div className="text-lg font-medium leading-6 text-white">
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Error Message */}
                      {hasError && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-transparent w-full mt-3 py-2"
                        >
                          <div className="flex items-center justify-start gap-1.5">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0008 18.3332C5.39844 18.3332 1.66748 14.6022 1.66748 9.99984C1.66748 5.39746 5.39844 1.6665 10.0008 1.6665C14.6031 1.6665 18.3341 5.39746 18.3341 9.99984C18.3341 14.6022 14.6031 18.3332 10.0008 18.3332ZM9.16748 9.1665V14.1665H10.8341V9.1665H9.16748ZM9.16748 5.83317V7.49984H10.8341V5.83317H9.16748Z"
                                  fill="#4D545C"
                                />
                              </svg>
                            </div>
                            <div className="text-sm text-neutral-400">
                              Ooops! Something went wrong!!!
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </div>

        {/* 3D Globe Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 md:-right-10 w-2/3 h-[105%] min-h-[856px] z-0 pointer-events-none"
        >
          <World
            globeConfig={{
              pointSize: 4,
              globeColor: "#000000",
              showAtmosphere: true,
              atmosphereColor: "#000000",
              atmosphereAltitude: 0.1,
              emissive: "#062056",
              emissiveIntensity: 0.1,
              shininess: 0.9,
              polygonColor: "rgba(255,255,255,0.7)",
              ambientLight: "#38bdf8",
              directionalLeftLight: "#ffffff",
              directionalTopLight: "#ffffff",
              pointLight: "#ffffff",
              arcTime: 1000,
              arcLength: 0.9,
              rings: 1,
              maxRings: 3,
              initialPosition: { lat: 22.3193, lng: 114.1694 },
              autoRotate: true,
              autoRotateSpeed: 0.5,
            }}
            data={SAMPLEARCS}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
