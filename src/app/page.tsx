import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
