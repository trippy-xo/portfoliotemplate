import type { Certification } from "@/types/portfolio";

interface CertificationItemProps {
  certification: Certification;
}

export function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30">
      <p className="text-sm uppercase tracking-[0.2em] text-accent/90">{certification.date}</p>
      <h3 className="mt-4 text-2xl font-semibold text-foreground">{certification.name}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{certification.organization}</p>
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
      >
        View credential
      </a>
    </div>
  );
}
