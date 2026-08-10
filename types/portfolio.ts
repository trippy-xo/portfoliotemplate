export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  resumeUrl: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  biography: string;
  highlights: string[];
  stats: Stat[];
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  qualification: string;
  field: string;
  dates: string;
  description: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  description: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavigationItem[];
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  socials: SocialLink[];
  seo: SEOData;
}
