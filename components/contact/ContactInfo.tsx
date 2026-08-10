import type { ContactInfo as ContactInfoType, SocialLink } from "@/types/portfolio";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

interface ContactInfoProps {
  contact: ContactInfoType;
  socials: SocialLink[];
}

export function ContactInfo({ contact, socials }: ContactInfoProps) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-background p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-foreground">Get in touch</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{contact.description}</p>
      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-accent/10 text-accent">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Email</p>
            <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-accent">
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-accent/10 text-accent">
            <Smartphone className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Phone</p>
            <p className="text-sm text-muted-foreground">{contact.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-accent/10 text-accent">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Location</p>
            <p className="text-sm text-muted-foreground">{contact.location}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/90">Socials</p>
        <SocialLinks links={socials} className="mt-4" />
      </div>
    </div>
  );
}
