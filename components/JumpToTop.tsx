"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function JumpToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed cursor-pointer bottom-28 right-10 z-50 p-3 rounded-full bg-navy-900 text-white shadow-lg hover:shadow-xl hover:scale-110 hover:bg-navy-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}
