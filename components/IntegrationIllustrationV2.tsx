import React from "react";
import Image from "next/image";
import LogoDark from "@/public/Ebox - Final Logo/ebox - final logo -08.svg";
import IntegrationCard from "./IntegrationCard";
import { Amazon, Noon, Shopify, WooCommerce } from "./logos";
import { SiGoogle, SiMagento } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export default function IntegrationIllustrationV2() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="aspect-square translate-y-10 md:translate-y-20 group relative flex items-center justify-center w-full max-w-[300px] md:max-w-[440px]">
        <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
          <IntegrationCard className="absolute -left-2 top-1/4 -translate-y-1/2">
            <Noon />
          </IntegrationCard>
          <IntegrationCard className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Shopify />
          </IntegrationCard>
          <IntegrationCard className="absolute -right-2 top-1/4 -translate-y-1/2">
            <WooCommerce />
          </IntegrationCard>
        </div>

        <div className="bg-linear-to-b from-muted-foreground/15 absolute md:inset-20 inset-[60px] flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
          <IntegrationCard className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Amazon />
          </IntegrationCard>
          <IntegrationCard className="absolute -left-4 top-1/3 -translate-y-1/2">
            <SiMagento className="text-primary-400" />
          </IntegrationCard>
          <IntegrationCard className="absolute -right-4 top-1/3 -translate-y-1/2">
            <FcGoogle />
          </IntegrationCard>
        </div>

        <div className="relative z-20 rounded-full border border-black/10 bg-white p-1.5 shadow-xl">
          <div className="flex size-20 sm:size-28 md:size-32 items-center justify-center rounded-full border border-black/10 bg-white p-4">
            <Image src={LogoDark} alt="Ebox Pro" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
