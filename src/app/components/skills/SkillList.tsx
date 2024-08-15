import React from "react";
import Image from "next/image";

import { skills } from "./data";

const Skill = ({ skill }: {skill:typeof skills[0]}) => {
  return (
    <div className="flex flex-col items-center gap-4 transition-all duration-200 cursor-pointer select-none sm:select-auto group">
    <div className="group-hover:bg-[#2a1454] flex flex-col justify-center items-center gap-6 border-slate-800 group-hover:border-[#8750f7] bg-[#140b1c] px-8 py-8 pt-8 border border-transparent rounded-3xl h-3/4 transition-all duration-500">
      <Image
        className="group-hover:scale-110 group-hover:grayscale-0 rounded-lg h-3/4 transition-all duration-500 sm:grayscale object-contain"
        src={skill.logo}
        height={100}
        width={100}
        alt={skill.item}
      />
      <p className="group-hover:text-purple-500 relative justify-self-end h-1/4 font-bold text-slate-500 text-xl transition-colors duration-500">
        {skill.percentage}
      </p>
    </div>
    <p className="relative font-light text-base text-cyan-200 group-hover:text-opacity-100 tracking-tighter transition-colors duration-500">{skill.item}</p>
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
