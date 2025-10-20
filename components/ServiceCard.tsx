"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  illustration?: any;
  customIllustration?: React.ReactNode;
}

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    />
  </svg>
);

export default function ServiceCard({
  title,
  subtitle,
  description,
  features,
  illustration,
  customIllustration,
}: ServiceCardProps) {
  return (
    <div className="w-[98vw] max-w-[1400px] h-auto !backdrop-blur-3xl rounded-3xl p-12 lg:p-16 border border-white/20 bg-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Illustration */}
        {(customIllustration || illustration) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-md rounded-2xl flex items-center justify-center overflow-hidden">
              {customIllustration ? (
                <div className="w-full h-full">{customIllustration}</div>
              ) : illustration ? (
                <div className="relative w-full h-full p-10 lg:p-12">
                  <Image
                    src={illustration}
                    alt={title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : null}
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div>
            <h3 className="text-heading-2 text-white mb-2">{title}</h3>

            <p className="text-body-lg text-primary/90 font-medium mb-3">
              {subtitle}
            </p>

            <p className="text-body-md text-white/80">{description}</p>
          </div>

          {/* Features List */}
          <ul className="flex flex-col gap-2.5 mt-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <CheckIcon />
                </div>
                <span className="text-white/70 text-sm lg:text-base leading-relaxed">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
