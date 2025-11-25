"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import React, { useRef, ReactNode } from "react";

interface CardItem {
  id: string;
  content: ReactNode;
}

interface StickyCardProps {
  i: number;
  content: ReactNode;
  progress: MotionValue<number>;
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

  return (
    <div
      ref={container}
      className="sticky top-10 flex items-center justify-center mb-12"
    >
      <motion.div
        style={{
          scale,
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
  className?: string;
}

const CardStack = ({ cards, className = "" }: CardStackProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className={`relative flex w-full flex-col items-center justify-center pb-[15vh] ${className}`}
    >
      {cards.map((card, i) => {
        const targetScale = Math.max(0.5, 1 - (cards.length - i - 1) * 0.1);
        return (
          <StickyCard
            key={card.id}
            i={i}
            content={card.content}
            progress={scrollYProgress}
            range={[i * 0.07, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
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
