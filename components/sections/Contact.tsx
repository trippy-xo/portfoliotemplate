import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInfo } from "@/components/contact/ContactInfo";
import type { ContactInfo as ContactInfoType, SocialLink } from "@/types/portfolio";

interface ContactProps {
  contact: ContactInfoType;
  socials: SocialLink[];
}

export function Contact({ contact, socials }: ContactProps) {
  return (
    <section id="contact" className="border-t border-border/70 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-2 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="lg:max-w-[42%]">
          <SectionHeading
            title="Contact"
            description="A strong call to action with easy access to your email, phone, location, and socials."
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Reach out directly through the contact details below for collaborations, projects, or custom portfolio inquiries.
          </p>
        </div>

        <div className="lg:max-w-[46%]">
          <ContactInfo contact={contact} socials={socials} />
        </div>
      </div>
    </section>
  );
}
