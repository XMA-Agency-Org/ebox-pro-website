"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, ReactNode } from "react";

interface CardItem {
  id: string;
  content: ReactNode;
}

interface StickyCardProps {
  i: number;
  content: ReactNode;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const StickyCard = ({
  i,
  content,
  progress,
  range,
  targetScale,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Apply opacity fade with delay - first card starts at 1, others fade in
  const opacityRange = i === 0
    ? [0, 0, 1]
    : [range[0] + 0.03, range[0] + 0.1, range[0] + 0.2];
  const opacityValues = i === 0 ? [1, 1, 1] : [0, 0.6, 1];
  const opacity = useTransform(progress, opacityRange, opacityValues);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-5vh + ${i * 60 + 80}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex origin-top flex-col backdrop-blur-sm"
      >
        {content}
      </motion.div>
    </div>
  );
};

interface CardStackProps {
  cards: CardItem[];
  headerText?: string;
  className?: string;
}

const CardStack = ({ cards, headerText, className = "" }: CardStackProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className={`relative flex w-full flex-col items-center justify-center pb-[20vh]  ${className}`}
    >
      {cards.map((card, i) => {
        const targetScale = Math.max(0.5, 1 - (cards.length - i - 1) * 0.1);
        return (
          <StickyCard
            key={card.id}
            i={i}
            content={card.content}
            progress={scrollYProgress}
            range={[i * 0.1, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export { CardStack, StickyCard };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
