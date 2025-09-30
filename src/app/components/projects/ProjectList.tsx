import React from "react";
import ProjectCard from "./ProjectCard";

import projects from "./data";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
