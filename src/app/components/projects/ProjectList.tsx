import React from "react";
import ProjectCard from "./ProjectCard";

import projects from "./data";

const ProjectList = () => {
  // Show only the first 4 projects on home page
  const recentProjects = projects.slice(0, 4);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
      {recentProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
