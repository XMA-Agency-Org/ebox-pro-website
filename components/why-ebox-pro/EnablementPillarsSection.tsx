import type { EnablementPillar } from "@/content/why-ebox-pro";

type EnablementPillarsSectionProps = {
  pillars: EnablementPillar[];
};

export default function EnablementPillarsSection({
  pillars,
}: EnablementPillarsSectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-3xl border border-border bg-surface-subtle p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-heading-4 text-foreground">{pillar.title}</h3>
            <p className="text-body-lg text-muted-foreground mt-4">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

