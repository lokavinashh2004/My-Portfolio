import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ExperienceTree from "./ExperienceTree";
import data from "./data";
import SectionHeader from "../ui/SectionHeader";

const meta = {
    title:"My Experience",
    subtitle: "Delivering Results: A Tech Professional's Journey"
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-darkBlue w-full">
      <Container
        as="div"
        className="after:block relative before:top-1/4 after:top-2/4 after:right-0 before:left-0 before:absolute after:absolute flex flex-col items-center gap-16 px-6 lg:px-10 py-20 w-full before:w-1/2 after:w-2/4 before:h-3/4 after:h-1/4 before:-translate-y-1/4 after:translate-y-1/2 experience"
      >
        
        <SectionHeader meta={meta} />
        <ExperienceTree data={data} />
      </Container>
    </section>
  );
};

export default ExperienceSection;
