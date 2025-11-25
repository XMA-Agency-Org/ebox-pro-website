import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import type React from "react";

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<"div"> & {
	feature: FeatureType;
};

export function FeatureCard({
	feature,
	className,
	...props
}: FeatureCardPorps) {
	return (
		<div className={cn("relative overflow-hidden p-6 bg-surface", className)} {...props}>
			<div className="-mt-2 -ml-20 pointer-events-none absolute top-0 left-1/2 size-full [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
				<GridPattern
					className="absolute inset-0 size-full stroke-primary/20"
					height={40}
					width={40}
					x={5}
				/>
			</div>
			<feature.icon
				aria-hidden
				className="size-7 text-primary"
				strokeWidth={1.5}
			/>
			<h3 className="mt-8 text-base md:text-lg font-semibold text-foreground">{feature.title}</h3>
			<p className="relative z-20 mt-2 text-muted-foreground text-sm leading-relaxed">
				{feature.description}
			</p>
		</div>
	);
}
