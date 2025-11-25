"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  illustration?: string | StaticImageData;
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
    <div className="w-full h-auto rounded-3xl p-8 lg:p-12 border border-border bg-white shadow-lg shadow-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Illustration */}
        {(customIllustration || illustration) && (
          <div className="w-full h-full">
            <div className="rounded-2xl flex items-center justify-center overflow-hidden h-full w-full">
              {customIllustration ? (
                <div className="w-full h-full">{customIllustration}</div>
              ) : illustration ? (
                <div className="relative w-full aspect-4/3 p-10 lg:p-12">
                  <Image
                    src={illustration}
                    alt={title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : null}
            </div>
          </div>
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
            <h3 className="text-heading-2 text-foreground mb-2">{title}</h3>

            <p className="text-body-lg text-primary font-medium mb-3">
              {subtitle}
            </p>

            <p className="text-body-md text-muted-foreground">{description}</p>
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
                <span className="text-muted-foreground text-sm lg:text-base leading-relaxed">
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
