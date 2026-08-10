import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar navigation={portfolioData.navigation} />
      <main className="bg-background text-foreground">
        <Hero hero={portfolioData.hero} personal={portfolioData.personal} socials={portfolioData.socials} />
        <About about={portfolioData.about} personal={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Services services={portfolioData.services} />
        <Education education={portfolioData.education} />
        <Certifications certifications={portfolioData.certifications} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact contact={portfolioData.contact} socials={portfolioData.socials} />
      </main>
      <Footer socials={portfolioData.socials} />
    </>
  );
}
