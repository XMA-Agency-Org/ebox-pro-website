import { cn } from "@/lib/utils";

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
        "relative z-30 flex size-12 sm:size-[72px] md:size-20 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
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

export default IntegrationCard;
