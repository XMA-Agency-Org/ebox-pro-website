"use client";

import React, { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ResponsiveLottieProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export const ResponsiveLottie: React.FC<ResponsiveLottieProps> = ({
  src,
  loop = true,
  autoplay = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = React.useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // Force re-render on resize
      setKey((prev) => prev + 1);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <DotLottieReact key={key} src={src} loop={loop} autoplay={autoplay} />
    </div>
  );
};

