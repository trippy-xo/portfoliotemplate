import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/types/portfolio";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          description="Placeholder testimonials to help buyers visualize a polished recommendation section."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-3xl object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}, {item.company}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
