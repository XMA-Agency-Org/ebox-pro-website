"use client";

import Link from "next/link";
import Threads from "./Threads";

export default function FooterCTA() {
  return (
    <div className="z-[2] gap-10 bg-background text-neutral-900 text-center flex flex-col justify-center items-center w-full container-wide -mb-[158px] mx-auto p-12 relative overflow-hidden">
      {/* Threads Background */}
      <div className="absolute inset-0 opacity-20">
        <Threads
          color={[0.5, 0.5, 0.5]}
          amplitude={2}
          distance={0.5}
          enableMouseInteraction={false}
          speed={0.3}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h3 className="text-3xl lg:text-6xl font-medium leading-tight tracking-tighter text-gray-900">
            Launch in UAE in 2 Weeks
          </h3>
          <p className="text-base leading-6 text-neutral-700">
            From consultation to your first order shipped. Join 100+ brands
            scaling with our tech-driven 3PL solutions.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-4">
          <div className="text-2xl font-medium text-carrot-500">99%+ Accuracy</div>
          <div className="bg-carrot-300 w-1 h-1 mx-1 my-1 rounded-full"></div>
          <div className="text-2xl font-medium text-carrot-500">Same-Day UAE</div>
          <div className="bg-carrot-300 w-1 h-1 mx-1 my-1 rounded-full"></div>
          <div className="text-2xl font-medium text-carrot-500">No MOQ</div>
        </div>
      </div>
      <Link
        href="/contact"
        className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors inline-flex w-fit relative z-10"
      >
        Get Free Assessment &nbsp;
        <span className="text-white/70">~ &nbsp;Ebox Pro</span>
      </Link>
    </div>
  );
}
