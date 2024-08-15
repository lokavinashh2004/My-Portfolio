import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillSection from "./components/skills/SkillSection";
import Footer from "./components/footer/Footer";
import FixedNav from "./components/navbar/FixedNav";

export default function Home() {
  return (
    <main className="">
      <FixedNav />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillSection /> <Footer />
    </main>
  );
}
