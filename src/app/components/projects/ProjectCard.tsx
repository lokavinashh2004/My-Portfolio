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
      <div className="z-20 flex flex-row gap-6 border-[#2a1454] bg-darkBlue shadow-[#04030b] shadow-2xl p-6 md:p-8 lg:p-10 border rounded-xl w-full min-h-[28rem]">
        <article className="flex flex-col gap-4 w-2/3 select-none sm:select-auto">
          <span className="hover:opacity-85 font-light text-[#8750f7] text-base">
            {project.category}
          </span>
          <h2 className="font-semibold text-xl text-white hover:text-purple-700 transition-colors duration-200 cursor-pointer leading-tight">
            {project.name}
          </h2>

          <p className="font-light text-sm text-white line-clamp-3 leading-relaxed">{project.description}</p>

          <ul className="flex flex-col gap-2 my-3 font-light text-sm text-white">
            {project.points?.slice(0, 3).map((point) => (
              <li className="flex items-start gap-2" key={point}>
                <span className="text-green-400 mt-0.5">✅</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center gap-2 text-white text-sm mb-4">
            {project.tags?.slice(0, 4).map((tag) => (
              <li
                className="bg-[#2a1454] hover:bg-cyan-500 px-3 py-1 rounded-full transition-all duration-500"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 mt-auto">
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
        
        <div className="w-1/3 flex items-center justify-center">
          <Image
            src={project.image}
            alt={`${project.name} project showcase`}
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
