import { Project } from "@/types/project";
import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

interface DetailedProjectCardProps {
  project: Project;
}

const DetailedProjectCard = ({ project }: DetailedProjectCardProps) => {
  return (
    <div
      tabIndex={0}
      className="relative before:z-10 before:absolute before:-inset-0 flex before:bg-gradient-to-br before:from-red-800 before:to-purple-500 before:opacity-0 hover:before:opacity-100 focus:focus-within:focus-visible:before:opacity-100 before:blur-[5px] before:rounded-xl w-full before:w-full before:h-full before:transition-all before:animate-none before:duration-500 focus:focus-within:focus-visible:outline-none"
    >
      <div className="z-20 flex flex-col gap-8 border-[#2a1454] bg-darkBlue shadow-[#04030b] shadow-2xl p-8 md:p-12 lg:p-16 border rounded-xl w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <span className="hover:opacity-85 font-light text-[#8750f7] text-lg mb-4 block">
              {project.category}
            </span>
            <h1 className="font-bold text-3xl lg:text-4xl text-white hover:text-purple-700 transition-colors duration-200 cursor-pointer mb-6">
              {project.name}
            </h1>
            <p className="font-light text-lg text-white leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Image
              src={project.image}
              alt={`${project.name} project showcase`}
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.points?.map((point, index) => (
              <li className="flex items-start gap-3 text-white" key={index}>
                <span className="text-green-400 text-lg mt-1">✅</span>
                <span className="font-light text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags?.map((tag) => (
              <span
                className="bg-[#2a1454] hover:bg-cyan-500 px-4 py-2 rounded-full text-white text-sm transition-all duration-500"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-6">
          {project.link && (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={project.link}
              className="flex items-center gap-2 text-white hover:text-cyan-500 transition-colors bg-[#2a1454] hover:bg-cyan-500 px-6 py-3 rounded-lg"
            >
              View Live Demo <BiLinkExternal />
            </a>
          )}
          {project.repo && (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={project.repo}
              className="flex items-center gap-2 text-white hover:text-cyan-500 transition-colors bg-[#2a1454] hover:bg-cyan-500 px-6 py-3 rounded-lg"
            >
              View Source Code <BiLinkExternal />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectCard;
