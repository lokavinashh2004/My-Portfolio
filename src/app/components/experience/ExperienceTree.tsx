import { cn } from "@/lib/util";
import { Experience } from "@/types/experience";

interface ExperienceTreeProps {
  data: Experience[];
}

const ExperienceTree = ({ data }: ExperienceTreeProps) => {
  return (
  
    <div className="relative z-30 flex flex-col gap-12 shadow-lg rounded-xl w-full">
      {data.map((d,i) => {
        return (
          <div className="flex flex-col gap-2" key={d.id}>
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-light text-[#00bbfb] text-[16px] md:text-[22px]">{d.organisation}</h3>
              <p className="text-gray-200 text-sm text-opacity-50">
                {d.fromDate} - {d.toDate}
              </p>
            </div>

  
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#c3b8da] text-[22px] md:text-[28px]">{d.role}</p>
              {d.description?.map((item) => (
                <p key={item} className="font-light text-[#97a4b7] text-sm">
                  {item}
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
