import type {
  PortfolioData,
} from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Morgan Blake",
    role: "Digital Product Specialist",
    location: "San Diego, CA",
    email: "hello@morganblake.dev",
    phone: "+1 (619) 555-0182",
    availability: "Available for freelance and contract work",
    resumeUrl: "/resume/resume.pdf",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hello, I’m Morgan.",
    headline: "I craft premium digital experiences for modern teams.",
    description:
      "A versatile portfolio template for developers, designers, and technical consultants who want a polished, buyer-ready online presence.",
    primaryCta: "View Projects",
    secondaryCta: "Contact Me",
    image: "/images/profile/hero-profile.svg",
  },
  about: {
    biography:
      "I help ambitious professionals build memorable digital experiences with a balance of strategy, design, and performance. My focus is strong visual systems, efficient development, and polished interaction design for web and product interfaces.",
    highlights: [
      "Premium one-page portfolio template designed for scalability.",
      "Information architecture built for developer and designer brands.",
      "Reusable sections, easy data-driven customization, and modern UI patterns.",
    ],
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "35+", label: "Projects Delivered" },
      { value: "18", label: "Tools & Technologies" },
      { value: "9", label: "Certifications" },
    ],
    image: "/images/profile/about-profile.png",
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "React" },
        { name: "Next.js", icon: "Nextjs" },
        { name: "TypeScript", icon: "Typescript" },
        { name: "Tailwind CSS", icon: "Tailwind" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: "Nodejs" },
        { name: "Express", icon: "Server" },
        { name: "GraphQL", icon: "Graphql" },
        { name: "REST APIs", icon: "Api" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", icon: "Database" },
        { name: "MongoDB", icon: "Database" },
        { name: "Firebase", icon: "Zap" },
        { name: "Vercel", icon: "Cloud" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Figma", icon: "Frame" },
        { name: "Git", icon: "GitBranch" },
        { name: "Jest", icon: "ShieldCheck" },
        { name: "Docker", icon: "Box" },
      ],
    },
  ],
  experience: [
    {
      role: "Senior Product Engineer",
      company: "Nexa Labs",
      location: "Remote",
      startDate: "2023",
      endDate: "Present",
      description:
        "Leading product development for growth-stage teams with interactive web platforms and polished UX systems.",
      responsibilities: [
        "Designed and implemented reusable design tokens and component libraries.",
        "Built responsive dashboards, landing pages, and microsites with Next.js.",
        "Collaborated with product and design teams to refine user journeys and accessibility.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      role: "Technical Consultant",
      company: "Atlas Digital",
      location: "San Diego, CA",
      startDate: "2021",
      endDate: "2023",
      description:
        "Advising startups and creative teams on frontend architecture, platform launches, and technical brand systems.",
      responsibilities: [
        "Delivered scalable marketing sites and client portals.",
        "Optimized performance and accessibility across mobile-first experiences.",
        "Established roadmap for API integrations and automation workflows.",
      ],
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    },
    {
      role: "UI/UX Engineer",
      company: "Brightbeam Studio",
      location: "San Francisco, CA",
      startDate: "2019",
      endDate: "2021",
      description:
        "Built user-centric interfaces for product launches, marketing campaigns, and interactive dashboards.",
      responsibilities: [
        "Translated visual systems into accessible component libraries.",
        "Integrated analytics and customer feedback workflows.",
        "Maintained responsive patterns for desktop and mobile experiences.",
      ],
      technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    },
  ],
  projects: [
    {
      title: "Harmony Workspace",
      category: "Web App",
      description:
        "A polished team productivity platform for hybrid work with schedule automation and analytics.",
      image: "/images/projects/project-1.svg",
      technologies: ["React", "Next.js", "Tailwind"],
      githubUrl: "https://github.com/your-username/harmony-workspace",
      liveUrl: "https://yourdomain.com/harmony-workspace",
      featured: true,
    },
    {
      title: "Launch Catalyst",
      category: "Marketing",
      description:
        "A premium landing experience for product launches, designed for conversion and performance.",
      image: "/images/projects/project-2.svg",
      technologies: ["Next.js", "TypeScript", "SEO"],
      githubUrl: "https://github.com/your-username/launch-catalyst",
      liveUrl: "https://yourdomain.com/launch-catalyst",
      featured: true,
    },
    {
      title: "Signal Analytics",
      category: "Dashboard",
      description:
        "An analytics dashboard with modern visuals and customizable reporting cards.",
      image: "/images/projects/project-3.svg",
      technologies: ["React", "D3", "APIs"],
      githubUrl: "https://github.com/your-username/signal-analytics",
      liveUrl: "https://yourdomain.com/signal-analytics",
      featured: false,
    },
    {
      title: "Nexa Commerce",
      category: "E-commerce",
      description:
        "A fast commerce storefront template optimized for mobile shopping and editorial product storytelling.",
      image: "/images/projects/project-4.svg",
      technologies: ["Next.js", "Shopify", "Stripe"],
      githubUrl: "https://github.com/your-username/nexa-commerce",
      liveUrl: "https://yourdomain.com/nexa-commerce",
      featured: false,
    },
  ],
  services: [
    {
      title: "Web Development",
      description:
        "Build modern, responsive web experiences that deliver strong performance and user-focused design.",
      icon: "Code",
    },
    {
      title: "Product Strategy",
      description:
        "Align digital products with business goals using clear roadmaps, user research, and technical planning.",
      icon: "Layers",
    },
    {
      title: "IT Consulting",
      description:
        "Help teams select the right stack, architecture, and deployment strategy for growth-ready systems.",
      icon: "Cpu",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Convert polished visual systems into accessible, responsive interfaces with refined interactions.",
      icon: "Monitor",
    },
  ],
  education: [
    {
      institution: "California State University",
      qualification: "B.S. Computer Science",
      field: "Software Engineering",
      dates: "2015 — 2019",
      description:
        "Specialized in web development, human-computer interaction, and system architecture for digital products.",
    },
  ],
  certifications: [
    {
      name: "Certified UX Professional",
      organization: "Interaction Design Foundation",
      date: "2024",
      credentialId: "UXP-2024-069",
      credentialUrl: "https://www.interaction-design.org/certificates/uxp-2024-069",
    },
    {
      name: "Frontend Performance Optimization",
      organization: "Google Developers",
      date: "2023",
      credentialId: "GDEV-PERF-729",
      credentialUrl: "https://developers.google.com/certifications/performancedev",
    },
  ],
  testimonials: [
    {
      name: "Avery Stone",
      role: "Founder",
      company: "Stride Creative",
      quote:
        "This template helped us launch a polished portfolio fast with a premium look and accessible structure.",
      image: "/images/testimonials/testimonial-1.svg",
    },
    {
      name: "Jordan Lee",
      role: "Product Lead",
      company: "Elevate Labs",
      quote:
        "The design system is clean, easy to customize, and feels like a high-end commercial product.",
      image: "/images/testimonials/testimonial-2.svg",
    },
    {
      name: "Riley Quinn",
      role: "Marketing Director",
      company: "Pulse Agency",
      quote:
        "Built with strong UX and developer-friendly structure, this template is ideal for freelancers and consultants.",
      image: "/images/testimonials/testimonial-3.svg",
    },
  ],
  contact: {
    email: "hello@morganblake.dev",
    phone: "+1 (619) 555-0182",
    location: "San Diego, CA",
    description:
      "Reach out to discuss new opportunities, collaboration, or to request a tailored portfolio website.",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "Linkedin" },
    { label: "Dribbble", href: "https://dribbble.com/your-username", icon: "Dribbble" },
  ],
  seo: {
    title: "Premium Portfolio Template | Morgan Blake",
    description:
      "A premium one-page portfolio template for developers, designers, and technical professionals built with Next.js and Tailwind CSS.",
    keywords: [
      "portfolio template",
      "next.js portfolio",
      "developer portfolio",
      "tailwind css portfolio",
    ],
    url: "https://yourdomain.com",
    image: "/images/general/og-image.svg",
  },
};
