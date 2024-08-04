import React from "react";
import ProjectCard from "./ProjectCard";

import projects from "./data";

const ProjectList = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
