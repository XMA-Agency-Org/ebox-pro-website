"use client";

import React, { memo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  stagger?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

// Optimized variants for different directions
const variants = {
  up: {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  down: {
    hidden: { opacity: 0, y: -60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  right: {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

const ScrollReveal = memo(function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 60,
  direction = "up",
  stagger = 0,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  // Default to visible on first paint so SSR shows content without JS
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });
  const shouldReduceMotion = useReducedMotion();

  // Custom variant with dynamic distance
  const customVariant = {
    hidden: {
      ...variants[direction].hidden,
      ...(direction === "up" && { y: distance }),
      ...(direction === "down" && { y: -distance }),
      ...(direction === "left" && { x: distance }),
      ...(direction === "right" && { x: -distance }),
    },
    visible: variants[direction].visible,
  };

  // Disable animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // If JS is disabled or initial hydration hasn't happened, render a plain div.
  // We detect this by checking if window is undefined during initial render.
  if (typeof window === "undefined") {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      variants={customVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay: delay + stagger,
        ease: "easeOut",
        type: "tween",
      }}
      style={{
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
});

// Stagger container for multiple elements
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export const StaggerContainer = memo(function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  direction = "up",
}: StaggerContainerProps) {
  return (
    <div className={`${className} items-stretch`}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
});

// Specialized components for common use cases
export const FadeIn = memo(function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <ScrollReveal
      direction="fade"
      delay={delay}
      duration={duration}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
});

export const SlideUp = memo(function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  return (
    <ScrollReveal
      direction="up"
      delay={delay}
      duration={duration}
      distance={distance}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
});

export const SlideLeft = memo(function SlideLeft({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  return (
    <ScrollReveal
      direction="left"
      delay={delay}
      duration={duration}
      distance={distance}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
});

export const SlideRight = memo(function SlideRight({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  return (
    <ScrollReveal
      direction="right"
      delay={delay}
      duration={duration}
      distance={distance}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
});

export default ScrollReveal;
