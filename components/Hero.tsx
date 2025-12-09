"use client";

import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(90deg,rgba(171, 171, 171, 1) 0%, rgba(182, 186, 187, 1) 100%)",
        }}
        className="relative min-h-screen overflow-hidden flex items-center pt-40 md:pt-32 z-0"
      >
        <div className="container-wide relative z-20 w-full pb-12 mb-54">
          <div className="w-fit mx-auto">
            <div className="flex flex-col justify-center items-center rounded-xl">
              <div className="flex flex-col justify-center gap-6 items-center">
                <div className="text-center lg:text-left">
                  <div
                    className={`flex w-fit mx-auto mb-10 lg:mb-16 items-center px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20`}
                  >
                    <p className={`text-lg font-bold text-white`}>
                      WE DELIVER. YOU GROW.
                    </p>
                  </div>
                  <h1 className="text-display-2xl max-w-md mx-auto lg:mb-20 mb-10 h-20 flex items-center justify-center text-center wrap-break-word capitalize text-white text-shadow-md w-full">
                    {/* Scale Your <br/> E-Commerce With <br className="hidden md:block" />{" "} */}
                    {/* All-In-One Fulfillment In GCC  */}
                    {/* All-In-One Fulfillment To Scale Your <br />E-Commerce In GCC  */}
                    <FlipWords
                      duration={2000}
                      className="text-white text-center"
                      words={[
                        "All-In-One Fulfillment",
                        "Smart Logistics",
                        "Seamless Speed",
                      ]}
                    />
                  </h1>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex items-center justify-center gap-4 text-white w-full flex-col max-w-lg mx-auto lg:mx-0 lg:items-start lg:justify-start min-[1275px]:flex-row-reverse min-[1275px]:items-start min-[1275px]:justify-start min-[1275px]:max-w-none"
              >
                <Link
                  href="#calculator"
                  className="btn-white text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap min-[1275px]:w-auto"
                  style={{
                    minWidth: "fit-content",
                  }}
                >
                  Calculate Your Savings
                </Link>
                <Link
                  href="#contact"
                  className="btn-primary text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap min-[1275px]:w-auto"
                  style={{
                    minWidth: "fit-content",
                  }}
                >
                  Get Free Fulfillment Assessment
                </Link>
              </div>
            </div>
            {/* Right Column - Hero Video */}
          </div>
        </div>
        <div className="w-screen top-0 h-screen object-cover -scale-x-100 absolute left-0">
          <div className="absolute inset-0 bg-black/20" />
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://res.cloudinary.com/dw1j7izud/video/upload/v1763121970/oaionac7fkd5g7rwqemf.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
