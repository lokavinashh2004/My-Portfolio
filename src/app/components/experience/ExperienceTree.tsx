import { cn } from "@/lib/util";
import { Experience } from "@/types/experience";

interface ExperienceTreeProps {
  data: Experience[];
}

const ExperienceTree = ({ data }: ExperienceTreeProps) => {
  return (
  
    <div className="relative z-30 flex flex-col gap-12 shadow-lg p-6 sm:p-6 rounded-xl w-full select-none sm:select-auto">
      {data.map((d,i) => {
        return (
          <div className={cn("before:top-0 relative before:rounded-md before:-left-[18px] after:left-[-23.5px] before:absolute flex flex-col gap-2 before:bg-[image:radial-gradient(75%_100%_at_50%_0%,_rgba(169,197,209,0.32)_0%,_rgba(255,255,255,0.08)_100%)] before:to-cyan-300 before:min-w-[1.5px] after:top-0 after:absolute after:min-w-[13px] after:min-h-[13px] after:bg-[#8750f7] after:border after:border-[#ffffff45] after:rounded-full hover:after:bg-cyan-600  before:transition-colors after:transition-colors after:duration-200",{
            "before:min-h-[calc(100%_-_20px)] after:mt-[10px] before:mt-[16px] ":i === data.length - 1,
            "before:min-h-[calc(100%_+_50px)] before:mt-[16px] after:mt-[9px]": i < data.length - 1,
          })} key={d.id}>
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="selection:bg-white font-light text-[#00bbfb] text-[16px] md:text-[22px] selection:text-cyan-500">{d.organisation}</h3>
              <p className="text-gray-200 text-sm text-opacity-50">
                {d.fromDate} - {d.toDate}
              </p>
            </div>

  
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#c3b8da] text-[22px] md:text-[28px]">{d.role}</p>
              {d.description?.map((item) => (
                <p key={item} className="font-light text-[#9ba7b9] text-sm">
                  <span className="before:inline-block before:[content:'✨'] before:opacity-70 before:mr-1">{item}</span>
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTree;
