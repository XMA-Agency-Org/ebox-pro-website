"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/AnimatedBeam";
import Image from "next/image";
import NoonLogo from "@/public/illustrations/noon-com-vector-logo-seeklogo/noon-com-seeklogo.svg";
import Logo from "@/public/Ebox - Final Logo/ebox - final logo -08.svg";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 border-primary/20 bg-white p-3 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const AmazonIcon = () => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.879 111.709"
    enableBackground="new 0 0 122.879 111.709"
    xmlSpace="preserve"
    className="w-full h-full"
  >
    <g>
      <path d="M33.848,54.85c0-5.139,1.266-9.533,3.798-13.182c2.532-3.649,5.995-6.404,10.389-8.266 c4.021-1.713,8.974-2.941,14.858-3.687c2.01-0.223,5.287-0.521,9.83-0.894v-1.899c0-4.766-0.521-7.968-1.564-9.607 c-1.564-2.235-4.021-3.351-7.373-3.351h-0.893c-2.458,0.223-4.581,1.005-6.368,2.345c-1.787,1.341-2.942,3.202-3.463,5.586 c-0.298,1.489-1.042,2.345-2.234,2.569l-12.847-1.564c-1.266-0.298-1.899-0.968-1.899-2.011c0-0.223,0.037-0.484,0.111-0.781 c1.266-6.628,4.375-11.543,9.328-14.746C50.473,2.161,56.264,0.373,62.893,0h2.793c8.488,0,15.117,2.197,19.885,6.591 c0.746,0.748,1.438,1.55,2.066,2.401c0.631,0.856,1.135,1.62,1.506,2.29c0.373,0.67,0.709,1.639,1.006,2.904 c0.299,1.267,0.521,2.142,0.672,2.625c0.148,0.484,0.26,1.527,0.334,3.129c0.074,1.601,0.111,2.55,0.111,2.848v27.034 c0,1.936,0.279,3.705,0.838,5.306c0.559,1.602,1.1,2.756,1.619,3.463c0.521,0.707,1.379,1.844,2.57,3.406 c0.447,0.672,0.67,1.268,0.67,1.789c0,0.596-0.297,1.115-0.895,1.563c-6.18,5.363-9.531,8.268-10.053,8.715 c-0.893,0.67-1.973,0.744-3.24,0.223c-1.041-0.895-1.953-1.75-2.736-2.57c-0.781-0.818-1.34-1.414-1.676-1.787 c-0.334-0.371-0.875-1.098-1.619-2.178s-1.268-1.807-1.564-2.178c-4.17,4.543-8.266,7.373-12.287,8.49 c-2.533,0.744-5.661,1.117-9.384,1.117c-5.735,0-10.445-1.77-14.131-5.307C35.691,66.336,33.848,61.328,33.848,54.85L33.848,54.85z M53.062,52.615c0,2.905,0.727,5.232,2.178,6.982c1.453,1.75,3.407,2.625,5.865,2.625c0.224,0,0.54-0.037,0.95-0.111 c0.408-0.076,0.688-0.113,0.838-0.113c3.127-0.818,5.547-2.828,7.26-6.031c0.82-1.415,1.434-2.96,1.844-4.636 c0.41-1.675,0.633-3.035,0.67-4.078c0.037-1.042,0.057-2.755,0.057-5.138v-2.793c-4.32,0-7.596,0.298-9.83,0.894 C56.338,42.077,53.062,46.21,53.062,52.615L53.062,52.615z" />
      <path
        fill="#FF9900"
        d="M99.979,88.586c0.15-0.299,0.373-0.596,0.672-0.895c1.861-1.266,3.648-2.121,5.361-2.568 c2.83-0.744,5.586-1.154,8.266-1.229c0.746-0.076,1.453-0.037,2.123,0.111c3.352,0.297,5.361,0.857,6.033,1.676 c0.297,0.447,0.445,1.117,0.445,2.01v0.783c0,2.605-0.707,5.678-2.121,9.215c-1.416,3.537-3.389,6.387-5.922,8.547 c-0.371,0.297-0.707,0.445-1.004,0.445c-0.15,0-0.299-0.037-0.447-0.111c-0.447-0.223-0.559-0.633-0.336-1.229 c2.756-6.479,4.133-10.984,4.133-13.518c0-0.818-0.148-1.414-0.445-1.787c-0.746-0.893-2.83-1.34-6.256-1.34 c-1.268,0-2.756,0.074-4.469,0.223c-1.861,0.225-3.574,0.447-5.139,0.672c-0.447,0-0.744-0.076-0.895-0.225 c-0.148-0.148-0.186-0.297-0.111-0.447C99.867,88.846,99.904,88.734,99.979,88.586L99.979,88.586z M0.223,86.688 c0.373-0.596,0.968-0.633,1.788-0.113c18.618,10.799,38.875,16.199,60.769,16.199c14.598,0,29.008-2.719,43.232-8.156 c0.371-0.148,0.912-0.371,1.619-0.67c0.709-0.297,1.211-0.521,1.508-0.67c1.117-0.447,1.992-0.223,2.625,0.67 c0.635,0.895,0.43,1.713-0.613,2.457c-1.342,0.969-3.055,2.086-5.139,3.352c-6.404,3.799-13.555,6.74-21.449,8.826 c-7.893,2.086-15.602,3.127-23.123,3.127c-11.618,0-22.603-2.029-32.954-6.088C18.134,101.563,8.862,95.846,0.67,88.475 C0.223,88.102,0,87.729,0,87.357C0,87.133,0.074,86.91,0.223,86.688L0.223,86.688z"
      />
    </g>
  </svg>
);

const NoonIcon = () => (
  <Image
    src={NoonLogo}
    alt="Noon Logo"
    width={64}
    height={64}
    className="w-full h-full object-contain"
  />
);

const ShopifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={292}
    viewBox="0 0 256 292"
    className="w-full h-full"
  >
    <path
      fill="#95bf46"
      d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805c-.19.056-3.388 1.043-8.678 2.68c-5.18-14.906-14.322-28.604-30.405-28.604c-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635c-14.558 4.511-24.9 7.718-26.221 8.133c-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042l89.77-19.42S223.973 58.8 223.775 57.34M156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023c0-9.264-1.286-16.723-3.349-22.636c8.287 1.04 13.806 10.469 17.358 21.32m-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238c0 .572-.005 1.095-.01 1.624c-9.117 2.824-19.024 5.89-28.953 8.966c5.575-21.516 16.025-31.908 25.161-35.828m-11.131-10.537c1.617 0 3.246.549 4.805 1.622c-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828"
    ></path>
    <path
      fill="#5e8e3e"
      d="M221.237 54.983a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233l89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
    ></path>
    <path
      fill="#fff"
      d="m135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693c0 15.038 39.2 20.8 39.2 56.024c0 27.713-17.577 45.558-41.277 45.558c-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232c0-19.616-32.16-20.491-32.16-52.724c0-27.129 19.472-53.382 58.778-53.382c15.145 0 22.627 4.338 22.627 4.338"
    ></path>
  </svg>
);

const WooCommerceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    viewBox="0 0 128 128"
    className="w-full h-full"
  >
    <path
      fill="#7f54b3"
      d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6"
    ></path>
    <path
      fill="#fff"
      d="M13.8 76.7s2.8 11.8 8.5 3.9s11.2-20.3 11.2-20.3s.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6c1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4c-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3m73.2-31c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1c2.7-1.3 14.1-14.3 7.2-29.9m-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2c-2.2-1.3-3.6-4.8-3.6-10.8c2-9.7 6.4-11 8.7-10.8c4.3 2.3 4.1 7.4 3.8 11.4m38.4-12.5c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1c2.6-1.3 14.1-14.3 7.2-29.9m-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2c-2.2-1.3-3.6-4.8-3.6-10.8c2-9.7 6.4-11 8.7-10.8c4.2 2.3 4 7.4 3.8 11.4"
    ></path>
    <path fill="#7f54b3" d="m61.3 89.1l22.3 13.1l-4.7-13.1l-12.8-3.6z"></path>
  </svg>
);

export function IntegrationIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const amazonRef = useRef<HTMLDivElement>(null);
  const noonRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const woocommerceRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // Force re-render on resize
      setResizeKey((prev) => prev + 1);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6 lg:p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-w-full sm:max-w-md md:max-w-lg flex-col items-stretch justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        {/* Top Row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={amazonRef}>
            <AmazonIcon />
          </Circle>
          <Circle ref={noonRef}>
            <NoonIcon />
          </Circle>
        </div>

        {/* Center Hub */}
        <div className="flex flex-row items-center justify-center">
          <Circle ref={centerRef} className="size-24">
            <Image
              src={Logo}
              alt="Ebox Logo"
              width={64}
              height={64}
              className="size-16"
            />
          </Circle>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={shopifyRef}>
            <ShopifyIcon />
          </Circle>
          <Circle ref={woocommerceRef}>
            <WooCommerceIcon />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        key={`amazon-${resizeKey}`}
        containerRef={containerRef}
        fromRef={amazonRef}
        toRef={centerRef}
        duration={3}
        pathWidth={3}
        pathOpacity={0.15}
        gradientStartColor="#FF9900"
        gradientStopColor="#F26422"
      />
      <AnimatedBeam
        key={`noon-${resizeKey}`}
        containerRef={containerRef}
        fromRef={noonRef}
        toRef={centerRef}
        duration={3.5}
        pathWidth={3}
        pathOpacity={0.15}
        gradientStartColor="#FED530"
        gradientStopColor="#F26422"
        reverse
        startXOffset={30}
        endYOffset={30}
      />
      <AnimatedBeam
        key={`shopify-${resizeKey}`}
        containerRef={containerRef}
        fromRef={shopifyRef}
        toRef={centerRef}
        duration={4}
        pathWidth={3}
        pathOpacity={0.15}
        gradientStartColor="#95BF47"
        gradientStopColor="#F26422"
        startYOffset={30}
        endYOffset={30}
      />
      <AnimatedBeam
        key={`woocommerce-${resizeKey}`}
        containerRef={containerRef}
        fromRef={woocommerceRef}
        toRef={centerRef}
        duration={3.2}
        pathWidth={3}
        pathOpacity={0.15}
        gradientStartColor="#96588A"
        gradientStopColor="#F26422"
        reverse
        startXOffset={30}
        startYOffset={20}
        endYOffset={-5}
        endXOffset={5}
      />
    </div>
  );
}
