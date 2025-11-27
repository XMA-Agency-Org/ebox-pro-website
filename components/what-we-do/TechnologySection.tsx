import { Noon, Shopify, WooCommerce, Amazon } from "@/components/logos";
import { cn } from "@/lib/utils";
import { Logo } from "../Header";
import { SiMagento } from "react-icons/si";

export default function IntegrationsSection() {
  return (
    <section className="overflow-hidden">
      <div className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Integration Illustration */}
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
                  <SiMagento />
                </IntegrationCard>
              </div>
              <div className="absolute inset-x-0 bottom-10 mx-auto my-2 flex w-fit justify-center gap-2">
                <div className="bg-muted relative z-20 rounded-full border p-1">
                  <IntegrationCard
                    className="shadow-black-950/10 dark:bg-background size-24 sm:size-28 md:size-32 p-2 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
                    isCenter={true}
                  >
                    <Logo variant="dark" />
                  </IntegrationCard>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-4">
              <h2 className="text-primary mb-0 text-3xl md:text-4xl font-bold leading-tight">
                All-In-One:
              </h2>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight text-foreground">
                Seamless Integration & Multi-Channel Fulfillment
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Connect your store in minutes with integrations for Shopify,
                WooCommerce, Amazon, Noon, and custom solutions. Our API ensures
                automatic order synchronization, real-time inventory updates,
                and complete visibility through your dashboard. Whether you sell
                through your website, marketplaces, or B2B channels, we
                centralize inventory and streamline fulfillment across all
                channels. Intelligent stock allocation ensures balanced levels
                and prevents overselling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex size-16 sm:size-[72px] md:size-20 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className
      )}
    >
      <div
        className={cn(
          "m-auto size-fit *:size-7 sm:*:size-9 md:*:size-10",
          isCenter && "*:size-7 sm:*:size-8 md:*:size-8"
        )}
      >
        {children}
      </div>
    </div>
  );
};
