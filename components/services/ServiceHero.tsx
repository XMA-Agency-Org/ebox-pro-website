"use client";

import { IconType } from "react-icons";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  icon: IconType;
  title: string;
  tagline: string;
  description: string;
  stats?: ServiceStat[];
  accentColor?: "primary" | "navy";
  heroImage: string;
}

export default function ServiceHero({
  icon: Icon,
  title,
  tagline,
  description,
  stats,
  accentColor = "primary",
  heroImage,
}: ServiceHeroProps) {
  const [isRowLayout, setIsRowLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsRowLayout(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-20">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Icon Badge */}
          <div className="mb-6 flex items-center">
            <div
              className={`inline-flex mx-auto items-center px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20
`}
            >
              <Icon className={`w-5 h-5 ${"text-white"}`} />
              <span className={`text-sm font-medium text-white `}>
                {tagline}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-display-2xl text-white text-shadow-md mb-6 text-center">
            {title}
          </h1>

          {/* Description */}
          <p className="text-body-xl text-white/80 text-shadow-sm mb-8 max-w-2xl text-center mx-auto">
            {description}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center "
                >
                  <span
                    className={`text-3xl lg:text-4xl font-bold text-white `}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div
            className={`flex gap-4 w-full ${
              isRowLayout
                ? "flex-row items-center justify-center"
                : "flex-col items-center justify-center max-w-lg mx-auto lg:mx-0"
            }`}
          >
            <Link
              href="#contact"
              className="btn-primary text-center leading-6 no-underline flex items-center justify-center whitespace-nowrap"
              style={{
                minWidth: "fit-content",
                width: isRowLayout ? "auto" : "100%",
              }}
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
