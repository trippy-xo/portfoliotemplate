import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import type { HeroData, PersonalInfo, SocialLink } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

interface HeroProps {
  hero: HeroData;
  personal: PersonalInfo;
  socials: SocialLink[];
}

export function Hero({ hero, personal, socials }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-10">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-accent/15 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
        <div className="relative z-10 flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" /> {personal.availability}
          </span>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{hero.greeting}</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#projects" className="w-full sm:w-auto">
              {hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#contact" className="w-full sm:w-auto">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <SocialLinks links={socials} />
          </div>
        </div>

        <div className="relative isolate flex items-center justify-center overflow-hidden rounded-[2rem] border border-border/60 bg-slate-950/5 p-6 shadow-2xl sm:p-10">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          <div className="relative z-10 flex w-full flex-col items-center gap-6">
            <Image
              src={hero.image}
              alt="Profile portrait"
              width={520}
              height={620}
              className="aspect-square w-full max-w-[420px] rounded-[2rem] object-cover"
              priority
            />
            <div className="grid w-full grid-cols-2 gap-4 rounded-3xl bg-background/90 p-4 text-center shadow-sm backdrop-blur-sm sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-foreground">7+</p>
                <p className="text-sm text-muted-foreground">Years working</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">35+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl font-semibold text-foreground">9</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
