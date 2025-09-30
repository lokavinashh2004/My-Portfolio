"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { BiTrophy, BiUser } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import GradientText from "../ui/GradientText";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate items one by one
    const allItems = [...achievements, ...certifications, ...leadership];
    allItems.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  const achievements = [
    {
      title: "2nd Place - St. Joseph College AI Competition",
      year: "2023",
      description: "Secured 2nd position in AI competition showcasing machine learning expertise and innovative problem-solving skills.",
      icon: BiTrophy,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Frontend Development Competition at Sairam College",
      year: "2022", 
      description: "Achieved 3rd place in frontend development competition, demonstrating strong web development capabilities.",
      icon: BiTrophy,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "AI-based Learning Initiative for Deaf and Mute Students",
      year: "2023",
      description: "Led an AI-based learning initiative creating accessible educational tools for deaf and mute students, showcasing leadership and social impact.",
      icon: BiTrophy,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    }
  ];

  const certifications = [
    {
      title: "Google Cloud GenAI Certificate",
      year: "2023",
      description: "Certified in Google Cloud Generative AI technologies and applications.",
      icon: BiLinkExternal,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "3-Day App Development Workshop",
      year: "2023", 
      description: "Completed intensive app development workshop covering mobile and web application development.",
      icon: BiLinkExternal,
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Data Science Workshop - Satyabama University",
      year: "2023",
      description: "Participated in comprehensive data science workshop covering advanced analytics and machine learning techniques.",
      icon: BiLinkExternal,
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30"
    },
    {
      title: "AI & Machine Learning Specialization",
      year: "2023",
      description: "Completed specialized course in AI and Machine Learning covering deep learning, neural networks, and practical applications.",
      icon: BiLinkExternal,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    }
  ];

  const leadership = [
    {
      title: "Google Developer Groups - Tech Lead",
      year: "2024 – 2025",
      description: "Leading technical initiatives and mentoring fellow developers in the Google Developer Groups community.",
      icon: BiUser,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Web Design & Development Club",
      year: "College Projects",
      description: "Designed and developed college websites and mobile applications, enhancing user experience and accessibility.",
      icon: BiLinkExternal,
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30"
    }
  ];

  const AchievementCard = ({ item, index }: { item: any, index: number }) => {
    const isLoaded = loadedItems.includes(index);
    const IconComponent = item.icon;
    
    return (
      <div 
        className={`group relative overflow-hidden transition-all duration-500 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        {/* Project-style card with gradient border */}
        <div className="relative before:z-10 before:absolute before:-inset-0 flex before:bg-gradient-to-br before:from-red-800 before:to-purple-500 before:opacity-0 hover:before:opacity-100 focus:focus-within:focus-visible:before:opacity-100 before:blur-[5px] before:rounded-xl w-full before:w-full before:h-full before:transition-all before:animate-none before:duration-500 focus:focus-within:focus-visible:outline-none">
          <div className="z-20 flex flex-col gap-3 border-[#2a1454] bg-darkBlue shadow-[#04030b] shadow-2xl p-4 md:p-6 lg:p-8 border rounded-xl w-full h-80 hover:border-purple-500/50 transition-all duration-300 group">
            {/* Header with icon and year */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="hover:opacity-85 font-light text-[#8750f7] text-sm group-hover:text-cyan-300 transition-colors duration-300">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h4 className="font-semibold text-xl text-white hover:text-purple-700 transition-colors duration-200 cursor-pointer mb-3 group-hover:text-cyan-300">
              {item.title}
            </h4>

            {/* Description */}
            <p className="font-light text-sm text-white leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
              {item.description}
            </p>

            {/* Tags/Year badge */}
            <div className="flex items-center gap-2 mt-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                {item.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-darkBlue py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      <Container>
        <SectionHeader
          meta={{
            title: "Achievements & Certifications",
            subtitle: "Recognition and Learning Journey"
          }}
        />
        
        <div className="mt-16">
          {/* Achievements */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500">
                <BiTrophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} item={achievement} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500">
                <BiLinkExternal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <AchievementCard key={index} item={cert} index={index + achievements.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Activities */}
        <div className="mt-20">
          <div className="flex justify-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] bg-clip-text text-transparent">Leadership & Activities</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, index) => (
              <AchievementCard key={index} item={item} index={index + achievements.length + certifications.length} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AchievementsSection;
