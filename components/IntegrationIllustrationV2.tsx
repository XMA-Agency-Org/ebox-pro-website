import React from "react";
import Image from "next/image";
import LogoDark from "@/public/Ebox - Final Logo/ebox - final logo -08.svg";
import IntegrationCard from "./IntegrationCard";
import { Amazon, Noon, Shopify, WooCommerce } from "./logos";
import { SiGoogle, SiMagento } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export default function IntegrationIllustrationV2() {
  return (
    <div className="aspect-square group relative mx-auto flex container items-center justify-between w-full max-w-sm sm:max-w-md overflow-visible">
      <div
        role="presentation"
        className="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-navy-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
      ></div>
      <div
        role="presentation"
        className="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
      ></div>
      <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
        <IntegrationCard className="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4">
          <Noon />
        </IntegrationCard>
        <IntegrationCard className="absolute top-0 -translate-y-1/2">
          <Shopify />
        </IntegrationCard>
        <IntegrationCard className="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4">
          <WooCommerce />
        </IntegrationCard>
      </div>
      <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%">
        <IntegrationCard className="absolute top-0 -translate-y-1/2">
          <Amazon />
        </IntegrationCard>
        <IntegrationCard className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4">
          <SiMagento className="text-primary-400" />
        </IntegrationCard>
        <IntegrationCard className="absolute right-0 top-1/4 translate-x-1/4 -translate-y-1/4">
          <FcGoogle />
        </IntegrationCard>
      </div>

      <div className="absolute inset-x-0 bottom-40 mx-auto my-2 flex w-fit justify-center gap-2">
        <div className="bg-muted relative z-20 rounded-full border p-1">
          <IntegrationCard
            className="shadow-black-950/10 dark:bg-background size-24 sm:size-28 md:size-32 p-2 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
            isCenter={true}
          >
            <Image src={LogoDark} alt="Ebox Pro" className="w-full size-20 h-auto" />
          </IntegrationCard>
        </div>
      </div>
    </div>
  );
}
