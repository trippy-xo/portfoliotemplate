import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/portfolio";
import { Code, Cpu, Layers, MonitorPlay } from "lucide-react";

const serviceIcons: Record<string, typeof Code> = {
  Code,
  Product: Layers,
  IT: Cpu,
  UI: MonitorPlay,
};

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="border-t border-border/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          description="Editable service cards for web development, consulting, product design, and support offerings."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Code;
            return (
              <div key={service.title} className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
