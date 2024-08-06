import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ProjectList from "./ProjectList";
import { BiLinkExternal } from "react-icons/bi";

const meta = {
  title: "Recent Projects",
  subtitle:
    "I enjoy building side projects and constantly challenge myself apart from my actual work :)",
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="after:block relative before:top-1/4 after:top-2/4 after:right-0 before:left-0 before:absolute after:absolute bg-[rgb(11_6_14)] before:w-2/4 after:w-2/4 before:h-3/4 after:h-1/4 before:-translate-y-1/4 after:translate-y-1/2 projects"
    >
      <Container
        as="div"
        className="flex flex-col items-center gap-16 px-6 lg:px-10 py-20 w-full"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <GradientText
            as="h4"
            className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] mx-auto font-bold text-2xl sm:text-2xl md:text-4xl md:[line-height:1.2]"
          >
            {meta.title}
          </GradientText>
          <p className="text-white">{meta.subtitle}</p>
        </div>
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
