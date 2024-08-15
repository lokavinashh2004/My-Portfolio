import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ProjectList from "./ProjectList";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeader from "../ui/SectionHeader";

const meta = {
  title: "Recent Projects",
  subtitle:
    "I enjoy building side projects and constantly challenge myself apart from my actual work :)",
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[rgb(11_6_14)]"
    >
      <Container
        as="div"
        className="after:block relative before:top-1/4 after:top-2/4 after:right-0 before:left-0 before:absolute after:absolute flex flex-col items-center gap-16 px-6 lg:px-10 py-20 w-full before:w-2/4 after:w-2/4 before:h-3/4 after:h-1/4 before:-translate-y-1/4 after:translate-y-1/2 projects"
      >
        <SectionHeader meta={meta} />
        <ProjectList />
        <a
          href="https://github.com/Varadarajan-M"
          className="flex items-center gap-4 my-4 font-semibold text-cyan-300 text-sm sm:text-xl animate-bounce"
        >
          {" "}
          View more <BiLinkExternal />
        </a>
      </Container>
    </section>
  );
};

export default ProjectsSection;
