import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import DetailedProjectCard from "../components/projects/DetailedProjectCard";
import projects from "../components/projects/data";
import { BiArrowBack } from "react-icons/bi";

const meta = {
  title: "All Projects",
  subtitle: "Detailed view of all my AI & Data Science projects"
};

export default function ProjectsPage() {
  return (
    <div className="bg-darkBlue min-h-screen">
      <Container className="py-20">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors text-lg font-medium"
          >
            <BiArrowBack className="w-5 h-5" />
            Back to Home
          </a>
        </div>

        <SectionHeader meta={meta} />
        
        {/* All Projects Display */}
        <div className="flex flex-col gap-16 mt-12">
          {projects.map((project) => (
            <DetailedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
