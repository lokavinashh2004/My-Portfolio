import React from "react";
import Image from "next/image";

import { skills } from "./data";

const Skill = ({ skill }: any) => {
  return (
    <div className="flex flex-col items-center gap-4 transition-all duration-200 cursor-pointer select-none sm:select-auto group">

    <div className="group-hover:bg-[#3b63a163] flex flex-col justify-center items-center gap-6 group-hover:border-purple-800 bg-[#080f19] px-8 py-8 pt-8 border border-transparent rounded-3xl h-3/4 transition-colors duration-200">
      <Image
        className="group-hover:scale-110 group-hover:grayscale-0 rounded-lg h-3/4 transition-all duration-500 sm:grayscale object-contain"
        src={skill.logo}
        height={100}
        width={100}
        alt={skill.item}
      />
      <p className="group-hover:text-cyan-300 relative justify-self-end h-1/4 font-bold text-slate-500 text-xl">
        {skill.percentage}
      </p>
    </div>
    <p className="sm:group-hover:text-purple-500 relative font-light text-base text-purple-500 sm:text-cyan-200 sm:text-opacity-75 group-hover:text-opacity-100 transition-colors duration-200">{skill.item}</p>
    </div>

  );
};

const SkillList = () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-12 transition-all duration-200">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.item} />
      ))}
    </div>
  );
};

export default SkillList;
