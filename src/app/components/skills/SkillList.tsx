import React from "react";
import Image from "next/image";

import { skills } from "./data";

const Skill = ({ skill }: {skill:typeof skills[0]}) => {
  return (
    <div className="flex flex-col items-center gap-2 transition-all duration-200 cursor-pointer select-none sm:select-auto group h-32">
      <div className="group-hover:bg-[#2a1454] flex flex-col justify-center items-center gap-2 border-slate-800 group-hover:border-[#8750f7] bg-[#140b1c] px-4 py-4 border border-transparent rounded-2xl transition-all duration-500 w-full h-24">
        <Image
          className="group-hover:scale-110 group-hover:grayscale-0 rounded-lg transition-all duration-500 sm:grayscale object-contain"
          src={skill.logo}
          height={40}
          width={40}
          alt={`${skill.item} skill logo`}
        />
        <p className="group-hover:text-purple-500 relative font-bold text-slate-500 text-xs transition-colors duration-500">
          {skill.percentage}
        </p>
      </div>
      <p className="relative font-light text-sm text-cyan-200 group-hover:text-opacity-100 tracking-tighter transition-colors duration-500 text-center leading-tight">{skill.item}</p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 sm:gap-8 md:gap-10 transition-all duration-200">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.item} />
      ))}
    </div>
  );
};

export default SkillList;
