import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutData, PersonalInfo } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";

interface AboutProps {
  about: AboutData;
  personal: PersonalInfo;
}

export function About({ about, personal }: AboutProps) {
  return (
    <section id="about" className="border-t border-border/70 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_0.8fr] lg:px-8">
        <div>
          <SectionHeading
            title="About"
            description="A premium portfolio template designed to showcase your brand, work, and expertise with clarity and polish."
          />
          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
            <p>{about.biography}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <div key={highlight} className="rounded-3xl border border-border/80 bg-background p-5 shadow-sm">
                  <p className="text-sm text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-background shadow-sm">
            <Image
              src={about.image}
              alt="About profile"
              width={540}
              height={680}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-accent/20 bg-accent/10 p-6 text-center">
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-accent">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Button href={personal.resumeUrl} variant="secondary" className="w-full">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
