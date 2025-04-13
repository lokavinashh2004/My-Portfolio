import { Project } from "@/types/project";
import Image from "next/image";
import React from "react";
import {  BiLinkExternal } from "react-icons/bi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      tabIndex={0}
      className="relative before:z-10 before:absolute before:-inset-0 flex before:bg-gradient-to-br before:from-red-800 before:to-purple-500 before:opacity-0 hover:before:opacity-100 focus:focus-within:focus-visible:before:opacity-100 before:blur-[5px] before:rounded-xl w-full before:w-full before:h-full before:transition-all before:animate-none before:duration-500 focus:focus-within:focus-visible:outline-none"
    >
      <div className="z-20 flex lg:flex-row flex-col lg:gap-3 border-[#2a1454] bg-darkBlue shadow-[#04030b] shadow-2xl p-4 md:p-6 lg:p-8 border rounded-xl w-full min-h-72">
        <article className="flex flex-col gap-3 w-full lg:w-[40%] select-none sm:select-auto">
          <span className="hover:opacity-85 font-light text-[#8750f7] text-md">
            {project.category}
          </span>
          <h2 className="font-semibold text-2xl text-white hover:text-purple-700 transition-colors duration-200 cursor-pointer">
            {project.name}
          </h2>

          <Image
            src={project.image}
            alt={`${project.name} project showcase`}
            className="inline lg:hidden my-6 rounded-lg w-full h-full object-contain"
          />

          <p className="font-light text-sm text-white">{project.description}</p>

          <ul className="flex flex-col gap-2.5 my-6 font-light text-sm text-white">
            {project.points?.map((point) => (
              <li className="gap-4" key={point}>
                ✅ {point}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center gap-3 text-white text-xs sm:text-sm">
            {project.tags?.map((tag) => (
              <li
                className="gap-4 bg-[#2a1454] hover:bg-cyan-500 px-3 py-2 rounded-full transition-all duration-500"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 my-4 ml-2 lg:ml-1">
            {project.link && (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.link}
                className="flex items-center gap-2 text-sm text-white hover:text-cyan-500 transition-colors"
              >
                Live <BiLinkExternal />
              </a>
            )}
            {project.repo && (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.repo}
                className="flex items-center gap-2 text-sm text-white hover:text-cyan-500 transition-colors"
              >
                GitHub <BiLinkExternal />
              </a>
            )}
          </div>
        </article>
        <div className="lg:block hidden bg-black px-4 lg:px-6 py-4 rounded-lg lg:w-[60%]">
          <Image
            src={project.image}
            alt={`${project.name} project showcase`}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
