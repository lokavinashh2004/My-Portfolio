import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillSection from "./components/skills/SkillSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillSection />{" "}
    </main>
  );
}
