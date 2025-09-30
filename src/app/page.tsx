import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillSection from "./components/skills/SkillSection";
import AchievementsSection from "./components/achievements/AchievementsSection";
import Footer from "./components/footer/Footer";
import FixedNav from "./components/navbar/FixedNav";
import LenisProvider from "@/lib/lenis";

export default function Home() {
  return (
    <LenisProvider>
      <FixedNav />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillSection />
      <AchievementsSection />
      <Footer />
    </LenisProvider>
  );
}
