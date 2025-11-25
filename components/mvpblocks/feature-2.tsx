"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Rocket, Code, Paintbrush } from "lucide-react";

type FeatureItem = {
  step?: string;
  title: string;
  content: string;
  image: string;
  icon?: ReactNode;
};

type FeatureStepsProps = {
  features?: FeatureItem[];
  heading?: string | null;
  subheading?: string | null;
  showHeader?: boolean;
};

const fallbackFeatures: FeatureItem[] = [
  {
    step: "Step 1",
    title: "Build Faster",
    content:
      "Create your MVP in record time with our pre-built blocks and components.",
    icon: <Rocket className="text-primary h-6 w-6" />,
    image: "/illustrations/quick.png",
  },
  {
    step: "Step 2",
    title: "Customize Easily",
    content:
      "Tailor every component to your needs with our intuitive design system and flexible architecture.",
    icon: <Paintbrush className="text-primary h-6 w-6" />,
    image: "/illustrations/scalable.png",
  },
  {
    step: "Step 3",
    title: "Deploy Confidently",
    content:
      "Launch your product with confidence using our optimized, responsive, and accessible components.",
    icon: <Code className="text-primary h-6 w-6" />,
    image: "/illustrations/accuracy.png",
  },
  {
    step: "Step 4",
    title: "Add Yours!",
    content:
      "Contribute your own blocks and become part of the MVPBlocks community.",
    icon: <Code className="text-primary h-6 w-6" />,
    image: "/illustrations/visibility.png",
  },
];

const defaultHeading = "Build Your MVP in Three Steps";
const defaultSubheading =
  "MVPBlocks helps you create, customize, and deploy your product faster than ever before.";

type FeatureSectionProps = {
  features: FeatureItem[];
  textOnLeft: boolean;
  enableAnimation?: boolean;
};

function FeatureSection({
  features,
  textOnLeft,
  enableAnimation = true,
}: FeatureSectionProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Derive hasSwitched instead of using state to avoid double re-renders
  const hasSwitched = currentFeature !== 0;

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
      }, 3000);
    };

    if (!isHovered) {
      startAutoSlide();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isHovered, features.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    // Wait 2.5 seconds before resuming auto-slide
    pauseTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
      {/* Text Content */}
      <div
        className={cn(
          "order-2 space-y-8 md:order-1",
          !textOnLeft && "md:order-2"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {features.map((feature, index) => {
          const isActive = index === currentFeature;
          return (
            <motion.button
              key={`feature-button-${index}-${feature.title}`}
              type="button"
              onClick={() => setCurrentFeature(index)}
              className={cn(
                "flex w-full items-center cursor-pointer gap-6 rounded-xl p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:gap-8",
                isActive ? "bg-white shadow-sm" : "hover:bg-muted/50"
              )}
              initial={false}
              animate={
                enableAnimation
                  ? {
                      opacity: isActive ? 1 : 0.6,
                      x: 0,
                    }
                  : {
                      opacity: isActive ? 1 : 0.6,
                    }
              }
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2 },
              }}
            >
              <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-semibold text-sm md:text-base">
                {feature.step
                  ? feature.step.replace(/[^0-9]/g, "") ||
                    (index + 1).toString()
                  : (index + 1).toString()}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mt-2">
                  {feature.content}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Image Gallery - Full Height */}
      <div
        className={cn(
          "relative order-1 h-[400px] overflow-hidden rounded-xl border md:order-2 md:sticky md:top-32 aspect-square mx-auto md:min-h-[300px]",
          !textOnLeft && "md:order-1"
        )}
      >
        {enableAnimation ? (
          <AnimatePresence initial={false} mode="sync">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={`feature-${index}-${feature.title}`}
                    className="absolute inset-0 overflow-hidden rounded-lg"
                    initial={
                      index === 0 && !hasSwitched
                        ? { y: 0, opacity: 1, rotateX: 0 }
                        : { y: 100, opacity: 0, rotateX: -20 }
                    }
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      width={1000}
                      height={500}
                      loading="eager"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        ) : (
          features.map(
            (feature, index) =>
              index === currentFeature && (
                <div
                  key={`feature-${index}-${feature.title}`}
                  className="absolute inset-0 overflow-hidden rounded-lg"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    width={1000}
                    height={500}
                    loading="eager"
                  />
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}

export default function FeatureSteps({
  features,
  heading = defaultHeading,
  subheading = defaultSubheading,
  showHeader = true,
}: FeatureStepsProps) {
  const activeFeatures = features?.length ? features : fallbackFeatures;

  // Split features into two groups of 4
  const firstGroup = activeFeatures.slice(0, 4);
  const secondGroup = activeFeatures.slice(4, 8);

  return (
    <div className={"p-8 md:p-12"}>
      <div className="mx-auto w-full max-w-7xl">
        {showHeader && (
          <>
            <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
              <div className="relative z-10">
                {heading && (
                  <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                    {heading}
                  </h2>
                )}
                {subheading && (
                  <p className="font-geist text-foreground/60 mt-3">
                    {subheading}
                  </p>
                )}
              </div>
              <div className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"></div>
            </div>
            <hr className="bg-foreground/30 mx-auto mb-10 h-px w-1/2" />
          </>
        )}

        {/* First Section: Text Left, Image Right */}
        {firstGroup.length > 0 && (
          <div className="mb-20 md:mb-32">
            <FeatureSection
              features={firstGroup}
              textOnLeft={true}
              enableAnimation={false}
            />
          </div>
        )}

        {/* Second Section: Text Right, Image Left */}
        {secondGroup.length > 0 && (
          <FeatureSection
            features={secondGroup}
            textOnLeft={false}
            enableAnimation={false}
          />
        )}
      </div>
    </div>
  );
}
