import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Certification } from "@/types/portfolio";
import { CertificationItem } from "@/components/education/CertificationItem";

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="border-t border-border/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          description="Verified certifications and credentials to support your technical expertise."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {certifications.map((item) => (
            <CertificationItem key={`${item.name}-${item.date}`} certification={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
