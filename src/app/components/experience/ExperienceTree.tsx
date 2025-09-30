"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/util";
import { Experience } from "@/types/experience";

interface ExperienceTreeProps {
  data: Experience[];
}

const ExperienceTree = ({ data }: ExperienceTreeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate items one by one
    data.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index]);
      }, index * 300);
    });
  }, [data]);

  return (
    <div className="relative z-30 flex flex-col gap-12 shadow-lg p-6 sm:p-6 rounded-xl w-full select-none sm:select-auto">
      {data.map((d, i) => {
        const isLoaded = loadedItems.includes(i);
        
        return (
          <div 
            className={cn(
              "before:top-0 relative before:rounded-md before:-left-[18px] after:left-[-23.5px] before:absolute flex flex-col gap-2 before:bg-[image:radial-gradient(75%_100%_at_50%_0%,_rgba(169,197,209,0.32)_0%,_rgba(255,255,255,0.08)_100%)] before:to-cyan-300 before:min-w-[1.5px] after:top-0 after:absolute after:min-w-[13px] after:min-h-[13px] after:bg-[#8750f7] after:border after:border-[#ffffff45] after:rounded-full hover:after:bg-cyan-600 before:transition-colors after:transition-colors after:duration-200 transition-all duration-500 transform",
              {
                "before:min-h-[calc(100%_-_20px)] after:mt-[10px] before:mt-[16px]": i === data.length - 1,
                "before:min-h-[calc(100%_+_50px)] before:mt-[16px] after:mt-[9px]": i < data.length - 1,
                "opacity-0 translate-y-8": !isLoaded,
                "opacity-100 translate-y-0": isLoaded,
              }
            )}
            key={d.id}
          >
            {/* Loading Animation */}
            {!isLoaded && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                </div>
                <span className="text-cyan-300 text-sm">Loading experience...</span>
              </div>
            )}

            {/* Content */}
            <div className={cn("transition-all duration-500", {
              "opacity-0": !isLoaded,
              "opacity-100": isLoaded,
            })}>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="selection:bg-white font-light text-[#00bbfb] text-[16px] md:text-[22px] selection:text-cyan-500 hover:text-cyan-300 transition-colors duration-300">
                  {d.organisation}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-200 text-sm text-opacity-50">
                    {d.fromDate} - {d.toDate}
                  </span>
                  {d.toDate === "Present" && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <p className="font-bold text-[#c3b8da] text-[22px] md:text-[28px] hover:text-white transition-colors duration-300">
                  {d.role}
                </p>
                
                <div className="space-y-3">
                  {d.description?.map((item, itemIndex) => (
                    <div 
                      key={item} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group"
                      style={{ animationDelay: `${itemIndex * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                      <p className="font-light text-[#9ba7b9] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTree;
